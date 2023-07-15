from app.models import db, Catagory, environment, SCHEMA
from sqlalchemy.sql import text

def seed_catagories():
    catagory1 = Catagory(
        catagory='Electronics'
    )
    catagory2 = Catagory(
        catagory='Books'
    )
    catagory3 = Catagory(
        catagory='Movies'
    )
    catagory4 = Catagory(
        catagory='Clothes'
    )
    catagory5 = Catagory(
        catagory='Cologne'
    )

    db.session.add(catagory1)
    db.session.add(catagory2)
    db.session.add(catagory3)
    db.session.add(catagory4)
    db.session.add(catagory5)
    db.session.commit()

def undo_catagories():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.catagories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM catagories"))

    db.session.commit()    