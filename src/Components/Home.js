import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

function Home() {


  const [text, settext] = useState("Enter the words whatever you want...");
  const [text1, settext1] = useState('');
  const [texterror, settexterror] = useState(false);
  //  const [error, seterror] = useState(false);

  function UpperCase() {

    console.log("Uppercase is clicked");
    var up = text.toUpperCase();
    settext1(up);
    console.log(up);

  }






  function LowerCase() {

    console.log("LowerCase is clicked");
    var up = text.toLowerCase();


    settext1(up);
    console.log(up);


  }

  function Capitalized() {

    console.log("Capitalized is clicked");
    const iter = text.split(" ").map((text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }).join(" ");

    console.log("up" + iter);
    settext1(iter);

  }

  function ReverseCase() {

    console.log("ReverseCase is clicked");

    var a = "";
    for (let i = text.length - 1; i >= 0; i--) {
      a = a + text.charAt(i);

    }

    settext1(a);
    console.log(a);


  }
  function ReverseWord() {

    console.log("ReverseWord is clicked");
    var str = text.split(" ");
    var s = " ";
    for (let i = str.length - 1; i >= 0; i--) {
      s = s + str[i];

    }

    settext1(s);
    console.log("ss" + s);


  }

  function Clear() {

    settext(" ");
    settext1(" ");

  }



  const download = (e) => {

    try {
      var tex = settext(e.target.value);
      console.log(tex);
      if (tex == undefined) {
        settexterror = "Enter Some Text";
        // seterror="Enter text";
        console.log("Error" + texterror);
        alert("Please Enter Text");
        return true;

      }


    } catch (texterror) {
      console.log(texterror);
    }




    const link = document.createElement("a");
    const content = document.querySelector("textarea").value;
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = "sample.txt";
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <>
      <div className="h-28 bg-gradient-to-r from-indigo-500 from-10% via-sky-500  bg-slate-600 infinite font-bold flex justify-center items-center text-rose-700">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Convert your text to UPPER CASE',
            100, // wait 1s before replacing "Mice" with "Hamsters"
            'Convert your text to lowercase',
            100,
            'Convert your text to Capitaized Case',
            100,
            'Convert your text to Text Reverse',
            100,
            'Convert your text to Word Reverse',
            100
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
      </div>

      <div className=" xl:min-h-[570px] lg:max-h-[440px] sm:grid sm:grid-rows-3 sm:items-center sm:justify-center md:grid md:grid-cols-2 md:items-center md:justify-center lg:grid lg:grid-cols-3 lg:justify-center lg:items-center bg-[url('./bgimage.jpg')] bg-cover" >

        <div className="  sm:h-64 sm:w-80 md:w-80 md:h-64  sm:mb-2  xl:ml-5 lg:mt-44">

          <textarea type="text" required placeholder="Convert your word in different format" id="text1" className="sm:h-60 sm:w-80 md:w-80 md:h-80 md:ml-10 sm:mt-3 sm:font-medium lg:ml-7 lg:mt-2 lg:h-80 lg:w-80 lg:border-2   xl:w-96 xl:h-96 xl:bg-indigo-600 sm:border-2 sm:border-white sm:text-white  xl:border-white xl:bg-opacity-0 xl:text-white lg:border-1 lg:text-white lg:border-white sm:bg-indigo-600 sm:bg-opacity-0" onChange={

            (e) => settext(e.target.value)
          } value={text} name="UpperCase"></textarea>
        </div>


        <div className=" sm:h-72 sm:w-80  lg:mt-56 sm:border-b-1 xl:bg-indigo-600 sm:bg-opacity-0 md:bg-opacity-0  lg:bg-opacity-0 xl:bg-opacity-0 sm:border-white sm:bg-white sm:grid sm:grid-cols-3 md:flex md:flex-col md:w-56 md:h-80  md:mt-11  md:ml-24 lg:ml-14 md:justify-center md:items-center  lg:h-96  xl:ml-24 ">

          <button type="submit" id="up" className="focus:outline-none text-black bg-white hover:bg-green-800  focus:ring-green-300 font-bold rounded-lg sm:text-sm sm:py-1 sm:me-1 sm:mb-1 sm:m-2 lg:border-1 lg:bg-green-700  sm:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 md:w-32 lg:border-black lg:border-2 sm:border-black sm:border-2" onClick={UpperCase}>UPPERCASE</button>
          <button type="button" id="lc" className="focus:outline-none text-black bg-white hover:bg-green-800  focus:ring-green-300 font-bold rounded-lg sm:text-sm sm:px-1 sm:py-1 sm:me-1  sm:mb-1 sm:m-2 lg:bg-red-500  sm:bg-red-700 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 md:w-32  lg:border-black lg:border-2 sm:border-black sm:border-2" onClick={LowerCase}>lowercase</button>
          <button type="button" id="cc" className="focus:outline-none text-black bg-white hover:bg-green-800  focus:ring-green-300 font-bold rounded-lg sm:text-sm sm:px-1 sm:py-1 sm:me-1  sm:mb-1 sm:m-2 lg:bg-purple-600 sm:bg-purple-700 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 md:w-32 lg:border-black lg:border-2 sm:border-black sm:border-2" onClick={Capitalized}>Capitalized Case</button>
          <button type="button" id="rt" className="focus:outline-none text-black bg-white hover:bg-green-800  focus:ring-green-300 font-bold rounded-lg sm:text-sm sm:px-1 sm:py-1 sm:me-1  sm:mb-1 sm:m-2 lg:bg-yellow-600  sm:bg-yellow-700 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 md:w-32 lg:border-black lg:border-2 sm:border-black sm:border-2" onClick={ReverseCase}>Reversed Case</button>
          <button type="button" id="rt" className="focus:outline-none text-black bg-white hover:bg-green-800  focus:ring-green-300 font-bold rounded-lg sm:text-sm sm:px-1 sm:py-1 sm:me-1  sm:mb-1 sm:m-2 lg:bg-blue-600  sm:bg-blue-700 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 md:w-32 lg:border-black lg:border-2 sm:border-black sm:border-2" onClick={ReverseWord}>ReVeRsEd WoRd</button>
          <button type="button" id="cl" className="focus:outline-none text-black bg-white hover:bg-green-800  focus:ring-green-300 font-bold rounded-lg sm:text-sm sm:px-1 sm:py-1 sm:me-1  sm:mb-1 sm:m-2 lg:bg-orange-600  sm:bg-orange-700 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800  md:w-32 lg:border-black lg:border-2 sm:border-black sm:border-2" onClick={Clear}>Clear Text</button>

          <button type="button" id="download" className="focus:outline-none text-black bg-white hover:bg-green-800  focus:ring-green-300 font-bold rounded-lg sm:text-sm sm:px-1 sm:py-1 sm:mb-1  sm:m-2 lg:bg-teal-600  sm:bg-teal-700 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 sm:w-24 md:w-32 lg:border-black lg:border-2 sm:border-black sm:border-2" onClick={download}>DOWNLOAD Text</button>
        </div>


        <div className="sm:h-64 sm:w-80 sm:mt-6 md:w-80 md:h-64 lg:mb-3 sm:mb-2 lg:mt-44" >
          <textarea type="text" required placeholder="Convert your word in different format" value={text1} id="text2" className=" sm:h-60 sm:w-80 md:w-80 md:h-80 md:ml-8 sm:font-medium md:mt-1 lg:ml-1 lg:h-80  lg:border-2  xl:w-96 xl:h-96  xl:border-white sm:border-2 lg:border-1 lg:text-white  lg:border-white sm:border-white sm:text-white xl:bg-indigo-600 xl:bg-opacity-0 xl:text-white sm:bg-indigo-600 sm:bg-opacity-0 "></textarea>
        </div>

        <div className="font-bold text-xl lg:mt-96  sm:text-purple-600 md:text-green-600 lg:text-teal-600  text-black xl:text-yellow-500  lg:grid lg:grid-rows-1 lg:absolute  lg:ml-12 ">

          Words - {text.split("").length} | Counting letters - {text.length}
        </div>


      </div>

    </>
  );
}

export default Home;