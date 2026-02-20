'use client';
import { useState } from "react";
import Discover from "./Discover";
import FeaturedShops from "./FeaturedShops";

const DiscoveredComboFeaturedShop = () => {

     const [refreshKey, setRefreshKey] = useState(0) ;
    
        const handleRefresh = () => {
            setRefreshKey((prev) => prev + 1);
        }

    return(<div>
            <Discover onSuccess={handleRefresh} />
            <FeaturedShops refreshKey={refreshKey} />
    </div>)
};

export default DiscoveredComboFeaturedShop;