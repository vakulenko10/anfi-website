import { Link, Route, Routes, useLocation } from "react-router-dom";
// import { AuthData } from "../../auth/AuthWrapper";
import { nav, NavItem } from "./navigation";
import Container from "../components/myComponents/Container";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserState } from "@/store/slices/AuthSlice";
// import { motion, useMotionValue, useTransform } from "framer-motion";
// Component to render routes based on authentication
export const RenderRoutes = () => {
    // const { user } = AuthData();

    const user = useSelector((state:UserState)=>state.user);

    return (
        <Routes>
            {nav.map((r, i) => {
                if (r.isPrivate && user.isAuthenticated) {
                    return <Route key={i} path={r.path} element={r.element} />;
                } else if (!r.isPrivate) {
                    return <Route key={i} path={r.path} element={r.element} />;
                }
                return null; // Avoid returning `false`
            })}
        </Routes>
    );
};


type RenderHeaderProps = {
  nav: NavItem[];
  user: any; // You can type this more precisely depending on your state structure
};

const RenderHeader: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(true);
  const handleHeaderItemClick = () => {
    document.body.style.overflow = 'unset';
    document.body.classList.remove("no-scroll");
    setIsMenuOpen(false);
  };
  const user = useSelector((state:UserState)=> state.user)

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY < lastScrollY) {
            setIsVisible(true); // Show header when scrolling up
        } else if (currentScrollY > 100) {
            setIsVisible(false); // Hide header when scrolling down
        }
        lastScrollY = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleMenuOpen = () => {
        setIsMenuOpen((prevState) => {
            const isOpen = !prevState;
            
            if (isOpen) {
                document.body.classList.add("no-scroll");
            } else {
                document.body.classList.remove("no-scroll");
            }
            
            return isOpen;
        });
    };

    useEffect(() => {
        return () => document.body.classList.remove("no-scroll");
    }, []);
  const HeaderItem = ({ r }: { r: NavItem }) => (
    <Link
      to={r.path}
      className="block py-2 pr-4 pl-3 text-text1 rounded md:bg-transparent md:p-0 md:hover:bg-transparent"
      onClick={handleHeaderItemClick}
    >
      {r.name}
    </Link>
  );

  return (
    <header  className={`${isVisible?'fixed':'hidden'}  top-0 left-0 right-0 z-50 bg-text3 shadow-md`}>
       <Container>
                <div className="flex justify-between items-center mx-auto max-w-screen-lg ">
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-semibold font-serif text-text1">
                            anfi handmade
                        </Link>
                    </div>
                    <nav className="hidden md:flex md:items-center md:gap-8">
                        {nav.map((r, i) => {
                            if (!r.isPrivate && r.isMenu) {
                                return <HeaderItem key={i} r={r} />;
                            } else if (user.isAuthenticated && r.isMenu) {
                                return <HeaderItem key={i} r={r} />;
                            }
                            return null;
                        })}
                        {user.isAuthenticated ? (
                            <button
                                // onClick={logout}
                                className="text-text1 hover:text-red-600 dark:hover:text-red-500"
                            >
                                Log out
                            </button>
                        ) : (
                            <Link to="login" className="text-text1 hover:underline">
                                Log in
                            </Link>
                        )}
                    </nav>
                    <button
                        className={`md:hidden p-2 text-text1 rounded-lg focus:outline-none ${
                            isMenuOpen ? "fixed top-4 right-4 z-50" : ""
                        } md:hover:bg-text2 transition`}
                        onClick={handleMenuOpen}
                    >
                        <span className="sr-only">Toggle menu</span>
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden absolute top-0 left-0 right-0 z-40 bg-text3 h-screen shadow-md py-4">
                        <nav className="flex flex-col items-start">
                            {nav.map((r, i) => {
                                if (!r.isPrivate && r.isMenu) {
                                    return <HeaderItem key={i} r={r} />;
                                } else if (user.isAuthenticated && r.isMenu) {
                                    return <HeaderItem key={i} r={r} />;
                                }
                                return null;
                            })}
                            {user.isAuthenticated ? (
                                <button
                                    // onClick={handleLogout}
                                    className="block w-full text-left py-2 px-3 text-text1"
                                >
                                    Log out
                                </button>
                            ) : (
                                <Link
                                    to="login"
                                    className="block w-full text-left py-2 px-3 text-text1"
                                    onClick={handleHeaderItemClick}
                                >
                                    Log in
                                </Link>
                            )}
                        </nav>
                    </div>
                )}
            </Container>
    </header>
  );
};

export default RenderHeader;
