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
    product4 = Product(
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
    product5 = Product(
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
    product6 = Product(
        name = 'ARMAF club de nuit',
        product_shortdescription = 'intense Man EDT Men New in Box, Black , 3.6 Fl Oz',
        product_longdescription = 'Club de Nuit Intense Man by Armaf is a Woody Spicy fragrance for men. Club de Nuit Intense Man was launched in 2015.The initial smell was terrible, BUT after a couple of min it smelled very good on my skin. For the price this cologne is great. It is a Eau de toilette and not a parfum so it won’t last long. This is perfect for going to the gym. Skin types for matter a ton, I myself am middle eastern and this brand being middle eastern certainly helps who they tested it on for the best scent.',
        price = 99,
        catagory_id = 5,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/armaf1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/armaf2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/armaf3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/armaf4.jpg',
         img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/armaf4.jpg',

    )
    product7 = Product(
        name = 'CR7 Play It Cool',
        product_shortdescription = 'CR7 Play It Cool Cristiano Ronaldo - Eau De Toilette Cologne Scent for Men - With Mandarin, Bergamot, Lavender, and Musk - From Cristiano Ronaldos Original Mens Fragrance Collection - 3.4 oz',
        product_longdescription = 'A CLASSIC, COOL BLEND. A refreshing, vibrant scent for the effortlessly self-confident and energetic man. Experience Play It Cool, and everyday Eau De Toilette cologne from Cristiano Ronaldos legendary collection of curated fragrances. INTENSE FRAGRANCE UNLEASHED. CR7 Play It Cool arrives with vibrant top notes of Mandarin, Bergamot, and Pear, with fresh middle notes of Lavender, Cardamom and Marine Accord, drying to a seductive base of Amberwood, Tonka, and Musk.',
        price = 89,
        catagory_id = 5,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/cr1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/cr2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/cr3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/cr4.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/cr5.jpg'
    )
    product8 = Product(
        name = 'Savage for Men',
        product_shortdescription = '3.4 Oz Mens Eau De Toilette Spray Refreshing & Warm Masculine Scent for Daily Use Mens Casual Cologne Includes NovoGlow Carrying Pouch Smell Fresh All Day A Gift for Any Occasion',
        product_longdescription = 'A CLASSIC, COOL BLEND. A refreshing, vibrant scent for the effortlessly self-confident and energetic man. Experience Play It Cool, and everyday Eau De Toilette cologne from Cristiano Ronaldos legendary collection of curated fragrances. INTENSE FRAGRANCE UNLEASHED. CR7 Play It Cool arrives with vibrant top notes of Mandarin, Bergamot, and Pear, with fresh middle notes of Lavender, Cardamom and Marine Accord, drying to a seductive base of Amberwood, Tonka, and Musk.',
        price = 79,
        catagory_id = 5,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/savage1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/savage2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/savave3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/savage4.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/savage5.jpg'
    )
    product9 = Product(
        name = 'Rue 21 CJ Black Men',
        product_shortdescription = 'Clean and Classic Cologne: The perfect head-turning accessory for any time or occasion',
        product_longdescription = 'A CLASSIC, COOL BLEND. A refreshing, vibrant scent for the effortlessly self-confident and energetic man. Experience Play It Cool, and everyday Eau De Toilette cologne from Cristiano Ronaldos legendary collection of curated fragrances. INTENSE FRAGRANCE UNLEASHED. CR7 Play It Cool arrives with vibrant top notes of Mandarin, Bergamot, and Pear, with fresh middle notes of Lavender, Cardamom and Marine Accord, drying to a seductive base of Amberwood, Tonka, and Musk.',
        price = 69,
        catagory_id = 5,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/black1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/black2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/black3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/black1.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/black1.jpg'
    )
    product10 = Product(
        name = 'Kenneth Cole',
        product_shortdescription = 'Smart Watch w/Starlight Aluminum Case & Starlight Sport Band - M/L. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant',
        product_longdescription = 'A CLASSIC, COOL BLEND. A refreshing, vibrant scent for the effortlessly self-confident and energetic man. Experience Play It Cool, and everyday Eau De Toilette cologne from Cristiano Ronaldos legendary collection of curated fragrances. INTENSE FRAGRANCE UNLEASHED. CR7 Play It Cool arrives with vibrant top notes of Mandarin, Bergamot, and Pear, with fresh middle notes of Lavender, Cardamom and Marine Accord, drying to a seductive base of Amberwood, Tonka, and Musk.',
        price = 59,
        catagory_id = 5,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/kencole1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/kencole2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/kencol3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/kencole4.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/cologne/kencole1.jpg'
    )
    product11 = Product(
        name = 'Kezhiho Steel',
        product_shortdescription = 'Toe Shoes for Women Air Cushion Lightweight Work Shoes Comfortable Breathable Puncture Proof Slip Resistant Sneakers',
        product_longdescription = 'Lightweight Skin-friendly Mesh Imported Air Cushion sole Air cushion The specially made heel can reduce vibration, flexible rebound, and provide maximum comfort for walking and standing. Anti-smash The sturdy European standard steel toe protects your toes against any impact. Puncture-proof The lightweight and tough Kevlar midsole protects the sole of the foot from puncture injuries from sharp objects. Non-slif Abrasion-resistant slip-resistant tread sole provides firm foot grip, giving you the traction you need to stay safe.',
        price = 59,
        catagory_id = 6,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/Kezhiho1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/Kezhiho2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/Kezhiho3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/Kezhiho4.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/Kezhiho5.jpg'
    )
    product12 = Product(
        name = 'MLAGJSS',
        product_shortdescription = 'Running Shoes Women Sneakers Tennis Workout Walking Gym',
        product_longdescription = 'Lightweight Skin-friendly Mesh Imported Air Cushion sole Air cushion The specially made heel can reduce vibration, flexible rebound, and provide maximum comfort for walking and standing. Anti-smash The sturdy European standard steel toe protects your toes against any impact. Puncture-proof The lightweight and tough Kevlar midsole protects the sole of the foot from puncture injuries from sharp objects. Non-slif Abrasion-resistant slip-resistant tread sole provides firm foot grip, giving you the traction you need to stay safe.',
        price = 49,
        catagory_id = 6,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/mlagjss1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/mlagjss2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/mlagjss3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/mlagjss4.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/mlag5.jss.jpg'
    )
    product13 = Product(
        name = 'PUMA',
        product_shortdescription = 'Womens Carina Sneaker New tooling with an elevated platform sole.',
        product_longdescription = 'Lightweight Skin-friendly Mesh Imported Air Cushion sole Air cushion The specially made heel can reduce vibration, flexible rebound, and provide maximum comfort for walking and standing. Anti-smash The sturdy European standard steel toe protects your toes against any impact. Puncture-proof The lightweight and tough Kevlar midsole protects the sole of the foot from puncture injuries from sharp objects. Non-slif Abrasion-resistant slip-resistant tread sole provides firm foot grip, giving you the traction you need to stay safe.',
        price = 69,
        catagory_id = 6,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/puma1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/puma2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/puma3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/puma4.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/puma5.jpg'
    )

    product14 = Product(
            name = 'Saucony',
            product_shortdescription = 'Saucony Mens Ride 15 Running Shoe. Lighter, Softer and Faster: A new softer PWRRUN formula means a thicker stack of cushioning with less weight, for your springiest run yet.',
            product_longdescription = 'Lightweight Skin-friendly Mesh Imported Air Cushion sole Air cushion The specially made heel can reduce vibration, flexible rebound, and provide maximum comfort for walking and standing. Anti-smash The sturdy European standard steel toe protects your toes against any impact. Puncture-proof The lightweight and tough Kevlar midsole protects the sole of the foot from puncture injuries from sharp objects. Non-slif Abrasion-resistant slip-resistant tread sole provides firm foot grip, giving you the traction you need to stay safe.',
            price = 99,
            catagory_id = 6,
            img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/saucony1.jpg',
            img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/saucony2.jpg',
            img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/saucony3.jpg",
            img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/saucony4.jpg',
            img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/saucony5.jpg'
        )

    product15 = Product(
        name = 'Sketchers',
        product_shortdescription = 'Skechers Mens Afterburn Memory-Foam Lace-up Sneaker',
        product_longdescription = 'Lightweight Skin-friendly Mesh Imported Air Cushion sole Air cushion The specially made heel can reduce vibration, flexible rebound, and provide maximum comfort for walking and standing. Anti-smash The sturdy European standard steel toe protects your toes against any impact. Puncture-proof The lightweight and tough Kevlar midsole protects the sole of the foot from puncture injuries from sharp objects. Non-slif Abrasion-resistant slip-resistant tread sole provides firm foot grip, giving you the traction you need to stay safe.',
        price = 89,
        catagory_id = 6,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/sketchers.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/sketchers2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/sketchers3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/sketchers4.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/sketchers.jpg'
    )

    db.session.add(product1)
    db.session.add(product2)
    db.session.add(product3)
    db.session.add(product4)
    db.session.add(product5)
    db.session.add(product6)
    db.session.add(product7)
    db.session.add(product8)
    db.session.add(product9)
    db.session.add(product10)
    db.session.add(product11)
    db.session.add(product12)
    db.session.add(product13)
    db.session.add(product14)
    db.session.add(product15)

    db.session.commit()

def undo_products():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))

    db.session.commit()
