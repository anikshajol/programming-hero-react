import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItem from "./MenuItem";
import UseMenu from "../../../Hooks/UseMenu";
// import { useState } from "react";

const PopularMenu = () => {
  // const [menu, setMenu] = useState([]);

  const [menu, loading] = UseMenu();

  if (loading) {
    return <div>loading....</div>;
  }

  const popular = menu.filter((item) => item.category === "popular");

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");

  //       setMenu(popularItems);
  //     });
  // }, []);

  //   console.log(menu);

  return (
    <section>
      <SectionTitle
        subheading={"---Check it out---"}
        heading={" FROM OUR MENU"}
      ></SectionTitle>

      <div className="grid grid-cols-2 gap-8 my-6">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
