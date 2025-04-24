import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Navbar } from "../../components/navbar";

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

  return (
    <>
      <Navbar />
      <div>home dashobard harpret {userName}</div>
      <div>home panel {userName}</div>
    </>
  );
}
