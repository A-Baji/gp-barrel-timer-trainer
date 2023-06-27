import React, { useState } from 'react'
import './App.css' // Import the CSS file with outline styles

function App() {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }
    return (
        <div className='image-container'>
            <img
                src='https://static.wikia.nocookie.net/leagueoflegends/images/8/82/Gangplank_Powder_Keg_screenshot.png'
                alt=''
                className={isHovered ? 'hovered-image' : ''}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        </div>
    )
}

export default App
