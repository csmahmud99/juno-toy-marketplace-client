import { HiOutlineStar, HiStar } from "react-icons/hi";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
    const toy = useLoaderData();

    const { toyName, toyPhoto, sellerName, email, price, rating, quantity, description } = toy || {};

    return (
        <div className="text-white text-center">
            <div>
                <img src={toyPhoto} alt="single-toy-image" className="w-44 mx-auto rounded-md border-8 border-red-600" />
            </div>

            <div className="mt-5">
                <h1 className="text-red-600 text-5xl font-bold">{toyName}</h1>
                <h2 className="text-3xl"><span className="font-bold">Seller's Name:</span> {sellerName}</h2>
                <h3 className="text-2xl text-indigo-300"><span className="font-bold">Seller's Email:</span> {email}</h3>
                <p className="text-xl"><span className="font-bold">Price:</span> {price}</p>
            </div>

            <div className="mt-2 flex justify-center items-center gap-32">
                <div className="text-white text-base bg-red-600 py-2 px-3 rounded-md">
                    <Rating placeholderRating={rating}
                        emptySymbol={<HiOutlineStar />}
                        placeholderSymbol={<HiStar className="text-yellow-400" />}
                        fullSymbol={<HiStar />}
                        readonly
                    /><span className="ml-1">{rating}</span>
                </div>

                <div className="text-red-600 text-base bg-white py-2 px-3 rounded-md">
                    <p><span className="font-bold">Available Quantity:</span> {quantity}</p>
                </div>
            </div>

            <div className="mt-5 text-xl">
                {description}
            </div>
        </div>
    );
};

export default SingleToy;