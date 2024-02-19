import render from './declarative/rendere/render'

export { board } from './procedure/utils/board'
export { attachLed } from './procedure/examples/output/uniqueDevice/led'
export { attachBuzzer } from './procedure/examples/output/uniqueDevice/buzzer'
export { attachPressureSensor } from './procedure/examples/analog/uniqueDevice/pressureSensor'
export { attachServo } from './procedure/examples/servo/uniqueDevice/servo'
export { attachRotationServo } from './procedure/examples/servo/uniqueDevice/rotationServo'
export { attachRgbLed } from './procedure/examples/output/uniqueDevice/rgbLed'
export { attachCollisionSensor } from './procedure/examples/input/uniqueDevice/collisionSensor'
export { attachHallEffectSensor } from './procedure/examples/input/uniqueDevice/hallEffectSensor'
export { attachButton } from './procedure/examples/input/uniqueDevice/pushButton'
export { attachOutput } from './procedure/examples/output/uniqueDevice/output'
//------------utils-----------------//
export { render }
export { delay } from './procedure/utils/delay'

//-----------declarative----------------//
export { Board } from './declarative/utils/Board'
export { Led } from './declarative/components/output/Led'
export { Button } from './declarative/components/input/Button'
export { Servo } from './declarative/components/servo/Servo'
export { SerialPort } from 'serialport'
