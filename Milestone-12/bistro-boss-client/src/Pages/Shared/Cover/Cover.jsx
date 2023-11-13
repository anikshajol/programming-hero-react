import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -60, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
      >
        <div className="hero h-[700px]">
          <div className="hero-overlay bg-opacity-40"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="bg-opacity-40  px-48 py-12 bg-black">
              <div className="max-w-md ">
                <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
