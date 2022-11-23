import useText from '../context'

function Editor() {

  const {text, setText} = useText()

  const onChangeHandler = (event) => {
    setText(event.target.value)
  }


  return (
    <div id='editorField' className='box'>
      <div className="header">
        <p>Editor</p>
      </div>
      <textarea onChange={onChangeHandler} value={text} name="" id="editor" >
      </textarea>
    </div>
  )
}

export default Editor