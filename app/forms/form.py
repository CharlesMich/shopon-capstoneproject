from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField, DecimalField
from wtforms.validators import DataRequired


class CatagoryForm(FlaskForm):
    catagory = StringField('Catagory', validators=[DataRequired()])

class ProductForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])    
    product_shortdescription = StringField('product_shortdescription', validators=[DataRequired()])
    product_longdescription = StringField('product_longdescription', validators=[DataRequired()])
    price = DecimalField('Price', validators=[DataRequired()])
    catagory_id = IntegerField('Catagory_id', validators=[DataRequired()])

class ReviewForm(FlaskForm):
    user_id = IntegerField('UserId', validators=[DataRequired()])
    product_id = IntegerField('ProductId', validators=[DataRequired()])
    review = StringField('Review', validators=[DataRequired()])
    rating = IntegerField('Rating', validators=[DataRequired()])

class OrderForm(FlaskForm):
    user_id = IntegerField('UserId', validators=[DataRequired()])

class OrderItemForm(FlaskForm):
    order_id = IntegerField('OrderId')
    product_id = IntegerField('ProductId', validators=[DataRequired()])
    product = StringField('Product', validators=[DataRequired()])
    price = IntegerField('Price', validators=[DataRequired()])
    quantity = IntegerField('Quantity', validators=[DataRequired()])


class CartForm(FlaskForm):
    user_id = IntegerField('UserId', validators=[DataRequired()])


class CartProductForm(FlaskForm):
    cart_id = IntegerField('CartId', validators=[DataRequired()])
    user_id = IntegerField('UserId', validators=[DataRequired()])
    productId = IntegerField('ProductId', validators=[DataRequired()])
    quantity = IntegerField('Quantity', validators=[DataRequired()])
    # price = IntegerField('Price', validators=[DataRequired()])


