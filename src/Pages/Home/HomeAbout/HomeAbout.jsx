import { Link } from "react-router-dom";
import { useEffect } from "react";

// AOS Package Import 
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeAbout = () => {
    // AOS Package initialization 
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div>
            <div className="hero min-h-screen my-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 relative mb-28">
                        <img src="https://i.ibb.co/XDWLx4H/marvel-heros-home-about-1.jpg" alt="home-about-image" className="w-3/4 shadow-2xl rounded-3xl border-8 border-red-600" data-aos="fade-right" />
                        <img src="https://i.ibb.co/RT5LZn4/marvel-spiderman-home-about-2.jpg" alt="home-about-image" className="w-1/2 shadow-2xl border-4 border-white absolute right-20 top-2/3" data-aos="fade-left" />
                    </div>
                    <div className="text-white w-1/2 space-y-5">
                        <p className="text-indigo-200">Welcome to</p>
                        <h1 className="text-5xl font-bold text-red-600">Juno Toys and Games</h1>
                        <br />
                        <span className="bg-red-600 text-white p-2 rounded-md">Where Imagination Meets Play</span>
                        <hr />
                        <p className="py-6">
                            Welcome to our superhero toy shop! Discover a world of iconic characters from English comics. From Marvel to DC and beyond, our handpicked collection brings your favorite superheroes to life.<br /><br />

                            Inspire creativity and storytelling with action figures, playsets, and more. Whether you're a collector, parent, or fan, our shop is your ultimate destination for superhero toys.<br /><br />

                            Unleash your inner hero today. Shop now!
                        </p>
                        <Link to="#"><button className="btn btn-outline bg-red-600 text-white">Read More about Us</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;