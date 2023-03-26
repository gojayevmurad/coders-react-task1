import React from 'react'
import './style/blog.css'

import blogLogo1 from '../../assets/blog_page.png'
import blogLogo2 from '../../assets/blog_page(1).png'
import blogLogo3 from '../../assets/blog_page(2).png'
import blogLogo4 from '../../assets/blog_page(3).png'
import blogLogo5 from '../../assets/blog_page(4).png'

let data = [
  [blogLogo1, 'There is more than you know', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"],
  [blogLogo2, 'There is more than you know', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"],
  [blogLogo3, 'There is more than you know', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"],
  [blogLogo4, 'There is more than you know', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"],
  [blogLogo5, 'There is more than you know', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"],
]

const Blog = () => {
  return (
    <div className='blog'>
      <div className="container">
        <div className="blog--content">

          {
            data.map(item => {
              return (
                <div className="blog--item">
                  <div className="blog--item__img">
                    <img src={item[0]} alt="blog item" />
                  </div>
                  <div className="blog--item__text">
                    <h3>{item[1]}</h3>
                    <p>{item[2]}</p>
                    <span>Read more<span class="material-symbols-outlined">
                      read_more
                    </span></span>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Blog