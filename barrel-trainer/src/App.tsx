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
        <div className='container'>
            <div className='column'>
                <button>Option 1</button>
                <button>Option 2</button>
                <button>Option 3</button>
            </div>
            <div className='image-container'>
                <img
                    src='/barrel.png'
                    alt=''
                    className={isHovered ? 'hovered-image' : ''}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    draggable={false}
                />
            </div>
            <div className='column'>
                <button>Option A</button>
                <button>Option B</button>
                <button>Option C</button>
            </div>
        </div>
    )
}

export default App
