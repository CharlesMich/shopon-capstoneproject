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
    created_at = db.Column(db.Date, default=datetime.date.today, nullable=False)
    updated_at = db.Column(db.Date, default=datetime.date.today, nullable=False)

    #relationships
    catagory_product = db.relationship('Product', back_populates='product_catagory')

