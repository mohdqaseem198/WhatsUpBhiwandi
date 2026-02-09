import { GetInTouchCardList } from "../Constants/constants";
import GetInTouchCard from "./GetInTouchCard";

const GetInTouch = () => {

    return(<div className="py-10 px-4" id="get-in-touch">
        <div>
            <h2 className="text-2xl font-semibold">Get In Touch</h2>
            <p className="my-5">Have questions? Want to list your shop? Need help? Contact the WhatsUp Bhiwandi team.</p>
        </div>

        <div>
            {GetInTouchCardList && GetInTouchCardList.map((single) => (
            <div key={single.id}>
                <GetInTouchCard props={single} />
            </div>
            ))
            }
        </div>

    </div>)
};

export default GetInTouch;