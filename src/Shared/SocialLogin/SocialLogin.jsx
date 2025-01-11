import google from '../../assets/assets/icons/Group 573.png'
const SocialLogin = () => {
    return (
        <div className='flex justify-center pb-5 w-full'>
            <button className='btn px-8  border border-pink-500 rounded-full bg-white'>
                <div className='flex items-center gap-3'>
                    <img className='w-7' src={google} alt="" />
                    <p>Continue with Google</p>
                </div>
            </button>
        </div>
    );
};

export default SocialLogin;