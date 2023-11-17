import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";

const useCart = () => {
  const axiosSecure = UseAxios();
  const { data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosSecure.get("/carts");
      return res.data;
    },
  });
  return [cart];
};

export default useCart;
