import React from 'react'
import Heading from "../../common/heading/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
         <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO PLACEMENT CELL' title='Best Online Education Expertise' />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
      </section>
    </>
  )
}
export default Hero