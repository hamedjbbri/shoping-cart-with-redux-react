 import './ProductScreen.css'

function ProductScreen() {
    return (
        <div className="productscreen">
             <div className="productscreen__left">
                <div className="left__image">
                    <img src="https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="product name"/>
                </div>


               <div className="left__info">
                   <p className="left__name">Product 1</p>
                   <p className="left__price">Price: $499.99</p>
                   <p className="left__description">Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, perferendis reiciendis sint sequi neque illo?</p>
               </div>

             </div>
             <div className="productscreen__right">
                 <div className="right__info">
                     <p>
                         Price: <span>$499.99</span>
                     </p>
                     <p>
                         status: <span>In stock</span>
                     </p>
                     <p>
                         Qty:
                         <select>
                             <option value="1">1</option>
                             <option value="2">2</option>
                             <option value="3">3</option>
                             <option value="4">4</option>
                         </select>
                     </p>
                     <p>
                         <button type="button">Add to cart</button>
                     </p>
                 </div>
             </div>
        </div>
    )
}

export default ProductScreen
