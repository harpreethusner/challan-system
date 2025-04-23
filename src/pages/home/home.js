import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const [userName, setUserName] = useState("");

  async function getUserDetail() {   
    let name = await localStorage.getItem("fullName");
    if (name?.length > 0) {
      setUserName(name);
    } else {
      toast.error("unable to fetch data");
    }
  }

  useEffect(() => {
    getUserDetail();
  }, []);

  return <div>home {userName}</div>;
}
