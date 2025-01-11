import bannerPic from '../../assets/assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'

const Banner1 = () => {
    return (
        <div className="hero bg-[#E5E5E5] min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerPic}
                    className="max-w-lg rounded-lg shadow-2xl" />
                <div className='mr-20'>
                    <h1 className="text-5xl font-bold uppercase">BEAUTY SALON <br /> FOR EVERY WOMEN</h1>
                    <p className="py-6">
                    "Glow Inside Out – Elevate Your Beauty Journey with GloUp!
                    </p>
                    <button className="btn bg-pink-500 text-white">Get an Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Banner1;