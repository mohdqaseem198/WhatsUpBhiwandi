import { Cities, footerItems } from "../Constants/constants";

const Footer = () => {
    return(<div className="px-8 py-12 bg-black text-white" id="footer">

        <div  className="md:grid md:grid-cols-4">
            <div className="md:col-span-1">
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
                <h2 className="my-5 text-gray-400">Your hyperlocal platform connecting shopkeepers and customers in Bhiwandi.</h2>
            </div>

            <div className="md:col-span-3 md:flex md:flex-row md:justify-around">
                {footerItems && footerItems.map((single) => {return(
                <div className="py-2" key={single.id}>
                    <p>{single.head}</p>
                    <div className="text-gray-400">
                    {single.items.map((s) => {
                        return(
                        <p className="py-1 text-sm">
                            {s}
                        </p>)
                    })}
                    </div>
                </div>)} )}
            </div>
        </div>

        <div className="w-full h-px my-5 bg-gray-600" />
        
        <div className="text-center">
            <p><span>©</span> WhatsUp Bhiwandi, All rights reserved. Made with ❤️ for local business.</p>
        </div>

    </div>)
};

export default Footer;