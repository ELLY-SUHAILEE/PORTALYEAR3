if (typeof quizBank === 'undefined') { var quizBank = {}; }
if (!quizBank["GET SMART SET"]) { quizBank["GET SMART SET"] = {}; }
if (!quizBank["REMEDIAL SET"]) { quizBank["REMEDIAL SET"] = {}; }

// Fungsi pembantu untuk memastikan gambar berada di tengah (Center)
function wrapCenterImage(imagePath) {
    if (!imagePath) return "";
    return `<div style="text-align: center; margin: 15px 0;"><img src="${imagePath}" style="display: block; margin: 0 auto; max-width: 100%; max-height: 250px; border-radius: 10px; border: 1px solid #ddd;" onerror="this.style.display='none'"></div>`;
}

// ==========================================
// 1. GET SMART SET - MODULE 7: OUT AND ABOUT (30 SOALAN)
// ==========================================
quizBank["GET SMART SET"]["Module 7: Out and About"] = {
  "Reading": [
    // --- PASSAGE 1 (Soalan 1 - 5) ---
    // Passage 1: A Trip to Uncle Sam's Farm
    // "On Saturday, Adam and his classmates visited Uncle Sam's farm. The farm was big and noisy. Adam saw four white horses running in the field. Near the pond, there were six ducks swimming happily. Before leaving, Uncle Sam reminded the children, 'You must close the gate so the animals do not run away!'"
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_1.png"),
      "q": "Passage 1: A Trip to Uncle Sam's Farm\n1. When did Adam and his classmates visit Uncle Sam's farm?",
      "options": ["A) On Sunday", "B) On Saturday", "C) On Friday"],
      "ans": "B) On Saturday"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_2.png"),
      "q": "2. What color were the horses in the field?",
      "options": ["A) Brown", "B) Black", "C) White"],
      "ans": "C) White"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_3.png"),
      "q": "3. How many ducks were swimming near the pond?",
      "options": ["A) Six ducks", "B) Four ducks", "C) Five ducks"],
      "ans": "A) Six ducks"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_4.png"),
      "q": "4. What rule did Uncle Sam tell the children before they left?",
      "options": ["A) You must feed the white horses.", "B) You must close the gate.", "C) You must swim in the pond."],
      "ans": "B) You must close the gate."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_5.png"),
      "q": "5. Why must the children close the gate?",
      "options": ["A) So the animals do not run away.", "B) So the horses can sleep.", "C) So the ducks can swim."],
      "ans": "A) So the animals do not run away."
    },

    // --- PASSAGE 2 (Soalan 6 - 10) ---
    // Passage 2: Safety Rules at the Swimming Pool
    // "Sarah and her brother Timmy are going to the public swimming pool. There are strict safety rules posted on the wall. Visitors must take a shower before going into the pool. Children must not run around the wet pool area because the floor is slippery. Also, everyone must throw their rubbish into the rubbish bins provided."
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_6.png"),
      "q": "Passage 2: Safety Rules at the Swimming Pool\n6. Where are Sarah and Timmy going?",
      "options": ["A) To Uncle Sam's farm", "B) To the public swimming pool", "C) To the school library"],
      "ans": "B) To the public swimming pool"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_7.png"),
      "q": "7. What must visitors do BEFORE going into the pool?",
      "options": ["A) Take a shower", "B) Eat lunch", "C) Throw rubbish in the pool"],
      "ans": "A) Take a shower"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_8.png"),
      "q": "8. Why must children NOT run around the pool area?",
      "options": ["A) Because the floor is slippery.", "B) Because the pool is deep.", "C) Because the water is cold."],
      "ans": "A) Because the floor is slippery."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_9.png"),
      "q": "9. Where should visitors throw their rubbish?",
      "options": ["A) On the floor", "B) Into the rubbish bins", "C) Into the swimming pool"],
      "ans": "B) Into the rubbish bins"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_10.png"),
      "q": "10. What is the main message of Passage 2?",
      "options": ["A) Learning how to swim fast.", "B) Following safety rules at the pool.", "C) Buying tickets at the entrance."],
      "ans": "B) Following safety rules at the pool."
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_11.png"),
      "q": "11. A farm animal that has wool on its body is a ______.",
      "options": ["A) goat", "B) sheep", "C) horse"],
      "ans": "B) sheep"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_12.png"),
      "q": "12. A place where pedestrian pedestrians can cross the road safely is called a ______.",
      "options": ["A) zebra crossing", "B) traffic light", "C) pavement"],
      "ans": "A) zebra crossing"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_13.png"),
      "q": "13. Small farm animals with feathers that lay eggs and swim in water are ______.",
      "options": ["A) ducks", "B) cows", "C) wolves"],
      "ans": "A) ducks"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_14.png"),
      "q": "14. A container used for putting waste or trash in public places is a ______.",
      "options": ["A) mailbox", "B) rubbish bin", "C) desk"],
      "ans": "B) rubbish bin"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_15.png"),
      "q": "15. Wild animals that look like large dogs and live in forests or mountains are ______.",
      "options": ["A) wolves", "B) mice", "C) goats"],
      "ans": "A) wolves"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_16.png"),
      "q": "16. You ______ listen to the teacher when she is talking.",
      "options": ["A) must", "B) mustn't", "C) don't"],
      "ans": "A) must"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_17.png"),
      "q": "17. You ______ talk loudly inside the library.",
      "options": ["A) must", "B) mustn't", "C) can"],
      "ans": "B) mustn't"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_18.png"),
      "q": "18. What is the correct plural form of 'mouse'?",
      "options": ["A) mouses", "B) mice", "C) mices"],
      "ans": "B) mice"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_19.png"),
      "q": "19. There are three ______ eating grass in the field.",
      "options": ["A) sheep", "B) sheeps", "C) sheepes"],
      "ans": "A) sheep"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_20.png"),
      "q": "20. Look at those wild animals! There are two ______ near the trees.",
      "options": ["A) wolfs", "B) wolves", "C) wolfes"],
      "ans": "B) wolves"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_21.png"),
      "q": "21. Choose the sentence with correct capitalization and punctuation.",
      "options": ["A) You must turn left at the traffic lights.", "B) you must turn left at the traffic lights", "C) You must turn Left at the traffic lights?"],
      "ans": "A) You must turn left at the traffic lights."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_22.png"),
      "q": "22. Rearrange the words: [ litter / drop / mustn't / You / park / the / in ]",
      "options": ["A) You mustn't drop litter in the park.", "B) In the park drop litter you mustn't.", "C) You drop litter mustn't in the park."],
      "ans": "A) You mustn't drop litter in the park."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_23.png"),
      "q": "23. Rearrange the words: [ see / can / farm / many / We / cows / the / on ]",
      "options": ["A) We can see many cows on the farm.", "B) On the farm many cows we can see.", "C) Many cows can see we on the farm."],
      "ans": "A) We can see many cows on the farm."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_24.png"),
      "q": "24. Choose the correct spelling for the plural of 'child':",
      "options": ["A) childs", "B) children", "C) childrens"],
      "ans": "B) children"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_25.png"),
      "q": "25. Asking for directions: 'Excuse me, how do I get to the museum?' How do you reply?",
      "options": ["A) Go straight and turn right.", "B) Yes, I like museums.", "C) I am visiting a farm."],
      "ans": "A) Go straight and turn right."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_26.png"),
      "q": "26. Reminding a friend about safety rules: What do you say when the traffic light is red?",
      "options": ["A) You must cross now!", "B) You must stop!", "C) You must run fast!"],
      "ans": "B) You must stop!"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_27.png"),
      "q": "27. Someone asks: 'Can we feed the animals at the zoo?' What does a 'NO FEEDING' sign mean?",
      "options": ["A) You must feed them.", "B) You mustn't feed them.", "C) You can feed them fruit."],
      "ans": "B) You mustn't feed them."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_28.png"),
      "q": "28. Read the street sign: [STOP - ZEBRA CROSSING AHEAD]. What must drivers do?",
      "options": ["A) Turn left immediately", "B) Stop for pedestrians to cross", "C) Drive faster"],
      "ans": "B) Stop for pedestrians to cross"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_29.png"),
      "q": "29. Read the park rule: [DO NOT WALK ON THE GRASS]. What is the correct rule?",
      "options": ["A) You must walk on the grass.", "B) You mustn't walk on the grass.", "C) You can play on the grass."],
      "ans": "B) You mustn't walk on the grass."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE7_30.png"),
      "q": "30. Read the library sign: [BE QUIET - NO MOBILE PHONES]. What mustn't you do?",
      "options": ["A) Read books quietly", "B) Use your mobile phone", "C) Sit on a chair"],
      "ans": "B) Use your mobile phone"
    }
  ]
};

// ==========================================
// 2. REMEDIAL SET - MODULE 7: OUT AND ABOUT (30 SOALAN)
// ==========================================
quizBank["REMEDIAL SET"]["Module 7: Out and About"] = {
  "Reading": [
    // --- PASSAGE 1 (Soalan 1 - 5) ---
    // Passage 1: On the Farm
    // "Adam went to Uncle Sam's farm on Saturday. He saw four white horses. Six ducks were swimming in the pond. Uncle Sam said, 'You must close the gate!'"
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_1.png"),
      "q": "Passage 1: On the Farm\n1. Where did Adam go on Saturday?",
      "options": ["A) To the park", "B) To Uncle Sam's farm", "C) To the zoo"],
      "ans": "B) To Uncle Sam's farm"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_2.png"),
      "q": "2. How many horses did Adam see?",
      "options": ["A) Two", "B) Four", "C) Six"],
      "ans": "B) Four"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_3.png"),
      "q": "3. What color were the horses?",
      "options": ["A) Brown", "B) Black", "C) White"],
      "ans": "C) White"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_4.png"),
      "q": "4. What were the ducks doing?",
      "options": ["A) Running", "B) Swimming in the pond", "C) Flying"],
      "ans": "B) Swimming in the pond"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_5.png"),
      "q": "5. What must you close on the farm?",
      "options": ["A) The door", "B) The window", "C) The gate"],
      "ans": "C) The gate"
    },

    // --- PASSAGE 2 (Soalan 6 - 10) ---
    // Passage 2: Swimming Pool Rules
    // "Sarah is at the swimming pool. You must take a shower first. Children mustn't run. Throw rubbish in the bin."
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_6.png"),
      "q": "Passage 2: Swimming Pool Rules\n6. Where is Sarah?",
      "options": ["A) At the swimming pool", "B) At school", "C) At home"],
      "ans": "A) At the swimming pool"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_7.png"),
      "q": "7. What must you do first before swimming?",
      "options": ["A) Run around", "B) Take a shower", "C) Eat food"],
      "ans": "B) Take a shower"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_8.png"),
      "q": "8. Can children run near the pool?",
      "options": ["A) Yes, they can.", "B) No, they mustn't.", "C) Yes, always."],
      "ans": "B) No, they mustn't."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_9.png"),
      "q": "9. Where do you throw rubbish?",
      "options": ["A) In the bin", "B) In the pool", "C) On the floor"],
      "ans": "A) In the bin"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_10.png"),
      "q": "10. Are rules important at the pool?",
      "options": ["A) Yes, they are.", "B) No, they aren't.", "C) No rules exist."],
      "ans": "A) Yes, they are."
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_11.png"),
      "q": "11. An animal with wool: ______.",
      "options": ["A) sheep", "B) fish", "C) cat"],
      "ans": "A) sheep"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_12.png"),
      "q": "12. A safe place to cross the road: ______.",
      "options": ["A) zebra crossing", "B) bed", "C) chair"],
      "ans": "A) zebra crossing"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_13.png"),
      "q": "13. Animal that quacks and swims: ______.",
      "options": ["A) duck", "B) cow", "C) horse"],
      "ans": "A) duck"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_14.png"),
      "q": "14. Put trash in the ______.",
      "options": ["A) rubbish bin", "B) bag", "C) box"],
      "ans": "A) rubbish bin"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_15.png"),
      "q": "15. An animal that rides fast on a farm: ______.",
      "options": ["A) horse", "B) mouse", "C) duck"],
      "ans": "A) horse"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_16.png"),
      "q": "16. You ______ stop at the red light.",
      "options": ["A) must", "B) mustn't", "C) don't"],
      "ans": "A) must"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_17.png"),
      "q": "17. You ______ run near the pool.",
      "options": ["A) must", "B) mustn't", "C) can"],
      "ans": "B) mustn't"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_18.png"),
      "q": "18. One mouse, two ______.",
      "options": ["A) mouses", "B) mice", "C) mices"],
      "ans": "B) mice"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_19.png"),
      "q": "19. One sheep, three ______.",
      "options": ["A) sheep", "B) sheeps", "C) sheepes"],
      "ans": "A) sheep"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_20.png"),
      "q": "20. One child, four ______.",
      "options": ["A) childs", "B) children", "C) childrens"],
      "ans": "B) children"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_21.png"),
      "q": "21. Choose the correct spelling:",
      "options": ["A) farm", "B) faarm", "C) pharm"],
      "ans": "A) farm"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_22.png"),
      "q": "22. Rearrange: [ must / stop / You ]",
      "options": ["A) Stop must you.", "B) You must stop.", "C) Must stop you."],
      "ans": "B) You must stop."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_23.png"),
      "q": "23. Choose the correct sentence:",
      "options": ["A) Close the gate.", "B) close the gate", "C) Close the gate?"],
      "ans": "A) Close the gate."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_24.png"),
      "q": "24. Choose the correct spelling:",
      "options": ["A) duck", "B) duk", "C) dukc"],
      "ans": "A) duck"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_25.png"),
      "q": "25. 'How do I go to the shop?' - You answer:",
      "options": ["A) Turn left.", "B) It is blue.", "C) I like shops."],
      "ans": "A) Turn left."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_26.png"),
      "q": "26. What do you say when the light is green?",
      "options": ["A) Stop!", "B) Go!", "C) Sleep!"],
      "ans": "B) Go!"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_27.png"),
      "q": "27. Can you litter in the park?",
      "options": ["A) Yes, I can.", "B) No, you mustn't litter.", "C) Yes, always."],
      "ans": "B) No, you mustn't litter."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_28.png"),
      "q": "28. Read the sign: [STOP]. What must you do?",
      "options": ["A) Run", "B) Stop", "C) Walk"],
      "ans": "B) Stop"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_29.png"),
      "q": "29. Read the sign: [NO LITTERING]. Where do you throw trash?",
      "options": ["A) In the bin", "B) On the grass", "C) On the road"],
      "ans": "A) In the bin"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE7_30.png"),
      "q": "30. Look at the arrow sign: [TURN RIGHT]. Which way do you go?",
      "options": ["A) Turn left", "B) Turn right", "C) Go straight"],
      "ans": "B) Turn right"
    }
  ]
};
