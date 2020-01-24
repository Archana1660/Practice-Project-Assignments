import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/header';
import Banner from './components/Banner/banner';
import Services from './components/Services/services';
import google from './assets/google.png';
import banner from './assets/banner-image.jpg';
import multiLogo from './assets/multiLogo.jpg';

function App() {
  const headerData = {
    logo: google,
    alt: 'brand-logo',
    navLinks: ['Home', 'Home', 'Home', 'Home', 'Home', 'Home']
  }
  const bannerData = {
    imageURL: banner,
    greet: `HELLO, I'M`,
    name: `MARK PARKER`,
    description: `A Freelanche UI Designer & Web Developer`
  }

  const myServices = {
    title: `My Services`,
    descriptionService: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    serviceList: [
      {imagePath: multiLogo,altText:'logo', title:'Web Design', description:'Lorem Ipsum dolor sit. Lorem Ipsum dolor sit. Lorem Ipsum dolor sit.'},
      {imagePath: multiLogo,altText:'logo', title:'Web Design', description:'Lorem Ipsum dolor sit. Lorem Ipsum dolor sit. Lorem Ipsum dolor sit.'},
      {imagePath: multiLogo,altText:'logo', title:'Web Design', description:'Lorem Ipsum dolor sit. Lorem Ipsum dolor sit. Lorem Ipsum dolor sit.'},
      {imagePath: multiLogo,altText:'logo', title:'Web Design', description:'Lorem Ipsum dolor sit. Lorem Ipsum dolor sit. Lorem Ipsum dolor sit.'},
      {imagePath: multiLogo,altText:'logo', title:'Web Design', description:'Lorem Ipsum dolor sit. Lorem Ipsum dolor sit. Lorem Ipsum dolor sit.'},
      {imagePath: multiLogo,altText:'logo', title:'Web Design', description:'Lorem Ipsum dolor sit. Lorem Ipsum dolor sit. Lorem Ipsum dolor sit.'},
     ]
  }

  return(
    <div className="main-wrapper">
      <Header headerData={headerData}/>
      <Banner bannerData={bannerData}/>
      <Services myServices={myServices}/>
    </div>
  )
}

export default App;
