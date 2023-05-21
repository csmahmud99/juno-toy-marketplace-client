import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const toy = useLoaderData();

    const { _id, toyName, toyPhoto, price, quantity, description } = toy;

    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;

        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updatedToy = {
            price, quantity, description
        };

        console.log(updatedToy);

        fetch(`http://localhost:5000/toys/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            });
    };

    return (
        <div>
            <div className="card flex-shrink-0 w-max-md shadow-2xl bg-[#212529] border-4 border-white rounded-md">
                <div className="card-body">
                    <img src={toyPhoto} alt="toy-image" className="w-52 mx-auto rounded-md border-8 border-red-600" />

                    <h1 className="text-2xl md:text-4xl font-bold text-red-600 text-center">Update Toy: <span className="text-indigo-200">{toyName}</span></h1>

                    <form onSubmit={handleUpdateToy} className="mt-5">
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Update New Price in USD($)</span>
                                </label>
                                <input type="number" name="price" min="0" step="any" defaultValue={price} placeholder="Enter Price of the Toy" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Update the Available Quantity</span>
                                </label>
                                <input type="number" name="quantity" min="0" defaultValue={quantity} className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Update the Detail Description</span>
                                </label>
                                <textarea name="description" placeholder="Write Something about the Toy" rows="6" defaultValue={description} className="rounded-lg pt-3 pl-4" required></textarea>
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" value="Update Toy" className="btn btn-outline bg-red-600 text-white" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;