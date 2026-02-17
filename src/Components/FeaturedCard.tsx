import ListYourShop from "./Models/ListYouShopButton";

const FeaturedCard = ({item}) => {
    
    console.log('item from featured card', item);
    
    const {name = "", location = "" ,description , discount , images, number} = item || {} ;

    const {title, category,img, discnt, loc, nbr} = item;

    return(<div id="featured-card">
        <div className="shadow-2xl h-[] border border-1 border-white rounded-xl">
            <div className="w-full h-[300px] rounded-t-md overflow-hidden">
                {/* {images ? images.map((single, index) => 
                    <img key={single.index} className="w-full h-full object-cover" src={single} />
                ) : 
                    <img className="w-full h-full object-cover" src="./store.jpg" />
                } */}

                {images ? 
                    <img className="w-full h-full object-cover" src={images[0]} />
                : 
                
                <img className="w-full h-full object-cover" src="./store.jpg" />}
            </div>
            <div className="p-2 space-y-2">
                <h2 className="font-semibold text-xl ">{title || name}</h2>
                <p className="text-teal-600">{category || description}</p>
                
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