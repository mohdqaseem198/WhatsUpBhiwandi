'use client';
import { useDispatch, useSelector } from "react-redux";
import {Delete, updateSlice} from '../../src/redux/slices/bookSlice';
import { useState } from "react";
import { setupDevBundler } from "next/dist/server/lib/router-utils/setup-dev-bundler";

const Cart = () => {

    const dispatch = useDispatch();
    const items = useSelector((store) => store.BooksSlicer.item)
    const [update, setUpdate] = useState(false);
    const [form, setForm] = useState({
        id : 0,
        name : '',
        category : '',
        price : 0
    });

    const handleDelete = (id : number) => {
        console.log('sending dispatch', id);
        dispatch(Delete(id));
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm((prev) => ({...prev,
            [name]: value
        }));
    }

    const handleUpdate = (item) => {
        setUpdate(!update);

        setForm({
        id : item.id,
        name : item.name,
        category : item.category,
        price : item.price});
    }

    const handleSave = () => {
        dispatch(updateSlice(form))
        setUpdate(false);
    }

    type Item = {
      id: number;
      name: string;
      category: string;
      price: number;
    };

    return(<div id="cart" className="relative">
        {items && items.map((item : Item) => (
            <div key={item?.id}>
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row justify-between mx-10 items-center">
                <div>
                    id : {item?.id}
                    <p>{item?.name}</p>
                    <p>{item?.category}</p>
                    <p>{item?.price}</p>
                </div>
            </div>

            <div className="">
                <button onClick={() => handleUpdate(item)} className="cursor-pointer p-2 mx-1 bg-green-300 rounded-sm">Update</button>
                <button onClick={() => handleDelete(item.id)} className="cursor-pointer p-2 mx-1 bg-red-300 rounded-sm">Delete</button>
            </div>
        </div>
            <hr />
        </div>
        )) 
        }

        {update && 
        <div className="">
        <div className="fixed w-full blur-sm bg-white min-h-screen  inset-0"></div>
            <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-200 w-96 z-10">
                <div className="flex flex-row justify-around">
                    <label>Update</label>
                    <button onClick={() => setUpdate(false)} className="cursor-pointer">
                        X
                    </button>
                </div>
                <div className="flex flex-row m-5 py-3 border-1  border-black rounded-md justify-center gap-5">
                    <span>Id :</span>
                    <input value={form.id} className="outline-none" type="text" disabled/>
                </div>

                <div className="flex flex-row m-5 py-3 border-1  border-black rounded-md justify-center gap-5">
                    <span>Title :</span>
                    <input onChange={(e) => handleChange(e)} value={form.name} className="outline-none" type="text" name="name"/>
                </div>

                <div className="flex flex-row m-5 py-3 border-1  border-black rounded-md justify-center gap-5">
                    <span>Category :</span>
                    <input onChange={(e) => handleChange(e)} value={form.category} className="outline-none" type="text" name="category"/>
                </div>

                <div className="flex flex-row m-5 py-3 border-1  border-black rounded-md justify-center gap-5">
                    <span>Price :</span>
                    <input onChange={(e) => handleChange(e)} value={form.price} className="outline-none" type="text" name="price"/>
                </div>

                <div className="flex my-5 justify-center text-center cursor-pointer bg-green-300 rounded-sm h-8">
                    <button onClick={() => handleSave()} className="cursor-pointer">Save</button>
                </div>

            </div>
        </div>}
        
    </div>)
};

export default Cart;