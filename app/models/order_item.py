from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import datetime

class Order_Item(db.Model):
    __tablename__ = 'order_items'
    
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    # columns
    id = db.Column(db.Integer, primary_key=True)
    order_id= db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('orders.id')), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    price = db.Column(db.Numeric, nullable=False)
    product = db.Column(db.String, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.Date, default=datetime.date.today, nullable=False)
    updated_at = db.Column(db.Date, default=datetime.date.today, nullable=False)

    # relationships
    orderitem_order= db.relationship('Order', back_populates='order_orderitem')
    orderitem_product = db.relationship('Product', back_populates='product_orderitem')
    
    def to_dict(self):
        return {
            'id': self.id,
            'order_id' : self.order_id,
            'product_id': self.product_id,
            'price': self.price,
            'quantity': self.quantity,
            'shortdescription': self.orderitem_product.product_shortdescription,
            'img1': self.orderitem_product.img1,
            'name': self.orderitem_product.name,
        }