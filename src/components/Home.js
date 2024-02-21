import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Home() {
    return (
        <>
            <Parallax pages={1.8} style={{ backgroundColor: '#092635' }}>
                <ParallaxLayer
                    factor={0.8}
                    speed={-0.5}
                    style={{
                        backgroundColor: '#092635',
                    }}
                >
                    Hello world!
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0.8}
                    speed={1.4}
                    style={{
                        backgroundColor: 'black',
                    }}
                >
                    Hello world!
                </ParallaxLayer>
            </Parallax>
        </>
    )
}
