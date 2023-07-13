from app.models import db, Product, environment, SCHEMA
from sqlalchemy.sql import text

def seed_products():
    product1 = Product(
        name = 'Iphone',
        product_shortdescription = 'Apple iPhone 13 (128GB, Pink) [Locked] + Carrier Subscription',
        product_longdescription = 'A superbright display in a durable design. Hollywood-worthy video shooting made easy. A lightning-fast chip. And a big boost in battery life youll notice every day.',
        price = 799,
        catagory_id = 1,
        img1 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/imgs-shopon/iphone-1.webp',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/imgs-shopon/iphone-2.jpg',
        img3 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/imgs-shopon/iphon3.jpg',
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/imgs-shopon/iphone4.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/imgs-shopon/iphone5.jpg'
    )
    product2 = Product(
        name = 'Samsung Galaxy',
        product_shortdescription = 'A Series Cell Phone, Factory Unlocked Android Smartphone, 128GB w/ 6.4” Fluid Display Screen, Hi Res Camera.',
        product_longdescription = 'CRISP DETAIL, CLEAR DISPLAY: Enjoy binge-watching on a clear, 6.4" screen* that provides a smooth entertainment experience; Scroll through social feeds and watch action-packed movies, catching all the details you need on your Galaxy A54 5G PRO SHOTS WITH EASE: Brilliant sunrises, awesome selfies — capture incredible content with Galaxy A54 5G; Snap clear images with Single Take** and OIS, and even take shots in low light with Nightography',
        price = 699,
        catagory_id = 1,
        img1='https://myaaprojects.s3.us-east-2.amazonaws.com/imgs-shopon/galaxy/galaxy1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/imgs-shopon/galaxy/galaxy2.jpg',
        img3 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/imgs-shopon/galaxy/galaxy3.jpg',
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/imgs-shopon/galaxy/galaxy4.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/imgs-shopon/galaxy/galaxy5.jpg'
    )
    product3 = Product(
        name = 'Apple Watch',
        product_shortdescription = 'Smart Watch w/Starlight Aluminum Case & Starlight Sport Band - M/L. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant',
        product_longdescription = 'All the essentials to help you monitor your fitness, keep connected, track your health, and stay safe. Now up to 20 percent faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever. EASILY CUSTOMIZABLE — Available in a range of sizes and colors, with dozens of bands to choose from and watch faces with complications tailored to whatever you’re into.',
        price = 499,
        catagory_id = 1,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/imgs-shopon/apple-watch/watch1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/imgs-shopon/apple-watch/watch2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/imgs-shopon/apple-watch/watch3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/imgs-shopon/apple-watch/watch4.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/imgs-shopon/apple-watch/watch5.jpg'
    )


    db.session.add(product1)
    db.session.add(product2)
    db.session.add(product3)

    db.session.commit()

def undo_products():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))

    db.session.commit()
