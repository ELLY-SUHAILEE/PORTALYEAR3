if (typeof quizBank === 'undefined') { var quizBank = {}; }
if (!quizBank["GET SMART SET"]) { quizBank["GET SMART SET"] = {}; }
if (!quizBank["REMEDIAL SET"]) { quizBank["REMEDIAL SET"] = {}; }

// Fungsi pembantu untuk memastikan gambar berada di tengah (Center)
function wrapCenterImage(imagePath) {
    if (!imagePath) return "";
    return `<div style="text-align: center; margin: 15px 0;"><img src="${imagePath}" style="display: block; margin: 0 auto; max-width: 100%; max-height: 250px; border-radius: 10px; border: 1px solid #ddd;" onerror="this.style.display='none'"></div>`;
}

// ==========================================
// 1. GET SMART SET (30 SOALAN) - MODULE 4: YEAR IN, YEAR OUT
// ==========================================
quizBank["GET SMART SET"]["Module 4: Year in, year out"] = {
  "Reading": [
    // --- GAMBAR 1 (Soalan 1 - 5) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE4_1.png"),
      "q": "1. What happens to the leaves in autumn?",
      "options": ["A) They turn yellow and fall", "B) They grow bigger", "C) They turn green"],
      "ans": "A) They turn yellow and fall"
    },
    {
      "type": "mcq",
      "q": "2. What do Nurul and her brother do in autumn?",
      "options": ["A) They go swimming", "B) They jump in the leaves", "C) They plant flowers"],
      "ans": "B) They jump in the leaves"
    },
    {
      "type": "mcq",
      "q": "3. What is the weather like in winter?",
      "options": ["A) It is hot and sunny", "B) It is warm and windy", "C) It is very cold and it snows"],
      "ans": "C) It is very cold and it snows"
    },
    {
      "type": "mcq",
      "q": "4. What do they wear in winter?",
      "options": ["A) Swimsuits", "B) Warm coats", "C) T-shirts"],
      "ans": "B) Warm coats"
    },
    {
      "type": "mcq",
      "q": "5. What activity do they do when it snows?",
      "options": ["A) Make a snowman", "B) Build a sandcastle", "C) Fly a kite"],
      "ans": "A) Make a snowman"
    },

    // --- GAMBAR 2 (Soalan 6 - 10) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE4_6.png"),
      "q": "6. Where do Lee and his family go in summer?",
      "options": ["A) To the park", "B) To the beach", "C) To the mountains"],
      "ans": "B) To the beach"
    },
    {
      "type": "mcq",
      "q": "7. What does Lee do at the beach?",
      "options": ["A) He goes swimming in the sea", "B) He builds a sandcastle", "C) He makes a snowman"],
      "ans": "A) He goes swimming in the sea"
    },
    {
      "type": "mcq",
      "q": "8. What does Lee's sister do at the beach?",
      "options": ["A) She goes surfing", "B) She builds a sandcastle", "C) She collects leaves"],
      "ans": "B) She builds a sandcastle"
    },
    {
      "type": "mcq",
      "q": "9. What is the weather like in spring?",
      "options": ["A) Cold and snowy", "B) Warm and flowers bloom", "C) Wet and rainy"],
      "ans": "B) Warm and flowers bloom"
    },
    {
      "type": "mcq",
      "q": "10. Which statement is TRUE based on Passage 2?",
      "options": ["A) Lee swims in winter.", "B) In summer, it is hot and sunny.", "C) Flowers bloom in autumn."],
      "ans": "B) In summer, it is hot and sunny."
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE4_11.png"),
      "q": "11. Which season is cold and has snow?",
      "options": ["A) Summer", "B) Winter", "C) Spring"],
      "ans": "B) Winter"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE4_12.png"),
      "q": "12. In ______, it is hot and sunny, so people go to the beach.",
      "options": ["A) summer", "B) autumn", "C) winter"],
      "ans": "A) summer"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE4_13.png"),
      "q": "13. Children love building a ______ using sand at the beach.",
      "options": ["A) snowman", "B) sandcastle", "C) house"],
      "ans": "B) sandcastle"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE4_14.png"),
      "q": "14. Leaves turn brown and fall off the trees in ______.",
      "options": ["A) spring", "B) autumn", "C) summer"],
      "ans": "B) autumn"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE4_15.png"),
      "q": "15. Flowers bloom and green plants grow during ______.",
      "options": ["A) spring", "B) winter", "C) autumn"],
      "ans": "A) spring"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE4_16.png"),
      "q": "16. What is your favourite season? ______ favourite season is spring.",
      "options": ["A) My", "B) His", "C) Her"],
      "ans": "A) My"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE4_17.png"),
      "q": "17. It is sunny today. ______ goes swimming in the pool.",
      "options": ["A) He", "B) They", "C) We"],
      "ans": "A) He"
    },
    {
      "type": "mcq",
      "q": "18. What ______ the weather like in winter?",
      "options": ["A) is", "B) are", "C) do"],
      "ans": "A) is"
    },
    {
      "type": "mcq",
      "q": "19. In autumn, they ______ jumping in the leaves.",
      "options": ["A) like", "B) likes", "C) liking"],
      "ans": "A) like"
    },
    {
      "type": "mcq",
      "q": "20. She ______ build a snowman when it snows.",
      "options": ["A) can", "B) is", "C) have"],
      "ans": "A) can"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with correct punctuation.",
      "options": ["A) my favourite season is summer.", "B) My favourite season is summer.", "C) My favourite season is summer"],
      "ans": "B) My favourite season is summer."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words: [ hot / It / in / is / summer ]",
      "options": ["A) In summer it hot is.", "B) It is hot in summer.", "C) Hot it is summer in."],
      "ans": "B) It is hot in summer."
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words: [ sandcastle / She / a / builds ]",
      "options": ["A) She builds a sandcastle.", "B) A sandcastle she builds.", "C) Builds she a sandcastle."],
      "ans": "A) She builds a sandcastle."
    },
    {
      "type": "mcq",
      "q": "24. Choose the correct spelling for the cold season.",
      "options": ["A) Winter", "B) Wintar", "C) Wynter"],
      "ans": "A) Winter"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. How do you ask someone about their favourite season?",
      "options": ["A) What is your favourite season?", "B) Where is your season?", "C) Who is your season?"],
      "ans": "A) What is your favourite season?"
    },
    {
      "type": "mcq",
      "q": "26. Your friend asks, 'What is the weather like today?' If it is raining, you say:",
      "options": ["A) It is sunny.", "B) It is rainy.", "C) It is snowy."],
      "ans": "B) It is rainy."
    },
    {
      "type": "mcq",
      "q": "27. What do you say when you like winter?",
      "options": ["A) My favourite season is winter.", "B) I hate winter.", "C) Winter is bad."],
      "ans": "A) My favourite season is winter."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE4_28.png"),
      "q": "28. Read the weather report: 'It is 35°C and sunny today.' What should you wear?",
      "options": ["A) A heavy coat", "B) A T-shirt and shorts", "C) A raincoat"],
      "ans": "B) A T-shirt and shorts"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE4_29.png"),
      "q": "29. Read the postcard: 'Greetings from the beach! I am building a sandcastle right now.' Which season is it?",
      "options": ["A) Winter", "B) Summer", "C) Autumn"],
      "ans": "B) Summer"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE4_30.png"),
      "q": "30. Look at the park sign: 'Do not pick the spring flowers.' What season is mentioned?",
      "options": ["A) Spring", "B) Autumn", "C) Winter"],
      "ans": "A) Spring"
    }
  ]
};

// ==========================================
// 2. REMEDIAL SET (30 SOALAN) - MODULE 4: YEAR IN, YEAR OUT
// ==========================================
quizBank["REMEDIAL SET"]["Module 4: Year in, year out"] = {
  "Reading": [
    // --- GAMBAR 1 (Soalan 1 - 5) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE4_1.png"),
      "q": "1. What falls down in autumn?",
      "options": ["A) Leaves", "B) Snow", "C) Rain"],
      "ans": "A) Leaves"
    },
    {
      "type": "mcq",
      "q": "2. Who jumps in the leaves?",
      "options": ["A) Nurul", "B) Lee", "C) Tom"],
      "ans": "A) Nurul"
    },
    {
      "type": "mcq",
      "q": "3. What happens in winter?",
      "options": ["A) It snows", "B) It is hot", "C) Flowers bloom"],
      "ans": "A) It snows"
    },
    {
      "type": "mcq",
      "q": "4. What does Nurul make in winter?",
      "options": ["A) A sandcastle", "B) A snowman", "C) A cake"],
      "ans": "B) A snowman"
    },
    {
      "type": "mcq",
      "q": "5. Which season has snow?",
      "options": ["A) Summer", "B) Winter", "C) Spring"],
      "ans": "B) Winter"
    },

    // --- GAMBAR 2 (Soalan 6 - 10) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE4_6.png"),
      "q": "6. What is the weather like in summer?",
      "options": ["A) Hot", "B) Cold", "C) Snowy"],
      "ans": "A) Hot"
    },
    {
      "type": "mcq",
      "q": "7. Where does Lee swim?",
      "options": ["A) In the sea", "B) In the lake", "C) In the river"],
      "ans": "A) In the sea"
    },
    {
      "type": "mcq",
      "q": "8. What grows in spring?",
      "options": ["A) Flowers", "B) Snowmen", "C) Sandcastles"],
      "ans": "A) Flowers"
    },
    {
      "type": "mcq",
      "q": "9. Who swims in summer?",
      "options": ["A) Lee", "B) Nurul", "C) Brad"],
      "ans": "A) Lee"
    },
    {
      "type": "mcq",
      "q": "10. Lee swims in the ____.",
      "options": ["A) sea", "B) pool", "C) house"],
      "ans": "A) sea"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE4_11.png"),
      "q": "11. White cold snow comes in ______.",
      "options": ["A) winter", "B) summer", "C) spring"],
      "ans": "A) winter"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE4_12.png"),
      "q": "12. Hot and sunny weather is in ______.",
      "options": ["A) summer", "B) winter", "C) autumn"],
      "ans": "A) summer"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE4_13.png"),
      "q": "13. You make a ______ with snow.",
      "options": ["A) snowman", "B) sandcastle", "C) ball"],
      "ans": "A) snowman"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE4_14.png"),
      "q": "14. Beautiful ______ grow in spring.",
      "options": ["A) flowers", "B) snow", "C) coats"],
      "ans": "A) flowers"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE4_15.png"),
      "q": "15. Yellow leaves fall in ______.",
      "options": ["A) autumn", "B) summer", "C) spring"],
      "ans": "A) autumn"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. It ______ sunny today.",
      "options": ["A) is", "B) are", "C) am"],
      "ans": "A) is"
    },
    {
      "type": "mcq",
      "q": "17. Flowers ______ pretty.",
      "options": ["A) are", "B) is", "C) am"],
      "ans": "A) are"
    },
    {
      "type": "mcq",
      "q": "18. I ______ summer.",
      "options": ["A) like", "B) likes", "C) liking"],
      "ans": "A) like"
    },
    {
      "type": "mcq",
      "q": "19. He ______ in the sea.",
      "options": ["A) swims", "B) swim", "C) swimming"],
      "ans": "A) swims"
    },
    {
      "type": "mcq",
      "q": "20. It ______ cold in winter.",
      "options": ["A) is", "B) are", "C) am"],
      "ans": "A) is"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Summer", "B) Sumar", "C) Summerr"],
      "ans": "A) Summer"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ cold / It / is ]",
      "options": ["A) Is it cold.", "B) It is cold.", "C) Cold it is."],
      "ans": "B) It is cold."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Snow", "B) Snoww", "C) Snoe"],
      "ans": "A) Snow"
    },
    {
      "type": "mcq",
      "q": "24. Choose the season word:",
      "options": ["A) Spring", "B) Jump", "C) Run"],
      "ans": "A) Spring"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. How is the weather when it is hot?",
      "options": ["A) It is sunny.", "B) It is cold.", "C) It is snowy."],
      "ans": "A) It is sunny."
    },
    {
      "type": "mcq",
      "q": "26. What do you say if you like summer?",
      "options": ["A) I like summer.", "B) No summer.", "C) Goodbye summer."],
      "ans": "A) I like summer."
    },
    {
      "type": "mcq",
      "q": "27. What season is hot?",
      "options": ["A) Summer", "B) Winter", "C) Night"],
      "ans": "A) Summer"
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE4_28.png"),
      "q": "28. Read the label: [BEACH TOYS]\nWhich season do you use this?",
      "options": ["A) Summer", "B) Winter", "C) Autumn"],
      "ans": "A) Summer"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE4_29.png"),
      "q": "29. Read the tag: [WINTER COAT]\nWhen do you wear this?",
      "options": ["A) In winter", "B) In summer", "C) At the beach"],
      "ans": "A) In winter"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE4_30.png"),
      "q": "30. Look at the picture sign: [FLOWERS]\nWhich season is this?",
      "options": ["A) Spring", "B) Winter", "C) Night"],
      "ans": "A) Spring"
    }
  ]
};
