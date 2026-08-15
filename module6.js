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
quizBank["GET SMART SET"]["Module 6: Food, Please! / Getting Around"] = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Food, Please!) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_1.png"),
      "q": "1. Where did Encik Kamal and his family go on Saturday night?",
      "options": ["A) To a western restaurant", "B) To a fast food shop", "C) To a food court"],
      "ans": "A) To a western restaurant"
    },
    {
      "type": "mcq",
      "q": "2. What did Encik Kamal order for his meal?",
      "options": ["A) Fresh tuna salad", "B) Grilled chicken with black pepper sauce", "C) Large cheese pizza"],
      "ans": "B) Grilled chicken with black pepper sauce"
    },
    {
      "type": "mcq",
      "q": "3. Which food was ordered by the children, Tina and Rayyan?",
      "options": ["A) Fresh tuna salad and grilled chicken", "B) Spaghetti carbonara and a large cheese pizza", "C) Fish and chips with soup"],
      "ans": "B) Spaghetti carbonara and a large cheese pizza"
    },
    {
      "type": "mcq",
      "q": "4. What drink did the family have together?",
      "options": ["A) Fresh orange juice", "B) Hot chocolate", "C) Iced lemon tea"],
      "ans": "A) Fresh orange juice"
    },
    {
      "type": "mcq",
      "q": "5. What message is shown at the bottom of the poster?",
      "options": ["A) Good food brings happiness to the family!", "B) Always eat fast food on weekends!", "C) Cooking at home is better!"],
      "ans": "A) Good food brings happiness to the family!"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Getting Around) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_6.png"),
      "q": "6. Why is taking the bus convenient, according to the chart?",
      "options": ["A) It is cheap and convenient", "B) It is the fastest vehicle in town", "C) It never gets stuck in traffic"],
      "ans": "A) It is cheap and convenient"
    },
    {
      "type": "mcq",
      "q": "7. What is the main drawback of taking the bus?",
      "options": ["A) It is very expensive", "B) It can be slow during traffic jams", "C) It causes pollution"],
      "ans": "B) It can be slow during traffic jams"
    },
    {
      "type": "mcq",
      "q": "8. Why is riding a train or LRT much faster?",
      "options": ["A) Because it travels on its own track", "B) Because it flies in the air", "C) Because it does not stop at stations"],
      "ans": "A) Because it travels on its own track"
    },
    {
      "type": "mcq",
      "q": "9. Why do many people prefer riding bicycles or walking for short distances?",
      "options": ["A) Because it is healthy and good for the environment", "B) Because it is faster than a train", "C) Because it is easy to carry on a bus"],
      "ans": "A) Because it is healthy and good for the environment"
    },
    {
      "type": "mcq",
      "q": "10. What advice does the poster give to commuters?",
      "options": ["A) Always drive private cars every day", "B) Choose smart ways to travel for yourself and our planet", "C) Avoid walking to school"],
      "ans": "B) Choose smart ways to travel for yourself and our planet"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_11.png"),
      "q": "11. An Italian dish consisting of long, thin strands of pasta is called ______.",
      "options": ["A) pizza", "B) spaghetti", "C) burger"],
      "ans": "B) spaghetti"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_12.png"),
      "q": "12. A mode of public transport that travels along rails is a ______.",
      "options": ["A) train", "B) bicycle", "C) bus"],
      "ans": "A) train"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_13.png"),
      "q": "13. A baked flat bread topped with tomato sauce and cheese is a ______.",
      "options": ["A) pizza", "B) salad", "C) sandwich"],
      "ans": "A) pizza"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_14.png"),
      "q": "14. A two-wheeled vehicle that you pedal with your feet is a ______.",
      "options": ["A) motorcycle", "B) bicycle", "C) car"],
      "ans": "B) bicycle"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_15.png"),
      "q": "15. A healthy dish made of mixed raw vegetables or fruits is a ______.",
      "options": ["A) salad", "B) soup", "C) pie"],
      "ans": "A) salad"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_16.png"),
      "q": "16. Would you like ______ orange juice with your meal?",
      "options": ["A) some", "B) any", "C) a"],
      "ans": "A) some"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_17.png"),
      "q": "17. Is there ______ cheese left on the table?",
      "options": ["A) some", "B) any", "C) many"],
      "ans": "B) any"
    },
    {
      "type": "mcq",
      "q": "18. Riding an LRT is ______ than taking a bus during peak hours.",
      "options": ["A) fast", "B) faster", "C) fastest"],
      "ans": "B) faster"
    },
    {
      "type": "mcq",
      "q": "19. Walking is ______ for your heart than driving a car.",
      "options": ["A) better", "B) good", "C) best"],
      "ans": "A) better"
    },
    {
      "type": "mcq",
      "q": "20. How ______ milk do we need to bake this cake?",
      "options": ["A) many", "B) much", "C) few"],
      "ans": "B) much"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with the correct punctuation and capital letters.",
      "options": ["A) encik kamal ordered grilled chicken.", "B) Encik Kamal ordered grilled chicken.", "C) Encik kamal ordered Grilled chicken"],
      "ans": "B) Encik Kamal ordered grilled chicken."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words to make a correct sentence: [ ordered / a / cheese / pizza / Rayyan / large ]",
      "options": ["A) Rayyan ordered a large cheese pizza.", "B) Cheese pizza ordered Rayyan a large.", "C) Large Rayyan ordered a pizza cheese."],
      "ans": "A) Rayyan ordered a large cheese pizza."
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words to form a correct sentence: [ faster / A / than / bus / train / is / a ]",
      "options": ["A) A train is faster than a bus.", "B) A bus is faster than a train.", "C) Faster a train is than bus."],
      "ans": "A) A train is faster than a bus."
    },
    {
      "type": "mcq",
      "q": "24. Choose the correct spelling for the Italian noodle dish.",
      "options": ["A) Spageti", "B) Spaghetti", "C) Spagetti"],
      "ans": "B) Spaghetti"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. How do you order food politely at a restaurant?",
      "options": ["A) Give me pizza now!", "B) I would like a pizza, please.", "C) Bring me food quickly."],
      "ans": "B) I would like a pizza, please."
    },
    {
      "type": "mcq",
      "q": "26. How do you ask a waiter for the menu?",
      "options": ["A) Can I have the menu, please?", "B) Where is your food?", "C) What is your name?"],
      "ans": "A) Can I have the menu, please?"
    },
    {
      "type": "mcq",
      "q": "27. Your classmate asks how you come to school. How do you reply?",
      "options": ["A) I travel by bus.", "B) I eat my lunch.", "C) School is big."],
      "ans": "A) I travel by bus."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_28.png"),
      "q": "28. Read the sign: [BUS STOP: NO PARKING]\nWhat does it mean?",
      "options": ["A) You can park your car here", "B) Only buses can stop here", "C) Bicycles are not allowed"],
      "ans": "B) Only buses can stop here"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_29.png"),
      "q": "29. Read the menu notice: [TODAY'S SPECIAL: TUNA SALAD WITH FREE ORANGE JUICE]\nWhat free drink do you get with the salad?",
      "options": ["A) Water", "B) Orange juice", "C) Apple juice"],
      "ans": "B) Orange juice"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE6_30.png"),
      "q": "30. Look at the sign: [BIKE LANE ONLY]\nWho can use this path?",
      "options": ["A) Cars and trucks", "B) People on bicycles", "C) Train drivers"],
      "ans": "B) People on bicycles"
    }
  ]
};

// ==========================================
// 2. REMEDIAL SET (30 SOALAN)
// ==========================================
quizBank["REMEDIAL SET"]["Module 6: Food, Please! / Getting Around"] = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: At the Restaurant) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_1.png"),
      "q": "1. Who goes to a restaurant?",
      "options": ["A) Siti", "B) Amir", "C) Adam"],
      "ans": "A) Siti"
    },
    {
      "type": "mcq",
      "q": "2. Siti orders a ____.",
      "options": ["A) pizza", "B) burger", "C) cake"],
      "ans": "A) pizza"
    },
    {
      "type": "mcq",
      "q": "3. What drink does she order?",
      "options": ["A) Orange juice", "B) Milk", "C) Water"],
      "ans": "A) Orange juice"
    },
    {
      "type": "mcq",
      "q": "4. The food is ____.",
      "options": ["A) tasty", "B) bad", "C) cold"],
      "ans": "A) tasty"
    },
    {
      "type": "mcq",
      "q": "5. Good food makes us ____!",
      "options": ["A) happy", "B) sad", "C) angry"],
      "ans": "A) happy"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Transport) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_6.png"),
      "q": "6. Buses and trains help us ____.",
      "options": ["A) go to places", "B) sleep at home", "C) eat dinner"],
      "ans": "A) go to places"
    },
    {
      "type": "mcq",
      "q": "7. A train is very ____.",
      "options": ["A) slow", "B) fast", "C) small"],
      "ans": "B) fast"
    },
    {
      "type": "mcq",
      "q": "8. A bicycle is good for ____.",
      "options": ["A) exercise", "B) sleeping", "C) cooking"],
      "ans": "A) exercise"
    },
    {
      "type": "mcq",
      "q": "9. Choose the right transport for a better ____!",
      "options": ["A) life", "B) toy", "C) book"],
      "ans": "A) life"
    },
    {
      "type": "mcq",
      "q": "10. What picture is this?",
      "options": ["A) Food", "B) Transport", "C) House"],
      "ans": "B) Transport"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_11.png"),
      "q": "11. You eat a round cheese ______.",
      "options": ["A) pizza", "B) milk", "C) soup"],
      "ans": "A) pizza"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_12.png"),
      "q": "12. A big vehicle that carries many passengers is a ______.",
      "options": ["A) bus", "B) bicycle", "C) car"],
      "ans": "A) bus"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_13.png"),
      "q": "13. Orange juice is a sweet ______.",
      "options": ["A) drink", "B) food", "C) toy"],
      "ans": "A) drink"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_14.png"),
      "q": "14. A vehicle with two wheels is a ______.",
      "options": ["A) bicycle", "B) train", "C) bus"],
      "ans": "A) bicycle"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_15.png"),
      "q": "15. Long noodles are called ______.",
      "options": ["A) spaghetti", "B) bread", "C) rice"],
      "ans": "A) spaghetti"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. Would you like ______ juice?",
      "options": ["A) some", "B) any", "C) a"],
      "ans": "A) some"
    },
    {
      "type": "mcq",
      "q": "17. Is there ______ pizza left?",
      "options": ["A) any", "B) some", "C) many"],
      "ans": "A) any"
    },
    {
      "type": "mcq",
      "q": "18. A train is ______ than a bus.",
      "options": ["A) faster", "B) fast", "C) slow"],
      "ans": "A) faster"
    },
    {
      "type": "mcq",
      "q": "19. Walking is ______ for health.",
      "options": ["A) good", "B) bad", "C) sad"],
      "ans": "A) good"
    },
    {
      "type": "mcq",
      "q": "20. How ______ milk is in the glass?",
      "options": ["A) much", "B) many", "C) few"],
      "ans": "A) much"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Pizza", "B) Piza", "C) Pezza"],
      "ans": "A) Pizza"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ eats / Siti / pizza ]",
      "options": ["A) Pizza eats Siti.", "B) Siti eats pizza.", "C) Eats Siti pizza."],
      "ans": "B) Siti eats pizza."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Train", "B) Trane", "C) Trayn"],
      "ans": "A) Train"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ fast / is / A / train ]",
      "options": ["A) A train is fast.", "B) Fast is train a.", "C) Train a is fast."],
      "ans": "A) A train is fast."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. How do you ask for food politely?",
      "options": ["A) Pizza, please.", "B) Give me pizza!", "C) No food."],
      "ans": "A) Pizza, please."
    },
    {
      "type": "mcq",
      "q": "26. How do you go to school?",
      "options": ["A) By bus.", "B) By pizza.", "C) By table."],
      "ans": "A) By bus."
    },
    {
      "type": "mcq",
      "q": "27. Is a train fast?",
      "options": ["A) Yes, it is.", "B) No, it isn't.", "C) I don't know."],
      "ans": "A) Yes, it is."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_28.png"),
      "q": "28. Read the sign: [BUS STOP]\nWhat stops here?",
      "options": ["A) Bus", "B) Train", "C) Boat"],
      "ans": "A) Bus"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_29.png"),
      "q": "29. Read the tag: [PIZZA]\nIs this food or transport?",
      "options": ["A) Food", "B) Transport", "C) House"],
      "ans": "A) Food"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE6_30.png"),
      "q": "30. Look at the sign: [TRAIN STATION]\nWhere are you?",
      "options": ["A) Train Station", "B) Bus Stop", "C) Park"],
      "ans": "A) Train Station"
    }
  ]
};
