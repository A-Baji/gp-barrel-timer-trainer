import React, { useCallback, useEffect, useState } from 'react'
import { Checkbox, Radio, Space, Progress } from 'antd'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import { useTimer } from 'react-use-precision-timer'
import 'react-circular-progressbar/dist/styles.css'
import './App.css' // Import the CSS file with outline styles

function App() {
    const [isHovered, setIsHovered] = useState(false)
    const [remainingTime, setRemainingTime] = useState(Number)

    const callback = useCallback(() => {
        timer.stop()
        updateTimer.stop()
    }, [])
    const timer = useTimer({ delay: 2000 }, callback)
    const update = useCallback(() => setRemainingTime(timer.getRemainingTime()), [])
    const updateTimer = useTimer({ delay: 10 }, update)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }
    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    useEffect(() => {
        console.log(remainingTime)
    }, [remainingTime])

    return (
        <div className='container'>
            <div className='column' id='left'>
                <Space>
                    <Checkbox
                        onChange={(e) => {
                            if (e.target.checked) {
                                updateTimer.start()
                                timer.start()
                            }
                        }}
                    >
                        2 HP
                    </Checkbox>
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
                        value={(remainingTime / 2000) * 100}
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
