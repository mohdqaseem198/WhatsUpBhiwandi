import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import FourNotFour from "@/src/Components/FourNotFour";

const Admin = async() => {

    const session = await getServerSession(authOptions);
    console.log('from admin' ,session);
    return session ? (<div>
        Admin
    </div>)
    :
    <FourNotFour />
};

export default Admin;