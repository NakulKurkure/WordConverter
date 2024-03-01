import { Link } from "react-router-dom";
import Home from "./Home";



function Nav() {
    return (
      
     <nav >

        <ul className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500  bg-slate-600 infinite font-bold  flex justify-center h-16 items-center">
        {/* <img src=".src/convertcaseImg.jpg" className="w-24 h-24"/> */}

            <li><Link className=" bg-green-700 p-5 m-3 text-black hover:bg-green-800 focus:outline-none focus:ring-4  font-bold rounded-full text-sm px-5 py-2.5 text-center  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800 " to="/home" element={<Home/>}> Home</Link></li>
            <li><Link className=" bg-green-700 p-5 m-3 text-black  hover:bg-green-800 focus:outline-none focus:ring-4  font-bold rounded-full text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800" to="/about"> About</Link></li>
            {/* <li><Link className=" bg-green-700 p-5 m-3 text-black hover:bg-green-800 focus:outline-none focus:ring-4  font-bold rounded-full text-sm px-5 py-2.5 text-center  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800" to="/sign"> Sign</Link></li> */}
            {/* <li><Link className=" bg-green-700 p-5 m-3 text-black hover:bg-green-800 focus:outline-none focus:ring-4 font-bold rounded-full text-sm px-5 py-2.5 text-center  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800" to="/contact"> Contact</Link></li> */}
 
       
        
        </ul>
       
     </nav>
      
    );
  }
  
  export default Nav;