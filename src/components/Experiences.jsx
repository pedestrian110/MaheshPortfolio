import React from 'react'
import graphql from "../assets/other/tools/graphql.png";
import css from "../assets/other/tools/css.png";
import github from "../assets/other/tools/github.png";
import javascript from "../assets/other/tools/javascript.png";
import nextjs from "../assets/other/tools/nextjs.png";
import node from "../assets/other/tools/node.png";
import react from "../assets/other/tools/react.png";
import tailwind from "../assets/other/tools/tailwind.png";
const Experiences = () => {
    const techs=[
        {
            id:1,
            src:graphql,
            title:"GRAPHQL",
            style:"shadow-orange-500"
        },
        {
            id:2,
            src:css,
            title:"CSS",
            style:"shadow-orange-500"
        },
        {
            id:3,
            src:github,
            title:"GITHUB",
            style:"shadow-orange-500"
        },
        {
            id:4,
            src:javascript,
            title:"JAVASCRIPT",
            style:"shadow-orange-500"
        },
        {
            id:5,
            src:nextjs,
            title:"NEXTJS",
            style:"shadow-orange-500"
        },
        {
            id:6,
            src:node,
            title:"NODE",
            style:"shadow-orange-500"
        },
        {
            id:7,
            src:react,
            title:"REACT",
            style:"shadow-orange-500"
        },
        {
            id:8,
            src:tailwind,
            title:"TAILWIND",
            style:"shadow-orange-500"
        },
    ]
  return (
    <div name="experience" className="  bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-centre w-full h-full text-white">
        <div className="pt-8">
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experince</p>
            <p className="py-6">This are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {
                techs.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration:500  rounded-lg ${style}`}>
                    <img src={src} alt="" className="w-20 mx-auto" />
                    <p className="mt-0">{title}</p>
                    </div>
                ))
            }
                
        </div>
      </div>
    </div>
  )
}

export default Experiences
