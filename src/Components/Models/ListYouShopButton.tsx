
const ListYourShop = ({text}) => {
    return(<div className= "bg-teal-500 flex justify-center p-1 rounded-md text-white" id="list-your-shop-button">
        <button className="cursor-pointer" >{text}</button>
    </div>)
};

export default ListYourShop;