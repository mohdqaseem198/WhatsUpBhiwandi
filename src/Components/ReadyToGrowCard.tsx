
const ReadyToGrowCard = ({text}) => {
    return(<div className="m-4 text-white" id="ready-to-grow-card">
        <div className="p-2 rounded-md bg-teal-400/30 shadow-2xl">
            {text}
        </div>
    </div>)
};

export default ReadyToGrowCard;