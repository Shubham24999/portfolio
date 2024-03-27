import React, { useState, useEffect, useContext } from 'react';
import myImage from './Myphoto.jpg'; // Replace with the correct path to your image
import {MyContext} from "../Context/ScreenSizeProvider"
import "../App.css";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const list = [
    "Java & Spring-boot Developer",
    "JavaScript Developer",
    "MERN STACK Developer"
  ];

  const {isMobile}=useContext(MyContext);

  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      // Get the current item from the list
      const currentItem = list[currentIndex];
      
      // Get the substring of the current item up to the current index
      const partialText = currentItem.substring(0, displayedText.length + 1);

      // Update the displayed text
      setDisplayedText(partialText);

      // If the displayed text matches the current item, move to the next item
      if (partialText === currentItem) {
        setCurrentIndex((prevIndex) => (prevIndex + 1 < list.length ? prevIndex + 1 : 0));
        setDisplayedText(''); // Reset displayed text for the next item
      }
    }, 200); // Adjust the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [currentIndex, displayedText, list]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1 < list.length ? prevIndex + 1 : 0));
  //   }, 2000); // Change the interval time (in milliseconds) as needed

  //   return () => clearInterval(interval);
  // }, [list.length]);

  return (
    <div className='home'>
      <div className='intro'>
        <div className='intro-content'>
          <div className='intro-text'>
            <h3>Hi, Welcome to my profile...</h3>
            {/* <h1 style={{color:"#780700"}}> {list[currentIndex]}</h1> */}
            <h1 style={{color:"#780700"}}> {displayedText}</h1>
            <p>I love to learn new skills and apply those skills in Projects. I have solved DSA problems in JavaScript related to Strings, Arrays, Time Complexity, Space Complexity, Stacks, Queues, and Linked Lists.Currently, I am working on Java and Spring Boot. I am also skilled on Node.js, Express, and MongoDB.</p>
          </div>
          <div className={isMobile?'intro-image':"intro-image-mobile"}>
            <img src={myImage} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
