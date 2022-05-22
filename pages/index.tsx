import type { NextPage } from 'next'
import Head from 'next/head'
import OurGoalsSection from '../Sections/OurGoalsSection'
import PartnersSection from '../Sections/PartnersSection'
import VentComplaintsSection from '../Sections/VentComplaintsSection'
import HeroSection from '../Components/HeroSection'
import styles from '../styles/Home.module.css'
import Navbar from "../Components/NavBar" 
import PostaComplaint from "../Components/PostaComplaint" 
import Complaints from "./complaints" 
import Testimonials from '../Components/Testimonials'
import Numbers from '../Components/Numbers'
import Footer from '../Sections/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ecommerce Complaint</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
      </Head>
      <Navbar searchIconIsPresent={true}/>
      <HeroSection />
      <OurGoalsSection />
      <Numbers />
      <VentComplaintsSection />
      <Testimonials />
      <PartnersSection />
      <PostaComplaint />
      <Footer />
    </div>
  )
}

export default Home
