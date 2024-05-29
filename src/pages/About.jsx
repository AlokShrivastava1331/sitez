import React from "react"
import hero from "../components/assets/images/hero.png"
import imgs from "../components/assets/images/join1.png"
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { data } from "../components/assets/data/dummydata"

export const About = () => {
  return (
    <>
      <section className='about py-16'>
        <div className='container'>
          <div className='heading text-center py-12'>
            <h1 className='text-3xl font-semibold text-black'>Admin Career Academy is dedicated to helping students gain admission to top engineering colleges.</h1>
            <span className='text-sm mt-2 block'>you don't have to struggle alone, you've got our assistance and help.</span>
          </div>
          <div className='grid grid-cols-4 gap-5 mt-5 md:grid-cols-2'>
            <AboutCard color='bg-[#2D69F0]' icon={<IoSchoolSharp size={50} />} title='300+ students counselled'/>
            <AboutCard color='bg-[#DD246E]' icon={<FaSchool size={50} />} title='300+ College Admissions'/>
            <AboutCard color='bg-[#8007E6]' icon={<FaMoneyBill1Wave size={50} />} title='50+ Scholarships Secured'/>
            <AboutCard color='bg-[#0CAE74]' icon={<IoCall size={50} />} title='300+ Personalized Counseling'/>
          </div>
        </div>
      </section>
      <AboutContent />
    </>
  )
}
export const AboutCard = (props) => {
  return (
    <div className={`box shadow-md p-5 py-8 rounded-md text-white ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300 `}>
      <div className='icon'>{props.icon}</div>
      <div className='text mt-5'>
        <h4 className='text-lg font-semibold my-3'>{props.title}</h4>
        <p className='text-sm'>{props.desc}</p>
      </div>
    </div>
  )
}

export const AboutContent = () => {
  return (
    <section className='mb-16'>
      <div className='container flex md:flex-col'>
        <div className='left w-1/3 md:w-full mr-8 md:mr-0 relative'>
        <br/><br/><br/>
          <img src={hero} alt='aboutImg' className=' rounded-xl' />
          <div className='img-group ml-24 mt-3'>
            <img src={imgs} alt='' />
            <span className='text-[14px]'>
              Join over <label className='text-black text-sm'>300  +</label> students
            </span>
          </div>
        </div>
        <div className='right w-2/3 md:w-full md:mt-16'>
          <div className='heading w-4/5 md:w-full'>
            <h1 className='text-3xl font-semibold text-black'>Achieve Your Goals With Admin Career Academy</h1>
            <span className='text-sm mt-2 block leading-6'> {data.find(item => item.id === 1).content}</span>
            <br/>
            <h1 className='text-2xl font-semibold text-black'>Our Mission</h1>
            <span className='text-sm mt-2 block leading-6'> {data.find(item => item.id === 2).content}</span>
            <br/>
            <h1 className='text-2xl font-semibold text-black'>What We Offer</h1>
            <span className='text-sm mt-2 block leading-6'> {data.find(item => item.id === 3).content}</span>
            <br/>
            <h1 className='text-2xl font-semibold text-black'>Why Choose Us?</h1>
            <span className='text-sm mt-2 block leading-6'> {data.find(item => item.id === 4).content}</span>
            <br/>
            <h1 className='text-2xl font-semibold text-black'>Get In Touch</h1>
            <span className='text-sm mt-2 block leading-6'> {data.find(item => item.id === 5).content}</span>
            <span className='text-sm mt-2 block leading-6'> 
            Contact Us- 9120325950 <br/>
            Follow Us on Social Media </span>
          </div>
        </div>
      </div>
    </section>
  )
}
