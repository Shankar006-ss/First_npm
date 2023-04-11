

// module.exports = {
//     sayHello:()=>{
//         console.log("This is an function");
//     },
//     new:()=>{
//       console.log("Separate");
//     }
// }

import React,{useState,useEffect} from 'react';
import {View,Text} from 'react-native';

const myNpm = ()=>{

  useEffect=(()=>{
    console.log("This is initial time");
  })
  return(
   null
  )
}

export default myNpm;
