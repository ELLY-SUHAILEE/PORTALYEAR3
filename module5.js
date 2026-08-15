if (typeof quizBank === 'undefined') { var quizBank = {}; }
if (!quizBank["GET SMART SET"]) { quizBank["GET SMART SET"] = {}; }
if (!quizBank["REMEDIAL SET"]) { quizBank["REMEDIAL SET"] = {}; }

// Fungsi pembantu untuk memastikan gambar berada di tengah (Center)
function wrapCenterImage(imagePath) {
    if (!imagePath) return "";
    return `<div style="text-align: center; margin: 15px 0;"><img src="${imagePath}" style="display: block; margin: 0 auto; max-width: 100%; max-height: 250px; border-radius: 10px; border: 1px solid #ddd;" onerror="this.style.display='none'"></div>`;
}

// ==========================================
// 1. GET SMART SET (30 SOALAN)
// ==========================================
quizBank["GET SMART SET"]["Module 5: My new house / Eating right"] = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: My New House) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_1.png"),
      "q": "1. When did Adam and his family move into a new house?",
      "options": ["A) Last week", "B) Yesterday", "C) Last month"],
      "ans": "A) Last week"
    },
    {
      "type": "mcq",
      "q": "2. How many bedrooms are there in the new house?",
      "options": ["A) Two bedrooms", "B) Three bedrooms", "C) Four bedrooms"],
      "ans": "B) Three bedrooms"
    },
    {
      "type": "mcq",
      "q": "3. Where is Adam's bedroom located?",
      "options": ["A) Downstairs next to the kitchen", "B) Upstairs next to his sister's room", "C) Outside near the garden"],
      "ans": "B) Upstairs next to his sister's room"
    },
    {
      "type": "mcq",
      "q": "4. What does the family do in the living room downstairs?",
      "options": ["A) They cook food together", "B) They plant colorful flowers", "C) They watch TV together"],
      "ans": "C) They watch TV together"
    },
    {
      "type": "mcq",
      "q": "5. What is located outside the house?",
      "options": ["A) A small garden with colorful flowers", "B) A big swimming pool", "C) A large garage for cars"],
      "ans": "A) A small garden with colorful flowers"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Eating Right) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_6.png"),
      "q": "6. Why should we eat plenty of fruits and vegetables?",
      "options": ["A) Because they give us energy to play", "B) Because they contain vitamins", "C) Because they can hurt our teeth"],
      "ans": "B) Because they contain vitamins"
    },
    {
      "type": "mcq",
      "q": "7. What do vitamins do for our body?",
      "options": ["A) They make us feel sleepy", "B) They keep us strong and healthy", "C) They cause health problems"],
      "ans": "B) They keep us strong and healthy"
    },
    {
      "type": "mcq",
      "q": "8. Which foods give us energy to study and play?",
      "options": ["A) Rice, bread, and pasta", "B) Sweets, chocolates, and cake", "C) Water, fruits, and vegetables"],
      "ans": "A) Rice, bread, and pasta"
    },
    {
      "type": "mcq",
      "q": "9. What must we avoid eating too much of?",
      "options": ["A) Rice and bread", "B) Fruits and vegetables", "C) Sweets, chocolates, and sugary drinks"],
      "ans": "C) Sweets, chocolates, and sugary drinks"
    },
    {
      "type": "mcq",
      "q": "10. Why is eating too much sugar bad for us?",
      "options": ["A) It gives us vitamins", "B) It can hurt our teeth and cause health problems", "C) It helps us study and play"],
      "ans": "B) It can hurt our teeth and cause health problems"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_11.png"),
      "q": "11. We sit and watch television on a comfortable sofa in the ______.",
      "options": ["A) bedroom", "B) living room", "C) bathroom"],
      "ans": "B) living room"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_12.png"),
      "q": "12. Apples, bananas, and oranges are types of ______.",
      "options": ["A) fruits", "B) vegetables", "C) sweets"],
      "ans": "A) fruits"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_13.png"),
      "q": "13. Mother is cooking dinner in the modern ______.",
      "options": ["A) garden", "B) kitchen", "C) bedroom"],
      "ans": "B) kitchen"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_14.png"),
      "q": "14. Carrots, broccoli, and cucumbers belong to the ______ group.",
      "options": ["A) drinks", "B) vegetables", "C) snacks"],
      "ans": "B) vegetables"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_15.png"),
      "q": "15. There are pretty and colorful ______ growing in the garden.",
      "options": ["A) flowers", "B) sofas", "C) glasses"],
      "ans": "A) flowers"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_16.png"),
      "q": "16. There ______ three bedrooms upstairs in the new house.",
      "options": ["A) is", "B) are", "C) am"],
      "ans": "B) are"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_17.png"),
      "q": "17. There ______ a big sofa in the living room.",
      "options": ["A) is", "B) are", "C) were"],
      "ans": "A) is"
    },
    {
      "type": "mcq",
      "q": "18. We ______ eat plenty of fruits to stay healthy.",
      "options": ["A) should", "B) shouldn't", "C) cannot"],
      "ans": "A) should"
    },
    {
      "type": "mcq",
      "q": "19. You ______ eat too many chocolates because they hurt your teeth.",
      "options": ["A) should", "B) must", "C) shouldn't"],
      "ans": "C) shouldn't"
    },
    {
      "type": "mcq",
      "q": "20. ______ there any milk inside the fridge?",
      "options": ["A) Is", "B) Are", "C) Do"],
      "ans": "A) Is"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with the correct punctuation and capital letters.",
      "options": ["A) there is a garden outside.", "B) There is a small garden outside.", "C) There is a small garden outside"],
      "ans": "B) There is a small garden outside."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words to make a correct sentence: [house / a / family / into / moved / new]",
      "options": ["A) Family moved into a new house.", "B) A new house moved into family.", "C) The family moved into a new house."],
      "ans": "C) The family moved into a new house."
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words to form a correct sentence: [ energy / Rice / us / gives / to / play ]",
      "options": ["A) Rice gives us energy to play.", "B) Energy gives us rice to play.", "C) Rice to play gives us energy."],
      "ans": "A) Rice gives us energy to play."
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) Vegeatables", "B) Vegetables", "C) Vegetabels"],
      "ans": "B) Vegetables"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. How do you tell your friend where your room is?",
      "options": ["A) My room is upstairs next to my sister's room.", "B) My room is under the sofa.", "C) I don't have a room."],
      "ans": "A) My room is upstairs next to my sister's room."
    },
    {
      "type": "mcq",
      "q": "26. Your friend offers you too much cake. How do you politely decline?",
      "options": ["A) No thanks, too much sugar is bad for my teeth.", "B) Give me all the cakes now!", "C) I want more sugary drinks."],
      "ans": "A) No thanks, too much sugar is bad for my teeth."
    },
    {
      "type": "mcq",
      "q": "27. How do you ask someone about their house?",
      "options": ["A) How many bedrooms are there in your house?", "B) What color is your hair?", "C) Can you swim fast?"],
      "ans": "A) How many bedrooms are there in your house?"
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_28.png"),
      "q": "28. Read the sign: [KEEP THE KITCHEN CLEAN]\nWhat should you do?",
      "options": ["A) Leave dirty plates on the table", "B) Wash your dishes after eating", "C) Throw food on the floor"],
      "ans": "B) Wash your dishes after eating"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_29.png"),
      "q": "29. Read the poster: [HEALTHY SNACK DAY: EAT FRUITS!]\nWhich item can you bring?",
      "options": ["A) Chocolate cake", "B) Red apples", "C) Sugary soda"],
      "ans": "B) Red apples"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_30.png"),
      "q": "30. Look at the rule: [NO FOOD IN THE BEDROOM]\nWhere can you eat?",
      "options": ["A) In the bedroom", "B) In the kitchen or dining area", "C) On the bed"],
      "ans": "B) In the kitchen or dining area"
    }
  ]
};

// ==========================================
// 2. REMEDIAL SET (30 SOALAN)
// ==========================================
quizBank["REMEDIAL SET"]["Module 5: My new house / Eating right"] = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: My House) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE5_1.png"),
      "q": "1. How many bedrooms?",
      "options": ["A) 2", "B) 3", "C) 4"],
      "ans": "B) 3"
    },
    {
      "type": "mcq",
      "q": "2. The kitchen is ____.",
      "options": ["A) small", "B) big", "C) red"],
      "ans": "B) big"
    },
    {
      "type": "mcq",
      "q": "3. The writer likes the ____.",
      "options": ["A) bedroom", "B) garden", "C) school"],
      "ans": "A) bedroom"
    },
    {
      "type": "mcq",
      "q": "4. What picture is this?",
      "options": ["A) My School", "B) My House", "C) My Dog"],
      "ans": "B) My House"
    },
    {
      "type": "mcq",
      "q": "5. I love my ____!",
      "options": ["A) home", "B) cat", "C) car"],
      "ans": "A) home"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Healthy Food) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE5_6.png"),
      "q": "6. Fruits are ____ for us.",
      "options": ["A) bad", "B) good", "C) hot"],
      "ans": "B) good"
    },
    {
      "type": "mcq",
      "q": "7. Eat apples and ____ every day.",
      "options": ["A) bananas", "B) candies", "C) chips"],
      "ans": "A) bananas"
    },
    {
      "type": "mcq",
      "q": "8. Do not eat too many ____.",
      "options": ["A) apples", "B) candies", "C) carrots"],
      "ans": "B) candies"
    },
    {
      "type": "mcq",
      "q": "9. Candies hurt our ____.",
      "options": ["A) teeth", "B) hair", "C) shoes"],
      "ans": "A) teeth"
    },
    {
      "type": "mcq",
      "q": "10. Eat healthy, stay ____!",
      "options": ["A) strong", "B) sad", "C) sleep"],
      "ans": "A) strong"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE5_11.png"),
      "q": "11. You sleep in the ______.",
      "options": ["A) bedroom", "B) kitchen", "C) garden"],
      "ans": "A) bedroom"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE5_12.png"),
      "q": "12. A banana is a ______.",
      "options": ["A) fruit", "B) drink", "C) toy"],
      "ans": "A) fruit"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE5_13.png"),
      "q": "13. You cook food in the ______.",
      "options": ["A) kitchen", "B) bedroom", "C) garden"],
      "ans": "A) kitchen"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE5_14.png"),
      "q": "14. Carrot is a ______.",
      "options": ["A) vegetable", "B) sweet", "C) drink"],
      "ans": "A) vegetable"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE5_15.png"),
      "q": "15. You sit on a big ______ in the living room.",
      "options": ["A) sofa", "B) flower", "C) tree"],
      "ans": "A) sofa"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. There ______ a sofa in the room.",
      "options": ["A) is", "B) are", "C) am"],
      "ans": "A) is"
    },
    {
      "type": "mcq",
      "q": "17. There ______ three rooms upstairs.",
      "options": ["A) is", "B) are", "C) am"],
      "ans": "B) are"
    },
    {
      "type": "mcq",
      "q": "18. We ______ eat fruits.",
      "options": ["A) should", "B) shouldn't", "C) cannot"],
      "ans": "A) should"
    },
    {
      "type": "mcq",
      "q": "19. You ______ eat too many sweets.",
      "options": ["A) should", "B) shouldn't", "C) can"],
      "ans": "B) shouldn't"
    },
    {
      "type": "mcq",
      "q": "20. ______ there a garden outside?",
      "options": ["A) Is", "B) Are", "C) Do"],
      "ans": "A) Is"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) House", "B) Howse", "C) Hous"],
      "ans": "A) House"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ new / A / house ]",
      "options": ["A) House a new.", "B) A new house.", "C) New a house."],
      "ans": "B) A new house."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Fruit", "B) Froot", "C) Fruite"],
      "ans": "A) Fruit"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ eat / healthy / food / We ]",
      "options": ["A) We eat healthy food.", "B) Food healthy we eat.", "C) Eat we healthy food."],
      "ans": "A) We eat healthy food."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Where do you sleep?",
      "options": ["A) In my bedroom.", "B) In the kitchen.", "C) In the garden."],
      "ans": "A) In my bedroom."
    },
    {
      "type": "mcq",
      "q": "26. Are sweets good for your teeth?",
      "options": ["A) No, they are bad.", "B) Yes, very good.", "C) I don't know."],
      "ans": "A) No, they are bad."
    },
    {
      "type": "mcq",
      "q": "27. Do you like eating fruits?",
      "options": ["A) Yes, I do.", "B) Yes, I am.", "C) Yes, I can."],
      "ans": "A) Yes, I do."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE5_28.png"),
      "q": "28. Read the sign: [APPLE]\nIs this a fruit or a drink?",
      "options": ["A) Fruit", "B) Drink", "C) Toy"],
      "ans": "A) Fruit"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE5_29.png"),
      "q": "29. Read the tag: [SOFA]\nWhere can you find this?",
      "options": ["A) Living room", "B) Garden", "C) Street"],
      "ans": "A) Living room"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE5_30.png"),
      "q": "30. Look at the sign: [MILK]\nIs milk healthy?",
      "options": ["A) Yes", "B) No", "C) Never"],
      "ans": "A) Yes"
    }
  ]
};
