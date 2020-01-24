import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import {Service} from './components/Service';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 const navLinks = [
   {link: '/home',linkName:'Home'},
   {link: '/home',linkName:'Contact'},
   {link: '/home',linkName:'Career'},
   {link: '/home',linkName:'Gallery'}
  ]
  const servicesList = [
    {imagePath: 'https://about.canva.com/wp-content/uploads/sites/3/2016/08/logos-1.png',altText:'logo', title:'service 1', description:'Lorem Ipsum dolor sit. Lorem Ipsum dolor sit. Lorem Ipsum dolor sit.'},
    {imagePath: 'https://about.canva.com/wp-content/uploads/sites/3/2016/08/logos-1.png',altText:'logo', title:'service 2', description:'Lorem Ipsum dolor sit. Lorem Ipsum dolor sit. Lorem Ipsum dolor sit.'},
    {imagePath: 'https://about.canva.com/wp-content/uploads/sites/3/2016/08/logos-1.png',altText:'logo', title:'service 3', description:'Lorem Ipsum dolor sit. Lorem Ipsum dolor sit. Lorem Ipsum dolor sit.'},
    {imagePath: 'https://about.canva.com/wp-content/uploads/sites/3/2016/08/logos-1.png',altText:'logo', title:'service 4', description:'Lorem Ipsum dolor sit. Lorem Ipsum dolor sit. Lorem Ipsum dolor sit.'},
   ]
return ( 
  <div className="container-fuild">
   <Header navLinks={navLinks}/>
   <Banner 
      imageURL="https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?cs=srgb&dl=beach-during-sunset-635279.jpg&fm=jpg"   
      title="HELLO, I'M"
      subTitle="MARKER PARKER"
      description="Lorem Ipsum dolor sit. Lorem Ipsum dolor sit. Lorem Ipsum dolor sit."
      buttonName="View My Profile"
   />
   <Service title="My Services" description="Lorem Ipsum dolor sit. Lorem Ipsum dolor sit. Lorem Ipsum dolor sit." servicesList={servicesList}/>
   <Footer />
  </div>
  );
}

export default App;
