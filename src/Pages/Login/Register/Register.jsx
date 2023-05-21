import { Link } from "react-router-dom";
import "./Register.css";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from 'sweetalert2';
import useTitle from "../../../hooks/useTitle";

const Register = () => {
    useTitle("Sign Up");
    const { createUser, updateUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

        createUser(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                updateUser(name, photo);
                if (user.uid) {
                    Swal.fire({
                        title: 'Done',
                        text: 'You have successfully registered to Juno Toys and Games',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                }
            })
            .catch(error => {
                console.log("error", error.message);
            });
    };

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-5">
                    <div className="border-4 border-white rounded-md w-96 pt-5 px-5">
                        <img src="https://i.ibb.co/KyS3czR/register-form-image.jpg" alt="registration-form-image" className="w-full" />
                    </div>

                    <div className="card flex-shrink-0 w-full md:w-1/2 w-max-sm shadow-2xl bg-[#212529] border-4 border-white rounded-md">
                        <div className="card-body">
                            <h1 className="text-2xl md:text-5xl font-bold text-red-600 text-center">Create an Account</h1>

                            <form onSubmit={handleRegister} className="space-y-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Your Photo URL" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Your Email Address" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Sign Up" className="btn btn-outline bg-red-600 text-white" />
                                </div>
                            </form>

                            <p className="text-white text-center mt-4">
                                Already have an account in <strong className="text-indigo-200 text-xl">Juno - Toys and Games</strong>? Please, <Link to="/login" className="text-indigo-300 font-bold">Log in</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;