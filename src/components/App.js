import {useState, useEffect} from "react";
import {Switch, Route} from 'react-router-dom'
import ContentUpdate from "./ContentUpdate";
import Details from "./Details";
import Editor from "./Editor";
import Exporter from "./Exporter";
import Header from "./Header";

function App() {

  // Content States
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <style>${css}</style>
      <body>${html}</body>
      <script>${js}</script>
      </html>
    `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  // TAB States
  const[htmlTab, setHtmlTab] = useState(true);
  const[cssTab, setCssTab] = useState(false);
  const[jsTab, setJsTab] = useState(false);

  const indexHTMLClick = () =>{
    setHtmlTab(true);
    setCssTab(false)
    setJsTab(false)
  }

  const indexCSSClick = () =>{
    setHtmlTab(false);
    setCssTab(true)
    setJsTab(false)
  }

  const indexJSClick = () =>{
    setHtmlTab(false);
    setCssTab(false)
    setJsTab(true)
  }


  return (
    
    <>
    <Header></Header>
    
    <Switch>
    <Route exact path="/">
    <div className="App">
      
      <div className="files">
        <p className="title">File Explorer</p>
        <div className="file-button-group">
        <button className={htmlTab?"file-button-clicked":"file-button"} onClick={() => {indexHTMLClick(true)}}>| index.html</button>
        <button className={cssTab?"file-button-clicked":"file-button"} onClick={() => {indexCSSClick(true)}}>| index.css</button>
        <button className={jsTab?"file-button-clicked":"file-button"} onClick={() => {indexJSClick(true)}}>| index.js</button>
        </div>
      </div>

      <div className="editor">
        {!htmlTab && !cssTab && !jsTab ? <h1>Click A file to open</h1>: ""}
      {htmlTab ? <Editor language="xml" displayName="HTML" value={html} onChange={setHtml}></Editor>: ""}
      {cssTab ? <Editor language="css" displayName="CSS" value={css} onChange={setCss}></Editor>: ""}
      {jsTab ? <Editor language="javascript" displayName="JS" value={js} onChange={setJs}></Editor>: ""}
      </div>

      <div className="live-view">
        <p className="title">Live View</p>
        <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
        />
      </div>
      
    </div>
    </Route>

    <Route path="/edit/:pasteId">
      <ContentUpdate setHtml = {setHtml} setCss={setCss} setJs = {setJs}></ContentUpdate>
    </Route>
    <Route path="/exporter">
      <Exporter html={html} css={css} js={js}></Exporter>
    </Route>
    <Route>
      <h1>Check the Endpoint</h1>
    </Route>

    </Switch>
    
    <Details></Details>
    </>
  );
}

export default App;
