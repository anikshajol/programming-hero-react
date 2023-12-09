import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import Swal from "sweetalert2";
import UseAxios from "../../../Hooks/UseAxios";
import { useEffect, useState } from "react";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = UseAxios();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const { user } = useAuth();

  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    if (totalPrice) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);

      Swal.fire(error.message);
    } else {
      console.log("[paymentMethod]", paymentMethod);
      Swal.fire(" Payment success");
    }

    // confirm payment

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "Anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log(paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        // now save the payment history in the database

        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), //utc date convert for avoiding local date problem, use useMoment
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        refetch();
        console.log("payment saved", res.data);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="text-center">
        {cart.length > 0 ? (
          <button
            className="btn btn-sm my-4 btn-primary"
            disabled={!stripe || !clientSecret}
            type="submit"
          >
            Pay
          </button>
        ) : (
          <button
            className="btn btn-sm my-4 btn-primary"
            disabled
            type="submit"
          >
            Pay
          </button>
        )}
      </div>
      {transactionId && (
        <p className="text-green-600">
          {" "}
          Your transaction id : {transactionId}{" "}
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;
