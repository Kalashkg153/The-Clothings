
import React from "react";


import './collection-item.scss';

const CollectionItem = ({id , Name , price , imageUrl}) => (

    <div className="collection-item">
        <div className="image" style={{backgroundImage : `url(${imageUrl})`}} />

        <div className="collection-footer">
            <span className="name">{Name}</span>
            <span className="price">{price}</span>
        </div>

    </div>

)

export default CollectionItem;