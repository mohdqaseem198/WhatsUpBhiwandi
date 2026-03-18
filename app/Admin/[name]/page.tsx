'use server';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import FourNotFour from "@/src/Components/FourNotFour";
import Sidebar from "@/src/Components/Admin/Sidebar";
import Filters from "@/src/Components/Admin/Filters";
import StatsCards from "@/src/Components/Admin/StatsCards";
import AnalyticsGraph from "@/src/Components/Admin/AnalyticsGraph";
import AdminClient from "@/src/Components/Admin/AdminClient";
import axios from "axios";
import ShopAnalytics from "../../../Schema/ShopAnalytics";
import connectDB from "@/lib/mongoose";

const Admin = async() => {

    const session = await getServerSession(authOptions);

    await connectDB();
    // const data = await ShopAnalytics.find();
    // const cleanedData = JSON.parse(JSON.stringify(data));

    const dataWithShop = await ShopAnalytics.find()
        .populate("shopId", "name"); // only fetch name

    const cleanedData2 = JSON.parse(JSON.stringify(dataWithShop));

    console.log('from get data2' , cleanedData2);

    return session ? (
          <AdminClient session={session} data = {cleanedData2} />
    )
    :
    <FourNotFour />
};

export default Admin;