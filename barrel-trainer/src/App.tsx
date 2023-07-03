import React, { useState } from 'react'
import { Checkbox, Radio, Space, Progress } from 'antd'
import './App.css' // Import the CSS file with outline styles
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

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
            <div className='column' id='left'>
                <Space>
                    <Checkbox>2 HP</Checkbox>
                    <Checkbox>Auto Reset</Checkbox>
                </Space>
            </div>
            <div className='image-container'>
                <Space className='healthbar' direction='vertical' align='center'>
                    <Progress
                        steps={3}
                        percent={100}
                        showInfo={false}
                        strokeColor='#924243'
                        status='normal'
                    />
                    <CircularProgressbarWithChildren
                        value={75}
                        strokeWidth={4}
                        styles={buildStyles({
                            rotation: 0.5,
                            strokeLinecap: 'butt',
                            pathColor: '#dbdbdb',
                            trailColor: '#949494'
                        })}
                        counterClockwise
                    >
                        <img
                            src='/barrel.png'
                            alt=''
                            className={isHovered ? 'hovered-image' : ''}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            draggable={false}
                            style={{
                                cursor: 'pointer'
                            }}
                        />
                    </CircularProgressbarWithChildren>
                </Space>
            </div>
            <div className='column' id='right'>
                <Radio.Group defaultValue='1' buttonStyle='solid'>
                    <Radio value='1'>Level 1</Radio>
                    <Radio value='7'>Level 7</Radio>
                    <Radio value='13'>Level 13</Radio>
                </Radio.Group>
            </div>
        </div>
    )
}

export default App
