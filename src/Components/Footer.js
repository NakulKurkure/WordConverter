import { Link } from "react-router-dom";

{/* <span className="words"> 
      Words {text.split(" ").length} and counting letters{text.length}  </span> */}
      function Footer() {
        return (
          <div className="min-h-[120px] bg-blue-500 flex flex-col items-center justify-center" >

          <div className=" text-black mt-20 ml-20 font-thin"> 
          Copyright ©2024 Case Converter | Concept by Nakul K | Address : Nashik,Maharashtra | <Link to="/privacypolicy"><u className="text-blue-800">privacy policy</u> </Link> 
          </div>
         
         
         </div>
         
        );
      }
      export default Footer;