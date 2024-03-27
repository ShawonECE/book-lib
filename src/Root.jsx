import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { createContext, useState } from "react";


export const ReadContext = createContext();
export const WishContext = createContext();

function Root() {
  const [read, setRead] = useState([]);
  const [wish, setWish] = useState([]);
  
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
