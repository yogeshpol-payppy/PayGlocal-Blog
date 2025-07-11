'use client';
import  { useEffect } from 'react'
import 'aos/dist/aos.css';      // Import AOS styles
import AOS from 'aos';

function TextRenderEffectCompo () {
    useEffect(()=>{
        AOS.init({
            // Customize options as needed (duration, easing, offset, etc.)
            duration: 900,  // Animation duration in ms
            once: true,     // Whether animation happens only once - while scrolling down
          });
    },[])
  
}
export default TextRenderEffectCompo;