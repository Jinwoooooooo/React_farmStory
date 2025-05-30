import React from 'react'
import { PRODUCT_THUMB } from '../../api/_http';

const ListItem = ({ product }) => {
  return (
    <>
        <tr>
            <td>
                <a href="./view.html"><img src={`${PRODUCT_THUMB}/${product.thumb120}`} className="thumbnail" alt={`${product.productName}`} /></a>
            </td>
            <td className="type">{product.type}</td>
            <td className="title"><a href="#">{product.productName}</a></td>
            <td className="discount">{product.discount}%</td>
            <td className="point">{product.point}P</td>
            <td className="price">
                <strong>{product.price}</strong>
                <del>{product.price}</del>
            </td>
        </tr>
    </>
  )
}

export default ListItem;