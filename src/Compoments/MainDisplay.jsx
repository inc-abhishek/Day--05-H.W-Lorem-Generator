import React, { useState } from "react";
import Data from "./Data.json";

function MainDisplay() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState("0");
  const countValue = (e)=>{
    if(e.target.value >= 0){
      setCount(e.target.value);
    }
  }

  const showData = (e) =>{
    e.preventDefault();
    if(count <= 0){
      alert(" Ayyo ! you know that you wrote negative input 😵");
    }
    else if(count > 10){
      alert(" Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀")
    }
    
    let filt = Data.filter((e , index) =>{
      return count > index; 
    })
    setText(filt);
  }
  return (
    <div className="flex justify-center items-center mt-24 flex-col
    flex-wrap h-full">
      <div className=" mx-auto w-full  mb-14 p-4">
        <h1 className="text-center text-4xl font-semibold uppercase text-[#94360b]">Chalo Paragraph Generate Karein !</h1>
        <form className="text-center">
          <label htmlFor="number" className="text-3xl">Paragraphs : </label>
          <input className="text-xl font-bold w-14 px-2 py-1 rounded-md " type="number"  id="number" onChange={countValue} value={count} />
          <button
            className="ml-4 mt-5 bg-[#f5873d] px-5  py-2 text-xl rounded-lg font-semibold text-white  "
            type="submit" onClick={showData}
          >
            Generate
          </button>
        </form>
      </div>
      <div className="w-6/12  mx-auto">
        <div>
          {Data.length ? (
            <div className="flex flex-wrap justify-center items-center gap-8 text-center text-[#99430a] mb-10">
              {text.map((e,indx) => {
                return <p  key={indx}>{e.disc}</p>;
              })}
            </div>
          ) : (
            <h2>No Data Found</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainDisplay;
