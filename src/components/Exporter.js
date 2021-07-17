import React, { useState } from 'react'
import axios from 'axios'
import {useEffect} from 'react'

function Exporter(props) {
    const {
        html,
        css,
        js
    } = props

    const[id, setId] = useState('');
    const[valid, setValid] = useState(true);
    const {REACT_APP_GITHUB_TOKEN} = process.env;
    const api = axios.create({
        baseURL: "https://api.github.com/gists"
    })

    useEffect(() => {
        console.log(html);
        api.post('', {
            "files" : {
                "html" : {
                    "filename": "html.txt",
                    "type": "text/plain",
                    "language": "Text",
                    "content" : `${html === ""?"E":html}`
                },
                "css" : {
                    "filename": "css.txt",
                    "type": "text/plain",
                    "language": "Text",
                    "content" : `${css===""?"E":css}`
                },
                "js" : {
                    "filename": "js.txt",
                    "type": "text/plain",
                    "language": "Text",
                    "content" : `${js===""?"E":js}`
                }
            }
        }, {
            headers: {"Authorization": `Bearer ${REACT_APP_GITHUB_TOKEN}`}
        })
        .then(function (response){
            setValid(true);
            setId(response.data.id);
            
        }).catch((e) => {
            setValid(false);
            console.log(e.message)
        })
    }, [])

    

    return (
        <div>
            {valid? <p>You can access your code at the endpoint <strong>/edit/{id}</strong> </p> : <h3>Unsuccessful Export</h3>}
            
        </div>
    )
}

export default Exporter
