import React, { useState, useEffect } from 'react';
import './Useind.css';
import carousalimg from './image/carousalimg.svg';
import useindleft from './image/useindleft.svg';
import useindright from './image/useindright.svg';
import map3 from './image/map3.gif';

export default function UseindHomepageCarousal() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
    });
  }, []);

  const goPrev = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  const goNext = () => {
    const slides = document.querySelectorAll(".slide");
    if (counter < slides.length - 1) {
      setCounter(counter + 1);
    }
  };

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  }, [counter]);

  return (
    <div className='useind--homepage--caraousal--card'>
      <main>
        <div className='useind--homepage--caraousal--card1 slide'>
          <img src={map3}></img>
          <div className='useind--homepage--caraousal--card--p'>
            <p className='useind--homepage--caraousal--card--p--2'>
              Secure your account with our scam protection.
            </p>
            <p className='useind--homepage--caraousal--card--p--23'>The US reported losing more than $10 billion to fraud in 2023,
              marking a 14% increase over reported losses in 2022
              (Data by Federal Trade Commission)
            </p>
            <button>Start Free Trial</button>
          </div>
        </div>
        <div className='useind--homepage--caraousal--card1 slide'>
          <img src={carousalimg}></img>
          <div className='useind--homepage--caraousal--card--p'>
            <p className='useind--homepage--caraousal--card--p--2'>
              GET CONNECTED the Right Way - Toll Free Number
            </p>
            <p className='useind--homepage--caraousal--card--p--23'>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard</p>
            <button>Contact Us Now</button>
          </div>
        </div>
      </main>

      <div className="useind--right--left--click" >
        <img src={useindleft} onClick={goPrev}></img>
        <img src={useindright} onClick={goNext}></img>
      </div>

    </div>
  );
}
