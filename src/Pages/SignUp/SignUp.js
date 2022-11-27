import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { getAuth, updateProfile } from "firebase/auth";

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser } = useContext(AuthContext);
    const auth = getAuth();
    const handleLogin = (data) => {


        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                updateProfile(auth.currentUser, {
                    displayName: data.fname,
                })
                saveUser(data.fname, data.email);
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })

    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                getUsertoken(email)
            })
    }

    const getUsertoken = email => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)
                }
            })
    }

    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className='w-96 p-7 border'>
                <h1 className='text-center text-3xl mb-5'>Sign Up</h1>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full mt-5">
                        <label className="label">
                            <span className="label-text text-lg">Full Name</span>
                        </label>
                        <input type="text" {...register("fname", { required: "Forget your name? 🤣" })} className="input input-bordered w-full" />
                        {errors.fname && <p role="alert" className='text-error'>{errors.fname?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full" />
                        {errors.email && <p role="alert" className='text-error'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full mt-5">
                        <label className="label">
                            <span className="label-text text-lg">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: "Password is required" })} className="input input-bordered w-full" />
                        {errors.password && <p role="alert" className='text-error'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text ">Forget Password?</span>
                        </label>
                    </div>

                    <input className='btn text-white w-full mt-5' type="submit" />
                    <label className="label">
                        <span className="label-text ">Already have an account? <Link to={'/login'} className='text-primary'>Login</Link></span>
                    </label>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full' type="submit">CONTINUE WITH GOOGLE</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;