from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .catagory import Catagory
import datetime

class Product(db.Model):
    __tablename__ = 'products'
    
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    # columns
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    product_shortdescription = db.Column(db.String(500), nullable=False)    
    product_longdescription = db.Column(db.String(5000), nullable=False)
    price = db.Column(db.Numeric, nullable=False)
    catagory_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('catagories.id')), nullable=False)
    created_at = db.Column(db.Date, default=datetime.date.today, nullable=False)
    updated_at = db.Column(db.Date, default=datetime.date.today, nullable=False)

    # relationships
    product_catagory = db.relationship('Catagory', back_populates="catagory_product")
    product_orderitem  = db.relationship('Order_Item', back_populates='orderitem_product')
    product_review = db.relationship('Review', back_populates='review_product')
    product_cartproduct = db.relationship('Cart_Product', back_populates='cartproduct_product')

