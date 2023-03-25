import React from 'react'
import boyImg from '../../assets/home_page-boy.png'
import handDec from '../../assets/home_page-hand.png'

const Home = () => {
    return (
        <div className='home'>
            <div className="container">
                <div className="home--content">
                    <div className="home--image">
                        <img src={boyImg} alt=":)" />
                    </div>
                    <div className="home--desc">
                        <h1>
                            Hey there 👋
                            I am Amirhossein
                        </h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id magnam provident laudantium porro asperiores? Ipsam maxime vel itaque ullam corrupti, molestiae velit et quas cum eaque repudiandae tenetur officia sit ducimus quasi porro alias animi est. Assumenda dignissimos non placeat eaque. Totam quisquam maiores facere! Laboriosam hic nostrum repellendus est impedit in non sit ut.</p>
                        <div className="home--desc__actions">
                            <button className="about">About me</button>
                            <button className="about">😮Let's see portfolios</button>
                        </div>
                    </div>
                    <div className="home-deco">
                        <img src={handDec} alt="decoration hand" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home