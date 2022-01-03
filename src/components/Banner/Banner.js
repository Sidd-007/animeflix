import React from 'react'
import '../../CSS/Banner.css'

function Banner() {

    
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://media.kitsu.io/anime/cover_images/42765/original.jpeg")`,
            
        }}>
            <div className="banner--featured--vertical">
                <div className="banner--featured--horizontal">
                    <div className="banner_contents">
                        <h1 className="banner_title">
                        Jujutsu Kaisen
                        </h1>
                        
                        <h1 className="banner_description">
                        Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul. From then on, he shares one body with Ryomen Sukuna. Guided by the most powerful of sorcerers, Satoru Gojo, Itadori is admitted to Tokyo Jujutsu High School, an organization that fights the curses... and thus begins the heroic tale of a boy who became a curse to exorcise a curse, a life from which he could never turn back.
                        </h1>
                    </div>
                </div>
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner
