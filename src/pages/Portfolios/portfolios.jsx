import React from 'react'
import './style/portfolio.css'
import portfoliosLogo1 from '../../assets/portfolios_page.png'
import portfoliosLogo2 from '../../assets/portfolios_page(1).png'
import portfoliosLogo3 from '../../assets/portfolios_page(2).png'
import portfoliosLogo4 from '../../assets/portfolios_page(3).png'
import portfoliosLogo5 from '../../assets/portfolios_page(4).png'
import portfoliosLogo6 from '../../assets/portfolios_page6.png'



let portfoliosItems = [
  [portfoliosLogo1, 'There is more than you know', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"],
  [portfoliosLogo2, 'There is more than you know', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"],
  [portfoliosLogo3, 'There is more than you know', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"],
  [portfoliosLogo4, 'There is more than you know', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"],
  [portfoliosLogo5, 'There is more than you know', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"],
  [portfoliosLogo6, 'There is more than you know', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"]
]
const Portfolios = () => {
  return (
    <div className='portfolios'>
      <div className="container">
        <div className="portfolios--content">
          {
            portfoliosItems.map(item => {
              return (
                <div className="portfolios--item">
                  <div className="portfolios--item__img">
                    <img src={item[0]} alt="portfolio" />
                  </div>
                  <div className="portfolios--item__content">
                    <p className="portfolio__head">
                      {item[1]}
                    </p>
                    <p className="portfolio__body">
                      {item[2]}
                    </p>
                    <p className="portfolio__more">
                      Read more<span class="material-symbols-outlined">
                        read_more
                      </span>
                    </p>
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

export default Portfolios