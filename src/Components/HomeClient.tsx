'use client';

import { useState } from "react";
import DiscoveredComboFeaturedShop from "./DiscoveredCombFeaturedShop";
import Offers from "./Offers";
import ReadyToGrow from "./ReadyToGrow";

const HomeClient = () =>{

    const [open, setOpen] = useState(false);

    return(<div id="Home client">
        <DiscoveredComboFeaturedShop open={open} setOpen={setOpen} />
        <Offers />
        <ReadyToGrow setOpen={setOpen} />
    </div>)
};

export default HomeClient;