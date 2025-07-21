import React from 'react';
import style from './AboutUs.module.css';
function AboutUs() {
  return (
    <div className = {style.wrap}>
        <div className = {style.inner}>
            <h1 className = {style.title}>About us</h1>
            <p className = {style.text}>Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis.</p>
            <button className = {style.button}>Read More</button>
        </div>
    </div>
  )
}
export default AboutUs;