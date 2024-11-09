
import React from 'react'
import Heading from './Heading'

import Card from './Card'


const Projects = () => {
    const data = [
{
    id : 0,
    title : " Todo app",
    Desc : "Easily manage your personal tasks, family projects, and teams work all in one place.",
    img : "/todoapp.jpg",
    location:" https://github.com/Zohaib2024/Todo-App.git"
  


},
{
    id : 1,
    title : " Calculator app",
    Desc : "Online calculator for quick calculations, along with a large collection of calculators on math, finance, fitness, and more, each with in-depth information.",
    img : "/calculator.jpg",
    location:""


},
{
    id : 2,
    title : " Resume Builder app",
    Desc : "Create a professional online resume and cover letter in minutes. Create professional resumes and cover letters without hassle.",
    img : "/resume_builder.png",
    location:" https://github.com/Zohaib2024/Resume-Builder.git"


},
{
    id : 3,
    title : "Expense tracker app",
    Desc : "Expense tracking means recording all your expenditures so you have a clear and detailed understanding of your budget.",
    img : "/Expense_Tracker.jpeg",
    location:"https://github.com/Zohaib2024/ExpenseTracker.git"

},
{
    id : 4,
    title : "100Days of Coding",
    Desc : "Join the 100 Days of Code challenge. With dedicated daily action for just 100 days, you can make significant progress and develop impressive skills.",
    img : "/100Days.jpeg",
    location:"https://github.com/Zohaib2024/100-Days-Coding-Challange.git"


},
{
    id : 5,
    title : " Governor web Clone",
    Desc : "This is my first Next Js app. Clone of original governor sindh it course portal website you can check it out",
    img : "/image 2.jpg",
    location:""


}
]
  return (
    <div className='container pt-32'>
         <Heading title='My Projects' />
         <div className='grid grid-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:gap-x-32 lg:grid-cols-3 place-items-center '>

            {data.map((el) =>  ( <Card 
            key = {el.id} 
            title = {el.title}
            Desc = {el.Desc} 
            img = {el.img} 
            location={el.location}
            />) )}
           
         </div>
    </div>
   
  )
}

export default Projects