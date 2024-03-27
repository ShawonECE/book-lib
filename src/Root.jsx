import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { createContext, useEffect, useState } from "react";


export const ReadContext = createContext();
export const WishContext = createContext();

function Root() {
  const [read, setRead] = useState([]);
  const [wish, setWish] = useState([]);

  const getLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  useEffect(() => {
    setRead(getLocalStorage("read"));
    setWish(getLocalStorage("wishlist"));
  }, []);
  
  return (
    <div className="container mx-auto px-4">
      <NavBar></NavBar>
      <WishContext.Provider value={[wish, setWish]}>
        <ReadContext.Provider value={[read, setRead]}>
          <Outlet></Outlet>
        </ReadContext.Provider>
      </WishContext.Provider>
    </div>
  )
}

export default Root;
