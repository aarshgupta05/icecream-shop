const data = {
  "Flavours": [
    {"id": 1, "name": "Classic Vanilla", "desc": "Indulge in the timeless classic - smooth and creamy vanilla ice cream.", "src": "/Images/flavor1.jpg", "main": true},
    {"id": 2, "name": "Decadent Chocolate", "desc": "Rich and velvety chocolate ice cream for the ultimate chocolate lover.", "src": "/Images/flavor2.jpg", "main": true},
    {"id": 3, "name": "Scrumptious Strawberry", "desc": "Fresh and fruity strawberry ice cream bursting with flavor.", "src": "/Images/flavor3.webp", "main": true},
    {"id": 4, "name": "Minty Fresh", "desc": "Cool and refreshing mint ice cream with real mint leaves.", "src": "/Images/flavor4.png", "main": false},
    {"id": 5, "name": "Creamy Coffee", "desc": "Smooth and creamy coffee ice cream made with premium coffee beans.", "src": "/Images/flavor5.png", "main": false},
    {"id": 6, "name": "Bailey's", "desc": "One of Happy Sun Ice Cream Shop's most popular flavors is Baileys Ice Cream. This ice cream is Irish cream flavored and loaded with Maraschino cherries and chocolate chips. Our Baileys Ice Cream satisfies even the pickiest of palates.", "src": "/Images/flavor6.png", "main": false},
    {"id": 7, "name": "Crème Brûlée", "desc": "There's nothing more satisfying than cracking through a crème brulée's crispy, caramelized top into a creamy custard base. Back again, this time in its full-dairy version, this flavour features a vanilla bean and custard base, with pieces of caramelized sugar throughout to resemble the classic dessert!", "src": "/Images/flavor7.png", "main": false},
    {"id": 8, "name": "After Eight", "desc": "The After Eights bring a subtle minty-cold and quite unique chewiness from the frozen mint fondant they contain. Although to ensure full 'mintyness', the ice cream still has a custard base that is flavoured with natural extract of peppermint too.", "src": "/Images/flavor8.png", "main": false},
    {"id": 9, "name": "Stracciatella", "desc": "This process creates the shreds of chocolate that give stracciatella its name, the word meaning 'little shred' in Italian. While stracciatella ice cream traditionally involves milk ice cream and milk chocolate, modern variations can also be made with vanilla and dark chocolate.", "src": "/Images/flavor9.png", "main": false},
    {"id": 10, "name": "Vegan...(error)", "desc": "The stevia-sweetened vegan ice creams are nothing less than perfection.", "src": "/Images/flavor10.png", "main": false},
    {"id": 11, "name": "🎩Caramel Swirl", "desc": "Experience the rich and buttery taste of caramel blended perfectly with smooth ice cream.", "src": "/Images/special2.png", "main": false},
    {"id": 12, "name": "Passion Fruit Sorbet", "desc": "Prepare to be dazzled by the intense and exotic taste of passionfruit, as each spoonful of this sorbet bursts with a symphony of vibrant flavours. The sorbet's velvety texture glides smoothly across your palate, while the tropical tang dances on your taste buds, creating a harmonious and refreshing experience.", "src": "/Images/flavor12.png", "main": false},
    {"id": 13, "name": "Bubble Gum", "desc": "Ice Cream. The Bubble Gum flavour is a nice balance of sweet and fruity that will be a sure hit with the young and the young at heart. Add a dash of rainbow sprinkles for a merry colourful dessert!", "src": "/Images/flavor13.png", "main": false},
    {"id": 14, "name": "Strawberry Sorbet", "desc": "Light, fresh and full of fruit, this mouthwatering sorbet captures the taste of summer in a scoop. Bursting with berries and no added sugar for a delightful treat that's full of flavor, with zero fat, dairy or gluten!", "src": "/Images/flavor14.png", "main": false},
    {"id": 15, "name": "Dark Chocolate Sorbet", "desc": "It's packed with so much real chocolate—the most possible, in fact, to still legally call it ice cream—that it is overflowing with rich, bittersweet chocolate flavor, and is dense but still creamy, like the inside of a dark chocolate truffle.", "src": "/Images/flavor15.png", "main": false},
    {"id": 16, "name": "Belgian Chocolate", "desc": "Made with the finest Belgian chocolate, this luxurious ice cream is a true indulgence for chocolate lovers. Each spoonful offers a velvety smooth texture and an intense, decadent chocolate flavor that will take your taste buds on a journey to chocolate heaven.", "src": "/Images/flavor16.png", "main": false},
    {"id": 17, "name": "🎩Matcha Green Tea", "desc": "Enjoy the unique and refreshing taste of matcha green tea in every scoop.", "src": "/Images/special3.png", "main": false},
    {"id": 18, "name": "Salted Butter Caramel", "desc": "This ice cream flavor is complex in every sense. Caramel alone can often be overpowering or overly sweet, but coarse sea salt subdues it. You certainly taste the saltiness, and yet you still get that intense aged sweetness too.", "src": "/Images/flavor18.png", "main": false},
    {"id": 19, "name": "Great Cherry", "desc": "Flavor is like a sweeter black cherry with a hint of tartness, which reminded me of almost of a cherry soda flavor without tasting too fake or like cough syrup.", "src": "/Images/flavor19.png", "main": false},
    {"id": 20, "name": "Sicily Pistachio", "desc": "Velvety, with an intense taste and aroma: Aledi's Bronte DOP Green Pistachio cream has the highest concentration of Sicilian dried fruit. Made with a particular recipe that makes it very fine on the palate, but above all with excellent raw materials in high concentration.", "src": "/Images/flavor20.png", "main": false},
    {"id": 21, "name": "Praline Almond", "desc": "A sweet, creamy and nutty confection that tastes like caramelized nuts with a soft, fudgy texture.", "src": "/Images/flavor21.png", "main": false},
    {"id": 22, "name": "Roasted Hazelnut", "desc": "Incredibly delicious! A totally addictive praline taste for young and oldest gourmets. The specific and intense flavor of roasted hazelnuts combined with the delicacy of milk make this cream so different and original.", "src": "/Images/flavor22.png", "main": false},
    {"id": 23, "name": "Yogurt with Wild Strawberry", "desc": "Sweet is one of the five main tastes. It has smooth and round notes", "src": "/Images/flavor23.png", "main": false},
    {"id": 24, "name": "Bear Tiramisu", "desc": "A very airy, tender dessert with an amazing contrast of sweet ice cream and slightly bitter taste of the ice cream filling is complemented by velvet topping.", "src": "/Images/flavor24.png", "main": false},
    {"id": 25, "name": "Costa Da Caparica", "desc": "(error)", "src": "/Images/flavor25.png", "main": false},
    {"id": 26, "name": "🥚Lemon Cheescake", "desc": "A rich and creamy flavor with a slightly tangy and sweet taste.", "src": "/Images/flavor26.png", "main": false},
    {"id": 27, "name": "Vanila Madagascar", "desc": "This has an intense and sweet vanilla bean type flavour. The Premium Range of Oil Soluble Flavours are designed and developed to give a flavour profile, which is similar to the actual product.", "src": "/Images/flavor17.png", "main": false},
    {"id": 28, "name": "Red Velvet Delight", "desc": "Indulge in the luxurious flavor of red velvet with creamy swirls of vanilla and chocolate.", "src": "/Images/special1.png", "main": false},
    {"id": 29, "name": "Toasted Coconut", "desc": "Subtly sweet coconut ice cream packed with chocolate-dusted coconut shreds. An ode to the toasted coconut donut hole. Your crunch is like no other, your sweet taste is… awesome.", "src": "/Images/flavor11.png", "main": false},
    {"id": 30, "name": "Red Velvet Delight", "desc": "Indulge in the luxurious flavor of red velvet with creamy swirls of vanilla and chocolate.", "src": "/Images/special1.png", "main": false},
    {"id": 31, "name": "Caramel Swirl", "desc": "Experience the rich and buttery taste of caramel blended perfectly with smooth ice cream.", "src": "/Images/special2.png", "main": false}
  ],
  "Toppings": [
    {"id": 1, "name": "Sprinkles", "desc": "Add colorful sprinkles to your ice cream for extra fun!", "src": "/Images/topping1.jpg", "main": true},
    {"id": 2, "name": "Nuts", "desc": "Crunchy nuts add a delightful texture to your ice cream.", "src": "/Images/topping2.jpg", "main": true},
    {"id": 3, "name": "Fruit", "desc": "Enjoy the freshness of seasonal fruits as a topping for your ice cream.", "src": "/Images/topping3.jpg", "main": true},
    {"id": 4, "name": "Chocolate Chips", "desc": "Satisfy your chocolate craving with delicious chocolate chips.", "src": "/Images/topping4.png", "main": false},
    {"id": 5, "name": "Whipped Cream", "desc": "Top off your ice cream with a dollop of fluffy whipped cream.", "src": "/Images/topping5.png", "main": false}
  ],
  "Specials": [
    {"id": 1, "name": "Red Velvet Delight", "desc": "Indulge in the luxurious flavor of red velvet with creamy swirls of vanilla and chocolate.", "src": "/Images/special1.png", "main": false},
    {"id": 2, "name": "Caramel Swirl", "desc": "Experience the rich and buttery taste of caramel blended perfectly with smooth ice cream.", "src": "/Images/special2.png", "main": false},
    {"id": 3, "name": "Matcha Green Tea", "desc": "Enjoy the unique and refreshing taste of matcha green tea in every scoop.", "src": "/Images/special3.png", "main": false},
    {"id": 4, "name": "Chocolate Chip Sandwich", "desc": "Delicious chocolate chip cookies filled with creamy vanilla ice cream.", "src": "/Images/sandwich1.png", "main": false},
    {"id": 5, "name": "Double Fudge Sandwich", "desc": "Rich fudge brownies sandwiching smooth chocolate ice cream.", "src": "/Images/sandwich2.webp", "main": true},
    {"id": 6, "name": "Oatmeal Raisin Sandwich", "desc": "Chewy oatmeal raisin cookies paired with cinnamon ice cream.", "src": "/Images/sandwich3.png", "main": false},
    {"id": 7, "name": "Banana Split", "desc": "A classic banana split with scoops of vanilla, chocolate, and strawberry ice cream, topped with whipped cream and cherries.", "src": "/Images/sundae1.jpeg", "main": true},
    {"id": 8, "name": "Brownie Sundae", "desc": "Warm brownie topped with vanilla ice cream, hot fudge, and nuts.", "src": "/Images/sundae2.png", "main": false},
    {"id": 9, "name": "Caramel Apple Sundae", "desc": "Apple pie filling, vanilla ice cream, and caramel drizzle.", "src": "/Images/sundae3.png", "main": false},
    {"id": 10, "name": "Chocolate Ice Cream Cake", "desc": "Decadent chocolate ice cream layered with chocolate cake and fudge.", "src": "/Images/cake1.jpg", "main": true},
    {"id": 11, "name": "Strawberry Shortcake", "desc": "Layers of strawberry ice cream and vanilla cake with fresh strawberries.", "src": "/Images/cake2.png", "main": false},
    {"id": 12, "name": "Mint Chocolate Chip Cake", "desc": "Refreshing mint chocolate chip ice cream with layers of chocolate cake.", "src": "/Images/cake3.png", "main": false}
  ]
};

function searchItems() {
  const query = document.getElementById('search-input').value.toLowerCase();
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = ''; // Clear previous results

  let results = [];

  Object.keys(data).forEach(category => {
    data[category].forEach(item => {
      if (item.name.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query)) {
        results.push(item);
      }
    });
  });

  if (results.length > 0) {
    document.getElementById('search-results').style.display = 'block';
    results.forEach(item => {
      const li = document.createElement('li');
      li.className = 'result-item';
      li.innerHTML = `
        <img src="${item.src}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <button class="add-to-cart" onclick="addToCart('${item.name}')">Add to Cart</button>
      `;
      resultsContainer.appendChild(li);
    });
  } else {
    document.getElementById('search-results').style.display = 'none';
  }
}

function addToCart(itemName) {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.push(itemName);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  alert(`Item ${itemName} added to cart`);
}
