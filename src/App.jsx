import { useEffect, useState } from "react";
import { Navbar, Footer, Hero, Login, Signup, Test, Home } from "./components";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:680px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  const { user, isAuthenticated, logout } = useAuth0();
  return (
    <>
      <div className="bg-secondary/40 ">
        <Navbar isMobile={isMobile} isAuthenticated={isAuthenticated} logout={logout}/>
        <div className="w-[80%] mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Home
                    isMobile={isMobile}
                    user={user}
                    isAuthenticated={isAuthenticated}
                  />
                ) : (
                  <Hero isMobile={isMobile} />
                )
              }
            />
            <Route path="/login" element={<Login isMobile={isMobile} />} />
            <Route path="/signup" element={<Signup isMobile={isMobile} />} />
            <Route path="/about" element={<Test />} />
            <Route path="/contact" element={<Test />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
