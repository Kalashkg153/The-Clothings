
import React from "react";

import CollectionPreview from "../../components/preview-collection/preview-collection";
import  SHOP_DATA  from './shopdata';

class ShopPage extends React.Component {

    constructor(props){

        super(props);

        this.state = {
            collections : SHOP_DATA
        };
    }

    render(){
        const {collections} = this.state;
        return (
        <div className="shop-page">
            {
                collections.map(({id , ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
        )
    }

}

export default ShopPage;