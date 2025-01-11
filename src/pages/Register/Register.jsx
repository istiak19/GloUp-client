import { Link } from 'react-router-dom';
import sign from '../../assets/sign.png'
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className="hero my-10">
            <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img className='w-[600px]' src={sign} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl text-center mt-5 font-bold">Create an account</h1>
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' {...register("name")} placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' {...register("email")} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file" {...register("photo")} name='photo' placeholder="Photo" className="" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password")} name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#F63E7B] text-white">Create an account</button>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className='text-center pb-5'>Already have an account?<Link to='/login'> <span className='text-pink-500 border-b'>Login</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;