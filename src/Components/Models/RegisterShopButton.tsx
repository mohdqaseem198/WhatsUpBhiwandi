"use client";
import { set } from "mongoose";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

const RegisterShop = ({text}) => {

    const {data : session} = useSession();
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({
        name : "",
        description : "",
        image : ""
    });

    console.log('session from register button', session);

    const handleClick = () => {
        if(!session){
            signIn("google");
        }
        else{
            setOpen(true);
        }
    }

    const handleSubmit = (e) => {

    }

    const handleChange = (e) => {
        
        setForm((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    };

    console.log(form);

    return(
    <div>

        <div className= "w-40 bg-transparent border border-[2px] border-white rounded-lg flex justify-center p-2" id="list-your-shop-button">
            <button onClick={handleClick} className="cursor-pointer" >{text}</button>
        </div>

        {open &&
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-lg w-[400px]">
            
            <div className="flex flex-row justify-between items-center">
                <h2 className="text-xl font-bold mb-4">Register Your Shop</h2>
                <div className="cursor-pointer" onClick={() => setOpen(false)}>X</div>
            </div>

            {/* Your form goes here */}
            <form onSubmit={(e) => handleSubmit(e)} className="space-y-3">
                <div className="flex justify-between border border-teal-700 rounded-sm p-2">
                    <label className="font-semibold">Shop Name</label>
                    <input onChange={(e) => handleChange(e)} className="outline-none" name="name" type="text" placeholder="Shop Name" />
                </div>

                <div className="flex justify-between border border-teal-700 rounded-sm p-2">
                    <label className="font-semibold">Description</label>
                    <input onChange={(e) => handleChange(e)} className="outline-none" name="description" type="text" placeholder="Description" />
                </div>

                <div className="flex justify-between border border-teal-700 rounded-sm p-2">
                    <label className="font-semibold">Image Upload</label>
                    <input className="outline-none" name="image" type="file" />
                </div>

                <div className="flex justify-center">
                    <button type="submit" className="cursor-pointer text-teal-700 font-semibold bg-teal-400 p-2 rounded-sm">Register Now!</button>
                </div>

            </form>

          </div>
          
        </div>}
    </div>)
};

export default RegisterShop;