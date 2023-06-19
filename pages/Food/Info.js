import React from 'react'

function Info() {
  return (
    <div className='food_info'>
        <div className='info_title'>
            <p className='info_text'><strong>Good</strong> --</p>
        </div>
        <div className='info_description'>
            <p className='info_text'>HIGHLY BENEFICIAL, FOOD ACTS LIKE MEDICINE</p>
        </div>
        <div className='info_title'>
            <p className='info_text'><strong>Bad</strong> --</p>
        </div>
        <div className='info_description'>
            <p className='info_text'>AVOID, FOOD ACTS LIKE A POISON</p>
        </div>
        <div className='info_title'>
            <p className='info_text'><strong>Normal</strong> --</p>
        </div>
        <div className='info_description'>
            <p className='info_text'>NEUTRAL, FOOD ACTS LIKE A FOOD</p>
        </div>
    </div>
  )
}

export default Info