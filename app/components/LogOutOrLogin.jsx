import React from "react";
import Link from "next/link";
import { createClient } from "../util/supabase/server";
import LogoutButton from "./LogoutButton";

const LogOutOrLogin = async () => {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  console.log("====================================");
  console.log(data);
  console.log("====================================");

  if (data.user) {
    return (
      <div>
        You are logged in as {data.user.email}
        <LogoutButton />
      </div>
    );
  }

  return (
    <div>
      <Link className="hover:text-blue-500" href="/login">
        Login
      </Link>
    </div>
  );
};

export default LogOutOrLogin;
