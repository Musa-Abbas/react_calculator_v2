import React from 'react'

function Screen(props) {
  return (
    <div className="bg-info text-dark rounded p-4 m-2">
        <h5>{props.expression}</h5>
    </div>
  )
}

export default Screen