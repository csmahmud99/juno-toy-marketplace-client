import useTitle from "../../../hooks/useTitle";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeCounter from "../HomeCounter/HomeCounter";
import HomeImageGallery from "../HomeImageGallery/HomeImageGallery";
import SliderBanner from "../SliderBanner/SliderBanner";

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <SliderBanner />
            <HomeAbout />
            <HomeCounter />
            <HomeImageGallery />
        </div>
    );
};

export default Home;