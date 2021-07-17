import React, { useState } from 'react'
import axios from 'axios'

import {Redirect, useParams} from 'react-router-dom'

function ContentUpdate(props) {
    const {
        setHtml,
        setCss,
        setJs
    } = props
    
    const api = axios.create({
        baseURL: `https://api.github.com/gists`
    })

    const[valid, setValid] = useState(true);
    let {pasteId} = useParams();

    api.get(`/${pasteId}`)
        .then((response) => {
            setValid(true);
                var files = response.data.files;
                var html = files["html.txt"].content === undefined ? " " : files["html.txt"].content
                var css = files["css.txt"].content === undefined ? " " : files["css.txt"].content
                var js = files["js.txt"].content === undefined ? " " : files["js.txt"].content

            setHtml(html)
            setCss(css)
            setJs(js)
            
        })
        .catch((e) => {
            setValid(false)
            console.log(e.message)
        })
    
            
    return (
        
        <>
        {valid ? <Redirect to="/"></Redirect>: <h3>Enter a Valid ID.</h3>}
        </>
        
    )
}

export default ContentUpdate
