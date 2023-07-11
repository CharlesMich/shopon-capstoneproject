from app.models import db, Catagory, environment, SCHEMA
from sqlalchemy.sql import text

def seed_catagories():
    catagory1 = Catagory(
        catagory='Phone'
    )

    db.session.add(catagory1)
    db.session.commit()

def undo_catagories():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.catagories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM catagories"))

    db.session.commit()    