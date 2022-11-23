import React from 'react'
import useText from '../context'
import Markdown from 'marked-react';

function Previewer() {

  const {text} = useText()


  return (
    <div id='previewer' className='box'>
      <div className="header">
        <p>Preview</p>
      </div>
      <div id="preview">
        <Markdown id="markdown">{text}</Markdown>
      </div>
    </div>
  )
}

export default Previewer