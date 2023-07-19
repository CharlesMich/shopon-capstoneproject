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
    img1 = db.Column(db.String, nullable=False)
    img2 = db.Column(db.String, nullable=False)
    img3 = db.Column(db.String, nullable=False)
    img4 = db.Column(db.String, nullable=False)
    img5 = db.Column(db.String, nullable=False)
    created_at = db.Column(db.Date, default=datetime.date.today, nullable=False)
    updated_at = db.Column(db.Date, default=datetime.date.today, nullable=False)

    # relationships
    product_catagory = db.relationship('Catagory', back_populates="catagory_product")
    product_orderitem  = db.relationship('Order_Item', back_populates='orderitem_product')
    product_review = db.relationship('Review', back_populates='review_product')
    product_cartproduct = db.relationship('Cart_Product', back_populates='cartproduct_product')
    product_productimages = db.relationship('ProductImage', back_populates="productimages_product")

    def to_dict(self):
        return {
            'id': self.id,
            'name' : self.name,
            'product_shortdescription': self.product_shortdescription,
            'product_longdescription': self.product_longdescription,
            'price': self.price,
            'catagory_id' : self.catagory_id,
            'img1':self.img1,
            'img2':self.img2,
            'img3':self.img3,
            'img4':self.img4,
            'img5':self.img5,
            'created_at':self.created_at
        }


