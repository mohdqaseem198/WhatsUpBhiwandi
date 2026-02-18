"use client"
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import FeaturedCard from "../../../src/Components/FeaturedCard";

const VisitShop = () => {

    const {id} = useParams();
    
    console.log('from shop param', id);

    const [dataById, setDataById] = useState([]);

    useEffect(() => {

        const FetchDataById = async(id) => {
            const response = await axios.get(`/api/register-shop/${id}`);

            if(response.status == 200){
                setDataById(response.data.data);
            }
        }

        FetchDataById(id);

    }, [])

    console.log('from shop' , dataById);

    return(<div id="visit-shop">
        
        <h2 className="text-lg font-semibold text-center">Relative Ads from same Store</h2>

        {   dataById?.length > 0  &&
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" id="featured-shop">
                {dataById.map((single) => (
                    <div className="mx-3 my-5" key={single._id}>
                            <FeaturedCard item= {single} />
                    </div>
                ))}
            </div>}

    </div>)
}

export default VisitShop;