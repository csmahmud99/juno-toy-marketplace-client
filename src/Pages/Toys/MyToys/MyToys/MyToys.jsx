import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import MyToysRow from "../MyToysRow/MyToysRow";
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        fetch(`https://toy-marketplace-server-bice.vercel.app/toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyToys(data);
            });
    }, [user?.email]);

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure that you want to DELETE this Toy?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, DELETE this Toy!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-marketplace-server-bice.vercel.app/toys/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    });
                Swal.fire(
                    'Deleted!',
                    'Your Toy has been successfully deleted.',
                    'success'
                );
                const remaining = myToys.filter(myToy => myToy._id !== _id);
                setMyToys(remaining);
            }
        });
    };

    return (
        <div>
            <h2 className="text-5xl font-bold text-red-600 text-center mb-10">All Toys I have Added</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Toy Image, Toy Name & Sub-category</th>
                            <th>Seller Name & Email Address</th>
                            <th>Price</th>
                            <th>Ratings</th>
                            <th>Quantity</th>
                            <th>Details</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(myToy => <MyToysRow
                                key={myToy._id}
                                myToy={myToy} 
                                handleDelete={handleDelete}
                            />)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;