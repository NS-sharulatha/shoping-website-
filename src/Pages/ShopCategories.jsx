import React, { useContext } from 'react'
import './CSS/ShopCategories.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Component/Assets/dropdown_icon.png'
import Item from '../Component/Item/Item'

const ShopCategories = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-categories'>
      <img className='shopcategories-banner' src={props.banner}  alt="" />
      <div className="shopcategories-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategories-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategories-products">
        {all_product.map((item,i)=>{
          if (props.category===item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategories-loadmore">
        Explore More
      </div>

    </div>
  )
}

export default ShopCategories

