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
        rating = 4
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
        rating = 2
    )
    review5 = Review(
        user_id = 1,
        product_id = 5,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 1
    )
    review6 = Review(
        user_id = 1,
        product_id = 6,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 5
    )
    review7 = Review(
        user_id = 1,
        product_id = 7,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 4
    )
    review8 = Review(
        user_id = 1,
        product_id = 8,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 3
    )
    review9 = Review(
        user_id = 1,
        product_id = 9,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 2
    )
    review10 = Review(
        user_id = 1,
        product_id = 10,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 1
    )
    review11 = Review(
        user_id = 2,
        product_id = 11,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 5
    )
    review12 = Review(
        user_id = 2,
        product_id = 12,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 4
    )
    review13 = Review(
        user_id = 2,
        product_id = 13,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 3
    )
    review14 = Review(
        user_id = 2,
        product_id = 14,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 2
    )
    review15 = Review(
        user_id = 2,
        product_id = 15,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 1
    )
    review16 = Review(
        user_id = 2,
        product_id = 16,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 5
    )
    review17 = Review(
        user_id = 2,
        product_id = 17,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 4
    )
    review18 = Review(
        user_id = 2,
        product_id = 18,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 3
    )
    review19 = Review(
        user_id = 2,
        product_id = 19,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 2
    )
    review20 = Review(
        user_id = 2,
        product_id = 20,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 1
    )
    review21 = Review(
        user_id = 3,
        product_id = 21,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 5
    )
    review22 = Review(
        user_id = 3,
        product_id = 22,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 4
    )
    review23 = Review(
        user_id = 3,
        product_id = 23,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 3
    )
    review24 = Review(
        user_id = 3,
        product_id = 24,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 2
    )
    review25 = Review(
        user_id = 3,
        product_id = 25,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 1
    )
    review26 = Review(
        user_id = 3,
        product_id = 26,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 5
    )
    review27 = Review(
        user_id = 3,
        product_id = 27,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 4
    )
    review28 = Review(
        user_id = 3,
        product_id = 28,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 3
    )
    review29 = Review(
        user_id = 3,
        product_id = 29,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 2
    )
    review30 = Review(
        user_id = 3,
        product_id = 30,
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 1
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
    db.session.add(review11)
    db.session.add(review12)
    db.session.add(review13)
    db.session.add(review14)
    db.session.add(review15)
    db.session.add(review16)
    db.session.add(review17)
    db.session.add(review18)
    db.session.add(review19)
    db.session.add(review20)
    db.session.add(review21)
    db.session.add(review22)
    db.session.add(review23)
    db.session.add(review24)
    db.session.add(review25)
    db.session.add(review26)
    db.session.add(review27)
    db.session.add(review28)
    db.session.add(review29)
    db.session.add(review30)
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()