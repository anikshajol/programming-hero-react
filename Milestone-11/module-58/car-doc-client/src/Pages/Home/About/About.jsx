import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between">
          <div className="text-center lg:text-left w-1/2 ml-44">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 w-1/2">
            <div className="">
              <img
                className="relative h-[400px] object-cover"
                src={person}
                alt=""
              />
              <img
                className="absolute left-1/3 top-1/2  border-[10px] border-white"
                src={parts}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
