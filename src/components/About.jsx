import React from 'react'

const About = () => {
  return (
    <div
        name="about"
        className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
        <div className='max-w-screen-lg p-4 mx-auto flexx flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quam aspernatur nam esse enim doloremque aliquam, dolore minus quasi dicta omnis animi amet aut accusantium fugit magnam ipsam impedit natus.
            </p>

            <br/>

            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, iure suscipit? Delectus earum magni rerum quia, a aut suscipit illo corporis vel id. Blanditiis, pariatur mollitia non quos voluptates itaque?
            </p>
        </div>

      
    </div>
  )
}

export default About
