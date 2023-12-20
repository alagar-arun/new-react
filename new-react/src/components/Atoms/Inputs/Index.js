import React from 'react'

export default function InputAtom({name,value,onChange,placeholder}) {
  return (
    <input placeholder={placeholder} name={name} value={value} onChange={onChange}></input>
  )
}
