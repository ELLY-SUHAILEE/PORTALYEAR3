if (typeof quizBank === 'undefined') { var quizBank = {}; }
if (!quizBank["GET SMART SET"]) { quizBank["GET SMART SET"] = {}; }
if (!quizBank["REMEDIAL SET"]) { quizBank["REMEDIAL SET"] = {}; }

// Fungsi pembantu gambar di tengah
function wrapCenterImage(imagePath) {
    if (!imagePath) return "";
    return `<div style="text-align: center; margin: 15px 0;"><img src="${imagePath}" style="display: block; margin: 0 auto; max-width: 100%; max-height: 250px; border-radius: 10px; border: 1px solid #ddd;" onerror="this.style.display='none'"></div>`;
}

// ==========================================
// 1. GET SMART SET (30 SOALAN)
// ==========================================
var getSmartModule9 = [
    {
        "type": "mcq",
        "image": wrapCenterImage("images/GS_MODULE9_1.png"),
        "q": "1. Why is staying active essential?",
        "options": ["A) For a healthy lifestyle", "B) To win video games", "C) To sleep all day"],
        "ans": "A) For a healthy lifestyle",
        "answer": "A) For a healthy lifestyle",
        "correct": "A) For a healthy lifestyle"
    },
    {
        "type": "mcq",
        "q": "2. How much time should children spend doing physical activities each day?",
        "options": ["A) At least 10 minutes", "B) At least one hour a day", "C) Three hours a day"],
        "ans": "B) At least one hour a day",
        "answer": "B) At least one hour a day",
        "correct": "B) At least one hour a day"
    },
    {
        "type": "mcq",
        "q": "3. Which physical activities are mentioned in the poster?",
        "options": ["A) Swimming, cycling, or playing football", "B) Reading, painting, or sleeping", "C) Cooking, dancing, or watching TV"],
        "ans": "A) Swimming, cycling, or playing football",
        "answer": "A) Swimming, cycling, or playing football",
        "correct": "A) Swimming, cycling, or playing football"
    },
    {
        "type": "mcq",
        "q": "4. What does exercise strengthen in our body?",
        "options": ["A) Our bones only", "B) Our muscles", "C) Our teeth"],
        "ans": "B) Our muscles",
        "answer": "B) Our muscles",
        "correct": "B) Our muscles"
    },
    {
        "type": "mcq",
        "q": "5. How does exercise help us at night?",
        "options": ["A) It helps us study better", "B) It helps us sleep better", "C) It helps us eat more"],
        "ans": "B) It helps us sleep better",
        "answer": "B) It helps us sleep better",
        "correct": "B) It helps us sleep better"
    },
    {
        "type": "mcq",
        "image": wrapCenterImage("images/GS_MODULE9_6.png"),
        "q": "6. Which sport is described as one of the most popular in Malaysia?",
        "options": ["A) Basketball", "B) Badminton", "C) Golf"],
        "ans": "B) Badminton",
        "answer": "B) Badminton",
        "correct": "B) Badminton"
    },
    {
        "type": "mcq",
        "q": "7. What equipment do players need to play badminton?",
        "options": ["A) Racquets and a shuttlecock", "B) A bat and a hard ball", "C) Goggles and fins"],
        "ans": "A) Racquets and a shuttlecock",
        "answer": "A) Racquets and a shuttlecock",
        "correct": "A) Racquets and a shuttlecock"
    },
    {
        "type": "mcq",
        "q": "8. How many players can play a badminton match?",
        "options": ["A) One player only", "B) Two or four players", "C) Eleven players"],
        "ans": "B) Two or four players",
        "answer": "B) Two or four players",
        "correct": "B) Two or four players"
    },
    {
        "type": "mcq",
        "q": "9. Where can badminton be played?",
        "options": ["A) Indoors or outdoors", "B) In the water only", "C) On ice courts only"],
        "ans": "A) Indoors or outdoors",
        "answer": "A) Indoors or outdoors",
        "correct": "A) Indoors or outdoors"
    },
    {
        "type": "mcq",
        "q": "10. Which skills and qualities are required to play badminton well?",
        "options": ["A) Slow movement and heavy jumping", "B) Fast movement, good reflexes, and lots of stamina", "C) Standing still and quiet talking"],
        "ans": "B) Fast movement, good reflexes, and lots of stamina",
        "answer": "B) Fast movement, good reflexes, and lots of stamina",
        "correct": "B) Fast movement, good reflexes, and lots of stamina"
    },
    {
        "type": "mcq",
        "image": wrapCenterImage("images/GS_MODULE9_11.png"),
        "q": "11. A lightweight object with feathers used in badminton is called a ______.",
        "options": ["A) shuttlecock", "B) basketball", "C) frisbee"],
        "ans": "A) shuttlecock",
        "answer": "A) shuttlecock",
        "correct": "A) shuttlecock"
    },
    {
        "type": "mcq",
        "image": wrapCenterImage("images/GS_MODULE9_12.png"),
        "q": "12. Riding a bicycle for exercise or sport is called ______.",
        "options": ["A) cycling", "B) jogging", "C) sailing"],
        "ans": "A) cycling",
        "answer": "A) cycling",
        "correct": "A) cycling"
    },
    {
        "type": "mcq",
        "image": wrapCenterImage("images/GS_MODULE9_13.png"),
        "q": "13. An oval frame with a stringed mesh used to hit a shuttlecock is a ______.",
        "options": ["A) racquet", "B) bat", "C) stick"],
        "ans": "A) racquet",
        "answer": "A) racquet",
        "correct": "A) racquet"
    },
    {
        "type": "mcq",
        "image": wrapCenterImage("images/GS_MODULE9_14.png"),
        "q": "14. Moving through water using arms and legs is called ______.",
        "options": ["A) swimming", "B) running", "C) climbing"],
        "ans": "A) swimming",
        "answer": "A) swimming",
        "correct": "A) swimming"
    },
    {
        "type": "mcq",
        "image": wrapCenterImage("images/GS_MODULE9_15.png"),
        "q": "15. Tissues in the body that produce movement and strength are called ______.",
        "options": ["A) muscles", "B) feathers", "C) scales"],
        "ans": "A) muscles",
        "answer": "A) muscles",
        "correct": "A) muscles"
    },
    {
        "type": "mcq",
        "image": wrapCenterImage("images/GS_MODULE9_16.png"),
        "q": "16. Children ______ spend at least one hour a day doing physical activities.",
        "options": ["A) should", "B) shouldn't", "C) cannot"],
        "ans": "A) should",
        "answer": "A) should",
        "correct": "A) should"
    },
    {
        "type": "mcq",
        "image": wrapCenterImage("images/GS_MODULE9_17.png"),
        "q": "17. Badminton is one of the ______ popular sports in Malaysia.",
        "options": ["A) most", "B) more", "C) many"],
        "ans": "A) most",
        "answer": "A) most",
        "correct": "A) most"
    },
    {
        "type": "mcq",
        "q": "18. Cycling is ______ than walking.",
        "options": ["A) fast", "B) faster", "C) fastest"],
        "ans": "B) faster",
        "answer": "B) faster",
        "correct": "B) faster"
    },
    {
        "type": "mcq",
        "q": "19. You ______ drink plenty of water after exercising.",
        "options": ["A) should", "B) shouldn't", "C) must not"],
        "ans": "A) should",
        "answer": "A) should",
        "correct": "A) should"
    },
    {
        "type": "mcq",
        "q": "20. Swimming is the ______ refreshing sport on a hot day.",
        "options": ["A) most", "B) more", "C) less"],
        "ans": "A) most",
        "answer": "A) most",
        "correct": "A) most"
    },
    {
        "type": "mcq",
        "q": "21. Choose the sentence with the correct capitalization and punctuation.",
        "options": ["A) Badminton is a popular sport in malaysia.", "B) Badminton is a popular sport in Malaysia.", "C) badminton is a popular sport in Malaysia"],
        "ans": "B) Badminton is a popular sport in Malaysia.",
        "answer": "B) Badminton is a popular sport in Malaysia.",
        "correct": "B) Badminton is a popular sport in Malaysia."
    },
    {
        "type": "mcq",
        "q": "22. Rearrange the words to form a correct sentence: [ essential / active / Staying / healthy / a / lifestyle / for / is ]",
        "options": ["A) Staying active is essential for a healthy lifestyle.", "B) A healthy lifestyle is essential staying active for.", "C) Active staying for a healthy lifestyle is essential."],
        "ans": "A) Staying active is essential for a healthy lifestyle.",
        "answer": "A) Staying active is essential for a healthy lifestyle.",
        "correct": "A) Staying active is essential for a healthy lifestyle."
    },
    {
        "type": "mcq",
        "q": "23. Rearrange the words to form a correct sentence: [ shuttlecock / need / Players / racquets / and / a ]",
        "options": ["A) Players need racquets and a shuttlecock.", "B) A shuttlecock need players and racquets.", "C) Racquets players need a shuttlecock and."],
        "ans": "A) Players need racquets and a shuttlecock.",
        "answer": "A) Players need racquets and a shuttlecock.",
        "correct": "A) Players need racquets and a shuttlecock."
    },
    {
        "type": "mcq",
        "q": "24. Choose the word with the correct spelling.",
        "options": ["A) Shuttelcock", "B) Shuttlecock", "C) Shutlecock"],
        "ans": "B) Shuttlecock",
        "answer": "B) Shuttlecock",
        "correct": "B) Shuttlecock"
    },
    {
        "type": "mcq",
        "q": "25. How do you suggest an outdoor exercise activity to your friend?",
        "options": ["A) Let's go cycling in the park today!", "B) I am sleeping in my bed.", "C) Don't touch my bike."],
        "ans": "A) Let's go cycling in the park today!",
        "answer": "A) Let's go cycling in the park today!",
        "correct": "A) Let's go cycling in the park today!"
    },
    {
        "type": "mcq",
        "q": "26. Someone asks: 'What equipment do we need for badminton?' How do you reply?",
        "options": ["A) We need racquets and a shuttlecock.", "B) We need a football and a goal post.", "C) We need a bicycle and a helmet."],
        "ans": "A) We need racquets and a shuttlecock.",
        "answer": "A) We need racquets and a shuttlecock.",
        "correct": "A) We need racquets and a shuttlecock."
    },
    {
        "type": "mcq",
        "q": "27. How do you advise a classmate who stays up late and feels tired?",
        "options": ["A) You should exercise and sleep earlier.", "B) You should play more video games.", "C) You shouldn't eat breakfast."],
        "ans": "A) You should exercise and sleep earlier.",
        "answer": "A) You should exercise and sleep earlier.",
        "correct": "A) You should exercise and sleep earlier."
    },
    {
        "type": "mcq",
        "image": wrapCenterImage("images/GS_MODULE9_28.png"),
        "q": "28. Read the banner: [BE ACTIVE! BE HEALTHY!]\nWhat is the main idea of this message?",
        "options": ["A) Exercise regularly to stay healthy", "B) Sit down and watch television", "C) Eat junk food every day"],
        "ans": "A) Exercise regularly to stay healthy",
        "answer": "A) Exercise regularly to stay healthy",
        "correct": "A) Exercise regularly to stay healthy"
    },
    {
        "type": "mcq",
        "image": wrapCenterImage("images/GS_MODULE9_29.png"),
        "q": "29. Read the safety rule: [WEAR A HELMET WHILE CYCLING]\nWhich sport is this rule for?",
        "options": ["A) Swimming", "B) Cycling", "C) Badminton"],
        "ans": "B) Cycling",
        "answer": "B) Cycling",
        "correct": "B) Cycling"
    },
    {
        "type": "mcq",
        "image": wrapCenterImage("images/GS_MODULE9_30.png"),
        "q": "30. Look at the poster slogan: [TEAMWORK MAKES THE DREAM WORK]\nWhat does this slogan encourage?",
        "options": ["A) Working together with teammates", "B) Playing alone without sharing", "C) Quitting the sport early"],
        "ans": "A) Working together with teammates",
        "answer": "A) Working together with teammates",
        "correct": "A) Working together with teammates"
    }
];

// Pautan kedua-dua nama tajuk supaya padan dengan senarai dropdown
quizBank["GET SMART SET"]["Module 9: On Holiday / Get Active / World of Sports"] = getSmartModule9;
quizBank["GET SMART SET"]["Module 9: On Holiday"] = getSmartModule9;


// ==========================================
// 2. REMEDIAL SET (30 SOALAN)
// ==========================================
var remedialModule9 = [
    {
        "type": "mcq",
        "image": wrapCenterImage("images/REMEDIAL_MODULE9_1.png"),
        "q": "1. Playing sports keeps us ____.",
        "options": ["A) healthy", "B) sick", "C) tired"],
        "ans": "A) healthy",
        "answer": "A) healthy",
        "correct": "A) healthy"
    },
    {
        "type": "mcq",
        "q": "2. You can run, swim, or ____ every day.",
        "options": ["A) cycle", "B) sleep", "C) sit"],
        "ans": "A) cycle",
        "answer": "A) cycle",
        "correct": "A) cycle"
    },
    {
        "type": "mcq",
        "q": "3. Exercise helps us stay ____.",
        "options": ["A) strong", "B) weak", "C) small"],
        "ans": "A) strong",
        "answer": "A) strong",
        "correct": "A) strong"
    },
    {
        "type": "mcq",
        "q": "4. A strong body makes a ____ life!",
        "options": ["A) happy", "B) sad", "C) bad"],
        "ans": "A) happy",
        "answer": "A) happy",
        "correct": "A) happy"
    },
    {
        "type": "mcq",
        "q": "5. What is this poster about?",
        "options": ["A) Exercise", "B) Sleeping", "C) Cooking"],
        "ans": "A) Exercise",
        "answer": "A) Exercise",
        "correct": "A) Exercise"
    },
    {
        "type": "mcq",
        "image": wrapCenterImage("images/REMEDIAL_MODULE9_6.png"),
        "q": "6. Badminton is a ____ sport.",
        "options": ["A) fun", "B) boring", "C) sad"],
        "ans": "A) fun",
        "answer": "A) fun",
        "correct": "A) fun"
    },
    {
        "type": "mcq",
        "q": "7. You need a ____ and a shuttlecock to play it.",
        "options": ["A) racquet", "B) bat", "C) ball"],
        "ans": "A) racquet",
        "answer": "A) racquet",
        "correct": "A) racquet"
    },
    {
        "type": "mcq",
        "q": "8. What hits the shuttlecock?",
        "options": ["A) The racquet", "B) The shoe", "C) The hat"],
        "ans": "A) The racquet",
        "answer": "A) The racquet",
        "correct": "A) The racquet"
    },
    {
        "type": "mcq",
        "q": "9. Play hard, have ____!",
        "options": ["A) fun", "B) rest", "C) food"],
        "ans": "A) fun",
        "answer": "A) fun",
        "correct": "A) fun"
    },
    {
        "type": "mcq",
        "q": "10. What sport is shown in the picture?",
        "options": ["A) Badminton", "B) Football", "C) Swimming"],
        "ans": "A) Badminton",
        "answer": "A) Badminton",
        "correct": "A) Badminton"
    },
    {
        "type": "mcq",
        "image": wrapCenterImage("images/REMEDIAL_MODULE9_11.png"),
        "q": "11. Moving fast on feet: ______.",
        "options": ["A) Run", "B) Sleep", "C) Sit"],
        "ans": "A) Run",
        "answer": "A) Run",
        "correct": "A) Run"
    },
    {
        "type": "mcq",
        "image": wrapCenterImage("images/REMEDIAL_MODULE9_12.png"),
        "q": "12. Swimming in water: ______.",
        "options": ["A) Swim", "B) Jump", "C) Fly"],
        "ans": "A) Swim",
        "answer": "A) Swim",
        "correct": "A) Swim"
    },
    {
        "type": "mcq",
        "image": wrapCenterImage("images/REMEDIAL_MODULE9_13.png"),
        "q": "13. Riding a bicycle: ______.",
        "options": ["A) Cycle", "B) Walk", "C) Dance"],
        "ans": "A) Cycle",
        "answer": "A) Cycle",
        "correct": "A) Cycle"
    },
    {
        "type": "mcq",
        "image": wrapCenterImage("images/REMEDIAL_MODULE9_14.png"),
        "q": "14. Used to hit a shuttlecock: ______.",
        "options": ["A) Racquet", "B) Box", "C) Cup"],
        "ans": "A) Racquet",
        "answer": "A) Racquet",
        "correct": "A) Racquet"
    },
    {
        "type": "mcq",
        "image": wrapCenterImage("images/REMEDIAL_MODULE9_15.png"),
        "q": "15. White feathered object for badminton: ______.",
        "options": ["A) Shuttlecock", "B) Football", "C) Balloon"],
        "ans": "A) Shuttlecock",
        "answer": "A) Shuttlecock",
        "correct": "A) Shuttlecock"
    },
    {
        "type": "mcq",
        "q": "16. You ______ exercise to stay healthy.",
        "options": ["A) should", "B) shouldn't", "C) cannot"],
        "ans": "A) should",
        "answer": "A) should",
        "correct": "A) should"
    },
    {
        "type": "mcq",
        "q": "17. Swimming is ______ than walking.",
        "options": ["A) faster", "B) fast", "C) fastest"],
        "ans": "A) faster",
        "answer": "A) faster",
        "correct": "A) faster"
    },
    {
        "type": "mcq",
        "q": "18. Badminton is a ______ sport.",
        "options": ["A) fun", "B) more fun", "C) most fun"],
        "ans": "A) fun",
        "answer": "A) fun",
        "correct": "A) fun"
    },
    {
        "type": "mcq",
        "q": "19. You ______ eat junk food every day.",
        "options": ["A) shouldn't", "B) should", "C) must"],
        "ans": "A) shouldn't",
        "answer": "A) shouldn't",
        "correct": "A) shouldn't"
    },
    {
        "type": "mcq",
        "q": "20. Running makes you ______.",
        "options": ["A) strong", "B) stronger", "C) strongest"],
        "ans": "A) strong",
        "answer": "A) strong",
        "correct": "A) strong"
    },
    {
        "type": "mcq",
        "q": "21. Choose the correct spelling:",
        "options": ["A) Swim", "B) Swimmed", "C) Swym"],
        "ans": "A) Swim",
        "answer": "A) Swim",
        "correct": "A) Swim"
    },
    {
        "type": "mcq",
        "q": "22. Rearrange: [ sports / Playing / us / healthy / keeps ]",
        "options": ["A) Playing sports keeps us healthy.", "B) Healthy keeps us playing sports.", "C) Sports playing us keeps healthy."],
        "ans": "A) Playing sports keeps us healthy.",
        "answer": "A) Playing sports keeps us healthy.",
        "correct": "A) Playing sports keeps us healthy."
    },
    {
        "type": "mcq",
        "q": "23. Choose the correct spelling:",
        "options": ["A) Racquet", "B) Racket", "C) Raquet"],
        "ans": "A) Racquet",
        "answer": "A) Racquet",
        "correct": "A) Racquet"
    },
    {
        "type": "mcq",
        "q": "24. Rearrange: [ fun / Badminton / a / sport / is ]",
        "options": ["A) Badminton is a fun sport.", "B) Fun sport a is badminton.", "C) Is badminton sport a fun."],
        "ans": "A) Badminton is a fun sport.",
        "answer": "A) Badminton is a fun sport.",
        "correct": "A) Badminton is a fun sport."
    },
    {
        "type": "mcq",
        "q": "25. Do you like playing badminton?",
        "options": ["A) Yes, I do.", "B) No, I am.", "C) Yes, I can't."],
        "ans": "A) Yes, I do.",
        "answer": "A) Yes, I do.",
        "correct": "A) Yes, I do."
    },
    {
        "type": "mcq",
        "q": "26. What sport can keep us healthy?",
        "options": ["A) Swimming can keep us healthy.", "B) Sleeping all day.", "C) Eating candy."],
        "ans": "A) Swimming can keep us healthy.",
        "answer": "A) Swimming can keep us healthy.",
        "correct": "A) Swimming can keep us healthy."
    },
    {
        "type": "mcq",
        "q": "27. Can you ride a bicycle?",
        "options": ["A) Yes, I can.", "B) Yes, I do.", "C) No, I am."],
        "ans": "A) Yes, I can.",
        "answer": "A) Yes, I can.",
        "correct": "A) Yes, I can."
    },
    {
        "type": "mcq",
        "image": wrapCenterImage("images/REMEDIAL_MODULE9_28.png"),
        "q": "28. Read the badge: [BE ACTIVE]\nWhat should you do?",
        "options": ["A) Move and exercise", "B) Sit still", "C) Sleep"],
        "ans": "A) Move and exercise",
        "answer": "A) Move and exercise",
        "correct": "A) Move and exercise"
    },
    {
        "type": "mcq",
        "image": wrapCenterImage("images/REMEDIAL_MODULE9_29.png"),
        "q": "29. Read the word: [SWIM]\nWhere do you do this activity?",
        "options": ["A) In a pool", "B) In a bedroom", "C) On a tree"],
        "ans": "A) In a pool",
        "answer": "A) In a pool",
        "correct": "A) In a pool"
    },
    {
        "type": "mcq",
        "image": wrapCenterImage("images/REMEDIAL_MODULE9_30.png"),
        "q": "30. Look at the sign: [PLAY HARD]\nWhat does it mean?",
        "options": ["A) Try your best in sports", "B) Give up easily", "C) Stop playing"],
        "ans": "A) Try your best in sports",
        "answer": "A) Try your best in sports",
        "correct": "A) Try your best in sports"
    }
];

// Pautan kedua-dua nama tajuk supaya padan dengan senarai dropdown
quizBank["REMEDIAL SET"]["Module 9: On Holiday / Get Active / World of Sports"] = remedialModule9;
quizBank["REMEDIAL SET"]["Module 9: On Holiday"] = remedialModule9;
