'use client';
import { useSession, signIn, signOut } from "next-auth/react";



const RegisterButtonGrow = ({props, setOpen}) => {

    const {data : session} = useSession();

    const {name = "", className = ""}  = props || {};

    return (<div>
        <button onClick={() => session ? setOpen(true) : signIn("google")} className={className}>
            {name}
        </button>
    </div>)
};

export default RegisterButtonGrow;