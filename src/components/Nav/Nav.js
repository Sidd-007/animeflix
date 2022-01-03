import React, { useState, useEffect} from 'react'
import '../../CSS/Nav.css'

function Nav() {

    const [show, handleShow] = useState(false)


    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY >100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
        
    }, [])


    return (
        <div className={`nav ${show && "nav_black"}`}>
            
            <img className="nav_logo" src="https://user-images.githubusercontent.com/25598040/98017361-e4e31f80-1ddd-11eb-93a2-8babcf4dee9c.png" alt="Netflix Logo" />

            {/* <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix_avatar_logo"/> */}
            
        </div>
    )
}

export default Nav
