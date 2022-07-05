// import { DraggableContainer, DraggableChild } from 'react-dragline'
import Draggable from 'react-draggable'

const initialChildren = [
  { id: 1, background: '#8ce8df', size: 100, position: { x: 100, y: 0 } },
  { id: 2, background: '#8ce8df', size: 100, position: { x: 200, y: 106 } },
  { id: 3, background: '#afc7fd', size: 102, position: { x: 500, y: 106 } },
  { id: 4, background: '#d2aff6', size: 150, position: { x: 100, y: 316 } },
  { id: 5, background: '#fee493', size: 200, position: { x: 480, y: 376 } },
]

const Dnd = () => {

  const containerStyle = {
    position: "relative",
    height: 600,
    boxShadow: '0 0 5px 1px #CCC inset',
    background: '#F5F8FA',
    color: '#4A4A4A',
    margin: 20,
  }

  const childStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'move',
  }
  function handleStart() { }
  function handleStop() { }
  function handleDrag() { }
  return (
    <Draggable
      axis='x'
      handle='.handle'
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      scale={1}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}
    >
      <div>
        <div className='handle'>Drag From here</div>
        <div>This readme is really dragging on...</div>
      </div>
    </Draggable>
  )

}

export default Dnd
