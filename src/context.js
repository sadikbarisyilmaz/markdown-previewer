import React, { useState, useContext} from 'react'
import { createContext } from 'react'

const TextContext = createContext()

export const TextProvider = ({ children }) => {
   
    const initialText = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n   return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\n\nOr _italic_.\n\nOr... wait for it... **_both!_**\n\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org)\n\nAnd..\n> Block Quotes!\n\nAnd of course there are lists!\n\n- First item\n\n- Second Item\n\n- Third item\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"
    const [text, setText] = useState(initialText)

    const values = {
        text, 
        setText  
    }

    return <TextContext.Provider value={values}>{children}</TextContext.Provider>
}

const useText = () => useContext(TextContext)
export default useText


