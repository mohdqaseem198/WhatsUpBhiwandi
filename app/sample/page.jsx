"use client"
import { FixedSizeList as List } from "react-window";
import {books} from "../../src/Constants/constants";
import { useDispatch } from "react-redux";
import {add} from '../../src/redux/slices/bookSlice';
import Link from "next/link";

const Sample = () =>{

    const items = Array.from({length : 10000}, (_, index) => `item ${index+1}`);

    const dispatch = useDispatch();

    const handleAdd = (index) => {
        dispatch(add(index));
        console.log('clicked', index);
    }

    const Row = ({ index, style }) => (
    <div style={style} >
        <div className="flex flex-row justify-between mx-10 items-center">
            <div>
                id : {books[index].id}
                <p>{books[index].name}</p>
                <p>{books[index].category}</p>
                <p>{books[index].price}</p>
            </div>
            <div>
                <button onClick={(e) => handleAdd(books[index])} className="bg-green-300 w-32 px-2 rounded-sm cursor-pointer">Add To Cart</button>
            </div>
        </div>
        <hr />
    </div>
  );

    return(
        <div>
            
            <div className="flex flex-row justify-around">
                {/* {array.map((single) => <li>{single}</li>)} */}
                <h3>List Virtualization here</h3>
                <Link href={'/Cart'}>
                    Cart
                </Link>
            </div>

            <List className="bg-gray-100"
                height={500}          // Visible area height
//                width={500}           // Width of list
                itemSize={100}         // Height of each row
                itemCount={books.length}>
                {Row}
            </List>

            <p className="py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi aspernatur dolore molestias corporis suscipit illo deleniti possimus, molestiae labore fugit dolorum laudantium at sit, maxime repellat sequi aliquid doloribus.</p>
        </div>
    )
};

export default Sample;