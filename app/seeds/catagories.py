from app.models import db, Catagory, environment, SCHEMA
from sqlalchemy.sql import text

def seed_catagories():
    catagory1 = Catagory(
        catagory='Electronics',
        img= 'https://myaaprojects.s3.us-east-2.amazonaws.com/electronics-catagories.jpeg'
    )
    catagory2 = Catagory(
        catagory='Clothes',
        img= 'https://myaaprojects.s3.us-east-2.amazonaws.com/clothes-catagory.png'
    )
    catagory3 = Catagory(
        catagory='Books',
        img= 'https://myaaprojects.s3.us-east-2.amazonaws.com/books-catagory.png'
    )
    catagory4 = Catagory(
        catagory='Sports and Fitness',
        img= 'https://myaaprojects.s3.us-east-2.amazonaws.com/sports-catagory.png'
    )
    catagory5 = Catagory(
        catagory='Cologne',
        img = 'https://myaaprojects.s3.us-east-2.amazonaws.com/cologne-cagatories.jpeg'
    )
    catagory6 = Catagory(
        catagory='Shoes',
        img="https://myaaprojects.s3.us-east-2.amazonaws.com/shoes-catagories.jpeg"
    )
    catagory7 = Catagory(
        catagory='Jewelry',
        img="https://myaaprojects.s3.us-east-2.amazonaws.com/jewellery-cat-img.jpeg"
    )
    catagory8 = Catagory(
        catagory='Toys',
        img="https://myaaprojects.s3.us-east-2.amazonaws.com/toys-catagory.png"
    )
    catagory9 = Catagory(
        catagory='Beauty',
        img="https://myaaprojects.s3.us-east-2.amazonaws.com/beauty-cat.png"
    )
    catagory10 = Catagory(
        catagory='Home Decor',
        img="https://myaaprojects.s3.us-east-2.amazonaws.com/home-decor-cat.png"
    )
    catagory11 = Catagory(
        catagory='Music',
        img="https://myaaprojects.s3.us-east-2.amazonaws.com/music-cat.png"
    )
    catagory12 = Catagory(
        catagory='Video Games',
        img="https://myaaprojects.s3.us-east-2.amazonaws.com/video-games-cat.png"
    )
    
    db.session.add(catagory1)
    db.session.add(catagory2)
    db.session.add(catagory3)
    db.session.add(catagory4)
    db.session.add(catagory5)
    db.session.add(catagory6)
    db.session.add(catagory7)
    db.session.add(catagory8)
    db.session.add(catagory9)
    db.session.add(catagory10)
    db.session.add(catagory11)
    db.session.add(catagory12)

    db.session.commit()

def undo_catagories():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.catagories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM catagories"))

    db.session.commit()    