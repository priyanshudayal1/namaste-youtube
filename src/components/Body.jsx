import React from "react";
import { Sidebar } from "./Sidebar";
import { MainContainer } from "./MainContainer";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export const Body = () => {
  const ui=useSelector(store=>store.ui);
  return (
    <div className="flex sticky">
    {
      ui.isSidebarOpen && <Sidebar />
    }
      <Outlet/>
    </div>
  );
};
