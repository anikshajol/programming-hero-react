import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import img from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import UseMenu from "../../Hooks/UseMenu";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import MenuCategories from "./MenuCategories/MenuCategories";

const Menu = () => {
  const [menu] = UseMenu();
  const desert = menu.filter((item) => item.category == "dessert");
  const pizza = menu.filter((item) => item.category == "pizza");
  const salad = menu.filter((item) => item.category == "salad");
  const soup = menu.filter((item) => item.category == "soup");
  const offered = menu.filter((item) => item.category == "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover img={img} title={"Our Menu"}></Cover>

      <SectionTitle
        subheading={"Don't miss"}
        heading={"Todays Offer"}
      ></SectionTitle>

      <MenuCategories items={offered}></MenuCategories>

      {/* dessert */}

      <MenuCategories
        items={desert}
        img={dessertImg}
        title={"Dessert"}
      ></MenuCategories>

      {/* Pizza */}

      <MenuCategories
        items={pizza}
        img={pizzaImg}
        title={"Pizza"}
      ></MenuCategories>

      {/* salad */}

      <MenuCategories
        items={salad}
        img={saladImg}
        title={"Salad"}
      ></MenuCategories>
      {/* soup */}

      <MenuCategories
        items={soup}
        img={soupImg}
        title={"Soup"}
      ></MenuCategories>
    </div>
  );
};

export default Menu;
