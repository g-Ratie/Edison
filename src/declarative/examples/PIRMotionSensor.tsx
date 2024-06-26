import React from 'react'
import { useState } from 'react'
import { Board } from '../utils/Board'
import { render } from '../rendere/render'
import { Led } from '../components/output/Led'
import { PIRMotion } from '../components/input/PIRMotionSensor'

const App: React.FC = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <Board
      port={'/dev/ttyUSB0'}
      baudRate={115200}
    >
      <PIRMotion
        pin={8}
        triggered={() => {
          setIsOn(true)
        }}
        untriggered={() => {
          setIsOn(false)
        }}
        delayTime={4000}
      >
        <Led
          pin={13}
          isOn={isOn}
        />
      </PIRMotion>
    </Board>
  )
}
render(<App />)
