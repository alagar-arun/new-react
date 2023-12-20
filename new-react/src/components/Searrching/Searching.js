import React, { useState } from 'react';
import './Searching.css'

const Searching = () => {

    // ---------------Linear Search Algorithm--------------
    // const result = (data, target) => {
    //     for (var i = 0; i < data.length; i++) {
    //         if (data[i] === target) {
    //             return i
    //         }
    //     }
    //     return -1
    // }


    // const rec = (data, target, i = 0) => {
    //     if (data.length == target) {
    //         return -1
    //     }
    //     if (data[i] == target) {
    //         return i
    //     }
    //     else {
    //        return rec(data, target, i = i + 1)
    //     }
    
    // const binarySearch = (data, target) => {
    //     let leftStart = 0;  //0
    //     let rightEnd = data.length - 1  //4
    //     while (leftStart <= rightEnd) {
    //         const midValue = Math.floor((leftStart + rightEnd) / 2);
    //         console.log(midValue, "midvalue")  //2
    //         if (target === data[midValue]) {
    //             return midValue
    //         }
    //         if (target < data[midValue]) {
    //             rightEnd = midValue - 1
    //         } else {
    //             leftStart = midValue + 1
    //         }
    //     }
    //     return -1
    // }
    // console.log(rec(data, target))



    // ------------binary seacrh ---------------------

    const binarySearch = (data, target) => {
        let leftStart = 0;  //0
        let rightEnd = data.length - 1  //4
        while (leftStart <= rightEnd) {
            const midValue = Math.floor((leftStart + rightEnd) / 2);
            console.log(midValue, "midvalue")  //2
            if (target === data[midValue]) {
                return midValue
            }
            if (target < data[midValue]) {
                rightEnd = midValue - 1
            } else {
                leftStart = midValue + 1
            }

        }
        return -1
    }

    console.log(binarySearch([1, 2, 3, 4, 5, 6], 2))


    return (
       <>
       <p>ssjnjsnj</p>
       </>
    )
}


export default Searching