
const OfferCard = ({props}) => {

    const {id, title, discount, category, validity} = props;
    const formattedDate = (validity) => {
        return new Date(validity).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })};

    return(<div className="p-3" id="offer-card">
    <div className= "bg-white shadow-2xl rounded-xl">

        <div className="w-full h-[300px] rounded-t-md overflow-hidden">
            <img className="w-full h-full object-cover" src="./shop.jpeg" />
        </div>

    <div className="p-2">
        <div className="my-5 p-2 rounded-2xl border-green-800 border-[1px] w-fit bg-green-200">
            <p className="text-sm cursor-pointer text-green-800">{category}</p>
        </div>

        <div className="my-2 text-xl font-semibold">
            <p>{title}</p>
        </div>

        <div className="my-5 bg-amber-600 text-white p-2 w-full rounded-xl">
            <p>{`${discount ? `Up to ${discount} OFF` : "Free Home Delivery above 500/-"}` }</p>
        </div>

        <p className="my-5">{`${validity ? "Valid till "+formattedDate(validity) : "Hurry Up"}`}</p>
    </div>

    </div>
    </div>)
};

export default OfferCard;