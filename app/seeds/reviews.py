from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text

def seed_reviews():
    review1 = Review(
        user_id = 5,
        product_id = 1,
        title = 'Great phone',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 5
    )
    review2 = Review(
        user_id = 5,
        product_id = 2,
         title = 'Battery Life is excellent',
        review = 'Love this phone, After 2 months I can say this is a true all day phone. The battery drain overnight is practically nil. I dont upgrade every year, but glad I did this time. Im an ordinary user, and for day to day use, its superb. 5G and wifi have worked flawlessly. Getting older and needed a bigger screen. Screen is bright and clear, and its comfortable to hold. If you dont need the s pen and 200mp camera, S23+ is it. Only thing I wish it had was 10x optical zoom like the ultra.',
        rating = 4
    )
    review3 = Review(
        user_id = 5,
        product_id = 3,
        title = 'Best Watch for Health and Daily Life!',
        review = 'This is probably the most useful watch to own when it comes to health related tracking. It can track everything from your heart rate, exercise, standing time, distance, and sleep. As nice as that sounds I honestly barely use those functions. I imagine knowing this information probably help if I worried about my health personally, but what sold me on this watch is the other features. Here are a few I personally found incredibly useful.',
        rating = 3
    )
    review4 = Review(
        user_id = 5,
        product_id = 4,
        title = 'The Powerhouse for Productivity and Creativity',
        review = 'The Apple iPad (10th Generation) is a true powerhouse that seamlessly combines performance, versatility, and a stunning display. Whether youre a student, professional, or creative individual, this iPad offers an immersive experience that enhances productivity, fuels creativity, and keeps you connected like never before. The standout feature of the Apple iPad is its 10.2-inch Retina display. With its vibrant colors, sharp details, and True Tone technology, the display brings your content to life. Whether youre browsing the web, editing photos, or watching movies, the visuals are breathtaking, offering an immersive and enjoyable viewing experience.',
        rating = 2
    )
    review5 = Review(
        user_id = 5,
        product_id = 5,
        title = 'Great battery life, great performance!',
        review = ' i bought parallels desktop and a windows 11 license. I need it to try a certain amount of things in IT, however, the performance when running windows in a virtualized environment (like parallels is) it gets seriously affected on the M1, something that didnt happen with intel processors. You notice the performance degrading (but not that much, maybe 10, or even 15% i risk to say) when switching between full screens and main desktop with windows (full separate screen, remember that theres an option to seamlessly integrate within your macOS). ',
        rating = 1
    )
    review6 = Review(
        user_id = 5,
        product_id = 6,
        title = 'Great buy',
        review = 'I wanted something light and simple to take on a trip where I knew there would be occasional situations of more air conditioning than I could handle. I picked this sweater because it looked like sweaters we wore in the 1950s, and, to me, that meant it would be just right for the job. It was.',
        rating = 5
    )
    review7 = Review(
        user_id = 5,
        product_id = 7,
        title = 'Perfect fit',
        review = 'I like this jacket, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 4
    )
    review8 = Review(
        user_id = 5,
        product_id = 8,
         title = 'Absolutely love these',
        review = 'Yesssss super quality 100% cotton cargo pants that look great and a versatile piece of clothing to add to your essentials. Invest in at least 2 pairs of these cargos- you won’t regret it! I got a pair for me and my 20 year old son- he loves them and says they fit great. Im 5’ tall and weigh 130 lbs and got a 32. I think i could’ve got the 30’s bc i had to tie the waist part pretty tight so it didn’t gap in the back. Other than that, they feel nice on and look trendy but a staple at the same time. Im getting 2 more pairs in a 30” ty to the seller for these cute cargos',
        rating = 3
    )
    review9 = Review(
        user_id = 5,
        product_id = 9,
        title = 'my new favorite!!',
        review = 'Its truely oversize sweatshirt, so just get your normal size no need to size up when ordering. The fleece inside layer is pretty thick, and i was actually hoping its not as thick for Spring/ Summer nights use, so now this willl become my winter wear instead. Color is great, love oversize and loose fit.',
        rating = 2
    )
    review10 = Review(
        user_id = 5,
        product_id = 10,
        title = 'Light weight with quality soft cotton',
        review = 'Great price & true navy color as shown. Soft material and light cotton fabric. I like because not as heavy a chino-like IZOD or Dockers fabric. Great for hot weather. Quality zipper and buttons. Con: 36 waist was just a bit tight, but like got material will start to stretch. Well worth the purchase. Due to thinner fabric for longevity should probably wash cold and hang to dry. Really worth the price.',
        rating = 1
    )
    review11 = Review(
        user_id = 5,
        product_id = 11,
        title = 'Must read book',
        review = 'I read a good number of Grisham novels. I am not sure The Firm is part of them, but I remember the movie as one splendid adaptation with a brilliant Tom Cruise. The book came out in 1985, the Sydney Pollack film, in 1993. I rented it thirty years later with Prime and didnt care whether I would watch it till the end or not. The incessant jazzy music sliding through the action is annoying as it seems to belong more to a comedy than a thriller. If Cruise enters Grishams character Mitch like a reincarnation, as the movie progresses Grishams voice takes a distance, and Pollacks not so-subtle interpretation and re-writing take over. Truth is the movie has aged.',
        rating = 5
    )
    review12 = Review(
        user_id = 5,
        product_id = 12,
        title = 'Best book',
        review = ' just cant believe this has finished , when I first started reading this I had the mindset of "Oh well its a famous book , lets try it out but slowly it has grown on me and taken over my thoughts. Kats emotions are my emotions. Peetas agony my agony and every single person who has died has burrowed a place deep in my heart. I am glad but also sad that this journey has come to an end , but I will never forget it not in my darkest times not in my My brightest days',
        rating = 4
    )
    review13 = Review(
        user_id = 4,
        product_id = 1,
        title = 'Great Biography',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 3
    )
    review14 = Review(
        user_id = 4,
        product_id = 2,
        title = 'He changed everything',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 2
    )
    review15 = Review(
        user_id = 4,
        product_id = 3,
        title = 'A complete book on JS',
        review = 'I like thisthis, it’s better than the other books i have read before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 1
    )
    review16 = Review(
        user_id = 4,
        product_id = 4,
        title = 'Long lasting ball',
        review = 'I like this ball, It is long lasting and  better than the one I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 5
    )
    review17 = Review(
        user_id = 4,
        product_id = 5,
        title = 'Dont buy this!!!',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 4
    )
    review18 = Review(
        user_id = 4,
        product_id = 6,
        title = 'You will love this',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 3
    )
    review19 = Review(
        user_id = 4,
        product_id = 7,
        title = 'Not as expected',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 2
    )
    review20 = Review(
        user_id = 4,
        product_id = 8,
        title = 'Not moneys worth',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 1
    )
    review21 = Review(
        user_id = 4,
        product_id = 9,
        title = 'Get it rightaway',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 5
    )
    review22 = Review(
        user_id = 4,
        product_id = 10,
        title = 'Smells great',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 4
    )
    review23 = Review(
        user_id = 4,
        product_id = 11,
        title = 'Mild and lasts for hours',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 3
    )
    review24 = Review(
        user_id = 4,
        product_id = 12,
        title = 'Not impressed',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 2
    )
    review25 = Review(
        user_id = 3,
        product_id = 1,
        title = 'Great deal',
        review = 'I like this cologne, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 1
    )
    review26 = Review(
        user_id = 3,
        product_id = 2,
        title = 'Highly recommended',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 5
    )
    review27 = Review(
        user_id = 3,
        product_id = 3,
        title = 'Better than expected',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 4
    )
    review28 = Review(
        user_id = 3,
        product_id = 4,
        title = 'very lightweight, comfortable shoes',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 3
    )
    review29 = Review(
        user_id = 3,
        product_id = 5,
        title = 'very comfortable for the feet',
        review = 'I recently purchased a pair of tennis shoes for my active lifestyle, and I have been impressed with their overall performance and versatility. In this review, I will share my experiences and thoughts on these tennis shoes, highlighting their comfort, durability, and suitability for various activities.',
        rating = 2
    )
    review30 = Review(
        user_id = 3,
        product_id = 6,
        title = 'Classic and comfortable',
        review = 'Bought these for a on duty shoe for the fire department. Didnt really have high expectations for the price point, especially since Im pretty excessively a HOKA man, these are actually quite comfortable and I would absolutely recommend them if you need a decent shoe for a reasonable price.',
        rating = 1
    )
    review31 = Review(
        user_id = 3,
        product_id = 7,
        title = 'Get it rightaway',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 5
    )
    review32 = Review(
        user_id = 3,
        product_id = 8,
        title = 'Smells great',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 4
    )
    review33 = Review(
        user_id = 3,
        product_id = 9,
        title = 'Mild and lasts for hours',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 3
    )
    review34 = Review(
        user_id = 3,
        product_id = 10,
        title = 'Not impressed',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 2
    )
    review35 = Review(
        user_id = 3,
        product_id = 11,
        title = 'Great deal',
        review = 'I like this cologne, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 1
    )
    review36 = Review(
        user_id = 3,
        product_id = 12,
        title = 'Highly recommended',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 5
    )
    review37 = Review(
        user_id = 2,
        product_id = 1,
        title = 'Better than expected',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 4
    )
    review38 = Review(
        user_id = 2,
        product_id = 2,
        title = 'very lightweight, comfortable shoes',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 3
    )
    review39 = Review(
        user_id = 2,
        product_id = 3,
        title = 'very comfortable for the feet',
        review = 'I recently purchased a pair of tennis shoes for my active lifestyle, and I have been impressed with their overall performance and versatility. In this review, I will share my experiences and thoughts on these tennis shoes, highlighting their comfort, durability, and suitability for various activities.',
        rating = 2
    )
    review40 = Review(
        user_id = 2,
        product_id = 4,
        title = 'Classic and comfortable',
        review = 'Bought these for a on duty shoe for the fire department. Didnt really have high expectations for the price point, especially since Im pretty excessively a HOKA man, these are actually quite comfortable and I would absolutely recommend them if you need a decent shoe for a reasonable price.',
        rating = 1
    )
    review41 = Review(
        user_id = 2,
        product_id = 5,
        title = 'Get it rightaway',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 5
    )
    review42 = Review(
        user_id = 2,
        product_id = 6,
        title = 'Smells great',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 4
    )
    review43 = Review(
        user_id = 2,
        product_id = 7,
        title = 'Mild and lasts for hours',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 3
    )
    review44 = Review(
        user_id = 2,
        product_id = 8,
        title = 'Not impressed',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 2
    )
    review45 = Review(
        user_id = 2,
        product_id = 9,
        title = 'Great deal',
        review = 'I like this cologne, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 1
    )
    review46 = Review(
        user_id = 2,
        product_id = 10,
        title = 'Highly recommended',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 5
    )
    review47 = Review(
        user_id = 2,
        product_id = 11,
        title = 'Better than expected',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 4
    )
    review48 = Review(
        user_id = 2,
        product_id = 12,
        title = 'very lightweight, comfortable shoes',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 3
    )
    review49 = Review(
        user_id = 1,
        product_id = 1,
        title = 'very comfortable for the feet',
        review = 'I recently purchased a pair of tennis shoes for my active lifestyle, and I have been impressed with their overall performance and versatility. In this review, I will share my experiences and thoughts on these tennis shoes, highlighting their comfort, durability, and suitability for various activities.',
        rating = 2
    )
    review50 = Review(
        user_id = 1,
        product_id = 2,
        title = 'Classic and comfortable',
        review = 'Bought these for a on duty shoe for the fire department. Didnt really have high expectations for the price point, especially since Im pretty excessively a HOKA man, these are actually quite comfortable and I would absolutely recommend them if you need a decent shoe for a reasonable price.',
        rating = 1
    )
    review51 = Review(
        user_id = 1,
        product_id = 3,
        title = 'Get it rightaway',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 5
    )
    review52 = Review(
        user_id = 1,
        product_id = 4,
        title = 'Smells great',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 4
    )
    review53 = Review(
        user_id = 1,
        product_id = 5,
        title = 'Mild and lasts for hours',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 3
    )
    review54 = Review(
        user_id = 1,
        product_id = 6,
        title = 'Not impressed',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 2
    )
    review55 = Review(
        user_id = 1,
        product_id = 7,
        title = 'Great deal',
        review = 'I like this cologne, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 1
    )
    review56 = Review(
        user_id = 1,
        product_id = 8,
        title = 'Highly recommended',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 5
    )
    review57 = Review(
        user_id = 1,
        product_id = 9,
        title = 'Better than expected',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 4
    )
    review58 = Review(
        user_id = 1,
        product_id = 10,
        title = 'very lightweight, comfortable shoes',
        review = 'I like this phone, it’s better than the 11 I had before this. Only thing I got upset about, that they do not mention in any of their responses to questions or any part of their whole big long drawn out detailed description, is that you can’t port or transfer your phone number. This is because, when you buy the SIM card and phone plan, for this, due to it being Amazon exclusive, Amazon manages it and runs it. They set up your cricket account for you, and immediately upon purchasing the phone and phone plan, get you a number and activate your card.',
        rating = 3
    )
    review59 = Review(
        user_id = 1,
        product_id = 21,
        title = 'very comfortable for the feet',
        review = 'I recently purchased a pair of tennis shoes for my active lifestyle, and I have been impressed with their overall performance and versatility. In this review, I will share my experiences and thoughts on these tennis shoes, highlighting their comfort, durability, and suitability for various activities.',
        rating = 2
    )
    review60 = Review(
        user_id = 1,
        product_id = 22,
        title = 'Classic and comfortable',
        review = 'Bought these for a on duty shoe for the fire department. Didnt really have high expectations for the price point, especially since Im pretty excessively a HOKA man, these are actually quite comfortable and I would absolutely recommend them if you need a decent shoe for a reasonable price.',
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
    db.session.add(review31)
    db.session.add(review32)
    db.session.add(review33)
    db.session.add(review34)
    db.session.add(review35)
    db.session.add(review36)
    db.session.add(review37)
    db.session.add(review38)
    db.session.add(review39)
    db.session.add(review40)
    db.session.add(review41)
    db.session.add(review42)
    db.session.add(review43)
    db.session.add(review44)
    db.session.add(review45)
    db.session.add(review46)
    db.session.add(review47)
    db.session.add(review48)
    db.session.add(review49)
    db.session.add(review50)
    db.session.add(review51)
    db.session.add(review52)
    db.session.add(review53)
    db.session.add(review54)
    db.session.add(review55)
    db.session.add(review56)
    db.session.add(review57)
    db.session.add(review58)
    db.session.add(review59)
    db.session.add(review60)
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()