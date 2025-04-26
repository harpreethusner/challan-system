import React from "react";

import { Navbar } from "../../components/navbar";
import ChallanForm from "../../components/challanForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
        <ChallanForm />
      </div>
    </>
  );
}
