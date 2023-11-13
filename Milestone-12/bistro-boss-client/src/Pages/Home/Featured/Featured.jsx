import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-item pt-8 my-20">
      <div>
        <SectionTitle
          subheading={"FROM OUR MENU"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>

        <div className="flex flex-col md:flex-row justify-center items-center pb-20 pt-12 px-36 gap-12 bg-black opacity-50 ">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div>
            <p>March 20, 2023</p>
            <h3>WHERE CAN I GET SOME?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              delectus expedita, ratione cupiditate illo repellat sed ab.
              Praesentium facilis perspiciatis aspernatur voluptatem libero quod
              voluptatum. Architecto placeat adipisci fugiat non.
            </p>
            <button className="btn btn-outline border-0 border-b-4">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
