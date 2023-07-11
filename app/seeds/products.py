from app.models import db, Product, environment, SCHEMA
from sqlalchemy.sql import text

def seed_products():
    product1 = Product(
        name = 'iphone',
        product_shortdescription = 'Apple iPhone 13 (128GB, Pink) [Locked] + Carrier Subscription',
        product_longdescription = 'A superbright display in a durable design. Hollywood-worthy video shooting made easy. A lightning-fast chip. And a big boost in battery life youll notice every day.',
        price = 799,
        catagory_id = 1
    )

    db.session.add(product1)

    db.session.commit()

def undo_products():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))

    db.session.commit()
