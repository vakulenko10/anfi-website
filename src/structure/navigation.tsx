
import Pages from '../components/pages/index';

const {Home, Login, Shop, Dashboard} = Pages;

export type NavItem = {
    path: string;
    name: string;
    isPrivate: boolean;
    isMenu: boolean;
    element: JSX.Element;
  };



export const nav : NavItem[]= [
    { path:     "/",         name: "Home",        element: <Home />,       isMenu: true,     isPrivate: false  },
    { path:     "/login",    name: "Login",       element: <Login />,      isMenu: false,    isPrivate: false  },
    { path:     "/dashboard",  name: "Dashboard",     element: <Dashboard />,    isMenu: true,     isPrivate: true  },
    // { path: "/signup", name: "Sign up", element: <Signup/>, isMenu: false, isPrivate: false},
    // { path:     "/orders",  name: "Orders",     element: <Orders />,    isMenu: true,     isPrivate: true  },
    { path:     "/shop",  name: "Shop",     element: <Shop />,    isMenu: true,     isPrivate: false  },
    // { path:     "/product/:id",  name: "Product",     element: <ProductDetails />,    isMenu: false,     isPrivate: false  },
]