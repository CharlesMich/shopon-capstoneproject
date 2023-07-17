from app.models import db, Catagory, environment, SCHEMA
from sqlalchemy.sql import text

def seed_catagories():
    catagory1 = Catagory(
        catagory='Electronics',
        img= 'https://myaaprojects.s3.us-east-2.amazonaws.com/imgs-shopon/iphone-1.webp'
    )
    catagory2 = Catagory(
        catagory='Books',
        img= 'https://myaaprojects.s3.us-east-2.amazonaws.com/imgs-shopon/iphone-1.webp'
    )
    catagory3 = Catagory(
        catagory='Movies',
        img= 'https://myaaprojects.s3.us-east-2.amazonaws.com/imgs-shopon/iphone-1.webp'
    )
    catagory4 = Catagory(
        catagory='Clothes',
        img= 'https://myaaprojects.s3.us-east-2.amazonaws.com/imgs-shopon/iphone-1.webp'
    )
    catagory5 = Catagory(
        catagory='Cologne',
        img = 'https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/kencole1.jpg'
    )
    catagory6 = Catagory(
        catagory='Shoes',
        img="https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/Kezhiho1.jpg"
    )

    db.session.add(catagory1)
    db.session.add(catagory2)
    db.session.add(catagory3)
    db.session.add(catagory4)
    db.session.add(catagory5)
    db.session.add(catagory6)
    db.session.commit()

def undo_catagories():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.catagories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM catagories"))

    db.session.commit()    