import React from 'react'
import { ComponentItem } from '../ItemComponent/ComponentItem'
import './collection-preview.styles.scss'
export const PreviewCollection = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, ind) => ind < 4).map(({id, ...itemProps}) => (
                        
                        <ComponentItem key={id} {...itemProps} />
                    ))
                }
            </div>
        </div>
    )
}
