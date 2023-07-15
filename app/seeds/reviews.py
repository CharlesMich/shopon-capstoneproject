from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text

def seed_reviews():
    review1 = Review(
        user_id = 1,
        product_id = 1,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 5
    )
    review2 = Review(
        user_id = 1,
        product_id = 2,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 3
    )
    review3 = Review(
        user_id = 1,
        product_id = 3,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 3
    )
    review4 = Review(
        user_id = 1,
        product_id = 4,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 5
    )
    review5 = Review(
        user_id = 1,
        product_id = 5,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 4
    )
    review6 = Review(
        user_id = 1,
        product_id = 6,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 3
    )
    review7 = Review(
        user_id = 1,
        product_id = 7,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 5
    )
    review8 = Review(
        user_id = 1,
        product_id = 8,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 4
    )
    review9 = Review(
        user_id = 1,
        product_id = 9,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 3
    )
    review10 = Review(
        user_id = 1,
        product_id = 10,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 5
    )

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)
    db.session.add(review10)
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()