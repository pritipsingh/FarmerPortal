import React from 'react'
import Banner from '../components/Banner'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import { Contact } from '../components/Contact'
import { Newsletter } from '../components/Newsletter'
import { Footer } from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Banner />
      <Skills />
      <Projects />
     
      {/* <Newsletter /> */}
      <Footer />
    </div>
  )
}

export default Home