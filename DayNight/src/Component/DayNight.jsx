import {useState} from 'react';

import styles from'./DayNight.module.css';

const DayNight = () =>{
const hour = new Date().getHours();
const minute = new Date().getMinutes();


 return(
    <div className={styles.container}>
       <h1>son las: {hour} : {minute}</h1>
       {hour<=12 ? (<><img src="dia.jpeg"/><p>Buenos dias </p></>): null}
       {(hour>12&&hour<20)? (<><img src="tarde.webp" alt="" /><p> buenas tardes</p></>):null}
       {hour>=20? (<><img src="noche.jpg" alt="" /><p>buenas noches</p></>):null}
    </div>
    
 )   

}

export default DayNight;