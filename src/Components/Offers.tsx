import { OfferItems } from "../Constants/constants";
import OfferCard from "./OfferCard";

const Offers = () =>{
    return(<div className="bg-amber-100" id="offers">
        <div className="p-3 text-center">
            <h2 className="font-semibold text-2xl">
                Today's Special Offers
            </h2>
            <p className="text-gray-600">Don't miss out on this amazing deals from local shops!</p>
        </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {OfferItems && OfferItems.map((single) => (
            <div key={single.id}>
            <OfferCard props = {single} />
        </div>
        ))}
    </div>

    </div>)
};

export default Offers;