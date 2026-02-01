import ListYourShop from "./Models/ListYouShopButton";

const FeaturedCard = ({item}) => {

    const {title, category,img, discount, location, number} = item;

    return(<div id="featured-card">
        <div className="shadow-2xl h-[] border border-1 border-white rounded-xl">
            <div className="w-full h-[300px] rounded-t-md overflow-hidden">
                <img className="w-full h-full object-cover" src="./store.jpg" />
            </div>
            <div className="p-2 space-y-2">
                <h2 className="font-semibold text-xl ">{title}</h2>
                <p className="text-teal-600">{category}</p>
                
                <div className="bg-orange-100 border border-orange-300 border-[2px] rounded-md">
                    <p className="p-1 text-orange-700">{`${discount ? discount + 'Off on Festive Collection' : 'Special Marketing Charges Discount'}`}</p>
                </div>

                <p>{location}</p>
                <p>{`+91-${number}`}</p>

                <div className="w-full m-auto">
                    <ListYourShop text="Visit Shop" />
                </div>

            </div>
            
        </div>
    </div>)
};

export default FeaturedCard;