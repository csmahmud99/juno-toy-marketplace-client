import Rating from "react-rating";
import { HiOutlineStar, HiStar } from "react-icons/hi";

const HomeToyCard = ({ allUserToy }) => {
    // console.log(allUserToy);
    const { _id, toyName, toyPhoto, price, rating } = allUserToy || {};

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
                        <div className="text-white text-base">
                            <Rating placeholderRating={rating}
                                emptySymbol={<HiOutlineStar />}
                                placeholderSymbol={<HiStar className="text-yellow-400" />}
                                fullSymbol={<HiStar />}
                                readonly
                            /><span className="ml-1">{rating}</span>
                        </div>

                        <div>
                            <button className="btn btn-error btn-sm bg-red-600 text-white">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeToyCard;