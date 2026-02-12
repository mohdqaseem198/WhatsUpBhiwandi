'use client'
import { useState } from "react";
import ListYourShop from "./Models/ListYouShopButton";
import axios from "axios";
import toast from "react-hot-toast";


const QuickForm = () => {

    const [form, setForm] = useState({
        name : "",
        number : "",
        email : "",
        message : ""
    });

    const handleChange = (e : any) => {

        setForm({
            ...form, [e.target.name] : e.target.value
        });

        console.log('formData', form);
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/contact", form);
      
      if(res.status === 201){
        toast.success(`Thanks for contacting! ${form.name}`);

        setForm({
        name : "",
        number : "",
        email : "",
        message : ""
        });
      }

      

    } catch (error) {
      alert("Error sending message");
      console.log(error);
    }
  };

    return(<div className="mx-5 p-8  bg-teal-100/60 rounded-md" id="quick-form">
        <form onSubmit={(e) => handleSubmit(e)}>
            <h3 className="text-2xl pt-10 font-bold">Quick Contact Form</h3>

            <div className="space-y-5 my-5">
                <div>
                    <input value={form.name} onChange={(e) => handleChange(e)} className="outline-none border w-full border-gray-400 p-2 rounded-md" name="name" type = "text" placeholder="Your Name" />
                </div>

                <div>
                    <input value={form.email} onChange={(e) => handleChange(e)} className="outline-none border w-full border-gray-400 p-2 rounded-md" name="email" type = "text" placeholder="Your Email" />
                </div>

                <div>
                    <input value={form.number} onChange={(e) => handleChange(e)} className="outline-none border w-full border-gray-400 p-2 rounded-md" name="number" type = "text" placeholder="Phone Number" />
                </div>

                <div className="">
                    <textarea value={form.message} onChange={(e) => handleChange(e)} className="outline-none border w-full min-h-40 border-gray-400 p-2 rounded-md" name="message" placeholder="Your Message" />
                </div>

                <button type="submit">
                    <ListYourShop text={"Send Message"} />
                </button>

            </div>
            

        </form>
    </div>)
};

export default QuickForm;