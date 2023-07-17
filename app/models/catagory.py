from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import datetime

class Catagory(db.Model):
    __tablename__ = 'catagories'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    #columns
    id = db.Column(db.Integer, primary_key=True)
    catagory = db.Column(db.String(100), nullable=False, unique=True)
    img = db.Column(db.String, nullable=False)
    created_at = db.Column(db.Date, default=datetime.date.today, nullable=False)
    updated_at = db.Column(db.Date, default=datetime.date.today, nullable=False)

    #relationships
    catagory_product = db.relationship('Product', back_populates='product_catagory')

    def to_dict(self):
        return {
            'id': self.id,
            'catagory': self.catagory,
            'img': self.img
            # 'name' : self.product_catagory.name,
            # 'product_shortdescription': self.catagory_product.product_shortdescription,
            # 'product_longdescription': self.catagory_product.product_longdescription,
            # 'price': self.catagory_product.price,
            # 'img1':self.catagory_product.img1,
            # 'img2':self.catagory_product.img2,
            # 'img3':self.catagory_product.img3,
            # 'img4':self.catagory_product.img4,
            # 'img5':self.catagory_product.img5,
        }

