import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginPic from '../../assets/Login-bro.png'
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hook/useAuth';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { signInUser } = useAuth()
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        signInUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err.message)
            })
    }


    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={loginPic} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                    <h1 className="text-3xl font-bold text-center pt-4">Login With</h1>
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' {...register("email")} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' {...register("password")} placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#F63E7B] text-white">Login</button>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className='text-center pb-5'>Don’t have an account?<Link to='/register'> <span className='text-pink-500 border-b'>Create an account</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;