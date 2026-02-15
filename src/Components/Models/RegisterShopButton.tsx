"use client";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";

const RegisterShop = ({text}) => {

    const {data : session} = useSession();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [uploadedUrls, setUploadedUrls] = useState([]);

    const [form, setForm] = useState({
        name : "",
        description : "",
        images : []
    });

    //console.log('session from register button', session);

    const handleClick = () => {
        if(!session){
            signIn("google");
        }
        else{
            setOpen(true);
        }
    }

const uploadImagesToCloudinary = async () => {

    console.log('inside cloudinary function');

    const urls = [];

    for (const file of form.images) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "RegisterStore");

      const res = await axios.post(`https://api.cloudinary.com/v1_1/dowcfqc4a/image/upload`, data);

      urls.push(res.data.secure_url);
    }
  return urls;
};


    const handleSubmit = async(e) => {

        e.preventDefault();
        setLoading(true);

        // const formCreation = new FormData();
        // formCreation.append("name", form.name);
        // formCreation.append("description", form.description);
        // formCreation.append("image", form.images);
        // formCreation.append("email", session?.user?.email);

        // console.log('formCreation', formCreation);
        // sessionStorage.setItem("formCreation", JSON.stringify([formCreation.get("name"), formCreation.get("description"), formCreation.get("image")]));

        try
        {
        
        setLoading(true);
        
        const cloudinaryUrls = await uploadImagesToCloudinary();

        const res = await axios.post("/api/register-shop", {
          name: form.name,
          description: form.description,
          email: session?.user?.email,
          images: cloudinaryUrls,
        });

        if(res.status === 500){
            console.log('error happened', res.data.error);
        }

        if(res.status === 201){
            toast.success('registered successfully!');

            setForm({
              name: "",
              description: "",
              images: [],
            });

            setOpen(false);
        }}

        catch(error)
        {
            toast.error('something went wrong');
            console.log('went wrong in register shop', error);
        }

        finally {
            setLoading(false);
        }

    }

    const handleChange = (e) => {
        
        setForm((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    };

      // ✅ File Input
    const handleFileChange = (e) => {
      setForm((prev) => ({
        ...prev,
        images: Array.from(e.target.files),
      }));
    };


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
                    <input onChange={(e) => handleChange(e)} className="outline-none" name="name" type="text" placeholder="Shop Name" required/>
                </div>

                <div className="flex justify-between border border-teal-700 rounded-sm p-2">
                    <label className="font-semibold">Description</label>
                    <input onChange={(e) => handleChange(e)} className="outline-none" name="description" type="text" placeholder="Description" required />
                </div>

                <div className="flex justify-between border border-teal-700 rounded-sm p-2">
                    <label className="font-semibold">Image Upload</label>
                    <input onChange={handleFileChange} className="outline-none" name="image" type="file" multiple required />
                </div>

                <div className="flex justify-center">
                    <button type="submit" disabled = {loading} className={`cursor-pointer text-teal-700 font-semibold bg-teal-400 p-2 rounded-sm ${loading ? 'cursor-not-allowed opacity-50' : '' } `}  >
                        {`${loading ? 'Loading' : 'Register Now!' }`}
                    </button>
                </div>

            </form>

          </div>
          
        </div>}
    </div>)
};

export default RegisterShop;