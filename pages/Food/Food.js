import React from 'react'
import '../styles.css'
function Food() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className='food_wrapper page_body'>Food</div>
  )
}

export default Food