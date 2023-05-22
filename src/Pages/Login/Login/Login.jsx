import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaGoogle } from 'react-icons/fa';
import useTitle from "../../../hooks/useTitle";

const Login = () => {
    useTitle("Sign In");
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location?.state?.from?.pathname || "/";

    // Log In with Email & Password - Button Function
    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log("Error:", error.message);
            });
    };

    // Google Sign In - Button Function
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            });
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

                            <form onSubmit={handleLogin} className="space-y-4">
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

                            <div>
                                <button onClick={handleGoogleSignIn} className="btn btn-outline bg-red-600 w-full text-white"><FaGoogle className="text-xl mr-2" /> Log In with Google</button>
                            </div>

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