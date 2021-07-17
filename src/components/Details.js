import React from 'react'

function Details(props) {
    const {
        setShowDetails
    } = props

    const handleCloseClick = () => {
        setShowDetails(false)
    }

    return (
        <div className="details">
            <button className="details-close-indiv"  onClick={handleCloseClick}>CLOSE</button>
            <h3 className="details-title">Details: </h3>
            <div className="details-content">
                <ol>
                    <li>This is a basic text editor supporting html, css and js</li>
                    <li>You can toggle between the files at the File Explorer bar on the left</li>
                    <li>You can type your code in the editor window at the center</li>
                    <li>There is a live view window at right to display the live code rendering</li>
                    <li>You can export your code using the link at the top right of editor window</li>
                    <li>With the unique ID you received after exporting you can later use the code at the endpoint /edit/ID to reload the code</li>
                </ol>
            </div>
        </div>
    )
}

export default Details
