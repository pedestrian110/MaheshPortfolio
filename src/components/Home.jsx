import React from "react";
import HeroImg from "../assets/picture/my_img.jpg";//this is the way to import image from other folder
import {AiOutlineArrowRight} from "react-icons/ai";// "ai" is first two letters of AiOutlineArrowRight
const Home = () => {
  return (
    <div class="home" className=" h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-centre justify-centre h-full px-4 md:flex-row">
           <div className="py-20 flex flex-col justify-centre h-full">
              <h2 className="py-20 text-4xl sm:text-7xl font-bold text-white">I am Full stack developer</h2>
              <p className="text-gray-500 py-2 max-w-md">I am doing stuffs releted to cp and ai 
                and also open source ,
                understanding how tech stack are use in tech company
                I am doing stuffs releted to cp and ai 
                and also open source ,
                understanding how tech stack are use in tech company</p>
                <div>
                  <button className="text-white  px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    Portfolio 
                    <span className="group-hover:rotate-90 duration-300">
                      <AiOutlineArrowRight size={20} classNam="ml-1"/>
                    </span>
                  </button>
                </div>
           </div>
           <div className="py-20">
              <img src={HeroImg} alt="my profile"
              className="py-20 rounded-2xl mx-auto w-1/2 md:w-full "/>
           </div>
      </div>
      
    </div>
  )
}

export default Home
