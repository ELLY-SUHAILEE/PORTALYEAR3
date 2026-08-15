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
quizBank["GET SMART SET"]["Module 7: Out and About / Helping Out"] = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Out and About!) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_1.png"),
      "q": "1. Who went on a school trip to the National Zoo last Sunday?",
      "options": ["A) The Year 3 pupils", "B) The Year 4 pupils", "C) The Year 5 pupils"],
      "ans": "B) The Year 4 pupils"
    },
    {
      "type": "mcq",
      "q": "2. What time did the pupils meet their teachers at the school main gate?",
      "options": ["A) At 7:00 a.m.", "B) At 7:30 a.m.", "C) At 8:00 a.m."],
      "ans": "B) At 7:30 a.m."
    },
    {
      "type": "mcq",
      "q": "3. How did the pupils travel to the National Zoo?",
      "options": ["A) They boarded a big yellow bus", "B) They travelled by train", "C) They walked in a line"],
      "ans": "A) They boarded a big yellow bus"
    },
    {
      "type": "mcq",
      "q": "4. What wild animals did they see at the zoo?",
      "options": ["A) Cats, dogs, and rabbits", "B) Tigers, elephants, and pandas", "C) Lions, monkeys, and bears"],
      "ans": "B) Tigers, elephants, and pandas"
    },
    {
      "type": "mcq",
      "q": "5. What did the pupils do before going home?",
      "options": ["A) They ate ice cream at the cafe", "B) They bought souvenirs at the gift shop", "C) They took a nap on the bus"],
      "ans": "B) They bought souvenirs at the gift shop"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Helping Out!) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_6.png"),
      "q": "6. How can children help their parents at home?",
      "options": ["A) By watching television all day", "B) By washing dishes, sweeping the floor, and watering plants", "C) By playing games in their bedrooms"],
      "ans": "B) By washing dishes, sweeping the floor, and watering plants"
    },
    {
      "type": "mcq",
      "q": "7. What can pupils do to help out at school?",
      "options": ["A) Clean the classroom or pick up rubbish in the garden", "B) Paint the school walls", "C) Cook lunch in the canteen"],
      "ans": "A) Clean the classroom or pick up rubbish in the garden"
    },
    {
      "type": "mcq",
      "q": "8. What benefit comes from working together on chores?",
      "options": ["A) It makes chores harder to finish", "B) It makes chores easier and faster to complete", "C) It causes more mess"],
      "ans": "B) It makes chores easier and faster to complete"
    },
    {
      "type": "mcq",
      "q": "9. Helping others is described in the poster as a ______ habit.",
      "options": ["A) boring", "B) wonderful", "C) difficult"],
      "ans": "B) wonderful"
    },
    {
      "type": "mcq",
      "q": "10. What is the main message shown in the top right bubble of the poster?",
      "options": ["A) Work hard every day!", "B) Small Help, Big Difference!", "C) Always clean your room!"],
      "ans": "B) Small Help, Big Difference!"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_11.png"),
      "q": "11. A large wild animal with a trunk and big ears is an ______.",
      "options": ["A) elephant", "B) tiger", "C) panda"],
      "ans": "A) elephant"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_12.png"),
      "q": "12. Cleaning dirt and dust off the floor using a broom is called ______.",
      "options": ["A) washing", "B) sweeping", "C) watering"],
      "ans": "B) sweeping"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_13.png"),
      "q": "13. Giving water to plants so they can grow is called ______ the plants.",
      "options": ["A) sweeping", "B) watering", "C) picking"],
      "ans": "B) watering"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_14.png"),
      "q": "14. Items you buy to remember a place you visited are called ______.",
      "options": ["A) souvenirs", "B) rubbish", "C) chores"],
      "ans": "A) souvenirs"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_15.png"),
      "q": "15. A place where wild animals are kept for people to see is a ______.",
      "options": ["A) zoo", "B) park", "C) school"],
      "ans": "A) zoo"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_16.png"),
      "q": "16. Last Sunday, the pupils ______ on a school trip to the zoo.",
      "options": ["A) go", "B) went", "C) going"],
      "ans": "B) went"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_17.png"),
      "q": "17. Yesterday, my brother ______ the floor in the living room.",
      "options": ["A) swept", "B) sweep", "C) sweeps"],
      "ans": "A) swept"
    },
    {
      "type": "mcq",
      "q": "18. You ______ pick up rubbish to keep your school clean.",
      "options": ["A) must", "B) mustn't", "C) shouldn't"],
      "ans": "A) must"
    },
    {
      "type": "mcq",
      "q": "19. You ______ feed the wild animals at the zoo.",
      "options": ["A) must", "B) mustn't", "C) should"],
      "ans": "B) mustn't"
    },
    {
      "type": "mcq",
      "q": "20. They ______ many wild animals at the National Zoo yesterday.",
      "options": ["A) see", "B) saw", "C) seeing"],
      "ans": "B) saw"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with the correct capitalization and punctuation.",
      "options": ["A) Last Sunday, the pupils went to the national zoo.", "B) Last Sunday, the pupils went to the National Zoo.", "C) last sunday the pupils went to the National Zoo"],
      "ans": "B) Last Sunday, the pupils went to the National Zoo."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words to form a correct sentence: [ bus / yellow / boarded / They / a / big ]",
      "options": ["A) They boarded a big yellow bus.", "B) A big yellow bus boarded they.", "C) They yellow bus boarded a big."],
      "ans": "A) They boarded a big yellow bus."
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words to form a correct sentence: [ habits / others / Helping / is / wonderful / a ]",
      "options": ["A) Helping others is a wonderful habit.", "B) A wonderful habit is others helping.", "C) Others helping habit is a wonderful."],
      "ans": "A) Helping others is a wonderful habit."
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) Elephent", "B) Elephant", "C) Elefant"],
      "ans": "B) Elephant"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. How do you tell someone what you did last weekend?",
      "options": ["A) I went to the zoo with my family.", "B) I am going to the zoo tomorrow.", "C) I like zoos."],
      "ans": "A) I went to the zoo with my family."
    },
    {
      "type": "mcq",
      "q": "26. Your mother is washing dishes. How do you offer help?",
      "options": ["A) Can I help you wash the dishes, Mum?", "B) You should wash faster.", "C) I want to play outside."],
      "ans": "A) Can I help you wash the dishes, Mum?"
    },
    {
      "type": "mcq",
      "q": "27. How do you tell someone a rule at the zoo?",
      "options": ["A) You mustn't touch the wild animals.", "B) You can take animals home.", "C) Animals sleep all day."],
      "ans": "A) You mustn't touch the wild animals."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_28.png"),
      "q": "28. Read the rule sign: [DO NOT FEED THE ANIMALS]\nWhat must you NOT do?",
      "options": ["A) Take photos of animals", "B) Give food to the animals", "C) Look at the animals"],
      "ans": "B) Give food to the animals"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_29.png"),
      "q": "29. Read the poster: [KEEP THE PARK CLEAN - THROW RUBBISH IN THE BIN]\nWhere should you put your trash?",
      "options": ["A) On the grass", "B) In the rubbish bin", "C) In the pond"],
      "ans": "B) In the rubbish bin"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_30.png"),
      "q": "30. Look at the notice: [GIFT SHOP: OPEN 9:00 A.M. TO 6:00 P.M.]\nWhat can you buy here?",
      "options": ["A) Bus tickets", "B) Souvenirs and toys", "C) Wild animals"],
      "ans": "B) Souvenirs and toys"
    }
  ]
};

// ==========================================
// 2. REMEDIAL SET (30 SOALAN)
// ==========================================
quizBank["REMEDIAL SET"]["Module 7: Out and About / Helping Out"] = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Zoo Trip!) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_1.png"),
      "q": "1. We went to the zoo on ____.",
      "options": ["A) Sunday", "B) Monday", "C) Friday"],
      "ans": "A) Sunday"
    },
    {
      "type": "mcq",
      "q": "2. We saw big ____.",
      "options": ["A) elephants", "B) cats", "C) birds"],
      "ans": "A) elephants"
    },
    {
      "type": "mcq",
      "q": "3. We saw fast ____.",
      "options": ["A) tigers", "B) fish", "C) frogs"],
      "ans": "A) tigers"
    },
    {
      "type": "mcq",
      "q": "4. The trip was ____!",
      "options": ["A) fun", "B) sad", "C) bad"],
      "ans": "A) fun"
    },
    {
      "type": "mcq",
      "q": "5. What picture is this?",
      "options": ["A) Zoo Trip", "B) My School", "C) My House"],
      "ans": "A) Zoo Trip"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Helping at Home!) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_6.png"),
      "q": "6. I help my ____ at home.",
      "options": ["A) mother", "B) teacher", "C) driver"],
      "ans": "A) mother"
    },
    {
      "type": "mcq",
      "q": "7. I sweep the ____.",
      "options": ["A) floor", "B) wall", "C) door"],
      "ans": "A) floor"
    },
    {
      "type": "mcq",
      "q": "8. I wash the ____ every day.",
      "options": ["A) dishes", "B) shoes", "C) books"],
      "ans": "A) dishes"
    },
    {
      "type": "mcq",
      "q": "9. Helping today, ____ every day!",
      "options": ["A) Happy", "B) Sad", "C) Angry"],
      "ans": "A) Happy"
    },
    {
      "type": "mcq",
      "q": "10. What is this picture about?",
      "options": ["A) Helping at Home", "B) Playing Games", "C) Sleeping"],
      "ans": "A) Helping at Home"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_11.png"),
      "q": "11. A big wild animal is an ______.",
      "options": ["A) elephant", "B) ant", "C) bee"],
      "ans": "A) elephant"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_12.png"),
      "q": "12. You clean the floor with a broom: ______ the floor.",
      "options": ["A) Sweep", "B) Eat", "C) Read"],
      "ans": "A) Sweep"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_13.png"),
      "q": "13. You clean dirty plates: ______ the dishes.",
      "options": ["A) Wash", "B) Play", "C) Jump"],
      "ans": "A) Wash"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_14.png"),
      "q": "14. A fast striped animal is a ______.",
      "options": ["A) tiger", "B) duck", "C) goat"],
      "ans": "A) tiger"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_15.png"),
      "q": "15. A place with animals is a ______.",
      "options": ["A) zoo", "B) shop", "C) room"],
      "ans": "A) zoo"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. Yesterday, we ______ to the zoo.",
      "options": ["A) went", "B) go", "C) going"],
      "ans": "A) went"
    },
    {
      "type": "mcq",
      "q": "17. We ______ big elephants yesterday.",
      "options": ["A) saw", "B) see", "C) seeing"],
      "ans": "A) saw"
    },
    {
      "type": "mcq",
      "q": "18. You ______ keep the class clean.",
      "options": ["A) must", "B) mustn't", "C) cannot"],
      "ans": "A) must"
    },
    {
      "type": "mcq",
      "q": "19. You ______ litter on the ground.",
      "options": ["A) mustn't", "B) must", "C) can"],
      "ans": "A) mustn't"
    },
    {
      "type": "mcq",
      "q": "20. She ______ the floor this morning.",
      "options": ["A) swept", "B) sweep", "C) sweeping"],
      "ans": "A) swept"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Tiger", "B) Tyger", "C) Tigar"],
      "ans": "A) Tiger"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ to / went / We / zoo / the ]",
      "options": ["A) We went to the zoo.", "B) Zoo we went to the.", "C) Went we to zoo the."],
      "ans": "A) We went to the zoo."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Sweep", "B) Sweeped", "C) Swep"],
      "ans": "A) Sweep"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ floor / I / sweep / the ]",
      "options": ["A) I sweep the floor.", "B) Floor I sweep the.", "C) Sweep floor I the."],
      "ans": "A) I sweep the floor."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. What did you see at the zoo?",
      "options": ["A) I saw a tiger.", "B) I am sleeping.", "C) I eat pizza."],
      "ans": "A) I saw a tiger."
    },
    {
      "type": "mcq",
      "q": "26. Do you help at home?",
      "options": ["A) Yes, I do.", "B) No, I am.", "C) Yes, I can't."],
      "ans": "A) Yes, I do."
    },
    {
      "type": "mcq",
      "q": "27. Can you wash the dishes?",
      "options": ["A) Yes, I can.", "B) Yes, I do.", "C) No, I am."],
      "ans": "A) Yes, I can."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_28.png"),
      "q": "28. Read the sign: [ZOO GATE]\nWhere are you entering?",
      "options": ["A) The zoo", "B) The school", "C) The house"],
      "ans": "A) The zoo"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_29.png"),
      "q": "29. Read the tag: [BIN]\nWhat goes in here?",
      "options": ["A) Rubbish", "B) Food", "C) Toys"],
      "ans": "A) Rubbish"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_30.png"),
      "q": "30. Look at the sign: [QUIET PLEASE]\nWhat should you do?",
      "options": ["A) Be quiet", "B) Shout loudly", "C) Run around"],
      "ans": "A) Be quiet"
    }
  ]
};
