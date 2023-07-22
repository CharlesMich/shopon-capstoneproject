from flask import Blueprint, request
from app.models import db, Order_Item
from app.forms import OrderItemForm
from flask_login import login_required, current_user

orderitem_route = Blueprint('orderitem', __name__)


# Get all items in the order
@orderitem_route.route('/', methods = ["GET"])
def getCartProduct():
    orderItems = Order_Item.query.all()
    print([orderItem.to_dict() for orderItem in orderItems])
    return [orderItem.to_dict() for orderItem in orderItems]


# Post item to order
@orderitem_route.route('/new', methods = ["POST"])
def postCartProduct():
    form = OrderItemForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data
    print('data', data)
    if form.validate_on_submit():
        newOrderItem = Order_Item(
            order_id =data['order_id'],
            product_id = data['product_id'],
            quantity = data['quantity'],
            product=data['product'],
            price = data['price']
        ) 

        db.session.add(newOrderItem)
        db.session.commit()
        return newOrderItem.to_dict()
    
#     # update image in cart
# @cartproduct_route.route('/update-order/<int:id>', methods =["GET", "POST"])
# def cartProductUpdate(id):
#     cartProduct = Cart_Product.query.filter(Cart_Product.id == id).first()
#     if request.method == "POST":
#         print(cartProduct)
#         data =request.get_json()
#         cart_product_update = data.get('quantity')
#         cartProduct.quantity = cart_product_update
#         db.session.commit()
#         return cartProduct.to_dict()
#     return {"error": "update rejected"}


# @cartproduct_route.route('/delete-cart/<int:id>', methods = ["GET", "POST"])
# def cartProductDelete(id):
#     cartProduct = Cart_Product.query.filter(Cart_Product.id == id).first()
#     db.session.delete(cartProduct)
#     db.session.commit()
#     return {"product": "product deleted"}
