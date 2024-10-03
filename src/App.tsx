import { useState } from 'react'
import ReactMarkDown from 'react-markdown'
import './App.css'

const defaultMarkdown=`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, <div></div>, between 2 backticks.`

function App() {
  const [markdownText, setMarkDownText] = useState<string>(defaultMarkdown)

  return (
    <div>
      <h1>
        Markdown Previewer
      </h1>
      <div className="boxes-container">
        <textarea className=" w-4/5 h-96 inline-block" name="editor" id="editor" value={markdownText}
        onChange={(e)=>setMarkDownText(e.target.value)}> </textarea>
          <div className="preview">
          <ReactMarkDown>{markdownText}</ReactMarkDown>
          </div>
      </div>
    </div>
  )
}

export default App
