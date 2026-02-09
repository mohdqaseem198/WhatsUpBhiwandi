import ListYourShop from "./Models/ListYouShopButton";

const QuickForm = () => {
    return(<div className="mx-5 p-8  bg-teal-100/60 rounded-md" id="quick-form">
        <form >
            <h3 className="text-2xl pt-10 font-bold">Quick Contact Form</h3>

            <div className="space-y-5 my-5">
                <div>
                    <input className="outline-none border w-full border-gray-400 p-2 rounded-md" name="name" type = "text" placeholder="Your Name" />
                </div>

                <div>
                    <input className="outline-none border w-full border-gray-400 p-2 rounded-md" name="email" type = "text" placeholder="Your Email" />
                </div>

                <div>
                    <input className="outline-none border w-full border-gray-400 p-2 rounded-md" name="number" type = "text" placeholder="Phone Number" />
                </div>

                <div className="">
                    <textarea className="outline-none border w-full min-h-40 border-gray-400 p-2 rounded-md" name="message" type = "text" placeholder="Your Message" />
                </div>

                <div>
                    <ListYourShop text={"Send Message"} />
                </div>

            </div>
            

        </form>
    </div>)
};

export default QuickForm;