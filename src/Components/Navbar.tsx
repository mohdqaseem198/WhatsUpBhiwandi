import { Cities } from "../Constants/constants";
import ListYourShop from "./Models/ListYouShopButton";

const Navbar = () => {

    return(<div className="p-1 flex bg-white lg:flex-row lg:justify-between" id="navbar">
        <div className="p-1">
            <div>
                <h2 className="font-bold">WhatsUp Bhiwandi</h2>
            </div>
            <div>
                {Cities && Cities.map((single, index) => (
                    <span className="text-sm p-2 text-gray-400" key={index}>{single}</span>
                ))
            }
            </div>
        </div>

        <div className="hidden lg:flex my-auto flex-row justify-center gap-2">
            <div className="p-1 cursor-pointer">Shops</div>
            <div className="p-1 cursor-pointer">Offers</div>
            <div className="p-1 cursor-pointer">Categories</div>
            <ListYourShop text = "List Your Shop" />
        </div>

    </div>)
};

export default Navbar;