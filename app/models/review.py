from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import datetime

class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    review = db.Column(db.String(5000), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.Date, default=datetime.date.today, nullable=False)
    updated_at = db.Column(db.Date, default=datetime.date.today, nullable=False)

    # Relationships
    review_user = db.relationship('User', back_populates='user_review')
    review_product = db.relationship('Product', back_populates='product_review')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id' : self.user_id,
            'product_id': self.product_id,
            'name': self.review_product.name,
            'img1':self.review_product.img1,
            'review': self.review,
            'rating':self.rating,
            'first_name':self.review_user.first_name,
            'last_name':self.review_user.last_name,

        }
    
