import banner2 from '../../assets/assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const Banner2 = () => {
    return (
        <div className="hero bg-[#E5E5E5] min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={banner2}
                    className="max-w-lg rounded-lg shadow-2xl" />
                <div className='ml-10'>
                    <h1 className="text-5xl font-bold">Let us handle your <br /> screen <span className='text-pink-500'>Professionally</span>.</h1>
                    <p className="py-6">
                        Expert Care for Every Screen – Let Us Handle It Professionally!
                    </p>
                    <div className='flex justify-evenly'>
                        <div>
                            <h2 className='text-4xl font-bold text-pink-500'>500+</h2>
                            <p>Happy Customer</p>
                        </div>
                        <div>
                            <h2 className='text-4xl font-bold text-pink-500'>16+</h2>
                            <p>Total Service</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;