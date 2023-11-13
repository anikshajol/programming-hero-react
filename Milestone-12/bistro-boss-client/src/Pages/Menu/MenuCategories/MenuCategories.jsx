import { Link } from "react-router-dom";
import MenuItem from "../../Home/PopularMenu/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategories = ({ items, title, img }) => {
  return (
    <div className="py-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid grid-cols-2 gap-8 my-6">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategories;
