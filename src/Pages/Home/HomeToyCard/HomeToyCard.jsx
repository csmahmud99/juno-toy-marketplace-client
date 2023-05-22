import Rating from "react-rating";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from 'sweetalert2';

const HomeToyCard = ({ allUserToy }) => {
    // console.log(allUserToy);
    const { _id, toyName, toyPhoto, price, rating } = allUserToy || {};
    const { user } = useContext(AuthContext);

    const handleViewDetails = () => {
        Swal.fire(
            'You have to log in first',
            'to view this.',
            'info'
        )
    };

    return (
        <div>
            <div className="card w-96 shadow-xl bg-[#3D4451] border-2 border-white">
                <figure className="px-10 pt-10">
                    <img src={toyPhoto} alt="Shoes" className="rounded-xl h-36 w-36 border-4 border-red-600" />
                </figure>
                <div className="card-body items-center text-center" style={{ minHeight: "220px", maxHeight: "220px" }}>
                    <h2 className="card-title text-indigo-200 text-2xl">{toyName}</h2>
                    <p className="text-white"><strong>Price:</strong> ${price}</p>
                    <div className="card-actions flex justify-end items-center gap-8">
                        <div className="text-red-600 text-base bg-white p-2 rounded-md">
                            <Rating placeholderRating={rating}
                                emptySymbol={<HiOutlineStar />}
                                placeholderSymbol={<HiStar className="text-yellow-400" />}
                                fullSymbol={<HiStar />}
                                readonly
                            /><span className="ml-1">{rating}</span>
                        </div>

                        <div>
                            {user?.email ?
                                <Link to={`/single-toy/${_id}`}>
                                    <button className="btn btn-error btn-sm bg-red-600 text-white">View Details</button>
                                </Link>
                                : <Link to={`/single-toy/${_id}`}>
                                    <button onClick={handleViewDetails} className="btn btn-error btn-sm bg-red-600 text-white">View Details</button>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeToyCard;