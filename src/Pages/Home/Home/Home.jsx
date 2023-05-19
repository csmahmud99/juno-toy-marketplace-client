import HomeAbout from "../HomeAbout/HomeAbout";
import HomeCounter from "../HomeCounter/HomeCounter";
import SliderBanner from "../SliderBanner/SliderBanner";

const Home = () => {
    return (
        <div>
            <SliderBanner />
            <HomeAbout />
            <HomeCounter />
        </div>
    );
};

export default Home;