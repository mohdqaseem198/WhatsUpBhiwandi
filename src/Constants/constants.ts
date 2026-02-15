// Constants will be here

import { title } from "process";

export const Cities = ["Thane", "Mumbai"];

export const CardItems = [{id : 1, img: "https://www.pexels.com/photo/frontage-of-a-store-14050127/" , title : "Khan Saree Palace", category : "Clothing & Fashion", discount : "20%", location : "Station Road, Bhiwandi", number : "9876238745"},
    {id : 2, img: "https://www.pexels.com/photo/frontage-of-a-store-14050127/" , title : "Tawheed Jwellery", category : "Jwellery", discount : "30%", location : "KGN Chowk, Bhiwandi", number : "9873456745"},
    {id : 3, img: "https://www.pexels.com/photo/frontage-of-a-store-14050127/" , title : "Apna Clothes", category : "Clothing & Fashion", discount : "", location : "Madina Road, Bhiwandi", number : "9879876745"},
];

export const OfferItems = [{id : 1, img: "https://www.pexels.com/photo/frontage-of-a-store-14050127/" , title : "Bazaar Supermarket", category : "Clothing & Fashion", discount : "20%", validity : Date.now()+24*60*60*1000},
    {id : 2, img: "https://www.pexels.com/photo/frontage-of-a-store-14050127/" , title : "Fashion Hub", category : "Jwellery", discount : "30%", validity : (Date.now())+24*60*60*1000},
    {id : 3, img: "https://www.pexels.com/photo/frontage-of-a-store-14050127/" , title : "Spice Market", category : "Clothing & Fashion", discount : "", validity : (Date.now())+24*60*60*1000},
];

export const ReadyToGrowCardItems : {id : number, title : string}[] = [{id : 1, title : "Increase Footfall"},
    {id : 2, title : "Connect with Customers"},
    {id : 3, title : "Promote Offers"},
];

export const GetInTouchCardList : {id : number, title : string, Details : string, img ?: string}[] = [{id : 1, title: "Email Us", Details: "qaseem.ansari198@gmail.com", img:"/email.svg" },
    {id : 2, title: "Call Us", Details: "+91-9172708664", img:"/phone.svg" },
    {id : 3, title: "Visit Us", Details: "Bhiwandi, Dist Thane 421302", img:"/location.svg" },
];

export const footerItems : {id : number, head : string, items : string[]}[] = [{id : 1, head : "For Shopkeepers", items : ["Register Your Shop", "Pricing Plans", "Success Stories", "Help Center"] },
    {id : 2, head : "For Customers", items : ["Browse Shops", "Today's Offers", "Categories", "About Us"] },
    {id : 3, head : "Connect With Us", items : ["Bhiwandi, Thane", "Maharashtra India", "+91-9272708664"] },
];
