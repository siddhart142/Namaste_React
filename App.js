import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Body from "./src/components/Body"
import About from "./src/components/About"
import Contact from "./src/components/Contact"
import Error  from "./src/components/Error"
import Cart from "./src/components/Cart"
import Restaurant from "./src/components/Restaurant"
import { lazy, Suspense } from "react"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./src/utilis/appStore"
const App = () => (
    <div className="app">
        {/* Header
            Body
            Footer */}
       
        {/*if path = "/" 
            <Body />*/}
        {/*if path = "/About" 
        <About />*/}
        {/*if path = "/Contact" 
        <Contact />*/}
        <Provider store={store}>
            <Header/>  
            <Outlet/>  
        </Provider>
        {/* outlet will be replaced by children */}
    </div>
)

// const appRouter = createBrowserRouter([
//     {
//         path : "/",
//         element : <App />,
//         errorElement : <Error />
//     },
//     {
//         path : "/About",
//         element: <About />
//     },
//     {
//         path : "/Contact",
//         element: <Contact />
//     },
// ]);
//children component
const Grocery = lazy(()=> import("./src/components/Grocery"));
const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [
            {
                path: "/",
                element : <Body />
            },
            {
                path : "/About",
                element: <About />
            },
            {
                path : "/Contact",
                element: <Contact />
            },
            {
                path : "/Grocery",
                element : <Suspense fallback = {
                    <h1>hello</h1>
                }>
                <Grocery />
                </Suspense>
            },
            {
                path : "/Restaurants/:resId",
                element : <Restaurant />
            },
            {
                path : "/Cart",
                element: <Cart />
            },
           
        ],
        errorElement : <Error />
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />) 