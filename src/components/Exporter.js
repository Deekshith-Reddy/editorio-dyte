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
    const {REACT_APP_GITHUB_TOKEN} = process.env;
    const api = axios.create({
        baseURL: "https://api.github.com/gists"
    })

    useEffect(() => {
        api.post('', {
            "files" : {
                "html" : {
                    "filename": "html.txt",
                    "type": "text/plain",
                    "language": "Text",
                    "content" : `${html}`
                },
                "css" : {
                    "filename": "css.txt",
                    "type": "text/plain",
                    "language": "Text",
                    "content" : `${css}`
                },
                "js" : {
                    "filename": "js.txt",
                    "type": "text/plain",
                    "language": "Text",
                    "content" : `${js}`
                }
            }
        }, {
            headers: {"Authorization": `Bearer ${REACT_APP_GITHUB_TOKEN}`}
        })
        .then(function (response){
            setId(response.data.id);
            
        }).catch((e) => {
            console.log(e)
        })
    }, [])

    

    return (
        <div>
            <p>You can access your code at the endpoint <strong>/edit/{id}</strong> </p>
        </div>
    )
}

export default Exporter
