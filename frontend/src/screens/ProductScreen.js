import './ProductScreen.css'
import {useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getProductDetails} from '../redux/actions/productActions'
import {addToCart} from '../redux/actions/cartActions'

function ProductScreen ({ match, history}){  

 const [qty, setQty] = useState(1);
 const dispatch = useDispatch();

 const productDetails = useSelector(state=>state.getProductDetails);
 const {loading, error, product} = productDetails


   useEffect(()=> {
       if (product && match.params.id !== product._id) {
           dispatch(getProductDetails(match.params.id))
       }
   }, [dispatch, product, match])


 
 

const addToCartHandler = () => {
    dispatch(addToCart(product._id ,qty));
    history.push('/cart')
 

}

    return (
        <div className="productscreen">
             <div className="productscreen__left">
                <div className="left__image">
                    <img src={product ? product.imageUrl : null} alt={''}/>
                </div>


               <div className="left__info">
                   <p className="left__name"> </p>
                   <p className="left__price">Price: ${product ? product.price : null} </p>
                   <p className="left__description">{product ? product.description : null}</p>
               </div>

             </div>
             <div className="productscreen__right">
                 <div className="right__info">
                     <p>
                         Price: <span>${product ? product.price : null}</span>
                     </p>
                     <p>
                         status: {product && product.countInStock > 0 ? <span>In stock</span> : <span>out of stock</span> }   
                     </p>
                     <p>
                         Qty:
                         <select value={qty} onChange={(e) => setQty(e.target.value)}>
                            {[...Array(product ? product.countInStock : 0).keys()].map(item => <option key={item + 1} value={item + 1}>{item + 1}</option>)}
                        </select>
                     </p>
                     <p>
                         <button type="button" onClick={addToCartHandler}>Add to cart</button>
                     </p>
                 </div>
             </div>
        </div>
    )
 
    }
export default ProductScreen
