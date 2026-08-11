if (typeof quizBank === 'undefined') { var quizBank = {}; }
if (!quizBank["GET SMART SET"]) { quizBank["GET SMART SET"] = {}; }
if (!quizBank["REMEDIAL SET"]) { quizBank["REMEDIAL SET"] = {}; }

function wrapCenterImage(imagePath) {
    if (!imagePath) return "";
    return `<div style="text-align: center; margin: 15px 0;"><img src="${imagePath}" style="display: block; margin: 0 auto; max-width: 100%; max-height: 250px; border-radius: 10px; border: 1px solid #ddd;" onerror="this.style.display='none'"></div>`;
}

// ==========================================
// 1. GET SMART SET - MODULE 5: MY NEW HOUSE / EATING RIGHT
// ==========================================
quizBank["GET SMART SET"]["Module 5: My new house"] = {
  "Reading": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE5_1.png"),
      "q": "1. Where is the cat in the house?",
      "options": ["A) It is on the bed in the bedroom.", "B) It is under the dining table.", "C) It is in the garden."],
      "ans": "A) It is on the bed in the bedroom."
    },
    {
      "type": "mcq",
      "q": "2. What is Mum doing in the kitchen?",
      "options": ["A) She is watching television.", "B) She is cooking dinner for the family.", "C) She is washing the car."],
      "ans": "B) She is cooking dinner for the family."
    },
    {
      "type": "mcq",
      "q": "3. Where are the slippers placed?",
      "options": ["A) Behind the door", "B) On the sofa", "C) Under the armchair"],
      "ans": "C) Under the armchair"
    },
    {
      "type": "mcq",
      "q": "4. Which room has a large mirror and a bath?",
      "options": ["A) The kitchen", "B) The bathroom", "C) The living room"],
      "ans": "B) The bathroom"
    },
    {
      "type": "mcq",
      "q": "5. What can we find on the kitchen table?",
      "options": ["A) Some fresh fruit and milk", "B) A computer and books", "C) Clothes and shoes"],
      "ans": "A) Some fresh fruit and milk"
    }
  ],
  "Vocabulary": [
    {
      "type": "mcq",
      "q": "6. You sleep in this room every night. It is the ______.",
      "options": ["A) kitchen", "B) bedroom", "C) garden"],
      "ans": "B) bedroom"
    },
    {
      "type": "mcq",
      "q": "7. We keep ice cream and milk cold in the ______.",
      "options": ["A) fridge", "B) bookcase", "C) wardrobe"],
      "ans": "A) fridge"
    },
    {
      "type": "mcq",
      "q": "8. A comfortable seat for one person with sides for arms is an ______.",
      "options": ["A) armchair", "B) oven", "C) umbrella"],
      "ans": "A) armchair"
    }
  ],
  "Grammar": [
    {
      "type": "mcq",
      "q": "9. Where ______ the cushions? They are on the sofa.",
      "options": ["A) is", "B) are", "C) am"],
      "ans": "B) are"
    },
    {
      "type": "mcq",
      "q": "10. There ______ a big mirror in the bathroom.",
      "options": ["A) is", "B) are", "C) serve"],
      "ans": "A) is"
    }
  ]
};

// ==========================================
// 2. REMEDIAL SET - MODULE 5: MY NEW HOUSE / EATING RIGHT
// ==========================================
quizBank["REMEDIAL SET"]["Module 5: My new house"] = {
  "Reading": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE5_1.png"),
      "q": "1. Where is the ball?",
      "options": ["A) Under the table", "B) On the chair", "C) In the box"],
      "ans": "A) Under the table"
    },
    {
      "type": "mcq",
      "q": "2. Where do you cook food?",
      "options": ["A) In the bathroom", "B) In the kitchen", "C) In the bedroom"],
      "ans": "B) In the kitchen"
    },
    {
      "type": "mcq",
      "q": "3. Is there a fridge in the kitchen?",
      "options": ["A) Yes, there is.", "B) No, there isn't.", "C) Yes, they are."],
      "ans": "A) Yes, there is."
    }
  ],
  "Vocabulary": [
    {
      "type": "mcq",
      "q": "4. A place where you sleep is a ______.",
      "options": ["A) bedroom", "B) kitchen", "C) hall"],
      "ans": "A) bedroom"
    },
    {
      "type": "mcq",
      "q": "5. You sit on this big chair in the living room. It is a ______.",
      "options": ["A) sofa", "B) desk", "C) bed"],
      "ans": "A) sofa"
    }
  ],
  "Grammar": [
    {
      "type": "mcq",
      "q": "6. There ______ two chairs in the room.",
      "options": ["A) is", "B) are", "C) am"],
      "ans": "B) are"
    },
    {
      "type": "mcq",
      "q": "7. ______ is the bag? It is on the floor.",
      "options": ["A) Where", "B) Who", "C) What"],
      "ans": "A) Where"
    }
  ]
};
