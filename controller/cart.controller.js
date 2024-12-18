// 
import User from '../model/user.model.js';
import CartItmes from '../model/cartitem.model.js'; 
import Product from '../model/product.model.js';
import Cart from '../model/cart.model.js';

export const addCartProduct = async (request, response, next) => {
  const { user_id, product_id } = request.body;
  try {
    
    let cart = await Cart.findOne({ user_id });
    if (cart) {
      
      let status = await CartItmes.findOne({ cart_id: cart._id, product_id });
      if (status) {
        return response.status(200).json({ message: "Item is already present" });
      } else {
        
        await CartItmes.create({ cart_id: cart._id, product_id });
        return response.status(200).json({ message: "Item added successfully" });
      }
    } else {
      
      let newCart = await Cart.create({ user_id });
      await CartItmes.create({ cart_id: newCart._id, product_id });
      return response.status(200).json({ message: "Item added to cart successfully" });
    }
  } catch (err) {
    console.error(err); 
    return response.status(500).json({ error: "Internal server error" });
  }
};

export const getCartItems = async (request, response, next) => {
  const { user_id } = request.params;
  try {
    
    const cart = await Cart.findOne({ user_id });
    if (!cart) {
      return response.status(404).json({ message: "Cart not found" });
    }


    const cartItems = await CartItmes.find({ cart_id: cart._id }).populate("product_id");
    if (!cartItems.length) {
      return response.status(404).json({ message: "No items found in the cart" });
    }

    return response.status(200).json({ "cart-items": cartItems });
  } catch (err) {
    console.error(err); 
    return response.status(500).json({ error: "Internal server error" });
  }
};





export const getCartItems1 = async (request, response, next) => {
    const { user_id } = request.params;
    try {
      
      const cart = await Cart.findOne({ user_id });
      if (!cart) {
        return response.status(404).json({ message: "Cart not found" });
      }
  
  
      const cartItems = await CartItmes.find({ cart_id: cart._id })
      if (!cartItems.length) {
        return response.status(404).json({ message: "No items found in the cart" });
      }
  
      return response.status(200).json({ "cart-items": cartItems });
    } catch (err) {
      console.error(err); // Optional logging for debugging
      return response.status(500).json({ error: "Internal server error" });
    }
  };
  
