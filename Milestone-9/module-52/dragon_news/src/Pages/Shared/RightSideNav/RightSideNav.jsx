import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import { Link } from "react-router-dom";

const RightSideNav = () => {
  return (
    <div>
      {/* social login section */}
      <section>
        <h2 className="text-3xl mb-4">Login With</h2>
        <div>
          <button className="btn mb-1 btn-outline w-full">
            <FaGoogle></FaGoogle>
            Login with Google
          </button>
          <button className="btn btn-outline w-full">
            <FaGithub></FaGithub>
            Login with Github
          </button>
        </div>
      </section>

      {/* find us section */}
      <section className="my-6">
        <h2 className="text-3xl mb-4">Find us On</h2>
        <div className="">
          <Link
            to={"https://www.facebook.com/"}
            target="_blank"
            className="flex items-center border border-gray-300 py-4"
          >
            <FaFacebook className="text-blue-600 mx-4 "></FaFacebook>
            Facebook
          </Link>
          <Link
            to={"https://www.facebook.com/"}
            target="_blank"
            className="flex items-center border border-gray-300 py-4"
          >
            <FaTwitter className="text-blue-600 mx-4"></FaTwitter>
            Twitter
          </Link>
          <Link
            to={"https://www.facebook.com/"}
            target="_blank"
            className="flex items-center border border-gray-300 py-4"
          >
            <FaInstagram className="text-red-500 mx-4"></FaInstagram>
            Instagram
          </Link>
        </div>
      </section>

      {/* q zone */}
      <section className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </section>
    </div>
  );
};

export default RightSideNav;
