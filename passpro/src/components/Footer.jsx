import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 w-full text-white p-4 text-center fixed bottom-0">
      <div>
        <div className="logo font-bold text-purple-400 text-3xl hover:text-white cursor-pointer">
          <span className="text-sky-400 font-bold">&lt;</span>
          <span className="text-sky-400 ">Pass</span>
          <span className="text-white">Pro</span>

          <span className="text-sky-400 font-bold">/&gt; </span>
        </div>
      </div>

      <div className="text-white flex justify-center gap-1">
        <span> Created With</span>
        <span>
          <img className="w-6" src="/heart.png" alt="heart png" />
        </span>{" "}
        <span> By Harvinder</span>
      </div>
    </div>
  );
};

export default Footer;
