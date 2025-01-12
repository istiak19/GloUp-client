import { useNavigate } from 'react-router-dom';
import google from '../../assets/assets/icons/Group 573.png'
import useAuth from '../../Hook/useAuth'
import useAxiosPublic from '../../Hook/useAxiosPublic';
import { toast } from 'react-toastify';
const SocialLogin = () => {
    const { googleUser } = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const handleGoogle = () => {
        googleUser()
            .then((result => {
                console.log(result.user)
                const userInfo = {
                    name: result?.user?.displayName,
                    email: result?.user?.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate('/')
                        toast.success('Login successfully')
                    })
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