import AllToysRow from "../AllToysRow/AllToysRow";
import useTitle from "../../../../hooks/useTitle";
import { useEffect, useState } from "react";

const AllToys = () => {
    useTitle("All Toys");

    const [allToys, setAllToys] = useState([]);
    const [activeTab, setActiveTab] = useState("ascending");
    const [searchText, setSearchText] = useState(" ");

    // Data Fetch for the Sorting Tab with Price
    useEffect(() => {
        fetch(`https://toy-marketplace-server-bice.vercel.app/toys/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllToys(data);
            });
    }, [activeTab]);

    // Data Fetch for the Search Bar
    const handleSearch = () => {
        fetch(`https://toy-marketplace-server-bice.vercel.app/toySearchByName/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
            });
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div>
            <h2 className="text-5xl font-bold text-red-600 text-center mb-10">All Toys: {allToys.length}</h2>

            {/* Search by Name */}
            <div className="mb-10 text-center">
                <div className="bg-[#212529] p-4 text-center w-1/3 mx-auto rounded-md">
                    <input className="p-1" onChange={event => setSearchText(event.target.value)} type="text" />{" "}
                    <button onClick={handleSearch} className="btn btn-error btn-sm bg-[#3D4451] text-white ml-3">Search</button>
                </div>
            </div>

            {/* Sorting by Price as Ascending & Descending */}
            <p className="text-center text-white font-bold mb-3">Sort Toy with Price</p>
            <div className="mb-10 w-2/3 mx-auto">
                <div className="tabs bg-red-600 w-1/2 mx-auto p-4 md:pl-28 rounded-md">
                    <a className="tab tab-bordered">
                        <div
                            onClick={() => handleTabClick("ascending")}
                            className={`ascending ${activeTab == "ascending" ? "bg-red-600  text-indigo-300" : "text-white"}`}
                        >
                            Ascending
                        </div>
                    </a>
                    <a className="tab tab-bordered">
                        <div
                            onClick={() => handleTabClick("descending")}
                            className={`${activeTab == "descending" ? "bg-red-600  text-indigo-300" : "text-white"}`}
                        >
                            Descending
                        </div>
                    </a>
                </div>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Image, Toy Name & Sub-category</th>
                            <th>Seller Name & Email Address</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys?.map(allToy => <AllToysRow
                                key={allToy._id}
                                allToy={allToy}
                            />)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;