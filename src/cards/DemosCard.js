import React from 'react'
import movie from '../images/movie.PNG'
import checklist from '../images/checklist.PNG'
import radio from '../images/radio.PNG'
import recipe from '../images/recipe.PNG'
import weather from '../images/weather.PNG'
import account from '../images/acc.PNG'

const DemosCard = (props) => {

    const { getStyle } = props

    return (
        <ul className="demo-content">

            <li className="demo-content__item" style={getStyle('0.0s')}>
                <div className="demo-content__bg"></div>
                <a href="https://stbugyeimovies.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <div className="pseudo"></div>
                    <h2>Movie App</h2>
                    <div className="demo-content__poster">
                        <img src={movie} alt="poster" />
                        <div className="demo-content__text">
                            <p>Search and preview your favorite Movies, TV&TV-shows. Get up-to-date info on popular TV & Movie casts.</p>
                        </div>
                    </div>
                    <button className="demo-btn">Preview Demo</button>
                </a>
            </li>

            <li className="demo-content__item" style={getStyle('0.1s')}>
            <div className="demo-content__bg1"></div>
                <a href="https://priscillacart.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <div className="pseudo"></div>
                    <h2>Shopping List App</h2>

                    <div className="demo-content__poster">
                        <img src={checklist} alt="poster" />
                        <div className="demo-content__text">
                            <p>A checklist App with persistent data storage. You can add shop item, edit, delete and also mark item as purchased.</p>
                        </div>
                    </div>

                    <button className="demo-btn">Preview Demo</button>
                </a>
            </li>

            <li className="demo-content__item" style={getStyle('0.2s')}>
            <div className="demo-content__bg2"></div>
                <a href="https://stbugyei.github.io/account_balance.github.io/" target="_blank" rel="noopener noreferrer">
                    <div className="pseudo"></div>
                    <h2>Expenses App</h2>
                    <div className="demo-content__poster">
                        <img src={account} alt="poster" />
                        <div className="demo-content__text">
                            <p>A simple application that Calculate your Expenses from Income. It comes with visual representation of data from income, expenses and balance.</p>
                        </div>
                    </div>

                    <button className="demo-btn">Preview Demo</button>
                </a>
            </li>

            <li className="demo-content__item" style={getStyle('0.0s')}>
            <div className="demo-content__bg3"></div>
                <a href="https://abenarecipe.netlify.app/recipes" target="_blank" rel="noopener noreferrer">
                    <div className="pseudo"></div>
                    <h2>Food Recipe App</h2>
                    <div className="demo-content__poster">
                        <img src={recipe} alt="poster" />
                        <div className="demo-content__text">
                            <p>A food and coctail recipe App that shows by video and simple plain text how to prepare your favourite meals and coctails.</p>
                        </div>
                    </div>

                    <button className="demo-btn">Preview Demo</button>
                </a>
            </li>

            <li className="demo-content__item" style={getStyle('0.1s')}>
            <div className="demo-content__bg4"></div>
                <a href="https://reactweather-ani.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <div className="pseudo"></div>
                    <h2>World Weather App</h2>
                    <div className="demo-content__poster">
                        <img src={weather} alt="poster" />
                        <div className="demo-content__text">
                            <p>A weather application that gives five days forecast on any available location. NB: Browser location must be enable to access current location.</p>
                        </div>
                    </div>

                    <button className="demo-btn">Preview Demo</button>
                </a>
            </li>

            <li className="demo-content__item" style={getStyle('0.2s')}>
            <div className="demo-content__bg5"></div>
                <a href="https://radiobruce.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <div className="pseudo"></div>
                    <h2>Radio App</h2>
                    <div className="demo-content__poster">
                        <img src={radio} alt="poster" />
                        <div className="demo-content__text">
                            <p>Enjoy some of the finest Radio Programs from Ghana. You can search Or browse from the Menu to Select the Station Of Interest.</p>
                        </div>
                    </div>

                    <button className="demo-btn">Preview Demo</button>
                </a>
            </li>
        </ul>

    )
}

export default DemosCard
