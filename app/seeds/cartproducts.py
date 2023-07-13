from app.models import db,Cart_Product, environment, SCHEMA
from sqlalchemy.sql import text

def seed_cartproducts():
    cartproduct1=Cart_Product(
        cart_id = 1,
        user_id = 1,
        product_id = 1,
        quantity = 1,
    )

    db.session.add(cartproduct1)
    db.session.commit()

def undo_cartproducts():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.cart_products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM cart_products"))

    db.session.commit()