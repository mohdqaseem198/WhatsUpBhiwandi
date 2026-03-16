import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import FourNotFour from "@/src/Components/FourNotFour";
import Sidebar from "@/src/Components/Admin/Sidebar";
import Filters from "@/src/Components/Admin/Filters";
import StatsCards from "@/src/Components/Admin/StatsCards";
import AnalyticsGraph from "@/src/Components/Admin/AnalyticsGraph";
import AdminClient from "@/src/Components/Admin/AdminClient";

const Admin = async() => {

    const session = await getServerSession(authOptions);
    console.log('from admin' ,session);
    

    return session ? (

          <AdminClient session={session} />

    )
    :
    <FourNotFour />
};

export default Admin;