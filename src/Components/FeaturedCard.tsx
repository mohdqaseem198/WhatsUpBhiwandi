import Link from "next/link";
import ListYourShop from "./Models/ListYouShopButton";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef } from "react";
import axios from "axios";

const FeaturedCard = ({item}) => {

    const cardRef = useRef(null);
    const hasViewed = useRef(false);
    
    const {owner : id = null ,name = "", location = "" ,description , discount , images, number} = item || {} ;

    const {title, category,img, discnt, loc, nbr} = item;

    const pathname = usePathname();
    const isInsideShop = pathname.startsWith("/Shop/");

    useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (entry.isIntersecting && !hasViewed.current) {

            console.log("Card visible:", item._id);

            hasViewed.current = true;

            axios.post("/api/shop-view", {
              shopId: item._id
            });

            observer.unobserve(entry.target); // prevent duplicate count
          }

        });
      },
      {
        threshold: 0.8 // 80% of card visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };

  }, [item]);

    return(<div ref={cardRef} id="featured-card">
        <div className="shadow-2xl h-[] border border-1 border-white rounded-xl">
            <div className="w-full h-[300px] rounded-t-md overflow-hidden">
                {/* {images ? images.map((single, index) => 
                    <img key={single.index} className="w-full h-full object-cover" src={single} />
                ) : 
                    <img className="w-full h-full object-cover" src="./store.jpg" />
                } */}

                {images ? 
                    <Image height={300} width={400} alt={images[0]} className="w-full h-full object-cover" src={images[0]} />
                : 
                <Image height={300} width={400} alt='' className="w-full h-full object-cover" src="/store.jpg" />}
            </div>
            <div className="p-2 space-y-2">
                <h2 className="font-semibold text-xl ">{title || name}</h2>
                <p className="text-teal-600">{category || description}</p>
                
                <div className="bg-orange-100 border border-orange-300 border-[2px] rounded-md">
                    <p className="p-1 text-orange-700">{`${discount ? discount + 'Off on Festive Collection' : 'Special Marketing Charges Discount'}`}</p>
                </div>

                <p>{location}</p>
                <p>{`+91-${number}`}</p>
                
                {!isInsideShop ?
                <Link href={`/Shop/${id}`}>
                    <div className="w-full m-auto">
                        <ListYourShop text="Visit Shop" />
                    </div>
                </Link>
                : 
                    <div className="w-full m-auto">
                        <ListYourShop text="Take a Tour" />
                    </div>
                    }

            </div>

        </div>
    </div>)
};

export default FeaturedCard;