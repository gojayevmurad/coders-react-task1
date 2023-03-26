import React, { useState } from 'react'
import './style/journey.css'
import journeyLogo from '../../assets/journey_page.png'

let items = [
  [
    ['2 January 2021', 'The resolution, What am i gonna do?', 'It’s all about the new year and works i have to do'],
    ['29 February 2021', 'Started designing what you are seeing right now!', 'Yes in 2th of february i started designing this site'],
    ['2 January 2021', 'Gow - command line tool to manage works', 'Gow is cli tool written in golang using cobra'],
    ['1 March 2021', 'Maybe it’s time to deploy...!', 'Maybe in this day i completed the front and backend of this']
  ],
  [
    ['2 January 2022', 'The resolution, What am i gonna do?', 'It’s all about the new year and works i have to do'],
    ['29 February 2022', 'Started designing what you are seeing right now!', 'Yes in 2th of february i started designing this site'],
    ['2 January 2022', 'Gow - command line tool to manage works', 'Gow is cli tool written in golang using cobra'],
    ['1 March 2022', 'Maybe it’s time to deploy...!', 'Maybe in this day i completed the front and backend of this']
  ],
  [
    ['2 January 2023', 'The resolution, What am i gonna do?', 'It’s all about the new year and works i have to do'],
    ['29 February 2023', 'Started designing what you are seeing right now!', 'Yes in 2th of february i started designing this site'],
    ['2 January 2023', 'Gow - command line tool to manage works', 'Gow is cli tool written in golang using cobra'],
    ['1 March 2023', 'Maybe it’s time to deploy...!', 'Maybe in this day i completed the front and backend of this']
  ]
]





const Journey = () => {
  const [filteredArr, setFilteredArr] = useState(items[items.length - 1])

  const changeTimeLine = (value) => {
    setFilteredArr(items[value])
  }

  return (
    <div className='journey'>
      <div className="container">
        <div className="journey--content">
          <div className="journey--main">
            <div className="journey--main__head">
              <img src={journeyLogo} alt="journey" />
              <div className="text">
                <h2>The resolution , What am I gonna do?</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
              </div>
            </div>
            <p className="journey--main__content">
              <span>The standard Lorem Ipsum passage, used since the 1500s</span>

              <br />
              <p className="space"></p>

              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

              <br />
              <p className="space"></p>


              Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

              <br />
              <p className="space"></p>

              1914 translation by H. Rackham
              "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone
            </p>
          </div>
          <aside>
            <h3 className='aside__header'>Time line</h3>
            <select onChange={(e) => changeTimeLine(e.target.value)} name="year" id="year">
              <option value="0">2021</option>
              <option value="1">2022</option>
              <option selected value="2">2023</option>
            </select>
            <ul>
              {
                filteredArr.map((item, index) => {
                  return (
                    <li key={index}>
                      <h3>{item[0]}</h3>
                      <p>
                        <span className="item--head">
                          {item[1]}
                        </span>
                        {item[2]}
                      </p>
                    </li>
                  )
                })
              }
            </ul>
          </aside>
        </div>
      </div>
    </div >
  )
}

export default Journey