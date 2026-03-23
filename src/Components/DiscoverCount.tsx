import { count } from "console";
import { Signika } from "next/font/google";
import CountUp from "react-countup";

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
                    
                    {single.k === "K" ? (
                    <>
                        <CountUp end={single.count} duration={2} />
                        K+
                    </>
                    ) : (
                    <>
                        <CountUp end={single.count} duration={1.5} />+
                    </>
                    )}
                    
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