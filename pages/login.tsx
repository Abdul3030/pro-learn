import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {

    return (
        <div className="min-w-full min-h-screen bg-blue-300 flex justify-center items-center">
            <div className="w-104">
                <div className="w-full text-center text-white">
                    <h1 className="text-4xl font-medium">Get Started Now!</h1>
                    <h3 className="text-lg font-light">Or <span className="font-medium">create and account</span> if not registered yet</h3>
                </div>
                <div className="relative w-full bg-white mt-14 rounded-xl">
                        <div className="absolute w-18 h-18 p-5 mx-auto flex justify-center items-center left-1/2 transform -translate-x-1/2 -top-10 to rounded-full bg-white">
                            <Image src="/logo.png" width="47" height="47" alt="Logo" priority />
                        </div>
                    <form className="w-75 mx-auto pt-10 pb-1 text-xs">
                        <div className="w-full flex flex-col">
                            <label htmlFor="email" className="font-medium mb-1">Email:</label>
                            <input className="h-8 text-xxs outline-none border border-gray-300 rounded px-3 py-2 focus:border-indigo-400" type="email" name="email" id="email" />
                        </div>
                        <div className="w-full flex flex-col mt-2">
                            <label htmlFor="email" className="font-medium mb-1">Password:</label>
                            <input className=" h-8 outline-none text-xxs border border-gray-300 rounded px-2 py-1 focus:border-indigo-400" type="password" name="password" id="password" />
                        </div>
                        <div className="w-full flex flex-col justify-center items-center my-5">
                            <button type="submit" className=" w-25 h-6 text-xss transition-all duration-500 ease-out font-medium py-1 rounded-lg bg-gradient-to-r text-white from-pro-blue to-pro-lightblue hover:from-pro-lightblue hover:to-pro-blue focus:outline-none">Sign in</button>
                            <Link href="/forgot_password" >
                                <a className="block mt-1 text-xs font-normal text-pro-lightblue">Forgot password</a>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;