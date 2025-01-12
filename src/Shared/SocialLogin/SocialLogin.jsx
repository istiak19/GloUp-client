import { useNavigate } from 'react-router-dom';
import google from '../../assets/assets/icons/Group 573.png'
import useAuth from '../../Hook/useAuth'
const SocialLogin = () => {
    const { googleUser } = useAuth()
    const navigate = useNavigate()

    const handleGoogle = () => {
        googleUser()
            .then((result => {
                console.log(result.user)
                navigate('/')
            }))
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='flex justify-center pb-5 w-full'>
            <button onClick={handleGoogle} className='btn px-8  border border-pink-500 rounded-full bg-white'>
                <div className='flex items-center gap-3'>
                    <img className='w-7' src={google} alt="" />
                    <p>Continue with Google</p>
                </div>
            </button>
        </div>
    );
};

export default SocialLogin;