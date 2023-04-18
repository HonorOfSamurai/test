import React from 'react'

export default function Userage() {
  const Userage = +prompt("How old are you?")
 
  return (
    <div>
     {Userage > 18 ? <p className="text-gray-700 mb-2 text-center" >You are pass</p> : <p>You are too young</p>}
    </div>
  )
}
