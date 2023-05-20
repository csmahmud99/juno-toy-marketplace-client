import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
    };

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-5">
                    <div className="border-4 border-white rounded-md w-96 pt-5 px-5">
                        <img src="https://i.ibb.co/3y00b8X/login-form-image.jpg" alt="login-form-image" className="w-full" />
                    </div>

                    <div className="card flex-shrink-0 w-full md:w-1/2 w-max-sm shadow-2xl bg-[#212529] border-4 border-white rounded-md">
                        <div className="card-body">
                            <h1 className="text-2xl md:text-5xl font-bold text-red-600 text-center">Log in to Your Account</h1>

                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Enter Your Email Address" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover text-orange-400">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Log In" className="btn btn-outline bg-red-600 text-white" />
                                </div>
                            </form>

                            <p className="text-white text-center mt-4">
                                New to <strong className="text-indigo-200 text-xl">Juno - Toys and Games</strong>? Please, <Link to="/register" className="text-indigo-300 font-bold">Register</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;