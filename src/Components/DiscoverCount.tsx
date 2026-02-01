import { count } from "console";
import { Signika } from "next/font/google";

const DiscoverCount = () => {

    const details : {id:number , count : number, k?:string , name : string}[] = [{id : 1, count : 1000, name : "Local Shops"},
        {id : 2, count : 50, k:"K", name : "Happy Customers"},
        {id : 3, count : 200, name : "Daily Offers"}
    ]

    return(<div id="discover-count">
        <div className="flex flex-row justify-around">
            {details && details.map((single) => (
            <div className="" key={single.id}>
                <div className="text-3xl">
                    {single.k === "K" ? single.count+single.k : single.count }+
                </div>

                <div className="text-teal-200">
                    {single.name}
                </div>
            </div>
            ))
            }
        </div>
    </div>)
};

export default DiscoverCount;