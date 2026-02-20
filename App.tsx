
import Discover from "./src/Components/Discover";
import FeaturedShops from "./src/Components/FeaturedShops";
import Footer from "./src/Components/Footer";
import GetInTouch from "./src/Components/GetInTouch";
import LoginButton from "./src/Components/LoginButton";
import Navbar from "./src/Components/Navbar";
import Offers from "./src/Components/Offers";
import QuickForm from "./src/Components/QuickForm";
import ReadyToGrow from "./src/Components/ReadyToGrow";
import DiscoveredComboFeaturedShop from "./src/Components/DiscoveredCombFeaturedShop";

const App = () => {

    return(<div id="app">

        <div className="flex flex-row justify-between items-center">
            <Navbar />
            <LoginButton />
        </div>

        <main>
            <DiscoveredComboFeaturedShop />
            <Offers />
            <ReadyToGrow />

            <div className="lg:grid lg:grid-cols-2 lg:my-14">
                <GetInTouch />
                <QuickForm />
            </div>

            <Footer />

        </main>
    </div>)
};

export default App;