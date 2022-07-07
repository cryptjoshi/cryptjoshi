// import { DraggableContainer, DraggableChild } from 'react-dragline'
import { useState } from 'react'
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


  const [state, setState] = useState({
    activeDrags: 0,
    deltaPosition: { x: 0, y: 0 },
    controlledPostion: { x: -400, y: 200 }
  })
  // const _state = {
  //   activeDrags: 0,
  //   deltaPosition: { x: 0, y: 0 },
  //   controlledPostion: { x: -400, y: 200 }
  // }

  // setState(state => ({
  //   ...state,
  //   _state
  // }))

  const onStart = () => { }
  const onStop = () => { }

  const handleDrag = (e, ui) => {
    console.log(e, ui)
    const { x, y } = state.deltaPosition;
    setState(state => ({
      deltaPosition: {
        x: x + ui.deletaX,
        y: y + ui.deletaY
      }
    }))
  }

  const dragHandlers = { onStart: onStart, onStop: onStop }
  const { deltaPosition, controlledPostion } = state

  return (
    // {/* <Draggable onDrag={handleDrag} {...dragHandlers}> */}
    // {/*   <div className='box'> */}
    // {/*     <div>Tracking Deta</div> */}
    // {/*     <div>x:{deltaPosition.x.toFixed(0)},y:{deltaPosition.y.toFixed(0)}</div> */}
    // {/*   </div> */}
    // {/* </Draggable> */}
    <div className="box" style={{ height: '500px', width: '500px', position: 'relative', overflow: 'auto', padding: '0' }}>
      <div style={{ height: '1000px', width: '1000px', padding: '10px' }}>
        <Draggable bounds="parent" {...dragHandlers}>
          <div className="box">
            I can only be moved within my offsetParent.<br /><br />
            Both parent padding and child margin work properly.
          </div>
        </Draggable>
        <Draggable bounds="parent" {...dragHandlers}>
          <div className="box">
            I also can only be moved within my offsetParent.<br /><br />
            Both parent padding and child margin work properly.
          </div>
        </Draggable>
      </div>
    </div>
  )

}

export default Dnd
