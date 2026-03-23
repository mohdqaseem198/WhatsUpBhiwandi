'use client';
import { useState } from "react";
import Discover from "./Discover";
import FeaturedShops from "./FeaturedShops";

const DiscoveredComboFeaturedShop = ({open, setOpen}) => {

     const [refreshKey, setRefreshKey] = useState(0) ;
    
        const handleRefresh = () => {
            setRefreshKey((prev) => prev + 1);
        }

    return(<div>
            <Discover open={open} setOpen={setOpen} onSuccess={handleRefresh} />
            <FeaturedShops refreshKey={refreshKey} />
    </div>)
};

export default DiscoveredComboFeaturedShop;