import { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeCounter from "../HomeCounter/HomeCounter";
import HomeImageGallery from "../HomeImageGallery/HomeImageGallery";
import SliderBanner from "../SliderBanner/SliderBanner";
import HomeToyCard from "../HomeToyCard/HomeToyCard";

const Home = () => {
    useTitle("Home");
    const [allUserToys, setAllUserToys] = useState([]);
    const [activeTab, setActiveTab] = useState("Marvel");

    useEffect(() => {
        fetch(`http://localhost:5000/allToysBySubCategory/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setAllUserToys(data);
            });
    }, [activeTab]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div>
            <SliderBanner />
            <HomeAbout />
            <HomeCounter />
            <div className="my-10 p-8 bg-[#212529] rounded-lg">
                <h2 className="text-red-600 font-extrabold text-2xl md:text-5xl text-center my-14">Visit Our Shop by Category</h2>
                <div className="mb-10 w-2/3 mx-auto">
                    <div className="tabs bg-red-600 w-1/2 mx-auto p-4 md:pl-16 rounded-md">
                        <a className="tab tab-bordered">
                            <div
                                onClick={() => handleTabClick("Marvel")}
                                className={`Marvel ${activeTab == "Marvel" ? "bg-red-600  text-indigo-300" : "text-white"}`}
                            >
                                Marvel
                            </div>
                        </a>
                        <a className="tab tab-bordered">
                            <div
                                onClick={() => handleTabClick("Avengers")}
                                className={`${activeTab == "Avengers" ? "bg-red-600  text-indigo-300" : "text-white"}`}
                            >
                                Avengers
                            </div>
                        </a>
                        <a className="tab tab-bordered">
                            <div
                                onClick={() => handleTabClick("Transformers")}
                                className={`${activeTab == "Transformers" ? "bg-red-600  text-indigo-300" : "text-white"}`}
                            >
                                Transformers
                            </div>
                        </a>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-5 mx-6">
                    {
                        allUserToys?.map(allUserToy => <HomeToyCard
                            key={allUserToy._id}
                            allUserToy={allUserToy}
                        />)
                    }
                </div>
            </div>
            <HomeImageGallery />
        </div>
    );
};

export default Home;