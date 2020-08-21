import React from 'react'
import './menuComponent.styles.scss'
import { withRouter } from 'react-router-dom'
const MenuComponent = ({title, imageUrl, size, history, linkUrl, match}) => {
    return (
         <div 
         style={{backgroundImage: `url(${imageUrl})`}}
         onClick={() => history.push(`${match.url}${linkUrl}`)}
         className= {`${size} menu-item `} >
                    <div className="content">
                        <h1 className="title"> {title.toUpperCase()}</h1>
                        <span className="subtitle"> Shop now </span>
                    </div>
                </div>
    )
}

export default  withRouter( MenuComponent)
