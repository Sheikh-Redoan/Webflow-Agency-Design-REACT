import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import We_work from './components/WE_work/We_work';
import Project_part from './components/Project_part/Project_part';
import Features_part from './components/Features_part/Features_part';
import Clients_part from './components/Clients_part/Clients_part';
import Frequently from './components/Frequently/Frequently';
import Stellar_part from './components/Stellar_part/Stellar_part';
import Our_blog from './components/Our_blog/Our_blog';
import Footer from './components/Footer_part/Footer';
import Copy_part from './components/Copy_part/Copy_part';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Banner/>
      <We_work/>
      <Project_part/>
      <Features_part/>
      <Clients_part/>
      <Frequently/>
      <Stellar_part/>
      <Our_blog/>
      <Footer/>
      <Copy_part/>
    </>
  )
}

export default App
