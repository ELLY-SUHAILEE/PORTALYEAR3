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
quizBank["GET SMART SET"]["Module 1: Welcome!"] = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Sara and Aina at the Beach) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE1_1.png"),
      "q": "1. What type of hair does Sara have?",
      "options": ["A) Long curly hair", "B) Straight dark hair", "C) Short fair hair"],
      "ans": "B) Straight dark hair"
    },
    {
      "type": "mcq",
      "q": "2. Who is Sara's new classmate?",
      "options": ["A) Aina", "B) Sara", "C) Amir"],
      "ans": "A) Aina"
    },
    {
      "type": "mcq",
      "q": "3. Where are Sara and Aina today?",
      "options": ["A) At the swimming pool", "B) At school", "C) At the beach"],
      "ans": "C) At the beach"
    },
    {
      "type": "mcq",
      "q": "4. How many shells has Aina got in her basket?",
      "options": ["A) Forty shells", "B) Fifty shells", "C) Twenty shells"],
      "ans": "B) Fifty shells"
    },
    {
      "type": "mcq",
      "q": "5. What do Sara and Aina love doing together?",
      "options": ["A) Playing football", "B) Swimming in the pool", "C) Collecting shells"],
      "ans": "C) Collecting shells"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Amir's Hobbies & Abilities) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE1_6.png"),
      "q": "6. What does Amir look like?",
      "options": ["A) He has got long curly hair", "B) He has got short fair hair", "C) He has got straight dark hair"],
      "ans": "B) He has got short fair hair"
    },
    {
      "type": "mcq",
      "q": "7. What sports can Amir do well?",
      "options": ["A) Play football and swim fast", "B) Dive into the deep pool", "C) Play badminton and cycle"],
      "ans": "A) Play football and swim fast"
    },
    {
      "type": "mcq",
      "q": "8. What action is Amir unable to do?",
      "options": ["A) Swim fast", "B) Play football", "C) Dive into the deep pool"],
      "ans": "C) Dive into the deep pool"
    },
    {
      "type": "mcq",
      "q": "9. How many stickers has Amir got in his album?",
      "options": ["A) Ten stickers", "B) Twenty stickers", "C) Fifty stickers"],
      "ans": "B) Twenty stickers"
    },
    {
      "type": "mcq",
      "q": "10. When does Amir practise his sports?",
      "options": ["A) Every Sunday", "B) Every Friday", "C) Every Saturday"],
      "ans": "C) Every Saturday"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE1_11.png"),
      "q": "11. Hair that forms spirals or curves is called ______ hair.",
      "options": ["A) curly", "B) straight", "C) fair"],
      "ans": "A) curly"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE1_12.png"),
      "q": "12. Small hard objects found on the seashore, often collected as a hobby, are called ______.",
      "options": ["A) stickers", "B) shells", "C) baskets"],
      "ans": "B) shells"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE1_13.png"),
      "q": "13. Light-coloured hair (blondes or light brown) is described as ______ hair.",
      "options": ["A) dark", "B) fair", "C) black"],
      "ans": "B) fair"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE1_14.png"),
      "q": "14. A book used for keeping pictures or adhesive cards is a sticker ______.",
      "options": ["A) basket", "B) album", "C) pool"],
      "ans": "B) album"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE1_15.png"),
      "q": "15. The number that comes after thirty-nine is ______.",
      "options": ["A) thirty", "B) forty", "C) fifty"],
      "ans": "B) forty"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE1_16.png"),
      "q": "16. Sara ______ got straight dark hair.",
      "options": ["A) has", "B) have", "C) is"],
      "ans": "A) has"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE1_17.png"),
      "q": "17. We ______ got forty shells in our basket.",
      "options": ["A) has", "B) have", "C) are"],
      "ans": "B) have"
    },
    {
      "type": "mcq",
      "q": "18. Amir ______ swim fast, but he cannot dive into the deep pool.",
      "options": ["A) can", "B) cannot", "C) has"],
      "ans": "A) can"
    },
    {
      "type": "mcq",
      "q": "19. She ______ got big black eyes.",
      "options": ["A) have", "B) has", "C) can"],
      "ans": "B) has"
    },
    {
      "type": "mcq",
      "q": "20. They ______ dive into the deep water because it is dangerous.",
      "options": ["A) can", "B) cannot", "C) have"],
      "ans": "B) cannot"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with the correct capitalization and punctuation.",
      "options": ["A) aina has got fifty shells.", "B) Aina has got fifty shells.", "C) Aina has got fifty shells"],
      "ans": "B) Aina has got fifty shells."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words to form a correct sentence: [ hair / got / Sara / dark / has / straight ]",
      "options": ["A) Sara has got straight dark hair.", "B) Straight dark hair has Sara got.", "C) Sara dark straight hair has got."],
      "ans": "A) Sara has got straight dark hair."
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words to form a correct sentence: [ fast / Amir / can / swim / football / play / and ]",
      "options": ["A) Amir can play football and swim fast.", "B) Swim fast Amir can play football and.", "C) Play football Amir can and swim fast."],
      "ans": "A) Amir can play football and swim fast."
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) Shells", "B) Shels", "C) Shalls"],
      "ans": "A) Shells"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. How do you introduce your friend's appearance to others?",
      "options": ["A) She has got long curly hair.", "B) She can fly high.", "C) She goes to sleep at night."],
      "ans": "A) She has got long curly hair."
    },
    {
      "type": "mcq",
      "q": "26. How do you tell someone what sport your brother can play?",
      "options": ["A) He can play football very well.", "B) He is twenty years old.", "C) He has got fifty shells."],
      "ans": "A) He can play football very well."
    },
    {
      "type": "mcq",
      "q": "27. Someone asks: 'Have you got any stickers?' How do you answer?",
      "options": ["A) Yes, I have got twenty stickers.", "B) Yes, I can swim fast.", "C) No, I am at school."],
      "ans": "A) Yes, I have got twenty stickers."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE1_28.png"),
      "q": "28. Read the label: [MY STICKER ALBUM - 20 STICKERS]\nWhat is inside the album?",
      "options": ["A) Twenty stickers", "B) Fifty shells", "C) Football shoes"],
      "ans": "A) Twenty stickers"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE1_29.png"),
      "q": "29. Read the warning sign at the pool: [NO DIVING - DEEP WATER]\nWhat should you NOT do?",
      "options": ["A) Dive into the pool", "B) Swim fast", "C) Collect shells"],
      "ans": "A) Dive into the pool"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE1_30.png"),
      "q": "30. Look at the basket count: [Aina: 50 shells | Sara: 40 shells]\nWho collected more shells?",
      "options": ["A) Aina", "B) Sara", "C) Amir"],
      "ans": "A) Aina"
    }
  ]
};

// ==========================================
// 2. REMEDIAL SET (30 SOALAN)
// ==========================================
quizBank["REMEDIAL SET"]["Module 1: Welcome!"] = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Sara and Aina) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE1_1.png"),
      "q": "1. Sara has got ____ hair.",
      "options": ["A) dark", "B) red", "C) fair"],
      "ans": "A) dark"
    },
    {
      "type": "mcq",
      "q": "2. Who is Sara's friend?",
      "options": ["A) Aina", "B) Siti", "C) Mary"],
      "ans": "A) Aina"
    },
    {
      "type": "mcq",
      "q": "3. Aina has got ____ hair.",
      "options": ["A) curly", "B) straight", "C) short"],
      "ans": "A) curly"
    },
    {
      "type": "mcq",
      "q": "4. Where are Sara and Aina?",
      "options": ["A) At the beach", "B) At home", "C) At school"],
      "ans": "A) At the beach"
    },
    {
      "type": "mcq",
      "q": "5. What is this picture about?",
      "options": ["A) Two friends at the beach", "B) Children at school", "C) A boy playing football"],
      "ans": "A) Two friends at the beach"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Amir) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE1_6.png"),
      "q": "6. Amir has got short ____ hair.",
      "options": ["A) fair", "B) black", "C) dark"],
      "ans": "A) fair"
    },
    {
      "type": "mcq",
      "q": "7. Amir can play ____.",
      "options": ["A) football", "B) badminton", "C) tennis"],
      "ans": "A) football"
    },
    {
      "type": "mcq",
      "q": "8. Amir can swim ____.",
      "options": ["A) fast", "B) slowly", "C) poorly"],
      "ans": "A) fast"
    },
    {
      "type": "mcq",
      "q": "9. How many stickers has Amir got?",
      "options": ["A) 20 stickers", "B) 10 stickers", "C) 50 stickers"],
      "ans": "A) 20 stickers"
    },
    {
      "type": "mcq",
      "q": "10. What is the boy's name in the picture?",
      "options": ["A) Amir", "B) Ali", "C) Sara"],
      "ans": "A) Amir"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE1_11.png"),
      "q": "11. Hair that is not straight: ______.",
      "options": ["A) curly", "B) long", "C) dark"],
      "ans": "A) curly"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE1_12.png"),
      "q": "12. Found on the beach sand: ______.",
      "options": ["A) shells", "B) books", "C) toys"],
      "ans": "A) shells"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE1_13.png"),
      "q": "13. A game played with a round ball: ______.",
      "options": ["A) football", "B) swimming", "C) diving"],
      "ans": "A) football"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE1_14.png"),
      "q": "14. Moving in water: ______.",
      "options": ["A) swim", "B) run", "C) jump"],
      "ans": "A) swim"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE1_15.png"),
      "q": "15. The number 20 in words is ______.",
      "options": ["A) twenty", "B) thirty", "C) ten"],
      "ans": "A) twenty"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. She ______ got curly hair.",
      "options": ["A) has", "B) have", "C) is"],
      "ans": "A) has"
    },
    {
      "type": "mcq",
      "q": "17. I ______ got dark hair.",
      "options": ["A) have", "B) has", "C) am"],
      "ans": "A) have"
    },
    {
      "type": "mcq",
      "q": "18. Amir ______ swim fast.",
      "options": ["A) can", "B) has", "C) is"],
      "ans": "A) can"
    },
    {
      "type": "mcq",
      "q": "19. He ______ got 20 stickers.",
      "options": ["A) has", "B) have", "C) can"],
      "ans": "A) has"
    },
    {
      "type": "mcq",
      "q": "20. They ______ play football together.",
      "options": ["A) can", "B) has", "C) is"],
      "ans": "A) can"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Beach", "B) Beech", "C) Beachh"],
      "ans": "A) Beach"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ at / We / the beach / are ]",
      "options": ["A) We are at the beach.", "B) At the beach we are.", "C) Beach the at are we."],
      "ans": "A) We are at the beach."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Football", "B) Footbal", "C) Futball"],
      "ans": "A) Football"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ can / Amir / swim ]",
      "options": ["A) Amir can swim.", "B) Swim can Amir.", "C) Can Amir swim."],
      "ans": "A) Amir can swim."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Have you got curly hair?",
      "options": ["A) Yes, I have.", "B) Yes, I can.", "C) Yes, I am."],
      "ans": "A) Yes, I have."
    },
    {
      "type": "mcq",
      "q": "26. Can you play football?",
      "options": ["A) Yes, I can.", "B) No, I haven't.", "C) Yes, I do."],
      "ans": "A) Yes, I can."
    },
    {
      "type": "mcq",
      "q": "27. Where are you today?",
      "options": ["A) I am at the beach.", "B) I am fine.", "C) I am ten."],
      "ans": "A) I am at the beach."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE1_28.png"),
      "q": "28. Read the card: [BEACH]\nWhere are the children?",
      "options": ["A) At the beach", "B) In the classroom", "C) At home"],
      "ans": "A) At the beach"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE1_29.png"),
      "q": "29. Read the number: [20]\nWhat is this number?",
      "options": ["A) Twenty", "B) Thirty", "C) Ten"],
      "ans": "A) Twenty"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE1_30.png"),
      "q": "30. Look at the picture of a ball:\nWhat game is it for?",
      "options": ["A) Football", "B) Swimming", "C) Running"],
      "ans": "A) Football"
    }
  ]
};
