"use client"
import { FixedSizeList as List } from "react-window";

const Sample = () =>{

    const items = Array.from({length : 10000}, (_, index) => `item ${index+1}`);

    const Row = ({ index, style }) => (
    <div style={style}>
      {items[index]}
    </div>
  );

    return(
        <div>
            {/* {array.map((single) => <li>{single}</li>)} */}
            <h3>List Virtualization here</h3>

            <List
                height={500}          // Visible area height
//                width={500}           // Width of list
                itemSize={80}         // Height of each row
                itemCount={items.length}>
                {Row}
            </List>
        </div>
    )
};

export default Sample;