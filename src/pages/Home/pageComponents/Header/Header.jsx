import {useState, useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
import './header.css'

export function Header(){
    const [transitionTime, setTransitionTime] = useState({transitionDelay: '1300ms'})


    const [ref, inView] = useInView({
        threshold: 1
    })

    useEffect(() => {
        setTransitionTime({transitionDelay: '0ms'})
    }, [inView])
    
    return (
        <header ref={ref} className="section">
            <div className="headerContent">
                <p>lucas campistron</p>
                <div className="middleLine" >
                    <div className="line" style={transitionTime}></div>
                    <div className="square" style={transitionTime}></div>
                </div>
                <p>Fullstack Javascript Developper</p>
            </div>
        </header>
    )
}