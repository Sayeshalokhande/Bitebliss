const FoodData = [
  {
    id: 1,
    img:
      "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Seafood udon noodles ",
    price: 250,
    desc:
      "Savor the soul-warming goodness of our Udon, a classic Japanese noodle dish that is as comforting as it is delicious. Made with thick, chewy udon noodles, our Udon is served in a rich and flavorful broth that is both savory and satisfying, enhanced with a variety of toppings to create a harmonious balance of textures and flavors.",
    category: "Lunch",
    rating: 4.5,
  },
  {
    id: 2,
    img:
      "https://images.pexels.com/photos/1013518/pexels-photo-1013518.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "Salad",
    price: 120,
    desc:
      "Enjoy the fresh and vibrant flavors of our Garden Salad, a crisp and refreshing dish that is the perfect choice for those seeking a light and healthy meal option. Made with a colorful assortment of fresh vegetables, including crisp lettuce, juicy tomatoes, crunchy cucumbers, and vibrant bell peppers, our Garden Salad is a feast for both the eyes and the palate.",
    category: "Breakfast",
    rating: 4.2,
  },
  {
    id: 3,
    img:
      "https://images.pexels.com/photos/2983102/pexels-photo-2983102.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "Chicken Burger",
    price: 140,
    desc:
      "Indulge in our mouthwatering Chicken Burger, a culinary delight that brings together juicy, tender chicken patty, perfectly seasoned and grilled to perfection. Nestled between soft, toasted buns, this burger is layered with crisp lettuce, ripe tomatoes, and creamy mayonnaise, creating a harmonious blend of flavors and textures in every bite.",
    category: "Lunch",
    rating: 4.6,
  },
  {
    id: 4,
    img:
      "https://media.istockphoto.com/id/1660962945/photo/close-up-of-an-indian-sweet-motichoor-ladoo-also-called-boondi-ladoo.jpg?b=1&s=612x612&w=0&k=20&c=cbxfJjBeleEn-5LgzhfwOsnMNzOy-MorKFUO4-baB98=",
    name: "Motichur ladoo",
    price: 140,
    desc:
      "Experience the sweet and decadent delight of our Indian Ghee Ladoos, a traditional Indian dessert that is sure to satisfy your sweet cravings. Made with a blend of roasted gram flour (besan), clarified butter (ghee), and sugar, our Ghee Ladoos are shaped into small, round balls and garnished with a sprinkle of chopped nuts for added texture and flavor.",
    category: "Dessert",
    rating: 4.2,
  },
  {
    id: 5,
    img:
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Chocolate Cake",
    price: 100,
    desc:
      "Treat yourself to the ultimate indulgence with our decadent Chocolate Cake, a luscious dessert that is sure to satisfy your sweet cravings. Each slice of our Chocolate Cake is a symphony of rich, velvety chocolate layers, perfectly moist and tender, enveloped in a silky smooth chocolate ganache frosting.",
    category: "Dessert",
    rating: 4.8,
  },
  {
    id: 6,
    img:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Classic Pancakes",
    price: 90,
    desc:
      "Indulge in the classic comfort of our fluffy Pancakes, a beloved breakfast favorite that is sure to brighten your morning. Made from scratch with a light and airy batter, our Pancakes are cooked to golden perfection, with a delightful fluffiness that melts in your mouth with every bite.",
    category: "Breakfast",
    rating: 4.5,
  },
  {
    id: 7,
    img:
      "https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Butter Naan",
    price: 60,
    desc:
      "Indulge in the rich and buttery goodness of our Butter Naan, a classic Indian flatbread that is the perfect accompaniment to any meal. Baked to perfection in a traditional tandoor oven, our Butter Naan boasts a soft and fluffy texture, with a golden-brown exterior that is brushed with a generous amount of melted butter, adding a rich and indulgent flavor that melts in your mouth with every bite.",
    category: "Breakfast",
    rating: 4.2,
  },
  {
    id: 8,
    img:
      "https://images.pexels.com/photos/10445627/pexels-photo-10445627.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "Chicken Curry",
    price: 220,
    desc:
      "Indulge in the aromatic and flavorful world of our Chicken Curry, a classic Indian dish that is sure to tantalize your taste buds. Made with tender pieces of chicken simmered in a rich and fragrant curry sauce, our Chicken Curry is a harmonious blend of spices and seasonings that come together to create a culinary masterpiece that is both comforting and satisfying.",
    category: "Dinner",
    rating: 4.1,
  },
  {
    id: 9,
    img:
      "https://images.pexels.com/photos/18097893/pexels-photo-18097893/free-photo-of-close-up-of-a-bowl-of-a-creamy-tomato-soup.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "Tomato soup",
    price: 120,
    desc:
      "Savor the comforting warmth and vibrant flavors of our Tomato Soup, a classic dish that is sure to brighten your day and warm you up from the inside out. Made with ripe and juicy tomatoes, simmered to perfection with aromatic herbs, onions, garlic, and a touch of cream, our Tomato Soup boasts a rich and velvety texture that is both soothing and satisfying.",
    category: "Breakfast",
    rating: 4.6,
  },
  {
    id: 10,
    img:
      "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Tanduri Chicken ",
    price: 195,
    desc:
      "Satisfy your craving for bold and fiery flavors with our Tandoori Chicken, a succulent and aromatic dish that is sure to tantalize your taste buds. Marinated in a blend of yogurt, lemon juice, garlic, ginger, and a medley of traditional Indian spices, our Tandoori Chicken is bursting with flavor from the very first bite.",
    category: "Dinner",
    rating: 4.5,
  },
  {
    id: 11,
    img:
      "https://images.pexels.com/photos/13063292/pexels-photo-13063292.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Poha",
    price: 220,
    desc:
      "Delight in the light and flavorful goodness of our Poha, a beloved Indian breakfast dish that is both nutritious and delicious. Made from flattened rice flakes, our Poha is cooked with a fragrant mixture of mustard seeds, curry leaves, green chilies, turmeric, and onions, creating a harmonious blend of flavors and spices that is sure to awaken your senses.",
    category: "Breakfast",
    rating: 4.5,
  },
  {
    id: 12,
    img:
      "https://images.pexels.com/photos/11887844/pexels-photo-11887844.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "Gulab jamun ",
    price: 165,
    desc:
      "Indulge in creamy fettuccine Alfredo pasta with tender pieces of grilled chicken. This comforting dinner dish is a blend of pasta, rich Alfredo sauce, and savory chicken.",
    category: "Dessert",
    rating: 4.8,
  },
  {
    id: 13,
    img:
      "https://images.pexels.com/photos/2569760/pexels-photo-2569760.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "Dahi chat ",
    price: 145,
    desc:
      "Enjoy a medley of colorful vegetables stir-fried in a flavorful sauce, served over steamed rice. A light and nutritious dinner that's both satisfying and wholesome.",
    category: "Breakfast",
    rating: 4.2,
  },
  {
    id: 14,
    img:
      "https://images.pexels.com/photos/16920251/pexels-photo-16920251/free-photo-of-sushi-on-tray.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "Sushi",
    price: 180,
    desc:
      "Savor the flavors of a delicious burrito bowl with tender grilled chicken, black beans, rice, sautéed peppers and onions, shredded cheese, and a drizzle of zesty cilantro-lime dressing. A hearty and satisfying chicken dinner option.",
    category: "Dinner",
    rating: 4.6,
  },

  {
    id: 15,
    img:
      "https://images.pexels.com/photos/1618943/pexels-photo-1618943.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "Mashroom tomato ",
    price: 180,
    desc:
      "Indulge in the rich and savory flavors of our Mushroom Tomato Curry, a delicious and satisfying dish that is sure to delight your taste buds. Made with fresh and tender mushrooms, juicy tomatoes, and a medley of aromatic spices, our Mushroom Tomato Curry boasts a vibrant and flavorful sauce that is both comforting and deeply satisfying.",
    category: "Lunch",
    rating: 4.9,
  },
  {
    id: 16,
    img:
      "https://media.istockphoto.com/id/1221237754/photo/two-halves-of-club-sandwich-on-white.jpg?b=1&s=612x612&w=0&k=20&c=0OmJW3Tu1Y5I_tJlva496XfP6B6jFs1nDLTs5oS3ZrI=",
    name: " Veg sandwitch",
    price: 120,
    desc:
      "Savor our Veg Sandwich, a delightful combination of fresh, crunchy vegetables layered between soft slices of bread. Packed with lettuce, tomatoes, cucumbers, bell peppers, and more, it's a light and healthy option that's perfect for a quick and satisfying meal. Whether enjoyed for breakfast, lunch, or a snack, our Veg Sandwich is sure to please!",
    category: "Breakfast",
    rating: 4.4,
  },
  {
    id: 17,
    img:
      "https://images.pexels.com/photos/9609838/pexels-photo-9609838.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Paneer Masala",
    price: 190,
    desc:
      "Indulge in our Paneer Masala, a classic Indian dish featuring tender cubes of paneer cooked in a rich and flavorful tomato-based gravy. Infused with aromatic spices, this creamy and satisfying curry is a vegetarian delight that pairs perfectly with rice or naan. Garnished with fresh cilantro, it's a must-try for lovers of Indian cuisine!",
    category: "Dinner",
    rating: 4.8,
  },
  {
    id: 18,
    img:
      "https://www.recipetineats.com/wp-content/uploads/2018/05/Chicken-Pad-Thai_9-landscape.jpg?resize=650,501",
    name: "Pad thai",
    price: 140,
    desc:
      "Pad thai is made with rice noodles, which are stir fried with eggs and chopped firm tofu, flavored with tamarind juice, fish sauce, dried shrimp, garlic, shallots, and sometimes red chili pepper and palm sugar, and served with lime wedges and often crushed roasted peanuts.",
    category: "Dinner",
    rating: 4.8,
  },
  {
    id: 19,
    img:
      "https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=600",
    name: "paneer tikka ",
    price: 250,
    desc:
      " Treat yourself to our Paneer Tikka, a beloved Indian appetizer featuring marinated cubes of paneer grilled to perfection in a traditional tandoor oven. Bursting with smoky flavors and aromatic spices, these tender and flavorful paneer tikka pieces are a vegetarian delight that's sure to please. Served with mint chutney and fresh lemon wedges, it's a mouthwatering starter that's perfect for any occasion!",
    category: "Dinner",
    rating: 4.8,
  },
  {
    id: 20,
    img:
      "https://media.istockphoto.com/id/1389160681/photo/chilli-mushroom-indian-snack-food.jpg?b=1&s=612x612&w=0&k=20&c=z1_6zUXD2sQOlZ2j2bJlezfxYHq_2dq8vzZcmYT_hB8=",
    name: "Paneer Chilli",
    price: 190,
    desc:
      " Savor the spicy and flavorful goodness of our Paneer Chilli, a popular Indo-Chinese fusion dish that combines tender cubes of paneer with bell peppers, onions, and green chilies in a tangy and spicy sauce. This vegetarian delight offers a perfect balance of heat and sweetness, making it a favorite among food enthusiasts. Whether enjoyed as an appetizer or paired with fried rice or noodles, our Paneer Chilli is sure to tantalize your taste buds!",
    category: "Lunch",
    rating: 4.8,
  },
  {
    id: 21,
    img:
      "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Masala dosa ",
    price: 110,
    desc:
      " Enjoy the crispy and flavorful goodness of our Masala Dosa, a South Indian classic that is loved by food enthusiasts around the world. Made from a fermented batter of rice and lentils, our Masala Dosa features a thin and crispy crepe filled with a savory potato masala filling, seasoned with fragrant spices and herbs.",
    category: "Breakfast",
    rating: 4.8,
  },
  {
    id: 22,
    img:
      "https://images.pexels.com/photos/5624168/pexels-photo-5624168.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "Sausage Pizza",
    price: 150,
    desc:
      " Indulge in the mouthwatering flavors of our Sausage Pizza, a classic favorite that never fails to satisfy. Featuring a crispy thin crust topped with tangy tomato sauce, gooey mozzarella cheese, and savory slices of Italian sausage, our Sausage Pizza offers a perfect balance of textures and flavors that is sure to delight your taste buds.",
    category: "Lunch",
    rating: 4.8,
  },
  {
    id: 23,
    img:
      "https://images.pexels.com/photos/9609853/pexels-photo-9609853.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Egg Biryani",
    price: 220,
    desc:
      " Experience the delicious blend of flavors in our Egg Biryani, a classic Indian dish that's both hearty and satisfying. Tender boiled eggs are nestled in layers of fragrant basmati rice, infused with a medley of aromatic spices like cumin, cardamom, and saffron, creating a rich and flavorful dish that's a true delight.",
    category: "Dinner",
    rating: 4.8,
  },
  {
    id: 24,
    img:
      "https://media.istockphoto.com/id/1453999382/photo/jhangore-ki-kheer.jpg?b=1&s=612x612&w=0&k=20&c=58HLFPpRvrYXiFZJ05RgCC93JqB25ro_Wx3YR7N8MSw=",
    name: "Kheer",
    price: 110,
    desc:
      " Indulge in the creamy and comforting goodness of our Kheer, a traditional Indian rice pudding that is sure to satisfy your sweet tooth. Made with fragrant basmati rice, simmered in creamy milk, and sweetened with sugar or jaggery, our Kheer boasts a rich and velvety texture that is simply irresistible.",
    category: "Dessert",
    rating: 4.8,
  },
  {
    id: 25,
    img:
      "https://images.pexels.com/photos/18803177/pexels-photo-18803177/free-photo-of-plate-with-greasy-momos-dumplings.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Paneer momos",
    price: 150,
    desc:
      " Savor the delectable flavors of our Paneer Momos, a beloved Tibetan dumpling that has found its way into the hearts of food enthusiasts worldwide. These steamed dumplings are filled with a flavorful mixture of crumbled paneer, finely chopped vegetables, and aromatic spices, creating a harmonious blend of textures and tastes that is both comforting and satisfying.",
    category: "Breakfast",
    rating: 4.8,
  },
  {
    id: 26,
    img:
      "https://media.istockphoto.com/id/1599049141/photo/closeup-of-chicken-chowmein-in-a-plate-with-tomato-ketchup-onion-slices-and-salad-isolated-on.jpg?b=1&s=612x612&w=0&k=20&c=iqX-QS-bNght4u4qf09bgXlJJR368UppTj5O2QsZOFM=",
    name: "Chow-mein",
    price: 150,
    desc:
      "Experience the irresistible flavors of our Chow Mein, a classic Chinese dish that's packed with fresh vegetables, tender noodles, and savory sauces. Our Chow Mein features stir-fried noodles cooked to perfection, tossed with a colorful medley of vegetables like bell peppers, carrots, and cabbage, along with your choice of protein such as chicken, beef, or tofu.",
    category: "Dinner",
    rating: 4.8,
  },
  {
    id: 27,
    img:
      "https://images.pexels.com/photos/9287032/pexels-photo-9287032.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Channa Masala ",
    price: 250,
    desc:
      "Delight in the hearty and flavorful goodness of our Chana Masala, a classic Indian dish that's as comforting as it is delicious. Made with tender chickpeas cooked in a rich and aromatic tomato-based gravy, our Chana Masala is infused with a blend of spices like cumin, coriander, turmeric, and garam masala, creating a symphony of flavors that is simply irresistible.",
    category: "Dinner",
    rating: 4.8,
  },

  {
    id: 28,
    img:
      "https://pipingpotcurry.com/wp-content/uploads/2022/12/Kadhi-pakora-Piping-Pot-Curry-4-720x720.jpg",
    name: "Kadhi pakora",
    price: 250,
    desc:
      " Savor the unique and flavorful combination of our Kadhi Vada, a beloved Indian dish that brings together tangy yogurt curry and crispy lentil dumplings. Our Kadhi is a creamy and aromatic curry made from whisked yogurt, besan (gram flour), and a blend of spices, simmered to perfection to create a rich and flavorful base.",
    category: "Dinner",
    rating: 4.8,
  },
  {
    id: 29,
    img:
      "https://hot-thai-kitchen.com/wp-content/uploads/2022/05/green-curry-new-sq-2.jpg",
    name: " Thai green curry",
    price: 280,
    desc:
      " Savor the vibrant and aromatic flavors of our Thai Green Curry, a beloved dish that combines creamy coconut milk with a medley of fresh vegetables and fragrant herbs and spices. Our Green Curry boasts a rich and flavorful sauce made from green curry paste, coconut milk, lemongrass, kaffir lime leaves, and Thai basil, creating a harmonious blend of flavors that is both comforting and deeply satisfying.",
    category: "Dinner",
    rating: 4.8,
  },
  {
    id: 30,
    img:
      "https://static01.nyt.com/images/2021/03/23/dining/sse-instant-pot-khichdi/merlin_185308167_ea61f11a-8af0-4568-a40f-c92d696b3751-articleLarge.jpg?w=1280&q=75",
    name: "Khichdi",
    price: 280,
    desc:
      " Experience the comforting and wholesome flavors of our Khichdi, a classic Indian dish that's as nourishing as it is delicious. Made from a blend of rice and lentils, cooked together with aromatic spices like cumin, turmeric, and ginger, our Khichdi is a simple yet flavorful dish that's perfect for any meal of the day.",
    category: "Dinner",
    rating: 4.8,
  },
];
export default FoodData;
