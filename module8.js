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
quizBank["GET SMART SET"]["Module 8: Where Were You Yesterday? / Amazing Animals"] = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Where Were You Yesterday?) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_1.png"),
      "q": "1. What day was yesterday?",
      "options": ["A) Friday", "B) Saturday", "C) Sunday"],
      "ans": "B) Saturday"
    },
    {
      "type": "mcq",
      "q": "2. Where was Mei Ling yesterday morning?",
      "options": ["A) At the sports center", "B) At the public library", "C) At the park"],
      "ans": "B) At the public library"
    },
    {
      "type": "mcq",
      "q": "3. What was Kevin doing yesterday morning?",
      "options": ["A) Reading storybooks", "B) Playing badminton with his friends", "C) Swimming in the pool"],
      "ans": "B) Playing badminton with his friends"
    },
    {
      "type": "mcq",
      "q": "4. Where were Mei Ling and Kevin in the afternoon?",
      "options": ["A) At school", "B) At home", "C) At the cinema"],
      "ans": "B) At home"
    },
    {
      "type": "mcq",
      "q": "5. What did the children bake with their mother?",
      "options": ["A) Chocolate cookies", "B) Banana cakes", "C) Fruit pies"],
      "ans": "A) Chocolate cookies"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Amazing Animals!) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_6.png"),
      "q": "6. What features are eagles known for?",
      "options": ["A) Soft feathers and small wings", "B) Sharp eyesight and strong claws", "C) Long tails and small beaks"],
      "ans": "B) Sharp eyesight and strong claws"
    },
    {
      "type": "mcq",
      "q": "7. Where do eagles build their big nests?",
      "options": ["A) In deep caves", "B) Under the ground", "C) On high cliffs or tall trees"],
      "ans": "C) On high cliffs or tall trees"
    },
    {
      "type": "mcq",
      "q": "8. What does it mean that eagles are carnivores?",
      "options": ["A) They only eat plants and fruits", "B) They hunt and eat smaller animals", "C) They drink only water"],
      "ans": "B) They hunt and eat smaller animals"
    },
    {
      "type": "mcq",
      "q": "9. Which of the following is NOT eaten by eagles according to the text?",
      "options": ["A) Fish", "B) Rabbits", "C) Bananas"],
      "ans": "C) Bananas"
    },
    {
      "type": "mcq",
      "q": "10. How do eagles fly in the sky?",
      "options": ["A) They fly slowly and low", "B) They fly very fast and soar high", "C) They cannot fly high"],
      "ans": "B) They fly very fast and soar high"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_11.png"),
      "q": "11. A place where you can borrow and read books is a ______.",
      "options": ["A) library", "B) bakery", "C) sports center"],
      "ans": "A) library"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_12.png"),
      "q": "12. Sharp curved nails on a bird of prey's feet are called ______.",
      "options": ["A) claws", "B) fins", "C) paws"],
      "ans": "A) claws"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_13.png"),
      "q": "13. Animals that eat meat are called ______.",
      "options": ["A) herbivores", "B) carnivores", "C) omnivores"],
      "ans": "B) carnivores"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_14.png"),
      "q": "14. A structure built by birds to lay eggs and hatch their young is a ______.",
      "options": ["A) nest", "B) cage", "C) den"],
      "ans": "A) nest"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_15.png"),
      "q": "15. A venue where people play indoor games like badminton is a ______.",
      "options": ["A) sports center", "B) shopping mall", "C) cinema"],
      "ans": "A) sports center"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_16.png"),
      "q": "16. Where ______ you yesterday morning?",
      "options": ["A) were", "B) was", "C) are"],
      "ans": "A) were"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_17.png"),
      "q": "17. Mei Ling ______ at the public library yesterday.",
      "options": ["A) was", "B) were", "C) is"],
      "ans": "A) was"
    },
    {
      "type": "mcq",
      "q": "18. Both of the children ______ at home in the afternoon.",
      "options": ["A) was", "B) were", "C) are"],
      "ans": "B) were"
    },
    {
      "type": "mcq",
      "q": "19. Eagles ______ fast flyers and strong birds.",
      "options": ["A) is", "B) are", "C) was"],
      "ans": "B) are"
    },
    {
      "type": "mcq",
      "q": "20. Kevin ______ at the sports center playing badminton yesterday.",
      "options": ["A) was", "B) were", "C) am"],
      "ans": "A) was"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with the correct capitalization and punctuation.",
      "options": ["A) mei ling was at the public library yesterday.", "B) Mei Ling was at the public library yesterday.", "C) Mei ling was at the Public library yesterday"],
      "ans": "B) Mei Ling was at the public library yesterday."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words to form a correct sentence: [ was / yesterday / Saturday / Yesterday ]",
      "options": ["A) Yesterday was Saturday yesterday.", "B) Yesterday was Saturday.", "C) Saturday yesterday was."],
      "ans": "B) Yesterday was Saturday."
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words to form a correct sentence: [ build / high / Eagles / nests / cliffs / on ]",
      "options": ["A) Eagles build nests on high cliffs.", "B) Nests build eagles high on cliffs.", "C) High cliffs eagles build on nests."],
      "ans": "A) Eagles build nests on high cliffs."
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) Libary", "B) Library", "C) Librery"],
      "ans": "B) Library"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. How do you ask a friend about their location yesterday?",
      "options": ["A) Where were you yesterday?", "B) Where are you going tomorrow?", "C) What are you doing now?"],
      "ans": "A) Where were you yesterday?"
    },
    {
      "type": "mcq",
      "q": "26. How do you answer when someone asks: 'Where were you yesterday afternoon?'",
      "options": ["A) I was at home helping my mother.", "B) I am at the park right now.", "C) I will go to the library."],
      "ans": "A) I was at home helping my mother."
    },
    {
      "type": "mcq",
      "q": "27. How do you describe an eagle to your class?",
      "options": ["A) Eagles are small and swim in rivers.", "B) Eagles are big birds with sharp eyesight.", "C) Eagles live in ocean water."],
      "ans": "B) Eagles are big birds with sharp eyesight."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_28.png"),
      "q": "28. Read the sign: [SILENCE PLEASE - PUBLIC LIBRARY]\nWhat should you do inside?",
      "options": ["A) Speak quietly or stay silent", "B) Play music loudly", "C) Run around"],
      "ans": "A) Speak quietly or stay silent"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_29.png"),
      "q": "29. Read the poster: [SPORTS CENTER: BADMINTON COURT OPEN]\nWhat sport can you play here?",
      "options": ["A) Football", "B) Badminton", "C) Swimming"],
      "ans": "B) Badminton"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_30.png"),
      "q": "30. Look at the fact card: [EAGLE: CARNIVORE]\nWhat food does an eagle eat?",
      "options": ["A) Meat and small animals", "B) Leaves and grass", "C) Seeds and bread"],
      "ans": "A) Meat and small animals"
    }
  ]
};

// ==========================================
// 2. REMEDIAL SET (30 SOALAN)
// ==========================================
quizBank["REMEDIAL SET"]["Module 8: Where Were You Yesterday? / Amazing Animals"] = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Yesterday) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_1.png"),
      "q": "1. Yesterday was ____.",
      "options": ["A) Saturday", "B) Sunday", "C) Monday"],
      "ans": "A) Saturday"
    },
    {
      "type": "mcq",
      "q": "2. In the morning, Ali was at the ____.",
      "options": ["A) library", "B) zoo", "C) park"],
      "ans": "A) library"
    },
    {
      "type": "mcq",
      "q": "3. In the afternoon, he was at ____.",
      "options": ["A) home", "B) school", "C) shop"],
      "ans": "A) home"
    },
    {
      "type": "mcq",
      "q": "4. What was Ali reading at the library?",
      "options": ["A) A storybook", "B) A comic", "C) A newspaper"],
      "ans": "A) A storybook"
    },
    {
      "type": "mcq",
      "q": "5. What is this picture about?",
      "options": ["A) Yesterday", "B) Tomorrow", "C) Today"],
      "ans": "A) Yesterday"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Eagles) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_6.png"),
      "q": "6. Eagles are ____ birds.",
      "options": ["A) big", "B) small", "C) tiny"],
      "ans": "A) big"
    },
    {
      "type": "mcq",
      "q": "7. Eagles have sharp ____.",
      "options": ["A) eyes", "B) ears", "C) legs"],
      "ans": "A) eyes"
    },
    {
      "type": "mcq",
      "q": "8. Where can eagles fly?",
      "options": ["A) High in the sky", "B) Under the water", "C) In the soil"],
      "ans": "A) High in the sky"
    },
    {
      "type": "mcq",
      "q": "9. Eagles eat ____.",
      "options": ["A) fish", "B) apples", "C) rice"],
      "ans": "A) fish"
    },
    {
      "type": "mcq",
      "q": "10. What bird is in the picture?",
      "options": ["A) Eagle", "B) Duck", "C) Chicken"],
      "ans": "A) Eagle"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_11.png"),
      "q": "11. A place with many books is a ______.",
      "options": ["A) library", "B) park", "C) zoo"],
      "ans": "A) library"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_12.png"),
      "q": "12. A big flying bird is an ______.",
      "options": ["A) eagle", "B) owl", "C) duck"],
      "ans": "A) eagle"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_13.png"),
      "q": "13. Animal food from water: ______.",
      "options": ["A) fish", "B) grass", "C) cake"],
      "ans": "A) fish"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_14.png"),
      "q": "14. Where you live with family: ______.",
      "options": ["A) home", "B) shop", "C) street"],
      "ans": "A) home"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_15.png"),
      "q": "15. The day before today was ______.",
      "options": ["A) yesterday", "B) tomorrow", "C) tonight"],
      "ans": "A) yesterday"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. Yesterday, I ______ at home.",
      "options": ["A) was", "B) were", "C) am"],
      "ans": "A) was"
    },
    {
      "type": "mcq",
      "q": "17. They ______ at the library yesterday.",
      "options": ["A) were", "B) was", "C) is"],
      "ans": "A) were"
    },
    {
      "type": "mcq",
      "q": "18. Ali ______ at home in the afternoon.",
      "options": ["A) was", "B) were", "C) are"],
      "ans": "A) was"
    },
    {
      "type": "mcq",
      "q": "19. Eagles ______ sharp eyes.",
      "options": ["A) have", "B) has", "C) having"],
      "ans": "A) have"
    },
    {
      "type": "mcq",
      "q": "20. Where ______ you yesterday?",
      "options": ["A) were", "B) was", "C) is"],
      "ans": "A) were"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Eagle", "B) Egle", "C) Eagal"],
      "ans": "A) Eagle"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ was / I / home / at ]",
      "options": ["A) I was at home.", "B) At home I was.", "C) Home at I was."],
      "ans": "A) I was at home."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Saturday", "B) Saterday", "C) Saturdae"],
      "ans": "A) Saturday"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ big / are / Eagles / birds ]",
      "options": ["A) Eagles are big birds.", "B) Big birds eagles are.", "C) Birds big are eagles."],
      "ans": "A) Eagles are big birds."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Where were you yesterday?",
      "options": ["A) I was at the library.", "B) I am fine, thank you.", "C) I like apples."],
      "ans": "A) I was at the library."
    },
    {
      "type": "mcq",
      "q": "26. Can eagles fly high?",
      "options": ["A) Yes, they can.", "B) No, they can't.", "C) Yes, they do."],
      "ans": "A) Yes, they can."
    },
    {
      "type": "mcq",
      "q": "27. Was yesterday Saturday?",
      "options": ["A) Yes, it was.", "B) No, it is.", "C) Yes, I am."],
      "ans": "A) Yes, it was."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_28.png"),
      "q": "28. Read the card: [SATURDAY]\nWhat day is it?",
      "options": ["A) Saturday", "B) Sunday", "C) Friday"],
      "ans": "A) Saturday"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_29.png"),
      "q": "29. Read the sign: [QUIET PLEASE]\nWhat should you do?",
      "options": ["A) Be quiet", "B) Make noise", "C) Sing loudly"],
      "ans": "A) Be quiet"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_30.png"),
      "q": "30. Look at the picture of a fish:\nWhat animal eats this?",
      "options": ["A) Eagle", "B) Cow", "C) Horse"],
      "ans": "A) Eagle"
    }
  ]
};
