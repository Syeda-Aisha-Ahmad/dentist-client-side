import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from '../../Firebase/Firebase.config';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { userLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState();
    const [userEmail, setUserEmail] = useState('');
    const auth = getAuth(app);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        setLoginError('')
        userLogin(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
            })
    }


    // reset pass

    const getEmail = event => {
        const email = event.target.value;

        setUserEmail(email)
        console.log(email)

    }

    const resetPass = () => {
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password reset email sent')
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className='w-96 p-7 border'>
                <h1 className='text-center text-3xl mb-5'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Email</span>
                        </label>
                        <input type="text" onBlur={getEmail} />
                        <input type="email" {...register("email", {
                            required: "Email Address is required",
                            onBlur: (event) => setUserEmail(event.target.value)
                        })}
                            className="input input-bordered w-full" />
                        {errors.email && <p role="alert" className='text-error'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full mt-5">
                        <label className="label">
                            <span className="label-text text-lg">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: "Password is required" })} className="input input-bordered w-full" />
                        {errors.password && <p role="alert" className='text-error'>{errors.password?.message}</p>}
                        {loginError && <p className='text-error'>{loginError}</p>}
                        <label className="label">
                            <span className="label-text ">Forget Password? <span className='font-bold' onClick={resetPass}>Reset</span></span>
                        </label>
                    </div>

                    <input className='btn text-white w-full mt-5' type="submit" />
                    <label className="label">
                        <span className="label-text ">New to Doctors portal? <Link to={'/register'} className='text-primary'>Create New Account</Link></span>
                    </label>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full' type="submit">CONTINUE WITH GOOGLE</button>
                </form>
            </div>
        </div>
    );
};

export default Login;