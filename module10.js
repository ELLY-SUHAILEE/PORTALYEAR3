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
quizBank["GET SMART SET"]["Module 10: The World Around Us / Animals & Solar System"] = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: The Amazing World of Animals) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_1.png"),
      "q": "1. Which animal is the biggest animal on Earth?",
      "options": ["A) The blue whale", "B) The elephant", "C) The cheetah"],
      "ans": "A) The blue whale"
    },
    {
      "type": "mcq",
      "q": "2. The blue whale is much larger than which land animal?",
      "options": ["A) A giraffe", "B) An elephant", "C) A panda"],
      "ans": "B) An elephant"
    },
    {
      "type": "mcq",
      "q": "3. Which land animal is the fastest, running faster than a horse?",
      "options": ["A) The cheetah", "B) The blue whale", "C) The giraffe"],
      "ans": "A) The cheetah"
    },
    {
      "type": "mcq",
      "q": "4. Why does the giraffe have a very long neck?",
      "options": ["A) To swim fast in rivers", "B) To reach high leaves", "C) To run faster than a horse"],
      "ans": "B) To reach high leaves"
    },
    {
      "type": "mcq",
      "q": "5. What message does the sign in the poster encourage us to do?",
      "options": ["A) Protect our animals", "B) Feed the cheetahs", "C) Ride the whales"],
      "ans": "A) Protect our animals"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Our Solar System) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_6.png"),
      "q": "6. How many planets are there in our solar system?",
      "options": ["A) Five planets", "B) Eight planets", "C) Ten planets"],
      "ans": "B) Eight planets"
    },
    {
      "type": "mcq",
      "q": "7. Which planet is the largest planet of all in our solar system?",
      "options": ["A) Jupiter", "B) Mercury", "C) Saturn"],
      "ans": "A) Jupiter"
    },
    {
      "type": "mcq",
      "q": "8. Which planet is the smallest in our solar system?",
      "options": ["A) Earth", "B) Mercury", "C) Uranus"],
      "ans": "B) Mercury"
    },
    {
      "type": "mcq",
      "q": "9. What makes Saturn famous?",
      "options": ["A) Its beautiful rings made of ice and dust", "B) Having liquid water and life", "C) Being the smallest planet"],
      "ans": "A) Its beautiful rings made of ice and dust"
    },
    {
      "type": "mcq",
      "q": "10. Which is the only planet known to have liquid water and life?",
      "options": ["A) Mars", "B) Earth", "C) Neptune"],
      "ans": "B) Earth"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_11.png"),
      "q": "11. A huge marine mammal that lives in the ocean is a ______.",
      "options": ["A) blue whale", "B) cheetah", "C) giraffe"],
      "ans": "A) blue whale"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_12.png"),
      "q": "12. A large wild cat known for its extreme speed and spotted coat is a ______.",
      "options": ["A) cheetah", "B) panda", "C) parrot"],
      "ans": "A) cheetah"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_13.png"),
      "q": "13. A tall African mammal with a very long neck and spotted skin is a ______.",
      "options": ["A) giraffe", "B) elephant", "C) whale"],
      "ans": "A) giraffe"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_14.png"),
      "q": "14. A large celestial body that orbits a star, such as Earth or Jupiter, is a ______.",
      "options": ["A) planet", "B) ring", "C) leaf"],
      "ans": "A) planet"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_15.png"),
      "q": "15. The sun and the group of planets that move around it is called the ______.",
      "options": ["A) solar system", "B) ocean life", "C) animal kingdom"],
      "ans": "A) solar system"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_16.png"),
      "q": "16. The blue whale is the ______ animal on Earth.",
      "options": ["A) biggest", "B) bigger", "C) big"],
      "ans": "A) biggest"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_17.png"),
      "q": "17. The cheetah runs ______ than a horse.",
      "options": ["A) faster", "B) fastest", "C) fast"],
      "ans": "A) faster"
    },
    {
      "type": "mcq",
      "q": "18. Jupiter is the ______ planet in our solar system.",
      "options": ["A) largest", "B) larger", "C) large"],
      "ans": "A) largest"
    },
    {
      "type": "mcq",
      "q": "19. Earth is ______ than Mercury.",
      "options": ["A) bigger", "B) biggest", "C) big"],
      "ans": "A) bigger"
    },
    {
      "type": "mcq",
      "q": "20. The giraffe is the ______ land animal.",
      "options": ["A) tallest", "B) taller", "C) tall"],
      "ans": "A) tallest"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the sentence with the correct capitalization and punctuation.",
      "options": ["A) Jupiter is the largest planet in our solar system.", "B) jupiter is the largest planet in our solar system", "C) Jupiter is the largest Planet in Our solar system"],
      "ans": "A) Jupiter is the largest planet in our solar system."
    },
    {
      "type": "mcq",
      "q": "22. Rearrange the words to form a correct sentence: [ planet / Mercury / smallest / the / is ]",
      "options": ["A) Mercury is the smallest planet.", "B) The smallest Mercury planet is.", "C) Planet Mercury smallest is the."],
      "ans": "A) Mercury is the smallest planet."
    },
    {
      "type": "mcq",
      "q": "23. Rearrange the words to form a correct sentence: [ has / system / planets / solar / Eight / Our ]",
      "options": ["A) Our solar system has eight planets.", "B) Eight planets solar our system has.", "C) Has eight planets system our solar."],
      "ans": "A) Our solar system has eight planets."
    },
    {
      "type": "mcq",
      "q": "24. Choose the word with the correct spelling.",
      "options": ["A) Cheetah", "B) Cheeta", "C) Chetah"],
      "ans": "A) Cheetah"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. How do you describe the blue whale to a friend?",
      "options": ["A) It is the biggest animal on Earth.", "B) It is the smallest insect in the garden.", "C) It can fly high in the sky."],
      "ans": "A) It is the biggest animal on Earth."
    },
    {
      "type": "mcq",
      "q": "26. Someone asks: 'Which planet do we live on?' How do you answer?",
      "options": ["A) We live on planet Earth.", "B) We live on Jupiter.", "C) We live on the Sun."],
      "ans": "A) We live on planet Earth."
    },
    {
      "type": "mcq",
      "q": "27. How do you compare a giraffe and a horse?",
      "options": ["A) A giraffe is taller than a horse.", "B) A horse is taller than a giraffe.", "C) A giraffe is smaller than a mouse."],
      "ans": "A) A giraffe is taller than a horse."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_28.png"),
      "q": "28. Read the sign: [NATURE IS WONDERFUL! LET'S PROTECT OUR ANIMALS!]\nWhat does the sign ask us to do?",
      "options": ["A) Take care of wild animals", "B) Keep wild animals in small boxes", "C) Harm animals in nature"],
      "ans": "A) Take care of wild animals"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_29.png"),
      "q": "29. Read the fact: [SATURN HAS RINGS MADE OF ICE AND DUST]\nWhat can you find around Saturn?",
      "options": ["A) Rings of ice and dust", "B) Oceans of hot water", "C) Green trees and grass"],
      "ans": "A) Rings of ice and dust"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE10_30.png"),
      "q": "30. Look at the solar system diagram. Which planet is closest to the Sun?",
      "options": ["A) Mercury", "B) Neptune", "C) Earth"],
      "ans": "A) Mercury"
    }
  ]
};

// ==========================================
// 2. REMEDIAL SET (30 SOALAN)
// ==========================================
quizBank["REMEDIAL SET"]["Module 10: The World Around Us / Animals & Solar System"] = {
  "Reading": [
    // --- PETIKAN 1 (Soalan 1 - 5: Big and Fast Animals) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_1.png"),
      "q": "1. The blue whale is the ____ animal.",
      "options": ["A) biggest", "B) smallest", "C) shortest"],
      "ans": "A) biggest"
    },
    {
      "type": "mcq",
      "q": "2. Which animal is the fastest?",
      "options": ["A) The cheetah", "B) The whale", "C) The snail"],
      "ans": "A) The cheetah"
    },
    {
      "type": "mcq",
      "q": "3. The giraffe is the ____ animal.",
      "options": ["A) tallest", "B) smallest", "C) fastest"],
      "ans": "A) tallest"
    },
    {
      "type": "mcq",
      "q": "4. What color is the whale in the picture?",
      "options": ["A) Blue", "B) Red", "C) Yellow"],
      "ans": "A) Blue"
    },
    {
      "type": "mcq",
      "q": "5. What is this poster about?",
      "options": ["A) Big and fast animals", "B) Toys in a store", "C) Fast cars"],
      "ans": "A) Big and fast animals"
    },

    // --- PETIKAN 2 (Soalan 6 - 10: Planets in Space) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_6.png"),
      "q": "6. Jupiter is the ____ planet.",
      "options": ["A) biggest", "B) smallest", "C) coldest"],
      "ans": "A) biggest"
    },
    {
      "type": "mcq",
      "q": "7. Mercury is the ____ planet.",
      "options": ["A) smallest", "B) biggest", "C) tallest"],
      "ans": "A) smallest"
    },
    {
      "type": "mcq",
      "q": "8. Earth is our ____.",
      "options": ["A) planet", "B) star", "C) moon"],
      "ans": "A) planet"
    },
    {
      "type": "mcq",
      "q": "9. Earth has ____.",
      "options": ["A) water", "B) rings", "C) fire"],
      "ans": "A) water"
    },
    {
      "type": "mcq",
      "q": "10. Where are Jupiter, Mercury, and Earth?",
      "options": ["A) In space", "B) Under the sea", "C) In a forest"],
      "ans": "A) In space"
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_11.png"),
      "q": "11. Big animal in the sea: ______.",
      "options": ["A) Whale", "B) Cat", "C) Bird"],
      "ans": "A) Whale"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_12.png"),
      "q": "12. Fast animal with spots: ______.",
      "options": ["A) Cheetah", "B) Dog", "C) Fish"],
      "ans": "A) Cheetah"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_13.png"),
      "q": "13. Animal with a very long neck: ______.",
      "options": ["A) Giraffe", "B) Frog", "C) Rabbit"],
      "ans": "A) Giraffe"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_14.png"),
      "q": "14. The planet where we live: ______.",
      "options": ["A) Earth", "B) Moon", "C) Sun"],
      "ans": "A) Earth"
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
      "q": "16. The cheetah is ______ than a horse.",
      "options": ["A) faster", "B) fast", "C) fastest"],
      "ans": "A) faster"
    },
    {
      "type": "mcq",
      "q": "17. The giraffe is the ______ animal.",
      "options": ["A) tallest", "B) taller", "C) tall"],
      "ans": "A) tallest"
    },
    {
      "type": "mcq",
      "q": "18. Jupiter is ______ than Earth.",
      "options": ["A) bigger", "B) big", "C) biggest"],
      "ans": "A) bigger"
    },
    {
      "type": "mcq",
      "q": "19. Mercury is the ______ planet.",
      "options": ["A) smallest", "B) smaller", "C) small"],
      "ans": "A) smallest"
    },
    {
      "type": "mcq",
      "q": "20. An elephant is ______ than a cat.",
      "options": ["A) larger", "B) largest", "C) large"],
      "ans": "A) larger"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "q": "21. Choose the correct spelling:",
      "options": ["A) Giraffe", "B) Girafe", "C) Jiraffe"],
      "ans": "A) Giraffe"
    },
    {
      "type": "mcq",
      "q": "22. Rearrange: [ fastest / Cheetah / is / the ]",
      "options": ["A) Cheetah is the fastest.", "B) Fastest cheetah is the.", "C) Is cheetah the fastest."],
      "ans": "A) Cheetah is the fastest."
    },
    {
      "type": "mcq",
      "q": "23. Choose the correct spelling:",
      "options": ["A) Planet", "B) Plannet", "C) Plenet"],
      "ans": "A) Planet"
    },
    {
      "type": "mcq",
      "q": "24. Rearrange: [ has / Earth / water ]",
      "options": ["A) Earth has water.", "B) Water Earth has.", "C) Has water Earth."],
      "ans": "A) Earth has water."
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "q": "25. Is the blue whale big?",
      "options": ["A) Yes, it is the biggest!", "B) No, it is tiny.", "C) Yes, it can fly."],
      "ans": "A) Yes, it is the biggest!"
    },
    {
      "type": "mcq",
      "q": "26. Which animal has a long neck?",
      "options": ["A) A giraffe", "B) A cheetah", "C) A whale"],
      "ans": "A) A giraffe"
    },
    {
      "type": "mcq",
      "q": "27. Does Earth have water?",
      "options": ["A) Yes, Earth has water.", "B) No, it is dry.", "C) Earth is a star."],
      "ans": "A) Yes, Earth has water."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_28.png"),
      "q": "28. Read the label: [BIGGEST ANIMAL]\nWhich animal is this?",
      "options": ["A) Blue whale", "B) Ant", "C) Frog"],
      "ans": "A) Blue whale"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_29.png"),
      "q": "29. Read the word: [EARTH]\nWhat color is mostly seen on planet Earth from space?",
      "options": ["A) Blue and green", "B) Pink and purple", "C) Red and yellow"],
      "ans": "A) Blue and green"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE10_30.png"),
      "q": "30. Look at the title: [PLANETS IN SPACE]\nHow many planets are in our solar system?",
      "options": ["A) 8 planets", "B) 2 planets", "C) 100 planets"],
      "ans": "A) 8 planets"
    }
  ]
};
