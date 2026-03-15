
const ListYourShop = ({text, disabled = false}) => {
    return(<div className= {`${disabled ? 'opacity-0 cursor-not-allowed' : ''} bg-teal-500 flex justify-center p-1 rounded-md text-white`} id="list-your-shop-button">
        <button  className={`${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>{text}</button>
    </div>)
};

export default ListYourShop;