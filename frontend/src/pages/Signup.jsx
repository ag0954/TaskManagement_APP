import React from "react"
import {Link} from "react-router-dom"

const Signup = () =>{

    return(
        <div className="h-[98vh] flex items-center justify-center">
            <div className="p-4 w-2/6 rounded bg-gray-900">
                <div className="font-semibold text-2xl">Signup</div>
                <input type="username" placeholder="username" className="bg-gray-700 px-3 py-2 my-3 w-full rounded"/>
                <input type="email" placeholder="email" className="bg-gray-700 px-3 py-2 my-3 w-full rounded"/>
                <input type="password" placeholder="password" className="bg-gray-700 px-3 py-2 my-3 w-full rounded"/>
                <div className="w-full flex items-center justify-between">
                    <button className="bg-blue-400 text-xl font-semibold text-white px-3 py-2 rounded ">Sign Up</button>
                    <Link to = "/Login" className="text-gray-400 hover:text-gray-200 font-semibold">Already have an Account? Log in here!</Link>
                </div>
            </div>
        
        
        </div>
    )
};


export default Signup;