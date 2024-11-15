// Banner component

const Banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-white_155003-1722.jpg?t=st=1731579808~exp=1731583408~hmac=36849d0cdaa99dc244d981ade11154b6111d9d787ded608fdf125c270f611da8&w=1800)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-gray-50 text-center">
                <div className="max-w-[600px]">
                    <h1 className="mb-5 text-5xl font-bold ">Welcome to gadget shop.</h1>
                    <p className="mb-5">
                        PDP Software Company Ltd mainly work for web and apps development.But we are also build and solve your it related problems. If you face any kind of website build , bug solve and many type of problems please contact us . We will try to best for solved your problems.
                    </p>
                    <button className="btn bg-black text-gray-100">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;