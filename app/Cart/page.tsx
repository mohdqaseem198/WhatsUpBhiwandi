'use client';
import { useDispatch, useSelector } from "react-redux";
import {Delete} from '../../src/redux/slices/bookSlice';

const Cart = () => {



    const dispatch = useDispatch();
    const items = useSelector((store) => store.BooksSlicer.item)
    console.log('from redux' , items);

    const handleDelete = (id : number) => {
        console.log('sending dispatch', id);
        dispatch(Delete(id));

    }

    type Item = {
      id: number;
      name: string;
      category: string;
      price: number;
    };

    return(<div id="cart" className="">
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
                <button className="cursor-pointer p-2 mx-1 bg-green-300 rounded-sm">Update</button>
                <button onClick={() => handleDelete(item.id)} className="cursor-pointer p-2 mx-1 bg-red-300 rounded-sm">Delete</button>
            </div>
        </div>
            <hr />
        </div>
        )) 
        
        }
        
    </div>)
};

export default Cart;