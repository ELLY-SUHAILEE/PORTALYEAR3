if (typeof quizBank === 'undefined') { var quizBank = {}; }
if (!quizBank["GET SMART SET"]) { quizBank["GET SMART SET"] = {}; }
if (!quizBank["REMEDIAL SET"]) { quizBank["REMEDIAL SET"] = {}; }

// Fungsi pembantu untuk memastikan gambar berada di tengah (Center)
function wrapCenterImage(imagePath) {
    if (!imagePath) return "";
    return `<div style="text-align: center; margin: 15px 0;"><img src="${imagePath}" style="display: block; margin: 0 auto; max-width: 100%; max-height: 250px; border-radius: 10px; border: 1px solid #ddd;" onerror="this.style.display='none'"></div>`;
}

// ==========================================
// 1. GET SMART SET - MODULE 3: RIGHT NOW (30 SOALAN)
// ==========================================
quizBank["GET SMART SET"]["Module 3: Right now"] = {
  "Reading": [
    // --- PASSAGE 1 (Soalan 1 - 5) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE3_1.png"),
      "q": "1. What is Kelly doing in the living room on Saturday morning?",
      "options": ["A) She is doing gymnastics.", "B) She is playing baseball.", "C) She is collecting shells."],
      "ans": "A) She is doing gymnastics."
    },
    {
      "type": "mcq",
      "q": "2. Where are Brad and Cindy playing baseball?",
      "options": ["A) In the living room", "B) Outside in the garden", "C) At the beach"],
      "ans": "B) Outside in the garden"
    },
    {
      "type": "mcq",
      "q": "3. What do Brad and Cindy love doing as a hobby?",
      "options": ["A) Doing gymnastics", "B) Washing cars", "C) Collecting shells"],
      "ans": "C) Collecting shells"
    },
    {
      "type": "mcq",
      "q": "4. Which statement is TRUE about Kelly, Brad, and Cindy?",
      "options": ["A) They are at the beach today.", "B) They are playing sports at home today.", "C) Brad is doing gymnastics in the living room."],
      "ans": "B) They are playing sports at home today."
    },
    {
      "type": "mcq",
      "q": "5. What can we learn about the children's Saturday morning?",
      "options": ["A) They are sleeping late in their rooms.", "B) They are buying sports equipment.", "C) They are active doing sports at home."],
      "ans": "C) They are active doing sports at home."
    },

    // --- PASSAGE 2 (Soalan 6 - 10) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE3_6.png"),
      "q": "6. Where is Mum making a chocolate cake?",
      "options": ["A) In the garden", "B) In the kitchen", "C) In Tom's bedroom"],
      "ans": "B) In the kitchen"
    },
    {
      "type": "mcq",
      "q": "7. What colour is the car that Dad is washing outside?",
      "options": ["A) Blue", "B) White", "C) Red"],
      "ans": "C) Red"
    },
    {
      "type": "mcq",
      "q": "8. What is Tom doing in his bedroom right now?",
      "options": ["A) He is playing computer games with his friends online.", "B) He is making a cake.", "C) He is doing his homework."],
      "ans": "A) He is playing computer games with his friends online."
    },
    {
      "type": "mcq",
      "q": "9. Why is Mum baking a chocolate cake?",
      "options": ["A) For breakfast", "B) For afternoon tea", "C) For a birthday party"],
      "ans": "B) For afternoon tea"
    },
    {
      "type": "mcq",
      "q": "10. Which statement is TRUE about Tom's family on Sunday morning?",
      "options": ["A) Dad is baking a cake in the kitchen.", "B) Tom is washing the red car in the garden.", "C) Everyone in Tom's house is busy doing different things."],
      "ans": "C) Everyone in Tom's house is busy doing different things."
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE3_11.png"),
      "q": "11. Look at the picture. He is hitting the ball with a racket. He is playing ______.",
      "options": ["A) gymnastics", "B) tennis", "C) skateboarding"],
      "ans": "B) tennis"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE3_12.png"),
      "q": "12. She is wearing a helmet and knee pads. She is ______.",
      "options": ["A) swimming", "B) doing gymnastics", "C) skateboarding"],
      "ans": "C) skateboarding"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE3_13.png"),
      "q": "13. The athlete is bending her body gracefully. She is doing ______.",
      "options": ["A) gymnastics", "B) baseball", "C) table tennis"],
      "ans": "A) gymnastics"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE3_14.png"),
      "q": "14. They are jumping up to hit the ball over the net. They are playing ______.",
      "options": ["A) football", "B) volleyball", "C) running"],
      "ans": "B) volleyball"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE3_15.png"),
      "q": "15. He is holding a bat and waiting for the ball. He is playing ______.",
      "options": ["A) swimming", "B) cycling", "C) baseball"],
      "ans": "C) baseball"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE3_16.png"),
      "q": "16. Look! He ______ the football into the goal.",
      "options": ["A) is kicking", "B) are kicking", "C) kick"],
      "ans": "A) is kicking"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE3_17.png"),
      "q": "17. Listen! They ______ playing volleyball in the hall.",
      "options": ["A) is", "B) are", "C) am"],
      "ans": "B) are"
    },
    {
      "type": "mcq",
      "q": "18. What ______ you doing right now?",
      "options": ["A) is", "B) am", "C) are"],
      "ans": "C) are"
    },
    {
      "type": "mcq",
      "q": "19. She ______ doing gymnastics; she is playing tennis.",
      "options": ["A) isn't", "B) aren't", "C) am not"],
      "ans": "A) isn't"
    },
    {
      "type": "mcq",
      "q": "20. ______ he swimming in the pool at the moment?",
      "options": ["A) Are", "B) Is", "C) Do"],
      "ans": "B) Is"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with the correct punctuation.",
      "options": ["A) is he playing baseball right now.", "B) Is he playing baseball right now.", "C) Is he playing baseball right now?"],
      "ans": "C) Is he playing baseball right now?"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words to make a sentence: [are / They / park / at / running / the]",
      "options": ["A) They running are at the park.", "B) They are running at the park.", "C) At the park running are they."],
      "ans": "B) They are running at the park."
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words to make a sentence: [is / She / not / a / helmet / wearing]",
      "options": ["A) She is not wearing a helmet.", "B) She wearing is not helmet a.", "C) Wearing a helmet she is not."],
      "ans": "A) She is not wearing a helmet."
    },
    {
      "type": "mcq",
      "q": "24. Choose the correct spelling for the action word '-ing' of 'swim':",
      "options": ["A) swiming", "B) swimmeng", "C) swimming"],
      "ans": "C) swimming"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Your teacher asks: 'What is your brother doing?' How do you answer?",
      "options": ["A) He is playing computer games.", "B) He likes computer games.", "C) He played computer games."],
      "ans": "A) He is playing computer games."
    },
    {
      "type": "mcq",
      "q": "26. Someone asks: 'Are you doing your homework right now?' If YES, you say:",
      "options": ["A) Yes, I do.", "B) Yes, I am.", "C) Yes, I can."],
      "ans": "B) Yes, I am."
    },
    {
      "type": "mcq",
      "q": "27. How do you ask your friend what sport he is playing?",
      "options": ["A) What sport do you like?", "B) Where is the sport?", "C) What sport are you playing?"],
      "ans": "C) What sport are you playing?"
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE3_28.png"),
      "q": "28. Read the sign at the swimming pool: [NO RUNNING]. What does it mean?",
      "options": ["A) You must run quickly.", "B) You must walk carefully, do not run.", "C) You should swim fast."],
      "ans": "B) You must walk carefully, do not run."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE3_29.png"),
      "q": "29. Look at the schedule: [10.00 AM - Tennis Match]. What are the players doing at 10.15 AM?",
      "options": ["A) They are playing tennis.", "B) They are eating lunch.", "C) They are sleeping."],
      "ans": "A) They are playing tennis."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE3_30.png"),
      "q": "30. Look at the poster: [JOIN OUR GYMNASTICS CLUB]. Who is this club for?",
      "options": ["A) People who want to swim.", "B) People who want to buy shoes.", "C) People who want to do gymnastics."],
      "ans": "C) People who want to do gymnastics."
    }
  ]
};

// ==========================================
// 2. REMEDIAL SET - MODULE 3: RIGHT NOW (30 SOALAN)
// ==========================================
quizBank["REMEDIAL SET"]["Module 3: Right now"] = {
  "Reading": [
    // --- PASSAGE 1 (Soalan 1 - 5) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE3_1.png"),
      "q": "1. Who is doing gymnastics in the living room?",
      "options": ["A) Brad", "B) Kelly", "C) Tom"],
      "ans": "B) Kelly"
    },
    {
      "type": "mcq",
      "q": "2. What is Brad doing in the garden?",
      "options": ["A) Doing gymnastics", "B) Swimming", "C) Playing baseball"],
      "ans": "C) Playing baseball"
    },
    {
      "type": "mcq",
      "q": "3. Where is Kelly doing gymnastics?",
      "options": ["A) In the living room", "B) In the garden", "C) At school"],
      "ans": "A) In the living room"
    },
    {
      "type": "mcq",
      "q": "4. Is Brad in the living room?",
      "options": ["A) Yes, he is.", "B) No, he isn't.", "C) Yes, she is."],
      "ans": "B) No, he isn't."
    },
    {
      "type": "mcq",
      "q": "5. What sport is Brad playing?",
      "options": ["A) Football", "B) Tennis", "C) Baseball"],
      "ans": "C) Baseball"
    },

    // --- PASSAGE 2 (Soalan 6 - 10) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE3_6.png"),
      "q": "6. Where is Mum making a cake?",
      "options": ["A) In the kitchen", "B) In the garden", "C) In the bedroom"],
      "ans": "A) In the kitchen"
    },
    {
      "type": "mcq",
      "q": "7. What is Dad doing outside?",
      "options": ["A) Making a cake", "B) Washing the car", "C) Playing games"],
      "ans": "B) Washing the car"
    },
    {
      "type": "mcq",
      "q": "8. Where is Tom playing games?",
      "options": ["A) In the kitchen", "B) Outside", "C) In his room"],
      "ans": "C) In his room"
    },
    {
      "type": "mcq",
      "q": "9. What is Mum making?",
      "options": ["A) A cake", "B) Pizza", "C) Tea"],
      "ans": "A) A cake"
    },
    {
      "type": "mcq",
      "q": "10. Is Dad inside the kitchen?",
      "options": ["A) Yes, he is.", "B) No, he is outside.", "C) Yes, she is."],
      "ans": "B) No, he is outside."
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE3_11.png"),
      "q": "11. Hitting a ball with a racket is ______.",
      "options": ["A) running", "B) tennis", "C) sleeping"],
      "ans": "B) tennis"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE3_12.png"),
      "q": "12. Riding on a board with wheels is ______.",
      "options": ["A) swimming", "B) dancing", "C) skateboarding"],
      "ans": "C) skateboarding"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE3_13.png"),
      "q": "13. Doing flips and stretching body is ______.",
      "options": ["A) gymnastics", "B) fishing", "C) singing"],
      "ans": "A) gymnastics"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE3_14.png"),
      "q": "14. Hitting a big ball over a net with hands is ______.",
      "options": ["A) football", "B) volleyball", "C) running"],
      "ans": "B) volleyball"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE3_15.png"),
      "q": "15. Hitting a small ball with a bat is ______.",
      "options": ["A) swimming", "B) cycling", "C) baseball"],
      "ans": "C) baseball"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "q": "16. He ______ playing baseball.",
      "options": ["A) is", "B) are", "C) am"],
      "ans": "A) is"
    },
    {
      "type": "mcq",
      "q": "17. They ______ washing the car.",
      "options": ["A) is", "B) are", "C) am"],
      "ans": "B) are"
    },
    {
      "type": "mcq",
      "q": "18. I ______ making a cake right now.",
      "options": ["A) is", "B) are", "C) am"],
      "ans": "C) am"
    },
    {
      "type": "mcq",
      "q": "19. She is not ______ (play) games.",
      "options": ["A) playing", "B) play", "C) plays"],
      "ans": "A) playing"
    },
    {
      "type": "mcq",
      "q": "20. ______ they skateboarding?",
      "options": ["A) Is", "B) Are", "C) Am"],
      "ans": "B) Are"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling for action word 'run':",
      "options": ["A) runing", "B) runeng", "C) running"],
      "ans": "C) running"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ is / He / swimming ]",
      "options": ["A) He is swimming.", "B) Swimming is he.", "C) Is he swimming."],
      "ans": "A) He is swimming."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct punctuation:",
      "options": ["A) she is doing gymnastics", "B) She is doing gymnastics.", "C) She is doing gymnastics?"],
      "ans": "B) She is doing gymnastics."
    },
    {
      "type": "mcq",
      "q": "24. Choose the correct spelling:",
      "options": ["A) Baseball", "B) Basebal", "C) Baisball"],
      "ans": "A) Baseball"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. 'What are you doing?' - You answer:",
      "options": ["A) I am 9 years old.", "B) I am reading.", "C) I like apples."],
      "ans": "B) I am reading."
    },
    {
      "type": "mcq",
      "q": "26. 'Is he washing the car?' - If YES, you say:",
      "options": ["A) Yes, she is.", "B) Yes, I am.", "C) Yes, he is."],
      "ans": "C) Yes, he is."
    },
    {
      "type": "mcq",
      "q": "27. 'Are they playing games?' - If NO, you say:",
      "options": ["A) No, they aren't.", "B) No, he isn't.", "C) No, I am not."],
      "ans": "A) No, they aren't."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE3_28.png"),
      "q": "28. Read the label: [KITCHEN]. Who is making a cake here?",
      "options": ["A) Dad", "B) Mum", "C) Tom"],
      "ans": "B) Mum"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE3_29.png"),
      "q": "29. Look at the sign: [CAR WASH]. What is Dad doing?",
      "options": ["A) Cooking", "B) Sleeping", "C) Washing the car"],
      "ans": "C) Washing the car"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE3_30.png"),
      "q": "30. Look at the tag: [BASEBALL BAT]. What sport is this for?",
      "options": ["A) Baseball", "B) Swimming", "C) Running"],
      "ans": "A) Baseball"
    }
  ]
};
