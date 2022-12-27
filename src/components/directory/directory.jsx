import React from 'react'
import MenuItem from '../menu-item/menu-item';

import './directory.scss';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections : [

               {
                 title : 'Hats',
                 imageUrl : 'https://cdn.pixabay.com/photo/2016/08/01/20/12/girl-1561979__340.jpg',
                 id : 1,
                 linkUrl : 'hats'
               } ,
               {
                title : 'Jackets',
                imageUrl : 'https://cdn.pixabay.com/photo/2018/01/29/19/55/fur-3117033__340.jpg',
                id : 1,
                linkUrl : 'hats'
              },
              {
                title : 'Sneakers',
                imageUrl : 'https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__340.jpg',
                id : 1,
                linkUrl : 'hats'
              },
              {
                title : 'Womens',
                imageUrl : 'https://cdn.pixabay.com/photo/2022/03/06/03/18/friends-7050708__340.jpg',
                size : 'large',
                id : 1,
                linkUrl : 'hats'
              },
              {
                title : 'Mens',
                imageUrl : 'https://cdn.pixabay.com/photo/2015/06/20/13/55/man-815795__340.jpg',
                size : 'large',
                id : 1,
                linkUrl : 'hats'
              }

            ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id , ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;

