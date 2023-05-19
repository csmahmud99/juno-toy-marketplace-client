import CountUp from 'react-countup';

const HomeCounter = () => {
    return (
        <div className="grid grid-cols-4 gap-6 bg-[#212529] mt-24 p-10 rounded-lg">
            <div className="card bg-[#3D4451] shadow-xl border-2 border-white text-indigo-100">
                <div className="px-10 pt-10 text-center font-extrabold text-6xl text-red-600">
                    <CountUp end={100} className="border-2 border-white p-2 rounded-lg" />+
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl">Products</h2>
                    <p>in this Marketplace</p>
                </div>
            </div>
            <div className="card bg-[#3D4451] shadow-xl border-2 border-white text-indigo-100">
                <div className="px-10 pt-10 text-center font-extrabold text-6xl text-red-600">
                    <CountUp end={2000} className="border-2 border-white p-2 rounded-lg" />+
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl">Customers</h2>
                    <p>worldwide</p>
                </div>
            </div>
            <div className="card bg-[#3D4451] shadow-xl border-2 border-white text-indigo-100">
                <div className="px-10 pt-10 text-center font-extrabold text-6xl text-red-600">
                    <CountUp end={7} className="border-2 border-white p-2 rounded-lg" />+
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl">Countries</h2>
                    <p>covered till now</p>
                </div>
            </div>
            <div className="card bg-[#3D4451] shadow-xl border-2 border-white text-indigo-100">
                <div className="px-10 pt-10 text-center font-extrabold text-6xl text-red-600">
                    <CountUp end={100} className="border-2 border-white p-2 rounded-lg" />%
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl">Satisfaction</h2>
                    <p>of our client is guaranteed</p>
                </div>
            </div>
        </div>
    );
};

export default HomeCounter;