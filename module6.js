if (typeof quizBank === 'undefined') { var quizBank = {}; }
if (!quizBank["GET SMART SET"]) { quizBank["GET SMART SET"] = {}; }
if (!quizBank["REMEDIAL SET"]) { quizBank["REMEDIAL SET"] = {}; }

// Fungsi pembantu untuk memastikan gambar berada di tengah (Center)
function wrapCenterImage(imagePath) {
    if (!imagePath) return "";
    return `<div style="text-align: center; margin: 15px 0;"><img src="${imagePath}" style="display: block; margin: 0 auto; max-width: 100%; max-height: 250px; border-radius: 10px; border: 1px solid #ddd;" onerror="this.style.display='none'"></div>`;
}

// ==========================================
// 1. GET SMART SET - MODULE 6: FOOD, PLEASE! (30 SOALAN)
// ==========================================
quizBank["GET SMART SET"]["Module 6: Food, Please!"] = {
  "Reading": [
    // --- GAMBAR 1 (Soalan 1 - 5) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_1.png"),
      "q": "1. What has Tom got for lunch?",
      "options": ["A) Two slices of pizza", "B) An omelette with cheese", "C) A red apple and milk"],
      "ans": "B) An omelette with cheese"
    },
    {
      "type": "mcq",
      "q": "2. What drink does Tom have with his meal?",
      "options": ["A) Orange juice", "B) Fresh milk", "C) Hot chocolate"],
      "ans": "A) Orange juice"
    },
    {
      "type": "mcq",
      "q": "3. How many slices of pizza has Kelly got?",
      "options": ["A) One slice", "B) Two slices", "C) Three slices"],
      "ans": "B) Two slices"
    },
    {
      "type": "mcq",
      "q": "4. What fruit is Kelly eating at the canteen?",
      "options": ["A) A banana", "B) A yellow pear", "C) A red apple"],
      "ans": "C) A red apple"
    },
    {
      "type": "mcq",
      "q": "5. Which statement is TRUE based on Passage 1?",
      "options": ["A) Kelly has got some milk.", "B) Kelly hasn't got any milk today.", "C) Tom is eating pizza for lunch."],
      "ans": "B) Kelly hasn't got any milk today."
    },

    // --- GAMBAR 2 (Soalan 6 - 10) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_6.png"),
      "q": "6. What food are Ben and his mother planning to cook?",
      "options": ["A) Fried rice", "B) Noodle soup", "C) Cheese omelette"],
      "ans": "B) Noodle soup"
    },
    {
      "type": "mcq",
      "q": "7. What items does Ben find inside the fridge?",
      "options": ["A) Carrots, onions, and chicken", "B) Strawberries and coconut milk", "C) Pizza and cheese"],
      "ans": "A) Carrots, onions, and chicken"
    },
    {
      "type": "mcq",
      "q": "8. What item is NOT inside the fridge?",
      "options": ["A) Onions", "B) Chicken", "C) Coconut milk"],
      "ans": "C) Coconut milk"
    },
    {
      "type": "mcq",
      "q": "9. Why does Mum ask Ben to go to the grocery shop?",
      "options": ["A) To buy coconut milk and fresh strawberries", "B) To buy some carrots and onions", "C) To buy noodle soup and juice"],
      "ans": "A) To buy coconut milk and fresh strawberries"
    },
    {
      "type": "mcq",
      "q": "10. What will they have for dessert after dinner?",
      "options": ["A) Noodle soup", "B) Fresh strawberries", "C) Cheese pizza"],
      "ans": "B) Fresh strawberries"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_11.png"),
      "q": "11. A food made from beaten eggs fried in a pan is called an ______.",
      "options": ["A) omelette", "B) onion", "C) orange"],
      "ans": "A) omelette"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_12.png"),
      "q": "12. Small, sweet, red fruits with seeds on the outside are called ______.",
      "options": ["A) bananas", "B) strawberries", "C) pineapples"],
      "ans": "B) strawberries"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_13.png"),
      "q": "13. This dairy product is soft or hard, usually yellow or white, and often put on pizza.",
      "options": ["A) Flour", "B) Butter", "C) Cheese"],
      "ans": "C) Cheese"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_14.png"),
      "q": "14. A round vegetable with many layers that can make your eyes tear when chopped is an ______.",
      "options": ["A) onion", "B) apple", "C) egg"],
      "ans": "A) onion"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_15.png"),
      "q": "15. Flat, thin, or long strips of dough made from wheat flour and cooked in boiling water are ______.",
      "options": ["A) biscuits", "B) noodles", "C) pancakes"],
      "ans": "B) noodles"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_16.png"),
      "q": "16. There are ______ apples in the basket.",
      "options": ["A) some", "B) any", "C) a"],
      "ans": "A) some"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_17.png"),
      "q": "17. Is there ______ milk left in the fridge?",
      "options": ["A) some", "B) any", "C) many"],
      "ans": "B) any"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_18.png"),
      "q": "18. Have we got ______ onions for the soup? No, we haven't.",
      "options": ["A) any", "B) some", "C) an"],
      "ans": "A) any"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_19.png"),
      "q": "19. She ______ got a delicious slice of cake.",
      "options": ["A) have", "B) has", "C) is"],
      "ans": "B) has"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_20.png"),
      "q": "20. They ______ got any orange juice in their glasses.",
      "options": ["A) haven't", "B) hasn't", "C) isn't"],
      "ans": "A) haven't"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_21.png"),
      "q": "21. Choose the sentence with correct capitalization and punctuation.",
      "options": ["A) Have you got any cheese in the fridge?", "B) have you got any cheese in the fridge", "C) Have you got any Cheese in the fridge."],
      "ans": "A) Have you got any cheese in the fridge?"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_22.png"),
      "q": "22. Rearrange the words: [ got / I / some / strawberries / have ]",
      "options": ["A) I have got strawberries some.", "B) I have got some strawberries.", "C) Some strawberries I have got."],
      "ans": "B) I have got some strawberries."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_23.png"),
      "q": "23. Rearrange the words: [ there / any / isn't / in / milk / glass / the ]",
      "options": ["A) There isn't any milk in the glass.", "B) Milk isn't any there in the glass.", "C) There isn't milk any glass in the."],
      "ans": "A) There isn't any milk in the glass."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_24.png"),
      "q": "24. Choose the correct spelling for the food made from eggs:",
      "options": ["A) omlet", "B) omelette", "C) omelet"],
      "ans": "B) omelette"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_25.png"),
      "q": "25. Your sister asks: 'Have we got any bananas?' If YES, you say:",
      "options": ["A) Yes, we have.", "B) Yes, there is.", "C) Yes, I am."],
      "ans": "A) Yes, we have."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_26.png"),
      "q": "26. You are ordering food at the canteen. What do you say politeness-wise?",
      "options": ["A) Give me pizza now!", "B) Can I have an omelette, please?", "C) I want food."],
      "ans": "B) Can I have an omelette, please?"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_27.png"),
      "q": "27. Someone asks: 'Would you like some coconut milk?' How do you decline politely?",
      "options": ["A) No, thanks.", "B) I don't care.", "C) Yes, you do."],
      "ans": "A) No, thanks."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_28.png"),
      "q": "28. Read the menu note: [TODAY'S SPECIAL: CHEESE OMELETTE - $3.00]. What is the main ingredient?",
      "options": ["A) Noodles", "B) Eggs and cheese", "C) Strawberries"],
      "ans": "B) Eggs and cheese"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_29.png"),
      "q": "29. Read the label on a bottle: [100% FRESH ORANGE JUICE - KEEP REFRIGERATED]. Where should you keep it?",
      "options": ["A) In a cup", "B) In the oven", "C) In the fridge"],
      "ans": "C) In the fridge"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_30.png"),
      "q": "30. Read the shopping list: [NEED: 3 ONIONS, 1 PACK NOODLES, 4 APPLES]. Which fruit is on the list?",
      "options": ["A) Apples", "B) Onions", "C) Noodles"],
      "ans": "A) Apples"
    }
  ]
};

// ==========================================
// 2. REMEDIAL SET - MODULE 6: FOOD, PLEASE! (30 SOALAN)
// ==========================================
quizBank["REMEDIAL SET"]["Module 6: Food, Please!"] = {
  "Reading": [
    // --- GAMBAR 1 (Soalan 1 - 5) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_1.png"),
      "q": "1. What has Tom got?",
      "options": ["A) An omelette", "B) A pizza", "C) A burger"],
      "ans": "A) An omelette"
    },
    {
      "type": "mcq",
      "q": "2. What drink does Tom have?",
      "options": ["A) Milk", "B) Water", "C) Orange juice"],
      "ans": "C) Orange juice"
    },
    {
      "type": "mcq",
      "q": "3. How many slices of pizza has Kelly got?",
      "options": ["A) One slice", "B) Two slices", "C) Three slices"],
      "ans": "B) Two slices"
    },
    {
      "type": "mcq",
      "q": "4. What fruit has Kelly got?",
      "options": ["A) An apple", "B) A banana", "C) A pear"],
      "ans": "A) An apple"
    },
    {
      "type": "mcq",
      "q": "5. Has Kelly got any milk?",
      "options": ["A) Yes, she has.", "B) No, she hasn't.", "C) Yes, two."],
      "ans": "B) No, she hasn't."
    },

    // --- GAMBAR 2 (Soalan 6 - 10) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_6.png"),
      "q": "6. Where are Ben and Mum?",
      "options": ["A) In the garden", "B) In the kitchen", "C) In the bedroom"],
      "ans": "B) In the kitchen"
    },
    {
      "type": "mcq",
      "q": "7. What food do they want to make?",
      "options": ["A) Pizza", "B) Cake", "C) Noodle soup"],
      "ans": "C) Noodle soup"
    },
    {
      "type": "mcq",
      "q": "8. Are there carrots in the fridge?",
      "options": ["A) Yes, there are.", "B) No, there aren't.", "C) No, there isn't."],
      "ans": "A) Yes, there are."
    },
    {
      "type": "mcq",
      "q": "9. Is there any coconut milk in the fridge?",
      "options": ["A) Yes, there is.", "B) No, there isn't.", "C) Yes, some."],
      "ans": "B) No, there isn't."
    },
    {
      "type": "mcq",
      "q": "10. Is there any chicken in the fridge?",
      "options": ["A) Yes, there is.", "B) No, there isn't.", "C) No, they haven't."],
      "ans": "A) Yes, there is."
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_11.png"),
      "q": "11. Made from eggs cooked in a pan: ______.",
      "options": ["A) omelette", "B) milk", "C) bread"],
      "ans": "A) omelette"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_12.png"),
      "q": "12. A small red fruit is a ______.",
      "options": ["A) strawberry", "B) coconut", "C) onion"],
      "ans": "A) strawberry"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_13.png"),
      "q": "13. Yellow food put on top of pizza: ______.",
      "options": ["A) rice", "B) cheese", "C) water"],
      "ans": "B) cheese"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_14.png"),
      "q": "14. A round vegetable for cooking: ______.",
      "options": ["A) onion", "B) apple", "C) milk"],
      "ans": "A) onion"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_15.png"),
      "q": "15. Long thin strips of food cooked in soup: ______.",
      "options": ["A) cake", "B) noodles", "C) biscuits"],
      "ans": "B) noodles"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_16.png"),
      "q": "16. There are ______ apples.",
      "options": ["A) any", "B) some", "C) an"],
      "ans": "B) some"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_17.png"),
      "q": "17. Is there ______ milk?",
      "options": ["A) any", "B) some", "C) a"],
      "ans": "A) any"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_18.png"),
      "q": "18. I ______ got a pizza.",
      "options": ["A) have", "B) has", "C) is"],
      "ans": "A) have"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_19.png"),
      "q": "19. She ______ got an apple.",
      "options": ["A) have", "B) has", "C) are"],
      "ans": "B) has"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_20.png"),
      "q": "20. We ______ got any onions.",
      "options": ["A) hasn't", "B) haven't", "C) isn't"],
      "ans": "B) haven't"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_21.png"),
      "q": "21. Choose the correct spelling:",
      "options": ["A) chese", "B) cheese", "C) cheez"],
      "ans": "B) cheese"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_22.png"),
      "q": "22. Rearrange: [ got / I / some / milk / have ]",
      "options": ["A) Milk I have got some.", "B) I have got some milk.", "C) Some milk have I got."],
      "ans": "B) I have got some milk."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_23.png"),
      "q": "23. Choose the correct sentence:",
      "options": ["A) I like apples.", "B) i like apples", "C) I like apples?"],
      "ans": "A) I like apples."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_24.png"),
      "q": "24. Choose the correct spelling:",
      "options": ["A) milk", "B) melk", "C) milck"],
      "ans": "A) milk"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_25.png"),
      "q": "25. 'Have you got any milk?' - You answer:",
      "options": ["A) Yes, I have.", "B) Yes, I am.", "C) Yes, it is."],
      "ans": "A) Yes, I have."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_26.png"),
      "q": "26. How do you ask for food politely?",
      "options": ["A) Give me pizza!", "B) Can I have pizza, please?", "C) I want pizza."],
      "ans": "B) Can I have pizza, please?"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_27.png"),
      "q": "27. 'Do you like strawberries?' - You answer:",
      "options": ["A) Yes, I do.", "B) Yes, I have.", "C) Yes, there is."],
      "ans": "A) Yes, I do."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_28.png"),
      "q": "28. Read the label: [MILK]. Is this food or drink?",
      "options": ["A) Food", "B) Drink", "C) Toy"],
      "ans": "B) Drink"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_29.png"),
      "q": "29. Read the tag: [FRUIT]. Which one is fruit?",
      "options": ["A) Onion", "B) Apple", "C) Cheese"],
      "ans": "B) Apple"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_30.png"),
      "q": "30. Look at the picture label: [NOODLES]. What do you use to eat noodles?",
      "options": ["A) A fork or chopsticks", "B) A pencil", "C) A cup"],
      "ans": "A) A fork or chopsticks"
    }
  ]
};
