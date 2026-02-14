"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  //console.log('session', session);

  if (session) {
    return (
      <div className="flex flex-row my-2 gap-2">
        <div className="w-16 h-16 overflow-hidden rounded-full">
          <img src={session?.user?.image || ""} />
        </div>

        <div className="flex flex-col">
          <p>Welcome {session?.user?.name || ""}</p>
          <button className="cursor-pointer bg-red-500/80 text-white font-semibold border border-1px border-teal-900 rounded-2xl px-2 h-10" onClick={() => signOut()}>
            Logout
          </button>
          </div>
      </div>
    );
  }

  return (
      <button className="cursor-pointer bg-teal-500/80 text-white font-semibold border border-1px border-teal-900 rounded-2xl px-2 h-10" onClick={() => signIn("google")}>
        Login with Google
      </button>
  );
}
