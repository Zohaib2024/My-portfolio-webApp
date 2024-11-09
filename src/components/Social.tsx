import React from 'react'
import Heading from './Heading'
import SocialCard from './SocialCard'

const SocialData =[
    {
        companyName:"Facebook",
        desc:" The Next.js framework has significantly improved our app’s performance with its server-side rendering. It made the application fast, responsive, and SEO-friendly.",
        img:"/alice.jpg",
        name:'Alice Johnson',
        designation: "Frontend Developer",
    },
    {
        companyName:"Google",
        desc:" Integrating Next.js with the backend APIs was smooth, especially with the built-in API routes.",
        img:"/john.avif",
        name:'John Smith',
        designation: "Backend Engineer",
    },
    {
        companyName:"Instagram",
        desc:" Working with Next.js was an enjoyable experience, particularly with the seamless routing and automatic code splitting.",
        img:"/emily.jpg",
        name:'Emily Davis',
        designation: "UX/UI Designer",
    }
]
const Social = () => {
  return (
    <section id='Social'>
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
    </section>
  )
}

export default Social