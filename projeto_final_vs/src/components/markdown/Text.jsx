import React from 'react'

function Text(props) {
  return (
    <div id='markdownText'>
      {props.children}
    </div>
  )
}

export default Text