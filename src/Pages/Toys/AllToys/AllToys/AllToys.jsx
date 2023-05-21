// import { useContext } from "react";
// import { AuthContext } from "../../../../providers/AuthProvider";
// import MyToysRow from "../MyToysRow/MyToysRow";
import { useLoaderData } from "react-router-dom";
import AllToysRow from "../AllToysRow/AllToysRow";

const AllToys = () => {
    // const { user } = useContext(AuthContext);
    const toys = useLoaderData();
    // console.log(toys);

    return (
        <div>
            <h2 className="text-5xl font-bold text-red-600 text-center mb-10">All Toys: {toys.length}</h2>
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
                            toys.map(toy => <AllToysRow
                                key={toy._id}
                                toy={toy}
                            />)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;