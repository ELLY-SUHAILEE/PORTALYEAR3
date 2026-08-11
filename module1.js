// Memastikan pemboleh ubah quizBank wujud
if (typeof quizBank === 'undefined') {
    var quizBank = {};
}

// Memastikan struktur set latihan wujud
if (!quizBank["GET SMART SET"]) { quizBank["GET SMART SET"] = {}; }
if (!quizBank["REMEDIAL SET"]) { quizBank["REMEDIAL SET"] = {}; }

// DATA SOALAN MODULE 1
const module1Data = {
  "Reading": [
    {
      "type": "mcq",
      "q": "Read the passage and answer the question.\n\nHello! I am Sara. I have got straight dark hair. My new classmate is Aina. She has got long curly hair and big black eyes.\n\nWe are at the beach today. Aina has got fifty shells in her basket. I have got forty shells. We love collecting shells together!\n\nWhat type of hair does Aina have?",
      "options": ["A) Short straight hair", "B) Long curly hair", "C) Short fair hair"],
      "ans": "B) Long curly hair"
    },
    {
      "type": "mcq",
      "q": "Read the passage and answer the question.\n\nHello! I am Sara. I have got straight dark hair. My new classmate is Aina. She has got long curly hair and big black eyes.\n\nWe are at the beach today. Aina has got fifty shells in her basket. I have got forty shells. We love collecting shells together!\n\nHow many shells does Sara have in her basket?",
      "options": ["A) Fifty shells", "B) Forty shells", "C) Thirty shells"],
      "ans": "B) Forty shells"
    },
    {
      "type": "mcq",
      "q": "Read the passage and answer the question.\n\nHello! I am Sara. I have got straight dark hair. My new classmate is Aina. She has got long curly hair and big black eyes.\n\nWe are at the beach today. Aina has got fifty shells in her basket. I have got forty shells. We love collecting shells together!\n\nWhere are Sara and Aina spending their time today?",
      "options": ["A) At the beach", "B) At the park", "C) At school"],
      "ans": "A) At the beach"
    },
    {
      "type": "mcq",
      "q": "Read the passage and answer the question.\n\nHello! I am Sara. I have got straight dark hair. My new classmate is Aina. She has got long curly hair and big black eyes.\n\nWe are at the beach today. Aina has got fifty shells in her basket. I have got forty shells. We love collecting shells together!\n\nWhich statement is TRUE about Aina?",
      "options": ["A) She has forty shells.", "B) She has straight dark hair.", "C) She has got big black eyes."],
      "ans": "C) She has got big black eyes."
    },
    {
      "type": "mcq",
      "q": "Read the passage and answer the question.\n\nHello! I am Sara. I have got straight dark hair. My new classmate is Aina. She has got long curly hair and big black eyes.\n\nWe are at the beach today. Aina has got fifty shells in her basket. I have got forty shells. We love collecting shells together!\n\nWhy do Sara and Aina enjoy spending time together?",
      "options": ["A) They share a hobby of collecting shells.", "B) They go to different schools.", "C) They like playing computer games."],
      "ans": "A) They share a hobby of collecting shells."
    },
    {
      "type": "mcq",
      "q": "Read the passage and answer the question.\n\nMeet my brother, Amir. He has got short fair hair. Amir is very active and loves sports.\n\nHe can play football very well, and he can swim fast. But he cannot dive into the deep pool. Amir has got twenty stickers in his album. He practises every Saturday!\n\nWhat colour is Amir's hair?",
      "options": ["A) Black", "B) Fair", "C) Brown"],
      "ans": "B) Fair"
    },
    {
      "type": "mcq",
      "q": "Read the passage and answer the question.\n\nMeet my brother, Amir. He has got short fair hair. Amir is very active and loves sports.\n\nHe can play football very well, and he can swim fast. But he cannot dive into the deep pool. Amir has got twenty stickers in his album. He practises every Saturday!\n\nHow many stickers has Amir got in his album?",
      "options": ["A) Ten stickers", "B) Fifteen stickers", "C) Twenty stickers"],
      "ans": "C) Twenty stickers"
    },
    {
      "type": "mcq",
      "q": "Read the passage and answer the question.\n\nMeet my brother, Amir. He has got short fair hair. Amir is very active and loves sports.\n\nHe can play football very well, and he can swim fast. But he cannot dive into the deep pool. Amir has got twenty stickers in his album. He practises every Saturday!\n\nWhich activity is Amir unable to do?",
      "options": ["A) Play football", "B) Swim fast", "C) Dive into the deep pool"],
      "ans": "C) Dive into the deep pool"
    },
    {
      "type": "mcq",
      "q": "Read the passage and answer the question.\n\nMeet my brother, Amir. He has got short fair hair. Amir is very active and loves sports.\n\nHe can play football very well, and he can swim fast. But he cannot dive into the deep pool. Amir has got twenty stickers in his album. He practises every Saturday!\n\nWhich statement is TRUE about Amir?",
      "options": ["A) He can swim fast.", "B) He hates sports.", "C) He has got long hair."],
      "ans": "A) He can swim fast."
    },
    {
      "type": "mcq",
      "q": "Read the passage and answer the question.\n\nMeet my brother, Amir. He has got short fair hair. Amir is very active and loves sports.\n\nHe can play football very well, and he can swim fast. But he cannot dive into the deep pool. Amir has got twenty stickers in his album. He practises every Saturday!\n\nWhat can we learn about Amir from his Saturday routine?",
      "options": ["A) He stays in bed all day.", "B) He is dedicated to improving his sports skills.", "C) He prefers drawing pictures."],
      "ans": "B) He is dedicated to improving his sports skills."
    }
  ],
  "Vocabulary_Grammar": [
    {
      "type": "mcq",
      "q": "My sister's hair is not straight. She has got ______ hair.",
      "options": ["A) blond", "B) short", "C) curly"],
      "ans": "C) curly"
    },
    {
      "type": "mcq",
      "q": "Light yellow hair is described as ______ hair.",
      "options": ["A) blond", "B) black", "C) dark"],
      "ans": "A) blond"
    },
    {
      "type": "mcq",
      "q": "Amir is a polite and good-looking boy. The word 'handsome' describes his ______.",
      "options": ["A) family", "B) appearance", "C) school"],
      "ans": "B) appearance"
    },
    {
      "type": "mcq",
      "q": "Farah studies in the same classroom as Mei Ling. Farah is Mei Ling's ______.",
      "options": ["A) classmate", "B) teacher", "C) sister"],
      "ans": "A) classmate"
    },
    {
      "type": "mcq",
      "q": "Sara walked along the beach and picked up forty colourful ______.",
      "options": ["A) books", "B) pencils", "C) shells"],
      "ans": "C) shells"
    },
    {
      "type": "mcq",
      "q": "Aina has got big brown ______ that help her see clearly.",
      "options": ["A) ears", "B) eyes", "C) hands"],
      "ans": "B) eyes"
    },
    {
      "type": "mcq",
      "q": "Aina wants to tie her hair because it is very ______.",
      "options": ["A) long", "B) short", "C) fair"],
      "ans": "A) long"
    },
    {
      "type": "mcq",
      "q": "\"Hello, my name is Hakim.\" Hakim wants to ______ himself to the class.",
      "options": ["A) collect", "B) swim", "C) introduce"],
      "ans": "C) introduce"
    },
    {
      "type": "mcq",
      "q": "Sara has got ______ hair that looks dark brown.",
      "options": ["A) dark", "B) blond", "C) fair"],
      "ans": "A) dark"
    },
    {
      "type": "mcq",
      "q": "Amir keeps all his sports stickers neatly inside an ______.",
      "options": ["A) basket", "B) album", "C) envelope"],
      "ans": "B) album"
    },
    {
      "type": "mcq",
      "q": "She ______ got long curly hair and brown eyes.",
      "options": ["A) has", "B) have", "C) is"],
      "ans": "A) has"
    },
    {
      "type": "mcq",
      "q": "They ______ got fifty shells in their baskets.",
      "options": ["A) has", "B) are", "C) have"],
      "ans": "C) have"
    },
    {
      "type": "mcq",
      "q": "______ you got any sports stickers in your album?",
      "options": ["A) Has", "B) Have", "C) Do"],
      "ans": "B) Have"
    },
    {
      "type": "mcq",
      "q": "Has Amir got short fair hair? Yes, he ______.",
      "options": ["A) has", "B) have", "C) can"],
      "ans": "A) has"
    },
    {
      "type": "mcq",
      "q": "Have they got brown eyes? No, they ______.",
      "options": ["A) hasn't", "B) can't", "C) haven't"],
      "ans": "C) haven't"
    },
    {
      "type": "mcq",
      "q": "Mei Ling is good at sports. She ______ swim fast.",
      "options": ["A) can't", "B) can", "C) has"],
      "ans": "B) can"
    },
    {
      "type": "mcq",
      "q": "Amir cannot dive into the pool, so he ______ dive.",
      "options": ["A) can't", "B) can", "C) hasn't"],
      "ans": "A) can't"
    },
    {
      "type": "mcq",
      "q": "______ she do karate? Yes, she can.",
      "options": ["A) Has", "B) Have", "C) Can"],
      "ans": "C) Can"
    },
    {
      "type": "mcq",
      "q": "My brother ______ got short straight hair.",
      "options": ["A) have", "B) has", "C) can"],
      "ans": "B) has"
    },
    {
      "type": "mcq",
      "q": "Have you ______ a new classmate in your school?",
      "options": ["A) got", "B) get", "C) getting"],
      "ans": "A) got"
    }
  ],
  "Writing_Speaking_MixedSkills": [
    {
      "type": "mcq",
      "q": "Choose the sentence with the correct punctuation and capital letters.",
      "options": ["A) she has got long curly hair.", "B) She has got long, curly hair.", "C) She has got long curly hair"],
      "ans": "B) She has got long, curly hair."
    },
    {
      "type": "mcq",
      "q": "Rearrange the words to make a correct sentence: [got / I / shells / have / forty]",
      "options": ["A) Forty shells I have got.", "B) I got have forty shells.", "C) I have got forty shells."],
      "ans": "C) I have got forty shells."
    },
    {
      "type": "mcq",
      "q": "Complete the sentence correctly: My best friend ________ big brown eyes.",
      "options": ["A) has got", "B) have got", "C) is got"],
      "ans": "A) has got"
    },
    {
      "type": "mcq",
      "q": "Choose the correct question.",
      "options": ["A) Can you play football?", "B) Can you plays football?", "C) You can play football?"],
      "ans": "A) Can you play football?"
    },
    {
      "type": "mcq",
      "q": "Rearrange the words to form a correct sentence: [cannot / He / dive / pool / into / the]",
      "options": ["A) He dive cannot into the pool.", "B) He cannot dive into the pool.", "C) Into the pool he dive cannot."],
      "ans": "B) He cannot dive into the pool."
    },
    {
      "type": "mcq",
      "q": "Choose the sentence with correct grammar.",
      "options": ["A) They has got short dark hair.", "B) They is got short dark hair.", "C) They have got short dark hair."],
      "ans": "C) They have got short dark hair."
    },
    {
      "type": "mcq",
      "q": "Complete the sentence: Amir can play football, but he ________ dive into the deep pool.",
      "options": ["A) cannot", "B) hasn't", "C) haven't"],
      "ans": "A) cannot"
    },
    {
      "type": "mcq",
      "q": "Choose the correct question form.",
      "options": ["A) Have he got fair hair?", "B) Has he got fair hair?", "C) Is he got fair hair?"],
      "ans": "B) Has he got fair hair?"
    },
    {
      "type": "mcq",
      "q": "How do you introduce your friend Aina to your classmate Sara?",
      "options": ["A) Sara, look at Aina now.", "B) Aina is standing there, Sara.", "C) Sara, this is my friend, Aina."],
      "ans": "C) Sara, this is my friend, Aina."
    },
    {
      "type": "mcq",
      "q": "How do you greet your teacher politely in the morning?",
      "options": ["A) Good morning, Puan Zarina.", "B) Good night, Puan Zarina.", "C) Goodbye, Puan Zarina."],
      "ans": "A) Good morning, Puan Zarina."
    },
    {
      "type": "mcq",
      "q": "Your classmate asks, 'Can you play football?' How do you answer if you know how to play?",
      "options": ["A) Yes, I have.", "B) Yes, I can.", "C) Yes, I am."],
      "ans": "B) Yes, I can."
    },
    {
      "type": "mcq",
      "q": "Your teacher asks, 'Have you got fifty shells?' How do you answer if you do NOT have them?",
      "options": ["A) No, I haven't.", "B) No, I can't.", "C) No, I don't."],
      "ans": "A) No, I haven't."
    },
    {
      "type": "mcq",
      "q": "How do you ask a new classmate if they know how to swim?",
      "options": ["A) Have you swim?", "B) Are you swim?", "C) Can you swim?"],
      "ans": "C) Can you swim?"
    },
    {
      "type": "mcq",
      "q": "How do you ask a friend if they have got a sticker album?",
      "options": ["A) Have you got a sticker album?", "B) Can you got a sticker album?", "C) Are you got a sticker album?"],
      "ans": "A) Have you got a sticker album?"
    },
    {
      "type": "mcq",
      "q": "Read the poster and answer the question.\n\n[SWIMMING CLASS]\nLearn to swim and dive with Coach Lee!\nEvery Saturday morning.\n\nWhat skills can you learn from Coach Lee?",
      "options": ["A) Playing football and basketball", "B) Swimming and diving", "C) Playing the piano and singing"],
      "ans": "B) Swimming and diving"
    },
    {
      "type": "mcq",
      "q": "Read the notice and answer the question.\n\n[STICKER CLUB]\nSwap your sports stickers with classmates!\nEvery Friday during recess.\n\nWhen can pupils swap their stickers?",
      "options": ["A) Every Friday during recess", "B) Every Monday morning", "C) Every Sunday afternoon"],
      "ans": "A) Every Friday during recess"
    },
    {
      "type": "mcq",
      "q": "Read the invitation card and answer the question.\n\n[YOU ARE INVITED!]\nSara's 9th Birthday Party\nDate: Saturday\nTime: 4.00 p.m.\n\nHow old is Sara turning?",
      "options": ["A) Seven years old", "B) Eight years old", "C) Nine years old"],
      "ans": "C) Nine years old"
    },
    {
      "type": "mcq",
      "q": "Read the label and answer the question.\n\n[COLLECTION ALBUM]\n40 Shells Collected by Sara\n\nWhat item is kept inside this album?",
      "options": ["A) Shells", "B) Stickers", "C) Pencils"],
      "ans": "A) Shells"
    },
    {
      "type": "mcq",
      "q": "Read the signboard and answer the question.\n\n[WARNING]\nDeep Water!\nNo Diving!\n\nWhat activity is NOT allowed in this area?",
      "options": ["A) Walking", "B) Diving", "C) Sitting"],
      "ans": "B) Diving"
    },
    {
      "type": "mcq",
      "q": "Read the note and answer the question.\n\n[PRACTICE SCHEDULE]\nAmir practises sports every Saturday.\n\nHow often does Amir practise?",
      "options": ["A) Every Sunday", "B) Every Friday", "C) Every Saturday"],
      "ans": "C) Every Saturday"
    }
  ]
};

// Menghubungkan soalan ke dalam kedua-dua set latihan
quizBank["GET SMART SET"]["Module 1: Welcome!"] = module1Data;
quizBank["REMEDIAL SET"]["Module 1: Welcome!"] = module1Data;
