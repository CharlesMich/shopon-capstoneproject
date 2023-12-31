from app.models import db, Order_Item, environment, SCHEMA
from sqlalchemy.sql import text

def seed_orderitems():
    orderitem1 = Order_Item(
        order_id=1,
        product_id=1,
        product='Iphone',
        price=799,
        quantity=1,
    )

    db.session.add(orderitem1)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.


def undo_orderitem():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.order_items RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM order_items"))

    db.session.commit()