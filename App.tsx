import Discover from "./src/Components/Discover";
import FeaturedShops from "./src/Components/FeaturedShops";
import Navbar from "./src/Components/Navbar";
import Offers from "./src/Components/Offers";

const App = () => {
    return(<div id="app">
        <Navbar />
        <main>
            <Discover />
            <FeaturedShops />
            <Offers />
        </main>
    </div>)
};

export default App;