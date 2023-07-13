from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import datetime

class Cart_Product(db.Model):
    __tablename__ = 'cart_products'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    #columns
    id = db.Column(db.Integer, primary_key=True) 
    cart_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('carts.id')), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False) 
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    # price = db.Column(db.Numeric, nullable=False)
    created_at = db.Column(db.Date, default=datetime.date.today, nullable=False)
    updated_at = db.Column(db.Date, default=datetime.date.today, nullable=False)

    # relationships
    cartproduct_cart = db.relationship('Cart', back_populates='cart_cartproduct')
    cartproduct_product = db.relationship('Product', back_populates='product_cartproduct')
    cartproduct_user = db.relationship('User', back_populates='user_cartproduct')

    def to_dict(self):
        return {
            'id': self.id,
            'cart_id' : self.cart_id,
            'user_id': self.user_id,
            'product_id': self.product_id,
            'quantity': self.quantity,
            'price': self.cartproduct_product.price,
            'name': self.cartproduct_product.name,
            'description': self.cartproduct_product.product_shortdescription
            
        }
