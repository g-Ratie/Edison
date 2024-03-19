import React from 'react'
import { useState } from 'react'
import { Board } from '../utils/Board'
import { render } from '../rendere/render'
import { Led } from '../components/output/Led'
import { DigitalTileSensor } from '../components/input/DigitalTileSensor'

const App: React.FC = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <Board port={'/dev/ttyUSB0'}>
      <DigitalTileSensor
        pin={8}
        triggered={() => {
          setIsOn(true)
        }}
        untriggered={() => {
          setIsOn(false)
        }}
      >
        <Led
          pin={13}
          isOn={isOn}
        />
      </DigitalTileSensor>
    </Board>
  )
}
render(<App />)
