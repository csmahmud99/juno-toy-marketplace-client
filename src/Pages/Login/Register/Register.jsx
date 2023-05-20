import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister = event => {
        event.preventDefault();
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

                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Your Photo URL" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Your Email Address" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
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