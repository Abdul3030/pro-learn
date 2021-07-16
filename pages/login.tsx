import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {

    return (
        <div className="min-w-full min-h-screen bg-blue-300 flex justify-center items-center">
            <div className="w-1/3">
                <div className="w-full text-center text-white">
                    <h1 className="text-5xl font-medium">Get Started Now!</h1>
                    <h3 className="">Or <span className="font-bold">create and account</span> if not registered yet</h3>
                </div>
                <div className="relative w-full bg-white mt-14 rounded-xl">
                        <div className="absolute w-18 h-18 p-5 mx-auto flex justify-center items-center left-1/2 transform -translate-x-1/2 -top-10 to rounded-full bg-white">
                            <Image src="/logo.png" width="47" height="47" alt="Logo" />
                        </div>
                    <form className="w-full px-14 pt-10 pb-1">
                        <div className="w-full flex flex-col">
                            <label htmlFor="email" className="font-semibold">Email:</label>
                            <input className="outline-none border border-gray-300 rounded px-2 py-1 focus:border-indigo-400" type="email" name="email" id="email" />
                        </div>
                        <div className="w-full flex flex-col mt-2">
                            <label htmlFor="email" className="font-semibold">Password:</label>
                            <input className="outline-none border border-gray-300 rounded px-2 py-1" type="password" name="password" id="password" />
                        </div>
                        <div className="w-full flex flex-col justify-center items-center my-5">
                            <button type="submit" className="w-2/5 py-1 rounded-xl px-5 bg-gradient-to-r text-white from-pro-lightblue to-pro-blue">Sign in</button>
                            <Link href="/forgot_password" >
                                <a className="block mt-1 text-xs font-normal">Forgot password</a>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;