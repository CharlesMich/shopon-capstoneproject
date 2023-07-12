from app.models import db, ProductImage, environment, SCHEMA
from sqlalchemy.sql import text

def seed_productimages():
    productImage1 = ProductImage(
        product_id = 1,
        url = 'iphone-card-40-iphone14pro-202209_FMT_WHH.jpeg'
    )

    db.session.add(productImage1)

    db.session.commit()

def undo_productimages():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))

    db.session.commit()    

