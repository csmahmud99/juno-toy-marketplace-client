import { Link } from "react-router-dom";

const AddToy = () => {
    return (
        <div>
            <div className="card flex-shrink-0 w-max-md shadow-2xl bg-[#212529] border-4 border-white rounded-md">
                <div className="card-body">
                    <h1 className="text-2xl md:text-5xl font-bold text-red-600 text-center">Add a Toy</h1>

                    <form className="mt-5">
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
                                <input type="text" name="photo" placeholder="Enter the Photo URL of the Toy" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Seller's Name</span>
                                </label>
                                <input type="text" name="sellerName" placeholder="Enter Seller's Address" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Seller's Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter Seller's Email Address" className="input input-bordered" required />
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