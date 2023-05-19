import { Link } from "react-router-dom";
import slider1 from "../../../assets/slider/slider-1.jpg";
import slider2 from "../../../assets/slider/slider-2.jpg";
import slider3 from "../../../assets/slider/slider-3.jpg";

const SliderBanner = () => {
    return (
        <div className="mx-3">
            <div className="carousel w-full">
                {/* Slider - 01 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slider1} alt="home-slider-1" className="w-full" />
                    <div className="absolute flex items-center -translate-y-1/2 left-0 right-5 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                        <div className="text-white pt-3 pb-6 md:w-1/3 md:ml-20">
                            <h2 className="text-2xl md:text-6xl mb-3">Unleash Your Inner Hero</h2>
                            <p className="mb-3">
                                Discover a world of superheroes, epic battles, and captivating storylines. Ignite your imagination and become the hero you have always admired.
                            </p>
                            <Link to="#"><button className="btn btn-md btn-outline bg-red-600 text-white">Explore Your Toys</button></Link>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slider - 02 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slider2} alt="home-slider-2" className="w-full" />
                    <div className="absolute flex items-center -translate-y-1/2 left-0 right-5 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                        <div className="text-white pt-3 pb-6 md:w-1/3 md:ml-20">
                            <h2 className="text-2xl md:text-6xl mb-3">Transformers: More Than Meets the Eye</h2>
                            <p className="mb-3">
                                Witness the awe-inspiring world of Transformers. Join the Autobots and Decepticons in their quest for supremacy and discover the power of these beloved toy superheroes.
                            </p>
                            <Link to="#"><button className="btn btn-md btn-outline bg-red-600 text-white">Explore Your Toys</button></Link>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slider - 03 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slider3} alt="home-slider-3" className="w-full" />
                    <div className="absolute flex items-center -translate-y-1/2 left-0 right-5 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                        <div className="text-white pt-3 pb-6 md:w-1/3 md:ml-20">
                            <h2 className="text-2xl md:text-6xl mb-3">Explore the Marvel Universe</h2>
                            <p className="mb-3">
                                Explore Marvel Comics, home to iconic characters like Spider-Man and Iron Man. Experience thrilling adventures and timeless inspiration.
                            </p>
                            <Link to="#"><button className="btn btn-md btn-outline bg-red-600 text-white">Explore Your Toys</button></Link>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderBanner;