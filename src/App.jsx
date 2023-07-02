import { useEffect, useState } from "react";
import { Navbar, Footer, Hero } from "./components";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{
    const mediaQuery = window.matchMedia("(max-width:680px)")
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (e)=>{
      setIsMobile(e.matches);
    }
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return()=>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
  return (
    <>
      <div className="bg-secondary/40">
          <Navbar isMobile={isMobile}/>
        <div className="w-[80%] mx-auto">
          <Hero isMobile={isMobile}/>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
