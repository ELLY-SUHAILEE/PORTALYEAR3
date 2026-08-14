if (typeof quizBank === 'undefined') { var quizBank = {}; }
if (!quizBank["GET SMART SET"]) { quizBank["GET SMART SET"] = {}; }
if (!quizBank["REMEDIAL SET"]) { quizBank["REMEDIAL SET"] = {}; }

// Fungsi pembantu untuk memastikan gambar berada di tengah (Center)
function wrapCenterImage(imagePath) {
    if (!imagePath) return "";
    return `<div style="text-align: center; margin: 15px 0;"><img src="${imagePath}" style="display: block; margin: 0 auto; max-width: 100%; max-height: 250px; border-radius: 10px; border: 1px solid #ddd;" onerror="this.style.display='none'"></div>`;
}

// ==========================================
// 1. GET SMART SET - MODULE 10: WORLD AROUND US (30 SOALAN)
// ==========================================
quizBank["GET SMART SET"]["Module 10: World Around Us"] = {
  "Reading": [
    // --- PASSAGE 1 (Soalan 1 - 5) ---
    // Passage 1: The Amazing World of Animals
    // "There are many fascinating animals in our world. The blue whale is the biggest animal on Earth. It is much larger than an elephant. On land, the cheetah is the fastest animal, running faster than a horse. Meanwhile, the giraffe is the tallest animal, with a very long neck to reach high leaves."
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_1.png"),
      "q": "Passage 1: The Amazing World of Animals\n1. What is the biggest animal on Earth?",
      "options": ["A) The elephant", "B) The blue whale", "C) The giraffe"],
      "ans": "B) The blue whale"
    },
    {
      "type": "mcq",
      "q": "2. Which animal is the fastest land animal?",
      "options": ["A) The horse", "B) The lion", "C) The cheetah"],
      "ans": "C) The cheetah"
    },
    {
      "type": "mcq",
      "q": "3. Which land animal is taller than an elephant?",
      "options": ["A) The giraffe", "B) The blue whale", "C) The horse"],
      "ans": "A) The giraffe"
    },
    {
      "type": "mcq",
      "q": "4. Why does the giraffe have a long neck?",
      "options": ["A) To swim fast in rivers", "B) To reach high leaves", "C) To run faster than a cheetah"],
      "ans": "B) To reach high leaves"
    },
    {
      "type": "mcq",
      "q": "5. What is the main idea of Passage 1?",
      "options": ["A) Animals and their amazing physical traits.", "B) How to feed farm animals.", "C) Visiting a city zoo on Sunday."],
      "ans": "A) Animals and their amazing physical traits."
    },

    // --- PASSAGE 2 (Soalan 6 - 10) ---
    // Passage 2: Our Solar System
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_6.png"),
      "q": "Passage 2: Our Solar System\n6. How many planets are there in our solar system?",
      "options": ["A) Seven planets", "B) Eight planets", "C) Nine planets"],
      "ans": "B) Eight planets"
    },
    {
      "type": "mcq",
      "q": "7. Which is the largest planet in our solar system?",
      "options": ["A) Jupiter", "B) Saturn", "C) Earth"],
      "ans": "A) Jupiter"
    },
    {
      "type": "mcq",
      "q": "8. Which planet is the smallest?",
      "options": ["A) Mercury", "B) Venus", "C) Mars"],
      "ans": "A) Mercury"
    },
    {
      "type": "mcq",
      "q": "9. What makes Saturn famous?",
      "options": ["A) Its green forests", "B) Its beautiful rings of ice and dust", "C) Its large oceans"],
      "ans": "B) Its beautiful rings of ice and dust"
    },
    {
      "type": "mcq",
      "q": "10. What unique feature does Earth have?",
      "options": ["A) It is the largest planet.", "B) It has liquid water and life.", "C) It has thirty moons."],
      "ans": "B) It has liquid water and life."
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_11.png"),
      "q": "11. A large marine mammal that is the largest creature on Earth is a ______.",
      "options": ["A) shark", "B) blue whale", "C) dolphin"],
      "ans": "B) blue whale"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_12.png"),
      "q": "12. A large wild cat with black spots known as the fastest land animal is a ______.",
      "options": ["A) cheetah", "B) tiger", "C) leopard"],
      "ans": "A) cheetah"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_13.png"),
      "q": "13. A large celestial body that orbits a star, such as Earth or Jupiter, is a ______.",
      "options": ["A) comet", "B) planet", "C) meteor"],
      "ans": "B) planet"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_14.png"),
      "q": "14. A tall African animal with a very long neck and spotted coat is a ______.",
      "options": ["A) zebra", "B) giraffe", "C) camel"],
      "ans": "B) giraffe"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_15.png"),
      "q": "15. The sun and the group of planets that travel around it make up the ______.",
      "options": ["A) solar system", "B) Milky Way", "C) universe"],
      "ans": "A) solar system"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_16.png"),
      "q": "16. An elephant is ______ than a horse.",
      "options": ["A) big", "B) bigger", "C) biggest"],
      "ans": "B) bigger"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_17.png"),
      "q": "17. The blue whale is the ______ animal in the ocean.",
      "options": ["A) large", "B) larger", "C) largest"],
      "ans": "C) largest"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_18.png"),
      "q": "18. A cheetah runs ______ than a dog.",
      "options": ["A) fast", "B) faster", "C) fastest"],
      "ans": "B) faster"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_19.png"),
      "q": "19. Jupiter is the ______ planet in our solar system.",
      "options": ["A) bigger", "B) biggest", "C) big"],
      "ans": "B) biggest"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_20.png"),
      "q": "20. Mercury is ______ than Earth.",
      "options": ["A) smaller", "B) smallest", "C) small"],
      "ans": "A) smaller"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_21.png"),
      "q": "21. Choose the sentence with correct capitalization and punctuation.",
      "options": ["A) Jupiter is the largest planet in our solar system.", "B) jupiter is the largest planet in our solar system", "C) Jupiter is the Largest planet in Our Solar System?"],
      "ans": "A) Jupiter is the largest planet in our solar system."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_22.png"),
      "q": "22. Rearrange the words: [ fastest / cheetah / The / animal / land / is / the ]",
      "options": ["A) The cheetah is the fastest land animal.", "B) Fastest land animal is the cheetah the.", "C) The fastest animal land is cheetah."],
      "ans": "A) The cheetah is the fastest land animal."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_23.png"),
      "q": "23. Rearrange the words: [ than / Giraffes / taller / horses / are ]",
      "options": ["A) Giraffes are taller than horses.", "B) Horses are taller than giraffes.", "C) Taller than giraffes are horses."],
      "ans": "A) Giraffes are taller than horses."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_24.png"),
      "q": "24. Choose the correct comparative spelling for 'heavy':",
      "options": ["A) heavyer", "B) heavier", "C) heaviest"],
      "ans": "B) heavier"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_25.png"),
      "q": "25. Asking about preferences: 'Which animal do you think is the smartest?' How do you answer?",
      "options": ["A) I think the dolphin is the smartest.", "B) Dolphins can swim very fast.", "C) Yes, dolphins are animals."],
      "ans": "A) I think the dolphin is the smartest."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_26.png"),
      "q": "26. Comparing two objects: 'Is Earth bigger than Jupiter?'",
      "options": ["A) No, Jupiter is much bigger than Earth.", "B) Yes, Earth is the biggest.", "C) Earth has water."],
      "ans": "A) No, Jupiter is much bigger than Earth."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_27.png"),
      "q": "27. Giving a fact: 'What is the tallest animal in the world?'",
      "options": ["A) The giraffe is the tallest animal.", "B) The elephant is heavy.", "C) The lion is fast."],
      "ans": "A) The giraffe is the tallest animal."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_28.png"),
      "q": "28. Read the fact card: [BLUE WHALE - WEIGHT: 150 TONNES | ELEPHANT - WEIGHT: 6 TONNES]. Which is heavier?",
      "options": ["A) The elephant", "B) The blue whale", "C) They are equal weight"],
      "ans": "B) The blue whale"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_29.png"),
      "q": "29. Read the planet chart: [JUPITER > SATURN > EARTH > MERCURY]. Which planet is the smallest?",
      "options": ["A) Saturn", "B) Earth", "C) Mercury"],
      "ans": "C) Mercury"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_30.png"),
      "q": "30. Read the quiz question: [CHEETAH: 120 KM/H | HORSE: 80 KM/H]. Which animal runs faster?",
      "options": ["A) The cheetah", "B) The horse", "C) Both run at same speed"],
      "ans": "A) The cheetah"
    }
  ]
};

// ==========================================
// 2. REMEDIAL SET - MODULE 10: WORLD AROUND US (30 SOALAN)
// ==========================================
quizBank["REMEDIAL SET"]["Module 10: World Around Us"] = {
  "Reading": [
    // --- PASSAGE 1 (Soalan 1 - 5) ---
    // Passage 1: Big and Fast Animals
    // "The blue whale is the biggest animal. The cheetah is the fastest. The giraffe is the tallest animal."
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_1.png"),
      "q": "Passage 1: Big and Fast Animals\n1. What is the biggest animal?",
      "options": ["A) Elephant", "B) Blue whale", "C) Cat"],
      "ans": "B) Blue whale"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_2.png"),
      "q": "2. What is the fastest land animal?",
      "options": ["A) Dog", "B) Cheetah", "C) Horse"],
      "ans": "B) Cheetah"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_3.png"),
      "q": "3. Which animal is the tallest?",
      "options": ["A) Giraffe", "B) Lion", "C) Monkey"],
      "ans": "A) Giraffe"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_4.png"),
      "q": "4. Is a giraffe taller than a horse?",
      "options": ["A) Yes, it is.", "B) No, it isn't.", "C) No, they are same."],
      "ans": "A) Yes, it is."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_5.png"),
      "q": "5. Is the blue whale small?",
      "options": ["A) Yes, it is.", "B) No, it is the biggest.", "C) Yes, like a fish."],
      "ans": "B) No, it is the biggest."
    },

    // --- PASSAGE 2 (Soalan 6 - 10) ---
    // Passage 2: Planets in Space
    // "Jupiter is the biggest planet. Mercury is the smallest planet. Earth is our planet. Earth has water."
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_6.png"),
      "q": "Passage 2: Planets in Space\n6. What is the biggest planet?",
      "options": ["A) Earth", "B) Jupiter", "C) Mercury"],
      "ans": "B) Jupiter"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_7.png"),
      "q": "7. What is the smallest planet?",
      "options": ["A) Mercury", "B) Jupiter", "C) Saturn"],
      "ans": "A) Mercury"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_8.png"),
      "q": "8. What planet do we live on?",
      "options": ["A) Mars", "B) Earth", "C) Venus"],
      "ans": "B) Earth"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_9.png"),
      "q": "9. What does Earth have?",
      "options": ["A) Fire", "B) Water", "C) Ice rings"],
      "ans": "B) Water"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_10.png"),
      "q": "10. Is Jupiter bigger than Mercury?",
      "options": ["A) Yes, it is.", "B) No, it isn't.", "C) No, they are equal."],
      "ans": "A) Yes, it is."
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_11.png"),
      "q": "11. The biggest animal in the sea: ______.",
      "options": ["A) blue whale", "B) crab", "C) fish"],
      "ans": "A) blue whale"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_12.png"),
      "q": "12. The fastest animal on land: ______.",
      "options": ["A) cheetah", "B) snail", "C) pig"],
      "ans": "A) cheetah"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_13.png"),
      "q": "13. The planet we live on: ______.",
      "options": ["A) Earth", "B) Moon", "C) Sun"],
      "ans": "A) Earth"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_14.png"),
      "q": "14. Animal with a very long neck: ______.",
      "options": ["A) giraffe", "B) goat", "C) duck"],
      "ans": "A) giraffe"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_15.png"),
      "q": "15. The biggest planet: ______.",
      "options": ["A) Jupiter", "B) Mars", "C) Venus"],
      "ans": "A) Jupiter"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_16.png"),
      "q": "16. An elephant is ______ than a cat.",
      "options": ["A) bigger", "B) big", "C) biggest"],
      "ans": "A) bigger"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_17.png"),
      "q": "17. The giraffe is the ______ animal.",
      "options": ["A) tallest", "B) taller", "C) tall"],
      "ans": "A) tallest"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_18.png"),
      "q": "18. A cheetah is ______ than a turtle.",
      "options": ["A) faster", "B) fast", "C) fastest"],
      "ans": "A) faster"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_19.png"),
      "q": "19. Jupiter is the ______ planet.",
      "options": ["A) biggest", "B) bigger", "C) big"],
      "ans": "A) biggest"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_20.png"),
      "q": "20. Mercury is ______ than Earth.",
      "options": ["A) smaller", "B) small", "C) smallest"],
      "ans": "A) smaller"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_21.png"),
      "q": "21. Choose the correct spelling:",
      "options": ["A) planet", "B) plannet", "C) planit"],
      "ans": "A) planet"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_22.png"),
      "q": "22. Rearrange: [ is / Earth / planet / a ]",
      "options": ["A) Earth is a planet.", "B) Planet a is Earth.", "C) Is Earth a planet."],
      "ans": "A) Earth is a planet."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_23.png"),
      "q": "23. Choose the correct sentence:",
      "options": ["A) The cheetah is fast.", "B) the cheetah is fast", "C) The cheetah Is Fast?"],
      "ans": "A) The cheetah is fast."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_24.png"),
      "q": "24. Choose the correct spelling:",
      "options": ["A) giraffe", "B) girafe", "C) jiraffe"],
      "ans": "A) giraffe"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_25.png"),
      "q": "25. 'Which animal is bigger?' - You answer:",
      "options": ["A) The elephant is bigger.", "B) It is green.", "C) I like swimming."],
      "ans": "A) The elephant is bigger."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_26.png"),
      "q": "26. 'Is Jupiter big?' - You answer:",
      "options": ["A) Yes, it is the biggest.", "B) Yes, I am.", "C) No, it isn't."],
      "ans": "A) Yes, it is the biggest."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_27.png"),
      "q": "27. 'Is a cheetah slow?' - You answer:",
      "options": ["A) No, it is very fast!", "B) Yes, it is slow.", "C) Yes, it can fly."],
      "ans": "A) No, it is very fast!"
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_28.png"),
      "q": "28. Read the label: [BIGGEST PLANET: JUPITER]. Which planet is it?",
      "options": ["A) Jupiter", "B) Earth", "C) Mars"],
      "ans": "A) Jupiter"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_29.png"),
      "q": "29. Read the word: [GIRAFFE]. Does it have a long neck or short legs?",
      "options": ["A) Long neck", "B) Wings", "C) Fins"],
      "ans": "A) Long neck"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_30.png"),
      "q": "30. Look at the animal: [BLUE WHALE]. Where does it live?",
      "options": ["A) In the sea", "B) In a tree", "C) In a house"],
      "ans": "A) In the sea"
    }
  ]
};
