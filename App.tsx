import Discover from "./src/Components/Discover";
import FeaturedShops from "./src/Components/FeaturedShops";
import GetInTouch from "./src/Components/GetInTouch";
import Navbar from "./src/Components/Navbar";
import Offers from "./src/Components/Offers";
import QuickForm from "./src/Components/QuickForm";
import ReadyToGrow from "./src/Components/ReadyToGrow";

const App = () => {
    return(<div id="app">
        <Navbar />
        <main>
            <Discover />
            <FeaturedShops />
            <Offers />
            <ReadyToGrow />

            <div>
                <GetInTouch />
                <QuickForm />
            </div>

        </main>
    </div>)
};

export default App;