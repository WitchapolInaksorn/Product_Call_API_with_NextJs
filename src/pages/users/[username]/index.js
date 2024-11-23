import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
// Dynamically import the component
import Head from "next/head";
const Mycomponent = dynamic(() => import("@/components/component"));

export default function User() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count == 6) {
      setCount(0);
    }
  }, [count]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Arrange items vertically
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
    >
      <Head>
        <title> User Page</title>
      </Head>

      {/* Hello, Next.js */}
      <div style={{fontWeight : "700"}}>
        <Mycomponent title="Hello, Next.js" />
      </div>
      <br/>

      {/* Count Section */}
      <div style={{ fontWeight: "700" }} className="mb-3">
        <div>Count: {count}</div>
      </div>
      
      {/* Increase&Decrease Button */}
      <div className="flex space-x-10 mb-4">
        <button className="bg-purple-600 hover:bg-fuchsia-500
                           text-white font-bold py-[10px] px-[10px] rounded" 
                           onClick={() => setCount(count + 1)}>Increase</button>
        <button className="bg-cyan-700 hover:bg-cyan-600
                           text-white font-bold py-[10px] px-[10px] rounded" 
                           onClick={() => setCount(count - 1)}>Decrease</button>
      </div>

      {/* Click Me Button */}
      <div>
        <button className="bg-teal-600 hover:bg-teal-500
        text-white font-bold py-[10px] px-[10px] rounded">Click Me</button>
      </div>

    </div>
  );
}
