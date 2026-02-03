import Discover from "./src/Components/Discover";
import FeaturedShops from "./src/Components/FeaturedShops";
import Navbar from "./src/Components/Navbar";
import Offers from "./src/Components/Offers";
import ReadyToGrow from "./src/Components/ReadyToGrow";

const App = () => {
    return(<div id="app">
        <Navbar />
        <main>
            <Discover />
            <FeaturedShops />
            <Offers />
            <ReadyToGrow />
        </main>
    </div>)
};

export default App;