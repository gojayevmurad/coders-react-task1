import React from 'react'
import './style/about.css'
import introImg from '../../assets/about_page.png'

const About = () => {
  return (
    <div className='about'>
      <div className="container">
        <div className="about--content">
          <div className="about--header">
            <img src={introImg} alt="intro " />
            <h2>
              I’m Amirhossein Meydani
              A <span className="diff">Backend</span> and <span className="diff">Android</span> Programmer and  <span className="diff">UI/UX</span> Designer
            </h2>
          </div>
          <p className='content'>
            <p className="head">The standard Lorem Ipsum passage, used since the 1500s</p>

            <span>            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>

            <p className="head">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</p>

            <span>            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</span>

            <p className="head">1914 translation by H. Rackham</p>

            <span>            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About