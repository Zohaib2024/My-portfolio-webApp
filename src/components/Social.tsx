import React from 'react'
import Heading from './Heading'
import SocialCard from './SocialCard'

const SocialData =[
    {
        companyName:"Facebook",
        desc:" This is good This is good This is good This is good This is good This is good This is good This is good",
        img:"/todoapp.jpg",
        name:'Mark zukerberg',
        designation: "Facebook",
    },
    {
        companyName:"Google",
        desc:" This is good This is good This is good This is good This is good This is good This is good This is good",
        img:"/todoapp.jpg",
        name:'Mark zukerberg',
        designation: "Facebook",
    },
    {
        companyName:"Instagram",
        desc:" This is good This is good This is good This is good This is good This is good This is good This is good",
        img:"/todoapp.jpg",
        name:'Mark zukerberg',
        designation: "Facebook",
    }
]
const Social = () => {
  return (
    <div className='container pt-32'>
        <Heading title ="Social" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mr-10 ml-10">
      {SocialData.map((item ,index) =>  ( <SocialCard 
            key = {index} 
            companyName = {item.companyName}
            desc = {item.desc} 
            img = {item.img}
            name={item.name} 
            designation={item.designation}
            
            />) )}
      </div>
    </div>
  )
}

export default Social