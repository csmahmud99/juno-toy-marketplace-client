import AllToysRow from "../AllToysRow/AllToysRow";
import useTitle from "../../../../hooks/useTitle";
import { useEffect, useState } from "react";

const AllToys = () => {
    useTitle("All Toys");

    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch("https://toy-marketplace-server-bice.vercel.app/toys")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllToys(data);
            });
    }, []);

    return (
        <div>
            <h2 className="text-5xl font-bold text-red-600 text-center mb-10">All Toys: {allToys.length}</h2>
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
                            allToys.map(allToy => <AllToysRow
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