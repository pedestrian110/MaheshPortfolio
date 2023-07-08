import React from "react";
import HeroImg from "../assets/picture/myimg.jpg";//this is the way to import image from other folder
import {AiOutlineArrowRight} from "react-icons/ai";// "ai" is first two letters of AiOutlineArrowRight
const Home = () => {
  return (
    <div class="home" className="py-40 h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-centre justify-centre h-full px-4 md:flex-row">
           <div className="flex flex-col justify-centre h-full">
              <h2 className="text-4xl sm:text-7xl font-bold text-white">I am Full stack developer</h2>
              <p className="text-gray-500 py-4 max-w-md">I am doing stuffs releted to cp and ai 
                and also open source ,
                understanding how tech stack are use in tech company
                I am doing stuffs releted to cp and ai 
                and also open source ,
                understanding how tech stack are use in tech company</p>
                <div>
                  <button className="group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r form-cyan-500 to-blue-500 cursor-pointer">
                    Portfolio 
                    <span className="group-hover:rotate-90 duration-300">
                      <AiOutlineArrowRight size={20} classNam="ml-1"/>
                    </span>
                  </button>
                </div>
           </div>
           <div>
              <img src={HeroImg} alt="my profile"
              className="rounded-2xl mx-auto w-1/2 md:w-full "/>
           </div>
      </div>
      
    </div>
  )
}

export default Home
