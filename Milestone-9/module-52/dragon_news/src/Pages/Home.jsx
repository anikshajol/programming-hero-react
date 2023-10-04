import BreakingNews from "./BreakingNews";
import Header from "./shared/Header";
import LeftSideNav from "./shared/LeftSideNav";
import Navbar from "./shared/Navbar";
import RightSide from "./shared/RightSide";

const Home = () => {
  return (
    <div>
      <Header />
      <BreakingNews></BreakingNews>
      <Navbar />


      <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 ">

        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2 border">
          <h2 className="text-xl">news coming soon</h2>
        </div>

        <div className="border">
          <RightSide></RightSide>
        </div>
      </section>

    </div>
  );
};

export default Home;
