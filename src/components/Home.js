
import React from 'react'
import Meeo from '../image/meo10.gif'
function About() {

  return (
    <div className="todo-app">
    <div className='apps'>
      <div>
      <img
        className="imaggee-about"
        src={Meeo}
        alt="Meeo avatar"
      />
      <h1 className='Heading' >HÉ LU EM NÈE</h1>
      <p className="conttext">Web hỏng có nhiều thứ nhma anh thấy nó tếu nheaa</p>
      <p className="conttext">Có mấy trang thoai nèee </p>
      </div>
    </div>
    <div className="container-desc__wrapper">
      <div className="container-desc">
      <a className='buttoningggg' href="/audio">🎁</a>
        
      </div>
    </div>
  </div>
  )
}

export default About