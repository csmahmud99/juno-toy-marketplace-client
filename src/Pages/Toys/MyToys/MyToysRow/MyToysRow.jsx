import { Link } from "react-router-dom";

const MyToysRow = ({ myToy, handleDelete }) => {
    const { _id, toyName, toyPhoto, sellerName, email, subCategory, price, rating, quantity, description } = myToy;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
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
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>${price}</td>
            <td>{rating}</td>
            <td>{quantity}</td>
            <td>
                {/* The button to open modal */}
                <label htmlFor="my-modal-5" className="btn btn-sm">Details</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg">Detail Description</h3>
                        <p className="py-4">{description}</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal-5" className="btn">Close</label>
                        </div>
                    </div>
                </div>
            </td>
            <th>
                <Link to={`/update-toy/${_id}`}>
                    <button className="btn btn-sm btn-outline">Update</button>
                </Link>
            </th>
        </tr>
    );
};

export default MyToysRow;