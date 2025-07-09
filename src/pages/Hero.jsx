import React from 'react'

const Hero = () => {
  return (
    <div className='p-4 px-6 w-full mx-auto  flex flex-col justify-center items-center'>
  <h2 className='text-xl mt-20 mb-0 leading-none'>👋, my name is Sahil and I am a freelancer</h2>

  <h1 className="mb-0 leading-[.8] text-center px-2 text-[10vw] font-bold tracking-tighter font-['Placard next cond bold']"> Web Developer <br />  <span
    className="text-9xl tracking-tighter text-transparent font-['Placard next cond bold'] font-bold leading-none"
    style={{ WebkitTextStroke: '2px black' }}
  >
    & Building Modern Web Experiences
  </span></h1>

  
  {/* <h1 className="mb-1 px-2 text-[10vw] font-bold tracking-tighter font-['Placard next cond bold'] leading-tight">
    Web Developer
  </h1>
  
  <h1
    className="text-9xl tracking-tighter text-transparent font-['Placard next cond bold'] font-bold text-center leading-tight"
    style={{ WebkitTextStroke: '2px black' }}
  >
    & Building Modern Web Experiences
  </h1> */}
</div>

  )
}

export default Hero