import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#3d23b4e7] flex justify-between w-full p-3 flex-wrap items-center ">
      <div className="logo font-bold text-purple-400 text-3xl hover:text-white cursor-pointer">
        <span className="text-sky-400 font-bold ">&lt;</span>
        <span className="text-sky-400 ">Pass</span>
        <span className="text-white">Pro</span>

      <span className="text-sky-400 font-bold">/&gt; </span>
      </div>
      <ul className="flex space-x-3 justify-between text-sky-400 ">
        <li className="hover:text-white font-bold cursor-pointer">
          <a href="">Home</a>
        </li>
        <li className="hover:text-white font-bold cursor-pointer">
          <a href="">About</a>
        </li>
        <li className="hover:text-white font-bold cursor-pointer">
          <a href="">Contact</a>
        </li>
        <li className="hover:text-white font-bold cursor-pointer">
          <a href="">Sign</a>
        </li>
      </ul>
      <div className="bg-sky-400 hover:bg-sky-500 rounded-full p-1">
        <button className="flex gap-1 font-bold text-white  items-center"><img className="w-8 invert " src="/github_PNG80.png" alt="github logo" />Github</button>
      </div>
    </nav>
  );
};

export default Navbar;
