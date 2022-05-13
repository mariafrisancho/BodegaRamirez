import React from 'react'
import { Item } from '../Item/Item'

function ItemList({ products }) {
    return (
        <div>
         
            <ul>
                {
                    products.map(prod => {
                        return <Item product={prod} />
                    })
                }
            </ul>

          


        </div>
    )
}

export default ItemList