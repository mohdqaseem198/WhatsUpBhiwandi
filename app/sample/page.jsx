"use client"
import { FixedSizeList as List } from "react-window";
import {books} from "../../src/Constants/constants";

const Sample = () =>{

    const items = Array.from({length : 10000}, (_, index) => `item ${index+1}`);

    const handleAdd = (index) => {
        console.log('clicked', index);
        console.log(books[0].id);
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
                <button onClick={(e) => handleAdd(index+1)} className="bg-green-300 w-32 px-2 rounded-sm cursor-pointer">Add To Cart</button>
            </div>
        </div>
        <hr />
    </div>
  );

    return(
        <div>
            {/* {array.map((single) => <li>{single}</li>)} */}
            <h3>List Virtualization here</h3>

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