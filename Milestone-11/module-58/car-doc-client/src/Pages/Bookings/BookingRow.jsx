import PropTypes from "prop-types";

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, customer, email, date, service, price, status } = booking;

  return (
    <div>
      {/* row 1 */}

      <tr>
        <th>
          <button onClick={() => handleDelete(_id)} className="btn btn-circle">
            X
          </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={booking.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>{customer}</td>
        <td>{service}</td>
        <td>{email}</td>
        <td>{price}</td>
        <td>{date}</td>
        <td>
          {status === "confirm" ? (
            <span className="text-blue-600 font-bold">Confirmed</span>
          ) : (
            <button
              onClick={() => handleBookingConfirm(_id)}
              className="btn btn-ghost btn-xs"
            >
              Confirm
            </button>
          )}
        </td>
      </tr>
    </div>
  );
};

BookingRow.propTypes = {
  booking: PropTypes.object,
  handleDelete: PropTypes.func,
  handleBookingConfirm: PropTypes.func,
};

export default BookingRow;
