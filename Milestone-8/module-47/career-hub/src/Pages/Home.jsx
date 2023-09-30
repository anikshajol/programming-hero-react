import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import CategoryList from "./CategoryList";
import FeaturedJob from "./FeaturedJob";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Career Hub | Home</title>
      </Helmet>
      <Banner></Banner>
      <CategoryList></CategoryList>
      <FeaturedJob></FeaturedJob>
    </div>
  );
};

export default Home;
