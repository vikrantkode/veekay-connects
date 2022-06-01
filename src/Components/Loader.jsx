import React from 'react'
import loading from "../Assets/loading.gif"

const Loader = () => {
  return (
    <div className='items-center'>
        <img src={loading} alt="loader" />
    </div>
  )
}

export {Loader}