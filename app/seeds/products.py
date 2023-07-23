from app.models import db, Product, environment, SCHEMA
from sqlalchemy.sql import text

def seed_products():
    product1 = Product(
        name = 'Iphone',
        seller = 'Shopon',
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
        seller = 'Shopon',
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
        seller = 'Shopon',
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
        name = 'Ipad',
        seller = 'Shopon',
        product_shortdescription = 'Apple iPad (10th Generation): with A14 Bionic chip, 10.9-inch Liquid Retina Display, 64GB, Wi-Fi 6, 12MP ',
        product_longdescription = 'All the essentials to help you monitor your fitness, keep connected, track your health, and stay safe. Now up to 20 percent faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever. EASILY CUSTOMIZABLE — Available in a range of sizes and colors, with dozens of bands to choose from and watch faces with complications tailored to whatever you’re into.',
        price = 399,
        catagory_id = 1,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/ipad/ipad1.jpeg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/ipad/ipad2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/ipad/ipad3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/ipad/ipad4.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/ipad/ipad5.jpg'
    )
    product5 = Product(
        name = 'MacBook',
        seller = 'Shopon',
        product_shortdescription = 'Smart Watch w/Starlight Aluminum Case & Starlight Sport Band - M/L. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant',
        product_longdescription = 'All the essentials to help you monitor your fitness, keep connected, track your health, and stay safe. Now up to 20 percent faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever. EASILY CUSTOMIZABLE — Available in a range of sizes and colors, with dozens of bands to choose from and watch faces with complications tailored to whatever you’re into.',
        price = 499,
        catagory_id = 1,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/macbook/macbook1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/macbook/macbook2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/macbook/macbook3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/macbook/macbook4.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/macbook/macbook5.jpg'
    )
    product6 = Product(
        name = 'Cardigan',
        seller = 'Shopon',
        product_shortdescription = 'Smart Watch w/Starlight Aluminum Case & Starlight Sport Band - M/L. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant',
        product_longdescription = 'All the essentials to help you monitor your fitness, keep connected, track your health, and stay safe. Now up to 20 percent faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever. EASILY CUSTOMIZABLE — Available in a range of sizes and colors, with dozens of bands to choose from and watch faces with complications tailored to whatever you’re into.',
        price = 29,
        catagory_id = 2,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/cardigan1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/cardigan2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/cardigan3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/cardigan3.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/cardigan5.jpg'
    )
    product7 = Product(
        name = 'Hooded Sweatshirt',
        seller = 'Shopon',
        product_shortdescription = 'Smart Watch w/Starlight Aluminum Case & Starlight Sport Band - M/L. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant',
        product_longdescription = 'All the essentials to help you monitor your fitness, keep connected, track your health, and stay safe. Now up to 20 percent faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever. EASILY CUSTOMIZABLE — Available in a range of sizes and colors, with dozens of bands to choose from and watch faces with complications tailored to whatever you’re into.',
        price = 29,
        catagory_id = 2,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/hooded1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/hooded2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/hooded3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/hooded4.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/hooded5.jpg'
    )
    product8 = Product(
        name = 'Pants',
        seller = 'Shopon',
        product_shortdescription = 'Smart Watch w/Starlight Aluminum Case & Starlight Sport Band - M/L. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant',
        product_longdescription = 'All the essentials to help you monitor your fitness, keep connected, track your health, and stay safe. Now up to 20 percent faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever. EASILY CUSTOMIZABLE — Available in a range of sizes and colors, with dozens of bands to choose from and watch faces with complications tailored to whatever you’re into.',
        price = 44,
        catagory_id = 2,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/pants1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/pants2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/pants3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/pants4.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/pants5.jpg'
    )
    product9 = Product(
        name = 'Sweatshirt',
        seller = 'Shopon',
        product_shortdescription = 'Smart Watch w/Starlight Aluminum Case & Starlight Sport Band - M/L. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant',
        product_longdescription = 'All the essentials to help you monitor your fitness, keep connected, track your health, and stay safe. Now up to 20 percent faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever. EASILY CUSTOMIZABLE — Available in a range of sizes and colors, with dozens of bands to choose from and watch faces with complications tailored to whatever you’re into.',
        price = 39,
        catagory_id = 2,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/sweatshirt1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/sweatshirt2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/sweatshirt3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/sweatshirt4.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/sweatshirt5.jpg'
    )
    product10 = Product(
        name = 'Shorts',
        seller = 'Shopon',
        product_shortdescription = 'Smart Watch w/Starlight Aluminum Case & Starlight Sport Band - M/L. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant',
        product_longdescription = 'All the essentials to help you monitor your fitness, keep connected, track your health, and stay safe. Now up to 20 percent faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever. EASILY CUSTOMIZABLE — Available in a range of sizes and colors, with dozens of bands to choose from and watch faces with complications tailored to whatever you’re into.',
        price = 49,
        catagory_id = 2,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/shorts1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/shorts2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/shorts3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/shorts4.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/clothes/shorts5.jpg'
    )
    product11 = Product(
        name = 'The Exchange',
        seller = 'Shopon',
        product_shortdescription = 'Smart Watch w/Starlight Aluminum Case & Starlight Sport Band - M/L. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant',
        product_longdescription = 'All the essentials to help you monitor your fitness, keep connected, track your health, and stay safe. Now up to 20 percent faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever. EASILY CUSTOMIZABLE — Available in a range of sizes and colors, with dozens of bands to choose from and watch faces with complications tailored to whatever you’re into.',
        price = 49,
        catagory_id = 3,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/books/exchange-1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/books/exchange-2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/books/exchange-3.png",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/books/exchange-4.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/books/exchange5.png'
    )
    product12 = Product(
        name = 'Hunger Games MockingJay',
        seller = 'Shopon',
        product_shortdescription = 'Smart Watch w/Starlight Aluminum Case & Starlight Sport Band - M/L. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant',
        product_longdescription = 'All the essentials to help you monitor your fitness, keep connected, track your health, and stay safe. Now up to 20 percent faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever. EASILY CUSTOMIZABLE — Available in a range of sizes and colors, with dozens of bands to choose from and watch faces with complications tailored to whatever you’re into.',
        price = 39,
        catagory_id = 3,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/books/mockjay1.jpeg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/books/mockjay1.jpeg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/books/mockjay3.webp",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/books/mockjay4.jpeg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/books/mockjay5.png'
    )
    product13 = Product(
        name = 'Steve Jobs Autobiography',
        seller = 'Shopon',
        product_shortdescription = 'Smart Watch w/Starlight Aluminum Case & Starlight Sport Band - M/L. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant',
        product_longdescription = 'All the essentials to help you monitor your fitness, keep connected, track your health, and stay safe. Now up to 20 percent faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever. EASILY CUSTOMIZABLE — Available in a range of sizes and colors, with dozens of bands to choose from and watch faces with complications tailored to whatever you’re into.',
        price = 29,
        catagory_id = 3,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/books/stevejobs1.webp',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/books/stevejobs2.png',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/books/stevejobs3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/books/stevejobs4.webp',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/books/stevejobs5.webp'
    )
    product14 = Product(
        name = 'Stephen Hawkings Autobiography',
        seller = 'Shopon',
        product_shortdescription = 'Smart Watch w/Starlight Aluminum Case & Starlight Sport Band - M/L. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant',
        product_longdescription = 'All the essentials to help you monitor your fitness, keep connected, track your health, and stay safe. Now up to 20 percent faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever. EASILY CUSTOMIZABLE — Available in a range of sizes and colors, with dozens of bands to choose from and watch faces with complications tailored to whatever you’re into.',
        price = 24,
        catagory_id = 3,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/books/hawking1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/books/hawking2.avif',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/books/hawking3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/books/hawking4.jpeg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/books/hawking5.jpeg'
    )
    product15 = Product(
        name = 'Javascript A complete Guide',
        seller = 'Shopon',
        product_shortdescription = 'Smart Watch w/Starlight Aluminum Case & Starlight Sport Band - M/L. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant',
        product_longdescription = 'All the essentials to help you monitor your fitness, keep connected, track your health, and stay safe. Now up to 20 percent faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever. EASILY CUSTOMIZABLE — Available in a range of sizes and colors, with dozens of bands to choose from and watch faces with complications tailored to whatever you’re into.',
        price = 19,
        catagory_id = 3,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/books/javascript1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/books/js2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/books/js3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/books/js4.png',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/books/js5.jpeg'
    )
    product16 = Product(
        name = 'Basketball',
        seller = 'Shopon',
        product_shortdescription = 'Smart Watch w/Starlight Aluminum Case & Starlight Sport Band - M/L. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant',
        product_longdescription = 'All the essentials to help you monitor your fitness, keep connected, track your health, and stay safe. Now up to 20 percent faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever. EASILY CUSTOMIZABLE — Available in a range of sizes and colors, with dozens of bands to choose from and watch faces with complications tailored to whatever you’re into.',
        price = 19,
        catagory_id = 4,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/sports/basketball1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/sports/basketball2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/sports/basketball3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/sports/basketball4.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/sports/basketball5.jpg'
    )
    product17 = Product(
        name = 'Baseball',
        seller = 'Shopon',
        product_shortdescription = 'Smart Watch w/Starlight Aluminum Case & Starlight Sport Band - M/L. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant',
        product_longdescription = 'All the essentials to help you monitor your fitness, keep connected, track your health, and stay safe. Now up to 20 percent faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever. EASILY CUSTOMIZABLE — Available in a range of sizes and colors, with dozens of bands to choose from and watch faces with complications tailored to whatever you’re into.',
        price = 19,
        catagory_id = 4,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/sports/baseball1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/sports/baseball2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/sports/baseball3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/sports/baseball4.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/sports/baseball5.jpg'
    )
    product18 = Product(
        name = 'Bike',
        seller = 'Shopon',
        product_shortdescription = 'Smart Watch w/Starlight Aluminum Case & Starlight Sport Band - M/L. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant',
        product_longdescription = 'All the essentials to help you monitor your fitness, keep connected, track your health, and stay safe. Now up to 20 percent faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever. EASILY CUSTOMIZABLE — Available in a range of sizes and colors, with dozens of bands to choose from and watch faces with complications tailored to whatever you’re into.',
        price = 199,
        catagory_id = 4,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/sports/bike1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/sports/bike2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/sports/bike3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/sports/bike4.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/sports/bike5.jpg'
    )
    product19 = Product(
        name = 'Soccor',
        seller = 'Shopon',
        product_shortdescription = 'Smart Watch w/Starlight Aluminum Case & Starlight Sport Band - M/L. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant',
        product_longdescription = 'All the essentials to help you monitor your fitness, keep connected, track your health, and stay safe. Now up to 20 percent faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever. EASILY CUSTOMIZABLE — Available in a range of sizes and colors, with dozens of bands to choose from and watch faces with complications tailored to whatever you’re into.',
        price = 29,
        catagory_id = 4,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/sports/soccor1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/sports/soccor2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/sports/soccor3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/sports/soccor4.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/sports/soccor5.jpg'
    )
    product20 = Product(
        name = 'Treadmill',
        seller = 'Shopon',
        product_shortdescription = 'Smart Watch w/Starlight Aluminum Case & Starlight Sport Band - M/L. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant',
        product_longdescription = 'All the essentials to help you monitor your fitness, keep connected, track your health, and stay safe. Now up to 20 percent faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever. EASILY CUSTOMIZABLE — Available in a range of sizes and colors, with dozens of bands to choose from and watch faces with complications tailored to whatever you’re into.',
        price = 449,
        catagory_id = 4,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/sports/treadmill1.jpg',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/sports/treadmill2.jpg',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/sports/treadmill3.jpg",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/sports/treadmill4.jpg',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/sports/treadmill5.jpg'
    )
    product21 = Product(
        name = 'ARMAF club de nuit',
        seller = 'Shopon',
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
    product22 = Product(
        name = 'CR7 Play It Cool',
        seller = 'Shopon',
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
    product23 = Product(
        name = 'Savage for Men',
        seller = 'Shopon',
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
    product24 = Product(
        name = 'Rue 21 CJ Black Men',
        seller = 'Shopon',
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
    product25 = Product(
        name = 'Kenneth Cole',
        seller = 'Shopon',
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
    product26 = Product(
        name = 'Kezhiho Steel',
        seller = 'Shopon',
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
    product27 = Product(
        name = 'MLAGJSS',
        seller = 'Shopon',
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
    product28 = Product(
        name = 'PUMA',
        seller = 'Shopon',
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

    product29 = Product(
            name = 'Saucony',
            seller = 'Shopon',
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

    product30 = Product(
        name = 'Sketchers',
        seller = 'Shopon',
        product_shortdescription = 'Skechers Mens Afterburn Memory-Foam Lace-up Sneaker',
        product_longdescription = 'Lightweight Skin-friendly Mesh Imported Air Cushion sole Air cushion The specially made heel can reduce vibration, flexible rebound, and provide maximum comfort for walking and standing. Anti-smash The sturdy European standard steel toe protects your toes against any impact. Puncture-proof The lightweight and tough Kevlar midsole protects the sole of the foot from puncture injuries from sharp objects. Non-slif Abrasion-resistant slip-resistant tread sole provides firm foot grip, giving you the traction you need to stay safe.',
        price = 89,
        catagory_id = 6,
        img1 ='https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/sketchers.png',
        img2 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/sketchers2.png',
        img3 = "https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/sketchers3.png",
        img4 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/sketchers4.png',
        img5 = 'https://myaaprojects.s3.us-east-2.amazonaws.com/shoes/sketchers.png'
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
    db.session.add(product16)
    db.session.add(product17)
    db.session.add(product18)
    db.session.add(product19)
    db.session.add(product20)
    db.session.add(product21)
    db.session.add(product22)
    db.session.add(product23)
    db.session.add(product24)
    db.session.add(product25)
    db.session.add(product26)
    db.session.add(product27)
    db.session.add(product28)
    db.session.add(product29)
    db.session.add(product30)

    db.session.commit()

def undo_products():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))

    db.session.commit()
