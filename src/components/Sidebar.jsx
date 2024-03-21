import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="px-5 p-5 shadow-lg col-span-1 h-screen sticky">
      <ul className="text-xl">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-semibold pt-5 text-xl">You</h1>
      <ul className="text-xl">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-semibold pt-5 text-xl">Watch Later</h1>
      <ul className="text-xl">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};
