if (typeof quizBank === 'undefined') { var quizBank = {}; }
if (!quizBank["GET SMART SET"]) { quizBank["GET SMART SET"] = {}; }
if (!quizBank["REMEDIAL SET"]) { quizBank["REMEDIAL SET"] = {}; }

// Fungsi pembantu untuk memastikan gambar berada di tengah (Center)
function wrapCenterImage(imagePath) {
    if (!imagePath) return "";
    return `<div style="text-align: center; margin: 15px 0;"><img src="${imagePath}" style="display: block; margin: 0 auto; max-width: 100%; max-height: 250px; border-radius: 10px; border: 1px solid #ddd;" onerror="this.style.display='none'"></div>`;
}

// ==========================================
// 1. GET SMART SET - MODULE 9: ON HOLIDAY (30 SOALAN)
// ==========================================
quizBank["GET SMART SET"]["Module 9: On Holiday"] = {
  "Reading": [
    // --- GAMBAR 1 (Soalan 1 - 5) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_1.png"),
      "q": "1. Where did Daniel and his family go last school holiday?",
      "options": ["A) Penang Island", "B) Langkawi Island", "C) Tioman Island"],
      "ans": "B) Langkawi Island"
    },
    {
      "type": "mcq",
      "q": "2. What did Daniel pack in his beach bag?",
      "options": ["A) A raincoat and boots", "B) Sunglasses and a towel", "C) Storybooks and pencils"],
      "ans": "B) Sunglasses and a towel"
    },
    {
      "type": "mcq",
      "q": "3. What activity did Daniel do on the beach?",
      "options": ["A) He built a huge sandcastle.", "B) He rode a pony.", "C) He climbed a steep mountain."],
      "ans": "A) He built a huge sandcastle."
    },
    {
      "type": "mcq",
      "q": "4. Who collected seashells with Daniel?",
      "options": ["A) His brother", "B) His sister", "C) His cousin"],
      "ans": "B) His sister"
    },
    {
      "type": "mcq",
      "q": "5. What did the family eat in the evening?",
      "options": ["A) Fresh seafood", "B) Fried noodles", "C) Fast food burgers"],
      "ans": "A) Fresh seafood"
    },

    // --- GAMBAR 2 (Soalan 6 - 10) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_6.png"),
      "q": "6. Where did Aiman go camping last month?",
      "options": ["A) By the lake", "B) In the forest", "C) On a mountain peak"],
      "ans": "B) In the forest"
    },
    {
      "type": "mcq",
      "q": "7. Where did they pitch their tent?",
      "options": ["A) Under the tall trees", "B) Near the river bank", "C) Inside a dark cave"],
      "ans": "A) Under the tall trees"
    },
    {
      "type": "mcq",
      "q": "8. Why did they make a campfire at night?",
      "options": ["A) To cook a big feast", "B) To stay warm", "C) To scare away birds"],
      "ans": "B) To stay warm"
    },
    {
      "type": "mcq",
      "q": "9. What did Aiman see in the night sky?",
      "options": ["A) An airplane", "B) Bright stars", "C) A full moon eclipse"],
      "ans": "B) Bright stars"
    },
    {
      "type": "mcq",
      "q": "10. What did Aiman's father do before sleeping?",
      "options": ["A) Sang traditional songs", "B) Told exciting stories about wild animals", "C) Played the guitar"],
      "ans": "B) Told exciting stories about wild animals"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_11.png"),
      "q": "11. A structure built on the beach using wet sand is a ______.",
      "options": ["A) sandcastle", "B) fortress", "C) sculpture"],
      "ans": "A) sandcastle"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_12.png"),
      "q": "12. A shelter made of cloth supported by poles and ropes used during camping is a ______.",
      "options": ["A) cabin", "B) tent", "C) cottage"],
      "ans": "B) tent"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_13.png"),
      "q": "13. Hard outer covers of sea creatures found on beaches are ______.",
      "options": ["A) rocks", "B) seashells", "C) corals"],
      "ans": "B) seashells"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_14.png"),
      "q": "14. An outdoor fire made at a campsite for warmth or cooking is a ______.",
      "options": ["A) campfire", "B) torchlight", "C) stove"],
      "ans": "A) campfire"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_15.png"),
      "q": "15. A small, thin piece of wood or plastic used to clean between teeth after eating is a ______.",
      "options": ["A) toothpick", "B) chopstick", "C) paintbrush"],
      "ans": "A) toothpick"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_16.png"),
      "q": "16. Last week, my family and I ______ to the beach.",
      "options": ["A) go", "B) went", "C) gone"],
      "ans": "B) went"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_17.png"),
      "q": "17. Maya ______ a beautiful postcard from the souvenir shop yesterday.",
      "options": ["A) buy", "B) bought", "C) buys"],
      "ans": "B) bought"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_18.png"),
      "q": "18. The children ______ swimming in the sea during their holiday.",
      "options": ["A) enjoy", "B) enjoyed", "C) enjoying"],
      "ans": "B) enjoyed"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_19.png"),
      "q": "19. What is the past simple form of the verb 'see'?",
      "options": ["A) saw", "B) seen", "C) seed"],
      "ans": "A) saw"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_20.png"),
      "q": "20. They ______ not go camping because it rained heavily.",
      "options": ["A) do", "B) did", "C) does"],
      "ans": "B) did"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_21.png"),
      "q": "21. Choose the sentence with correct capitalization and punctuation.",
      "options": ["A) Last holiday, we visited Melaka.", "B) last holiday, we visited melaka", "C) Last holiday We visited Melaka?"],
      "ans": "A) Last holiday, we visited Melaka."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_22.png"),
      "q": "22. Rearrange the words: [ sandcastle / built / a / big / He / beach / on / the ]",
      "options": ["A) He built a big sandcastle on the beach.", "B) On the beach built he a big sandcastle.", "C) A big sandcastle he built on the beach."],
      "ans": "A) He built a big sandcastle on the beach."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_23.png"),
      "q": "23. Rearrange the words: [ We / in / stayed / comfortable / a / hotel ]",
      "options": ["A) We stayed in a comfortable hotel.", "B) In a hotel comfortable stayed we.", "C) Hotel we stayed in a comfortable."],
      "ans": "A) We stayed in a comfortable hotel."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_24.png"),
      "q": "24. Choose the correct past tense spelling for 'pack':",
      "options": ["A) packed", "B) packked", "C) packt"],
      "ans": "A) packed"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_25.png"),
      "q": "25. Asking about a past holiday: 'Where did you go on holiday?' How do you reply?",
      "options": ["A) I went to Cameron Highlands.", "B) I am going to school.", "C) I like holidaying."],
      "ans": "A) I went to Cameron Highlands."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_26.png"),
      "q": "26. Asking about holiday activities: 'What did you do at the beach?'",
      "options": ["A) I collected seashells.", "B) I am reading a book.", "C) I will eat lunch."],
      "ans": "A) I collected seashells."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_27.png"),
      "q": "27. Someone asks: 'Did you enjoy your trip?' If YES, how do you reply?",
      "options": ["A) Yes, I did! It was wonderful.", "B) Yes, I am going.", "C) Yes, I do every day."],
      "ans": "A) Yes, I did! It was wonderful."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_28.png"),
      "q": "28. Read the postcard: [DEAR MUM, WE ARRIVED IN PENANG YESTERDAY. THE FOOD IS GREAT!]. Where is the writer?",
      "options": ["A) In Melaka", "B) In Penang", "C) In Ipoh"],
      "ans": "B) In Penang"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_29.png"),
      "q": "29. Read the brochure: [SUNNY BEACH RESORT - BUILD SANDCASTLES & SWIM IN THE SEA]. What kind of holiday is this?",
      "options": ["A) A beach holiday", "B) A mountain hike", "C) A city museum tour"],
      "ans": "A) A beach holiday"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE9_30.png"),
      "q": "30. Read the camping checklist: [TENT, SLEEPING BAG, FLASHLIGHT, MATCHES]. Where are you going?",
      "options": ["A) Camping", "B) Shopping at the mall", "C) Visiting an art gallery"],
      "ans": "A) Camping"
    }
  ]
};

// ==========================================
// 2. REMEDIAL SET - MODULE 9: ON HOLIDAY (30 SOALAN)
// ==========================================
quizBank["REMEDIAL SET"]["Module 9: On Holiday"] = {
  "Reading": [
    // --- GAMBAR 1 (Soalan 1 - 5) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_1.png"),
      "q": "1. Where did Daniel go on holiday?",
      "options": ["A) To the zoo", "B) To the beach", "C) To school"],
      "ans": "B) To the beach"
    },
    {
      "type": "mcq",
      "q": "2. What did Daniel build?",
      "options": ["A) A sandcastle", "B) A wooden house", "C) A toy car"],
      "ans": "A) A sandcastle"
    },
    {
      "type": "mcq",
      "q": "3. What did he collect on the beach?",
      "options": ["A) Leaves", "B) Seashells", "C) Rocks"],
      "ans": "B) Seashells"
    },
    {
      "type": "mcq",
      "q": "4. Who collected seashells with Daniel?",
      "options": ["A) His sister", "B) His mother", "C) His friend"],
      "ans": "A) His sister"
    },
    {
      "type": "mcq",
      "q": "5. What food did they eat?",
      "options": ["A) Pizza", "B) Seafood", "C) Soup"],
      "ans": "B) Seafood"
    },

    // --- GAMBAR 2 (Soalan 6 - 10) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_6.png"),
      "q": "6. Where did Aiman go camping?",
      "options": ["A) In the forest", "B) At the beach", "C) In the city"],
      "ans": "A) In the forest"
    },
    {
      "type": "mcq",
      "q": "7. What did Aiman put up in the forest?",
      "options": ["A) A tent", "B) An umbrella", "C) A flag"],
      "ans": "A) A tent"
    },
    {
      "type": "mcq",
      "q": "8. What did they make at night?",
      "options": ["A) A campfire", "B) A cake", "C) A sandcastle"],
      "ans": "A) A campfire"
    },
    {
      "type": "mcq",
      "q": "9. What did Aiman see in the sky?",
      "options": ["A) Birds", "B) Stars", "C) Clouds"],
      "ans": "B) Stars"
    },
    {
      "type": "mcq",
      "q": "10. Did Aiman enjoy camping?",
      "options": ["A) Yes, he did.", "B) No, he didn't.", "C) No, he wasn't."],
      "ans": "A) Yes, he did."
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_11.png"),
      "q": "11. Made of sand on the beach: ______.",
      "options": ["A) sandcastle", "B) chair", "C) table"],
      "ans": "A) sandcastle"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_12.png"),
      "q": "12. You sleep in this when camping: ______.",
      "options": ["A) tent", "B) car", "C) boat"],
      "ans": "A) tent"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_13.png"),
      "q": "13. You find these on the beach sand: ______.",
      "options": ["A) seashells", "B) coins", "C) books"],
      "ans": "A) seashells"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_14.png"),
      "q": "14. A fire outside at a campsite: ______.",
      "options": ["A) campfire", "B) lamp", "C) light"],
      "ans": "A) campfire"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_15.png"),
      "q": "15. A place with lots of sand and sea water: ______.",
      "options": ["A) beach", "B) field", "C) garden"],
      "ans": "A) beach"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_16.png"),
      "q": "16. Yesterday, I ______ to the beach.",
      "options": ["A) went", "B) go", "C) going"],
      "ans": "A) went"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_17.png"),
      "q": "17. She ______ a sandcastle yesterday.",
      "options": ["A) built", "B) build", "C) building"],
      "ans": "A) built"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_18.png"),
      "q": "18. We ______ seashells on the beach.",
      "options": ["A) collected", "B) collect", "C) collects"],
      "ans": "A) collected"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_19.png"),
      "q": "19. They ______ fish for dinner yesterday.",
      "options": ["A) ate", "B) eat", "C) eating"],
      "ans": "A) ate"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_20.png"),
      "q": "20. I ______ stars in the night sky.",
      "options": ["A) saw", "B) see", "C) seeing"],
      "ans": "A) saw"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_21.png"),
      "q": "21. Choose the correct spelling:",
      "options": ["A) beach", "B) beech", "C) beach"],
      "ans": "A) beach"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_22.png"),
      "q": "22. Rearrange: [ went / I / holiday / on ]",
      "options": ["A) I went on holiday.", "B) On holiday went I.", "C) Went I on holiday."],
      "ans": "A) I went on holiday."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_23.png"),
      "q": "23. Choose the correct sentence:",
      "options": ["A) We played on the beach.", "B) we played on the beach", "C) We played On the Beach?"],
      "ans": "A) We played on the beach."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_24.png"),
      "q": "24. Choose the correct spelling:",
      "options": ["A) tent", "B) tennt", "C) tente"],
      "ans": "A) tent"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_25.png"),
      "q": "25. 'Where did you go?' - You answer:",
      "options": ["A) I went to the beach.", "B) I am fine.", "C) I like apples."],
      "ans": "A) I went to the beach."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_26.png"),
      "q": "26. 'Did you build a sandcastle?' - If YES, you say:",
      "options": ["A) Yes, I did.", "B) Yes, I am.", "C) Yes, I do."],
      "ans": "A) Yes, I did."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_27.png"),
      "q": "27. 'Was it fun?' - If YES, you say:",
      "options": ["A) Yes, it was!", "B) Yes, it is.", "C) Yes, there is."],
      "ans": "A) Yes, it was!"
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_28.png"),
      "q": "28. Read the card: [HOLIDAY AT THE BEACH]. What can you build here?",
      "options": ["A) Sandcastle", "B) Snowman", "C) Treehouse"],
      "ans": "A) Sandcastle"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_29.png"),
      "q": "29. Read the word: [CAMPING]. What do you sleep in?",
      "options": ["A) Tent", "B) Bed at home", "C) Desk"],
      "ans": "A) Tent"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE9_30.png"),
      "q": "30. Look at the item: [SUNGLASSES]. When do you wear them?",
      "options": ["A) On a sunny day at the beach", "B) In a dark room at night", "C) While sleeping"],
      "ans": "A) On a sunny day at the beach"
    }
  ]
};
