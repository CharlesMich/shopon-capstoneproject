from flask import Blueprint, request
from app.models import db, Cart_Product
from app.forms import CartProductForm
from flask_login import login_required, current_user

cartproduct_route = Blueprint('cartproduct', __name__)


# Get all items in cart
@cartproduct_route.route('/<int:id>', methods = ["GET"])
def getCartProduct(id):
    cartProducts = Cart_Product.query.filter(Cart_Product.user_id == id).all()
    print([cartProduct.to_dict() for cartProduct in cartProducts])
    return [cartProduct.to_dict() for cartProduct in cartProducts]


# Post item to cart
@cartproduct_route.route('/new', methods = ["POST"])
def postCartProduct():
    # if request.method == "POST": 
            form = CartProductForm()
            form['csrf_token'].data = request.cookies['csrf_token']
            data = form.data
            print('data', data, 'userid', current_user.id)
            if form.validate_on_submit():
                newCartItem = Cart_Product(
                    # cart_id = data['cart_id'],
                    user_id = data['user_id'],
                    product_id = data['productId'],
                    quantity = data['quantity'],
                ) 
                db.session.add(newCartItem)
                db.session.commit()
                return newCartItem.to_dict()
            return {"error": "Product Rejected"}
            
    
    # update item in cart
@cartproduct_route.route('/update-cart/<int:id>', methods =["GET", "POST"])
def cartProductUpdate(id):
    cartProduct = Cart_Product.query.filter(Cart_Product.id == id).first()
    if request.method == "POST":
        print('cartProduct in route', cartProduct)
        data =request.get_json()
        print('data in route', data)
        cart_product_update = data.get('quantity')
        cartProduct.quantity = cart_product_update
        db.session.commit()
        return cartProduct.to_dict()
    return {"error": "update rejected"}


@cartproduct_route.route('/delete-cart/<int:id>', methods = ["GET", "POST"])
def cartProductDelete(id):
    cartProduct = Cart_Product.query.filter(Cart_Product.id == id).first()
    db.session.delete(cartProduct)
    db.session.commit()
    return {"product": "product deleted"}
