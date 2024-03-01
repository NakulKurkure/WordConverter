


function Sign() {

    const colorPicker = document.getElementById("nativeColorPicker1");
    const changeColorBtn = document.getElementById("burronNativeColor");
    
    changeColorBtn.style.backgroundColor = colorPicker.value;
    colorPicker.addEventListener("input", () => {
      changeColorBtn.style.backgroundColor = colorPicker.value;
    });


    return (
<div className="h-96 ">
<div className="flex justify-center space-x-2">
  <input id="nativeColorPicker1" type="color" value="#6590D5" />
  <button
    id="burronNativeColor"
    type="button"
    className="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
   Color
  </button>
</div>

</div>
   
     
    );
  }
  
  export default Sign;