from flask import Blueprint, request
from app.models import db, Order
from app.forms import OrderForm
from flask_login import login_required, current_user

order_route = Blueprint('order', __name__)


# Get all items in order
@order_route.route('/', methods = ["GET"])
def getCartProduct():
    orders = Order.query.all()
   
    return [order.to_dict() for order in orders]


# Post item to order
@order_route.route('/new', methods = ["POST"])
def postCart():
    form = OrderForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data

    if form.validate_on_submit():
        newOrder = Order(
            userId =current_user.id,
        ) 

        db.session.add(newOrder)
        db.session.commit()
        return newOrder.to_dict()
    
    

# @cartproduct_route.route('/delete-cart/<int:id>', methods = ["GET", "POST"])
# def cartProductDelete(id):
#     cartProduct = Cart_Product.query.filter(Cart_Product.id == id).first()
#     db.session.delete(cartProduct)
#     db.session.commit()
#     return {"product": "product deleted"}
