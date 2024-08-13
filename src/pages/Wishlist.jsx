import React from 'react'
import { useLocation } from 'react-router-dom'

const Wishlist = () => {
    // let location = useLocation()
    // console.log(location)
    let arr = JSON.parse(localStorage.getItem('favItem')) ||[];
    console.log(arr)
  return (
    <div>
      <h2>Wishlisi page</h2>
    </div>
  )
}

export default Wishlist
