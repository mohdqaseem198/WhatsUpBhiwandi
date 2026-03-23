
const ExploreButton = ({text, onClick = null}) => {
    return(<div className= "w-34 bg-white rounded-lg flex justify-center p-2" id="list-your-shop-button">
        <button onClick={onClick} className="cursor-pointer text-teal-700 " >{text}</button>
    </div>)
};

export default ExploreButton;