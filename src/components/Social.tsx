import React from 'react'
import Heading from './Heading'
import SocialCard from './SocialCard'

const SocialData =[
    {
        companyName:"Facebook",
        desc:" The layout is responsive and works well on mobile, but there are some minor styling issues on smaller screens. Could we adjust the padding and font sizes to improve readability on mobile?",
        img:"/todoapp.jpg",
        name:'Liam',
        designation: "UX Designer",
    },
    {
        companyName:"Google",
        desc:" The page load times are impressive! Next.js is definitely helping with performance, but maybe we could optimize images a bit more for an even faster experience.",
        name:'Emma',
        designation: "Front-End Developer",
    },
    {
        companyName:"Instagram",
        desc:" The routing feels smooth, and I love the use of server-side rendering for dynamic content. Adding some animations between page transitions might make the experience feel even more seamless!",
        img:"/todoapp.jpg",
        name:'Noah',
        designation: "QA Engineer",
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
