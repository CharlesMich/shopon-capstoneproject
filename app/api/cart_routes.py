from flask import Blueprint, request
from app.models import db, Cart
from app.forms import CartForm
from flask_login import login_required, current_user

cart_route = Blueprint('cart', __name__)


# Get all items in cart
@cart_route.route('/', methods = ["GET"])
def getCartProduct():
    carts = Cart.query.all()
   
    return [cart.to_dict() for cart in carts]


# Post item to cart
@cart_route.route('/new', methods = ["POST"])
def postCart():
    form = CartForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data

    if form.validate_on_submit():
        newCart = Cart(
            userId =data['userId'],
        ) 

        db.session.add(newCart)
        db.session.commit()
        return newCart.to_dict()
    
    

# @cartproduct_route.route('/delete-cart/<int:id>', methods = ["GET", "POST"])
# def cartProductDelete(id):
#     cartProduct = Cart_Product.query.filter(Cart_Product.id == id).first()
#     db.session.delete(cartProduct)
#     db.session.commit()
#     return {"product": "product deleted"}
