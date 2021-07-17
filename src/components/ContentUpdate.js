import React from 'react'
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

    let {pasteId} = useParams();

    api.get(`/${pasteId}`)
        .then((response) => {
            
                var files = response.data.files;
                var html = files["html.txt"].content === undefined ? "" : files["html.txt"].content
                var css = files["css.txt"].content === undefined ? "" : files["css.txt"].content
                var js = files["js.txt"].content === undefined ? "" : files["js.txt"].content

            setHtml(html)
            setCss(css)
            setJs(js)
            
        })
        .catch((e) => {
            console.log(e)
        })
    
            
    return (
        
        <Redirect to="/"></Redirect>
    )
}

export default ContentUpdate
