

const GetInTouchCard = ({props}) => {

    const {title, Details, img} = props;

    return(<div className="my-5" id="get-in-touch-card">
        <div className="w-10 h-10">
            <img src={img} alt="no"/>
        </div>
        <div>
            <h3 className="text-md font-semibold">{title}</h3>
            <p className="text-gray-700">{Details}</p>
        </div>

    </div>)
};

export default GetInTouchCard;