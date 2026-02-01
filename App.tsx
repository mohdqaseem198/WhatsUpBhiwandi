import Discover from "./src/Components/Discover";
import FeaturedShops from "./src/Components/FeaturedShops";
import Navbar from "./src/Components/Navbar";

const App = () => {
    return(<div id="app">
        <Navbar />
        <main>
            <Discover />
            <FeaturedShops />
        </main>
    </div>)
};

export default App;