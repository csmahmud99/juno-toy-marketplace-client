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
                            <h1 className="text-2xl md:text-5xl font-bold text-red-600 text-center">Login to Your Account</h1>

                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Login" className="btn btn-outline bg-red-600 text-white" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;