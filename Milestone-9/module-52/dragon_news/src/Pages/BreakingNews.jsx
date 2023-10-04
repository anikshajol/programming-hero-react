import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex items-center my-5">
            <button className="btn bg-[#D72050] text-white">Latest News</button>
            <div className="cursor-pointer">
                <Marquee pauseOnHover={true} speed={100} >
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                  
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;