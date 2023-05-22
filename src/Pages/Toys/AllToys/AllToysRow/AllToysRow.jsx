import { Link } from "react-router-dom";

const AllToysRow = ({ allToy }) => {
    const { _id, toyName, toyPhoto, sellerName, subCategory, price, quantity } = allToy;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squire w-14 h-14">
                            <img src={toyPhoto} alt="toy-image" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                        <div className="text-sm opacity-50"><span className="font-bold">Sub-category:</span> {subCategory}</div>
                    </div>
                </div>
            </td>
            <td>
                {sellerName}
            </td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>
                <Link to={`/single-toy/${_id}`}><button className="btn btn-sm">View Details</button></Link>
            </td>
        </tr>
    );
};

export default AllToysRow;