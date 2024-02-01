import logoDarkImg from "../assets/images/logoDarkImg.png"
import logoLightImg from "../assets/images/logoLightImg.jpg"
// import show from '../assets/images/show.png';
// import hide from '../assets/images/hide.png';
import React from 'react';
import { LuEyeOff, LuEye } from 'react-icons/lu';
import { useState } from 'react';
function AuthFormLayout1() {
    const [isActive, setActive] = useState(false);
    const inputElements = document.getElementsByTagName("input");
    const toggleeye = () => {
        const inputArray = Array.from(inputElements);
        setActive(!isActive);
        inputArray.forEach(element => {
            if (element.name === "password") {
                isActive === true ? element.type = "password" : element.type = "text";
            }
        });
    }
    const showPass = () => {
        const inputArray = Array.from(inputElements);
        const enterpass = document.getElementById("enterpass");
        inputArray.forEach(element => {
            if (element.name === "password") {
                if (element.value === "") {
                    enterpass.className = "text-red-700"
                }
            }
        });

    }
    const showEmail = () => {
        const inputArray = Array.from(inputElements);
        const enteremail = document.getElementById("enteremail");
        inputArray.forEach(element => {
            if (element.type == "text") {
                if (element.value == "") {
                    enteremail.className = "text-red-700"
                }
            }
        });

    }





    return (
        <div className="flex h-lvh sm:justify-center justify-center lg:justify-start items-center">
            <div className="mx-12 flex items-center justify-center lg:max-w-lg">
                <div className="flex h-full flex-col">
                    <div className="shrink">
                        <div>
                            <a to="/" className="flex items-center">
                                <img
                                    width={156}
                                    src={logoDarkImg}
                                    alt="logo"
                                    className="flex relative aspect-square right-6 dark:flex"
                                />
                                <img
                                    width={150}
                                    src={logoLightImg}
                                    alt="logo"
                                    className="hidden h-48 dark:hidden"
                                />
                            </a>
                        </div>
                        <div className="py-6">
                            <h1 className="mb-2 font-bold text-[35px] text-default-800">
                                Login
                            </h1>
                            <p className="max-w-md w-64 sm:w-96 text-lg text-gray-600 text-default-500">Enter your credentials to access Flashpackers.</p>
                        </div>
                    </div>
                    <form className="flex flex-col relative ">
                        <label className="my-3 lg:text-xl" htmlFor="email">Email</label>
                        <input className="py-3 px-4 border-2 lg:w-[400px] lg:h-14 border-gray-200 pl-3 sm:w-96 w-64 rounded-lg placeholder:text-lg placeholder-gray-600" onBlur={showEmail} name="email" type="text" placeholder="Enter your email" required />
                        <span id="enteremail" className="text-red-700 hidden">Please enter your Email</span>
                        <span id="invalidemail" className="text-red-700 hidden">Please enter valid Email</span>
                        <label className="my-3 relative  lg:text-xl top-4" htmlFor="password">Password</label>
                        <div className="relative top-4">
                            <input className=" py-3 pr-[74px] pl-4 border-2 lg:w-[400px] lg:h-14 border-gray-200 sm:w-96 w-64 rounded-lg" name="password" onBlur={showPass} type="password" required />
                            <span className="bg-gray-200 w-[1px] h-12 absolute top-[2px] right-[60px]"></span>

                            {!isActive && <LuEyeOff onClick={toggleeye} size={20} className="text-default-600 absolute sm:right-[20px] right-[20px] bottom-[16px]" />}
                            {isActive && <LuEye onClick={toggleeye} size={20} className="text-default-600 absolute sm:right-[20px] right-[20px] bottom-[16px]" />}

                        </div>
                        <span id="invalidpass" className="text-red-700 hidden">Invalid password</span>
                        <span id="enterpass" className="text-red-700 hidden">please enter the password</span>
                        <button
                            type="submit"
                            className="relative top-12 sm:w-96 lg:w-[400px] lg:h-14 w-64 shadow-lg shadow-gray-400 rounded-lg bg-green-500 px-6 py-3 text-base text-black transition-all hover:bg-green-400"
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AuthFormLayout1