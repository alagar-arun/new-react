import React from 'react'

const MergeSort = () => {
  function merge(arr1, arr2) {
    let res = [],
      i = 0,
      j = 0;

    if (arr1.length > 1) {
      let min = 0;
      for (let i = 0; i < arr1.length; i++) {
        if (i !== min) {
          if (arr1[i] < arr1[min]) {
            [arr1[i], arr1[min]] = [arr1[min], arr1[i]];
            min = i;
          }
        }
      }
    }

    if (arr2.length > 1) {
      let min = 0;
      for (let i = 0; i < arr2.length; i++) {
        if (i !== min) {
          if (arr2[i] < arr2[min]) {
            [arr2[i], arr2[min]] = [arr2[min], arr2[i]];
            min = i;
          }
        }
      }
    }

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        res.push(arr1[i]);
        i++;
      } else {
        res.push(arr2[j]);
        j++;
      }
    }

    while (i < arr1.length) {
      res.push(arr1[i]);
      i++;
    }

    while (j < arr2.length) {
      res.push(arr2[j]);
      j++;
    }

    return res;
  }

  function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.ceil(arr.length / 2);

    let arr1 = arr.slice(0, mid);

    let arr2 = arr.slice(mid);

    let arr1_subarrays = [],
      sorted_arr1_subarrays = [];

    let arr2_subarrays = [],
      sorted_arr2_subarrays = [];

    for (let i = 0; i < arr1.length; i += 2) {
      arr1_subarrays.push(arr1.slice(i, i + 2));
    }

    for (let i = 0; i < arr2.length; i += 2) {
      arr2_subarrays.push(arr2.slice(i, i + 2));
    }

    for (let i = 0; i < arr1_subarrays.length; i += 2) {
      let result = merge(arr1_subarrays[i], arr1_subarrays[i + 1]);
      result.forEach((value) => sorted_arr1_subarrays.push(value));
    }

    for (let i = 0; i < arr2_subarrays.length; i += 2) {
      let result = merge(arr2_subarrays[i], arr2_subarrays[i + 1]);
      result.forEach((value) => sorted_arr2_subarrays.push(value));
    }

    let result = merge(sorted_arr1_subarrays, sorted_arr2_subarrays);

    return result;
  }

  //   console.log(mergeSort([7,5,9,,0,-1,23,-8]));   



  return (
    <div>
      <p>MergeSort</p>
    </div>
  )
}

export default MergeSort