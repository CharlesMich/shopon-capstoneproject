from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text

def seed_reviews():
    review1 = Review(
        user_id = 1,
        product_id = 1,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 5
    )

    db.session.add(review1)
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()