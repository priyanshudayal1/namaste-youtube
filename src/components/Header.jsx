import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsSidebarOpen } from "../utils/uiSlice";
import { YT_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);
  const searchCache=useSelector(store=>store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSearchSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestions(), 200
      }
    });
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YT_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }));
  };
  const toggleSideBar = () => {
    dispatch(toggleIsSidebarOpen());
  };
  return (
    <div className="grid grid-flow-col px-2 shadow-lg">
      <div className="col-span-1 flex items-center">
        <img
          onClick={toggleSideBar}
          className="h-10 hover:cursor-pointer"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
          alt="hambuger_menu_icon"
        />
        <img
          className="h-16 bg-blend-lighten"
          src="https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg"
          alt="youtube_logo"
        />
      </div>
      <div className="text-center py-3 col-span-10 px-10 place-items-center">
        <div>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border h-8 w-1/3 border-gray rounded-l-full px-4"
            placeholder="Search"
            type="text"
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
          />
          <button className="rounded-r-full relative h-8 border px-5 border-gray text-gray-600">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        {showSuggestions && (
          <div className="bg-white fixed py-2 mx-10 w-[24.5%] text-start rounded-lg z-20 shadow-lg ml-[25rem]">
            <ul className="">
              {searchSuggestions?.map((item) => (
                <li className="px-4 py-1 hover:bg-gray-200" key={item}>
                  <i className="fa-solid fa-magnifying-glass text-gray-500"></i>{" "}
                  &nbsp; {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex gap-2 items-center justify-center col-span-1">
        <img
          className="h-7"
          src="https://cdn-icons-png.freepik.com/256/1077/1077114.png"
          height={20}
          alt="user"
        />
      </div>
    </div>
  );
};
