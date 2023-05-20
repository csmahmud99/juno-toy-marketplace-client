import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const AddToy = () => {
    const { user } = useContext(AuthContext);

    console.log(user);

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;

        const toyName = form.toyName.value;
        const toyPhoto = form.toyPhoto.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        // console.log(toyName, toyPhoto, sellerName, sellerEmail, subCategory, price, rating, quantity, description);

        const order = {
            toyName, toyPhoto, sellerName, sellerEmail, subCategory, price, rating, quantity, description
        };

        console.log(order);
    };

    return (
        <div>
            <div className="card flex-shrink-0 w-max-md shadow-2xl bg-[#212529] border-4 border-white rounded-md">
                <div className="card-body">
                    <h1 className="text-2xl md:text-5xl font-bold text-red-600 text-center">Add a Toy</h1>

                    <form onSubmit={handleAddToy} className="mt-5">
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Toy Name</span>
                                </label>
                                <input type="text" name="toyName" placeholder="Enter the Toy Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Photo URL of Toy</span>
                                </label>
                                <input type="text" name="toyPhoto" placeholder="Enter the Photo URL of the Toy" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Seller's Name</span>
                                </label>
                                <input type="text" name="sellerName" defaultValue={user?.displayName} placeholder="Enter Seller's Address" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Seller's Email</span>
                                </label>
                                <input type="email" name="sellerEmail" defaultValue={user?.email} placeholder="Enter Seller's Email Address" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Toy (Sub-category)</span>
                                </label>
                                <input type="text" name="subCategory" placeholder="Enter Sub-category of the Toy" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Price</span>
                                </label>
                                <input type="number" name="price" placeholder="Enter Price of the Toy" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Rating</span>
                                </label>
                                <input type="number" name="rating" placeholder="Enter the Rating of the Toy" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Available Quantity</span>
                                </label>
                                <input type="number" name="quantity" placeholder="Enter the Number of Available Toys" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Detail Description</span>
                                </label>
                                <textarea name="description" placeholder="Write Something about the Toy" rows="6" className="rounded-lg pt-3 pl-4" required></textarea>
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" value="Add Toy" className="btn btn-outline bg-red-600 text-white" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToy;