import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

export const FadeInSample = () => {
    const [toggle, setToggle] = useState(false)
    const animation = {
        config: {
            duration: 2000,
        },
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
    }
    const styles = useSpring(animation)

    const handleToggle = () => {
        setToggle(_toggle => !_toggle)
    }
    useEffect(() => {
        setToggle(true)
    }, [])
    return (
        <>
            <button onClick={handleToggle}>{toggle ? 'Fade Out' : 'Fade IN'}</button>
            <animated.div style={styles}>
                <p>Fade in text</p>
            </animated.div>
        </>
    )
}