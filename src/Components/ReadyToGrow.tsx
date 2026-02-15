import { ReadyToGrowCardItems } from "../Constants/constants";
import RegisterButtonGrow from "./Models/RegisterButtonGrow";
import ReadyToGrowCard from "./ReadyToGrowCard";

const ReadyToGrow = () => {

    const props = {name : "Register your Shop Now - It's Free", className : "bg-white p-2 rounded-lg text-teal-700"}

    return(<div className="py-10 bg-teal-600" id="ready-to-grow">
        <div>
            <img src="no" alt="no" />
        </div>

        <div className="text-center text-white">
            <h2 className="font-semibold text-2xl">Ready to Grow Your Business?</h2>
            <p className="text-lg">Join 1000+ successful shopkeepers in Bhiwandi. List your shop today and reach more customers!</p>
        </div>

        <div className="mt-5 w-full md:flex md:flex-row md:justify-center">
            {ReadyToGrowCardItems && ReadyToGrowCardItems.map((single) => (
                <ReadyToGrowCard text = {single.title} key={single.id} />
            ))
            }
        </div>
        <div className="flex flex-col text-center justify-center p-4">
            <RegisterButtonGrow props={props} />

            <p className="text-white my-2">No credit card required. Quick setup. Start getting customers today</p>
        </div>

    </div>)
};

export default ReadyToGrow;