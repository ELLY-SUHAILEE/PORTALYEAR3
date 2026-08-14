if (typeof quizBank === 'undefined') { var quizBank = {}; }
if (!quizBank["GET SMART SET"]) { quizBank["GET SMART SET"] = {}; }
if (!quizBank["REMEDIAL SET"]) { quizBank["REMEDIAL SET"] = {}; }

// Fungsi pembantu untuk memastikan gambar berada di tengah (Center)
function wrapCenterImage(imagePath) {
    if (!imagePath) return "";
    return `<div style="text-align: center; margin: 15px 0;"><img src="${imagePath}" style="display: block; margin: 0 auto; max-width: 100%; max-height: 250px; border-radius: 10px; border: 1px solid #ddd;" onerror="this.style.display='none'"></div>`;
}

// ==========================================
// 1. GET SMART SET - MODULE 8: WHERE WERE YOU YESTERDAY? (30 SOALAN)
// ==========================================
quizBank["GET SMART SET"]["Module 8: Where Were You Yesterday?"] = {
  "Reading": [
    // --- GAMBAR 1 (Soalan 1 - 5) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_1.png"),
      "q": "1. What day was yesterday?",
      "options": ["A) Saturday", "B) Sunday", "C) Monday"],
      "ans": "B) Sunday"
    },
    {
      "type": "mcq",
      "q": "2. Where was Maya in the morning?",
      "options": ["A) At the cinema", "B) At the shopping centre", "C) At school"],
      "ans": "B) At the shopping centre"
    },
    {
      "type": "mcq",
      "q": "3. Who was with Maya at the shopping centre?",
      "options": ["A) Her mother", "B) Her friends", "C) Her teacher"],
      "ans": "A) Her mother"
    },
    {
      "type": "mcq",
      "q": "4. What did Maya and her friends watch at the cinema?",
      "options": ["A) A scary movie", "B) A funny cartoon movie", "C) A science documentary"],
      "ans": "B) A funny cartoon movie"
    },
    {
      "type": "mcq",
      "q": "5. How did Maya feel about the movie?",
      "options": ["A) It was boring.", "B) It was scary.", "C) It was exciting!"],
      "ans": "C) It was exciting!"
    },

    // --- GAMBAR 2 (Soalan 6 - 10) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_6.png"),
      "q": "6. Where were Kevin and his brother yesterday afternoon?",
      "options": ["A) At the swimming pool", "B) At the amusement park", "C) At the museum"],
      "ans": "B) At the amusement park"
    },
    {
      "type": "mcq",
      "q": "7. How was the weather yesterday afternoon?",
      "options": ["A) Rainy and cold", "B) Sunny and warm", "C) Windy and cloudy"],
      "ans": "B) Sunny and warm"
    },
    {
      "type": "mcq",
      "q": "8. Why wasn't Kevin's brother on the Ferris wheel?",
      "options": ["A) He was too scared.", "B) He was too tired.", "C) He was sick."],
      "ans": "A) He was too scared."
    },
    {
      "type": "mcq",
      "q": "9. Where were they at five o'clock?",
      "options": ["A) At home", "B) At the park", "C) At a fast food restaurant"],
      "ans": "C) At a fast food restaurant"
    },
    {
      "type": "mcq",
      "q": "10. Why did they go to the restaurant?",
      "options": ["A) Because they were thirsty.", "B) Because they were hungry.", "C) Because it was raining."],
      "ans": "B) Because they were hungry."
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_11.png"),
      "q": "11. A place where you go to watch movies on a big screen is a ______.",
      "options": ["A) cinema", "B) circus", "C) hospital"],
      "ans": "A) cinema"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_12.png"),
      "q": "12. A place with rides, games, and fun activities is an ______.",
      "options": ["A) art gallery", "B) amusement park", "C) aquarium"],
      "ans": "B) amusement park"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_13.png"),
      "q": "13. A large building with many shops and restaurants is a ______.",
      "options": ["A) shopping centre", "B) police station", "C) post office"],
      "ans": "A) shopping centre"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_14.png"),
      "q": "14. Feeling fear or frightened of something high or scary means you are ______.",
      "options": ["A) happy", "B) scared", "C) bored"],
      "ans": "B) scared"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_15.png"),
      "q": "15. A giant revolving wheel with seats at an amusement park is a ______.",
      "options": ["A) roller coaster", "B) Ferris wheel", "C) carousel"],
      "ans": "B) Ferris wheel"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_16.png"),
      "q": "16. Where ______ you yesterday morning?",
      "options": ["A) were", "B) was", "C) are"],
      "ans": "A) were"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_17.png"),
      "q": "17. She ______ at home yesterday afternoon.",
      "options": ["A) was", "B) were", "C) is"],
      "ans": "A) was"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_18.png"),
      "q": "18. We ______ at the park yesterday because it rained.",
      "options": ["A) wasn't", "B) weren't", "C) aren't"],
      "ans": "B) weren't"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_19.png"),
      "q": "19. ______ he at the cinema last night?",
      "options": ["A) Was", "B) Were", "C) Is"],
      "ans": "A) Was"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_20.png"),
      "q": "20. They ______ very happy with the fun rides yesterday.",
      "options": ["A) was", "B) were", "C) are"],
      "ans": "B) were"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_21.png"),
      "q": "21. Choose the sentence with correct capitalization and punctuation.",
      "options": ["A) Where were you yesterday afternoon?", "B) where were you yesterday afternoon", "C) Where were you Yesterday afternoon."],
      "ans": "A) Where were you yesterday afternoon?"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_22.png"),
      "q": "22. Rearrange the words: [ at / was / I / home / yesterday ]",
      "options": ["A) I was at home yesterday.", "B) Home at I was yesterday.", "C) Yesterday at home I was."],
      "ans": "A) I was at home yesterday."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_23.png"),
      "q": "23. Rearrange the words: [ cinema / Were / at / the / you / ? ]",
      "options": ["A) Were you at the cinema?", "B) You were at cinema the?", "C) At the cinema were you?"],
      "ans": "A) Were you at the cinema?"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_24.png"),
      "q": "24. Choose the correct spelling for the past tense place:",
      "options": ["A) cinema", "B) sinema", "C) cinma"],
      "ans": "A) cinema"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_25.png"),
      "q": "25. Someone asks: 'Where were you yesterday?' How do you answer?",
      "options": ["A) I was at the park.", "B) I am fine, thank you.", "C) Yes, I was."],
      "ans": "A) I was at the park."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_26.png"),
      "q": "26. Your friend asks: 'Was the movie good?' If YES, you say:",
      "options": ["A) Yes, it was!", "B) Yes, I am.", "C) Yes, there is."],
      "ans": "A) Yes, it was!"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_27.png"),
      "q": "27. Someone asks: 'Were you scared on the ride?' If NO, you say:",
      "options": ["A) No, I wasn't.", "B) No, I don't.", "C) No, there wasn't."],
      "ans": "A) No, I wasn't."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_28.png"),
      "q": "28. Read the ticket: [CINEMA - MOVIE TIME: 3:00 PM YESTERDAY]. Where was the holder at 3:00 PM?",
      "options": ["A) At school", "B) At the cinema", "C) At home"],
      "ans": "B) At the cinema"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_29.png"),
      "q": "29. Read the poster: [AMUSEMENT PARK - OPEN YESTERDAY 10 AM TO 8 PM]. What can you do there?",
      "options": ["A) Ride the Ferris wheel", "B) Buy textbooks", "C) See wild animals"],
      "ans": "A) Ride the Ferris wheel"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/GS_MODULE8_30.png"),
      "q": "30. Read the diary entry: [SUNDAY: I WAS AT THE SHOPPING CENTRE WITH MUM]. What day was it?",
      "options": ["A) Monday", "B) Sunday", "C) Friday"],
      "ans": "B) Sunday"
    }
  ]
};

// ==========================================
// 2. REMEDIAL SET - MODULE 8: WHERE WERE YOU YESTERDAY? (30 SOALAN)
// ==========================================
quizBank["REMEDIAL SET"]["Module 8: Where Were You Yesterday?"] = {
  "Reading": [
    // --- GAMBAR 1 (Soalan 1 - 5) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_1.png"),
      "q": "1. What day was yesterday?",
      "options": ["A) Monday", "B) Sunday", "C) Saturday"],
      "ans": "B) Sunday"
    },
    {
      "type": "mcq",
      "q": "2. Where was Maya in the morning?",
      "options": ["A) At the cinema", "B) At school", "C) At the shopping centre"],
      "ans": "C) At the shopping centre"
    },
    {
      "type": "mcq",
      "q": "3. Where was Maya in the afternoon?",
      "options": ["A) At the cinema", "B) At home", "C) At the park"],
      "ans": "A) At the cinema"
    },
    {
      "type": "mcq",
      "q": "4. What did she watch?",
      "options": ["A) A news program", "B) A cartoon movie", "C) A sports game"],
      "ans": "B) A cartoon movie"
    },
    {
      "type": "mcq",
      "q": "5. Was Maya at school yesterday?",
      "options": ["A) Yes, she was.", "B) No, she wasn't.", "C) Yes, always."],
      "ans": "B) No, she wasn't."
    },

    // --- GAMBAR 2 (Soalan 6 - 10) ---
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_6.png"),
      "q": "6. Where was Kevin?",
      "options": ["A) At the amusement park", "B) At the zoo", "C) At the beach"],
      "ans": "A) At the amusement park"
    },
    {
      "type": "mcq",
      "q": "7. What ride was Kevin on?",
      "options": ["A) A bicycle", "B) The Ferris wheel", "C) A bus"],
      "ans": "B) The Ferris wheel"
    },
    {
      "type": "mcq",
      "q": "8. How did Kevin's brother feel?",
      "options": ["A) Happy", "B) Scared", "C) Angry"],
      "ans": "B) Scared"
    },
    {
      "type": "mcq",
      "q": "9. How did they feel at five o'clock?",
      "options": ["A) Hungry", "B) Cold", "C) Sleepy"],
      "ans": "A) Hungry"
    },
    {
      "type": "mcq",
      "q": "10. Was Kevin at the amusement park?",
      "options": ["A) Yes, he was.", "B) No, he wasn't.", "C) No, they aren't."],
      "ans": "A) Yes, he was."
    }
  ],

  "Vocabulary": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_11.png"),
      "q": "11. A place to watch movies: ______.",
      "options": ["A) cinema", "B) park", "C) school"],
      "ans": "A) cinema"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_12.png"),
      "q": "12. A place with fun rides: ______.",
      "options": ["A) amusement park", "B) shop", "C) bank"],
      "ans": "A) amusement park"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_13.png"),
      "q": "13. A big building with shops: ______.",
      "options": ["A) shopping centre", "B) house", "C) room"],
      "ans": "A) shopping centre"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_14.png"),
      "q": "14. Feeling fear means you are ______.",
      "options": ["A) scared", "B) glad", "C) fine"],
      "ans": "A) scared"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_15.png"),
      "q": "15. A big wheel ride: ______.",
      "options": ["A) Ferris wheel", "B) car", "C) boat"],
      "ans": "A) Ferris wheel"
    }
  ],

  "Grammar": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_16.png"),
      "q": "16. Where ______ you yesterday?",
      "options": ["A) were", "B) was", "C) is"],
      "ans": "A) were"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_17.png"),
      "q": "17. I ______ at home yesterday.",
      "options": ["A) was", "B) were", "C) am"],
      "ans": "A) was"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_18.png"),
      "q": "18. She ______ at the cinema.",
      "options": ["A) was", "B) were", "C) are"],
      "ans": "A) was"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_19.png"),
      "q": "19. They ______ happy yesterday.",
      "options": ["A) were", "B) was", "C) am"],
      "ans": "A) were"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_20.png"),
      "q": "20. We ______ not at school yesterday.",
      "options": ["A) were", "B) was", "C) is"],
      "ans": "A) were"
    }
  ],

  "Writing": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_21.png"),
      "q": "21. Choose the correct spelling:",
      "options": ["A) cinema", "B) sinema", "C) cinma"],
      "ans": "A) cinema"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_22.png"),
      "q": "22. Rearrange: [ was / I / home / at ]",
      "options": ["A) I was at home.", "B) Home at I was.", "C) At home was I."],
      "ans": "A) I was at home."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_23.png"),
      "q": "23. Choose the correct sentence:",
      "options": ["A) Where were you?", "B) where were you", "C) Where were you."],
      "ans": "A) Where were you?"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_24.png"),
      "q": "24. Choose the correct spelling:",
      "options": ["A) park", "B) paark", "C) parck"],
      "ans": "A) park"
    }
  ],

  "Speaking": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_25.png"),
      "q": "25. 'Where were you yesterday?' - You answer:",
      "options": ["A) I was at home.", "B) I am 9 years old.", "C) I like apples."],
      "ans": "A) I was at home."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_26.png"),
      "q": "26. 'Were you at the park?' - If YES, you say:",
      "options": ["A) Yes, I was.", "B) Yes, I am.", "C) Yes, I do."],
      "ans": "A) Yes, I was."
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_27.png"),
      "q": "27. 'Was it fun?' - If YES, you say:",
      "options": ["A) Yes, it was.", "B) Yes, it is.", "C) Yes, there is."],
      "ans": "A) Yes, it was."
    }
  ],

  "Mixed Skills": [
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_28.png"),
      "q": "28. Read the ticket: [CINEMA]. What do you watch here?",
      "options": ["A) Movies", "B) Animals", "C) Books"],
      "ans": "A) Movies"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_29.png"),
      "q": "29. Read the sign: [PARK]. What can you do here?",
      "options": ["A) Play", "B) Sleep in bed", "C) Cook food"],
      "ans": "A) Play"
    },
    {
      "type": "mcq",
      "image": wrapCenterImage("images/REMEDIAL_MODULE8_30.png"),
      "q": "30. Look at the label: [YESTERDAY]. Does it mean today or the past?",
      "options": ["A) The past", "B) Today", "C) Tomorrow"],
      "ans": "A) The past"
    }
  ]
};
