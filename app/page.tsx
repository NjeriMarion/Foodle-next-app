
import Image from 'next/image'
import Navbar from './navbar'
import Footer from './footer'
import Top from './top'
import Menu from './centre'

export default function Foodle() {
  return (
      <div >
          <Navbar/>
          <Top/>
          <Menu/>
          <Footer/>
          <br/>
      </div>
  )
}