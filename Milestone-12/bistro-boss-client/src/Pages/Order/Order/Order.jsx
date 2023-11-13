import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderBannerImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import UseMenu from "../../../Hooks/UseMenu";

import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ["Salad", "Pizza", "Soups", "Dessert", "Drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  console.log(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);
  console.log(tabIndex);
  const [menu] = UseMenu();
  const desert = menu.filter((item) => item.category == "dessert");
  const pizza = menu.filter((item) => item.category == "pizza");
  const salad = menu.filter((item) => item.category == "salad");
  const soup = menu.filter((item) => item.category == "soup");
  const drink = menu.filter((item) => item.category == "drinks");
  return (
    <div>
      <Cover img={orderBannerImg} title={"OUR SHOP"}></Cover>

      <div className=" w-5/6 mx-auto py-10 text-center">
        <Tabs defaultIndex={1} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={desert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drink}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
