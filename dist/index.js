// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// client/src/data/dohas.ts
var dohasData = [
  {
    id: "doha_1",
    hindi: "\u092C\u0941\u0930\u093E \u091C\u094B \u0926\u0947\u0916\u0928 \u092E\u0948\u0902 \u091A\u0932\u093E, \u092C\u0941\u0930\u093E \u0928 \u092E\u093F\u0932\u093F\u092F\u093E \u0915\u094B\u092F\u0964\n\u091C\u094B \u0926\u093F\u0932 \u0916\u094B\u091C\u093E \u0906\u092A\u0928\u093E, \u092E\u0941\u091D\u0938\u0947 \u092C\u0941\u0930\u093E \u0928 \u0915\u094B\u092F\u0965",
    transliteration: "Bura jo dekhan main chala, bura na miliya koye.\nJo dil khoja aapna, mujhse bura na koye.",
    translation: "When I set out to find the bad in others, I found none.\nBut when I searched within my own heart, I found no one worse than me.",
    moods: ["judgmental", "self-reflection", "humble", "contemplative"]
  },
  {
    id: "doha_2",
    hindi: "\u092E\u0928 \u0915\u0947 \u0939\u093E\u0930\u0947 \u0939\u093E\u0930 \u0939\u0948, \u092E\u0928 \u0915\u0947 \u091C\u0940\u0924\u0947 \u091C\u0940\u0924\u0964\n\u0915\u0939\u0947 \u0915\u092C\u0940\u0930 \u0917\u0941\u0930\u0941 \u090F\u0915 \u0915\u0940, \u092A\u0928\u0939\u0940 \u0938\u0947 \u092A\u0930\u0924\u0940\u0924\u0965",
    transliteration: "Man ke haare haar hai, man ke jeete jeet.\nKahe Kabir guru ek ki, panhi se parteet.",
    translation: "Defeat of the mind is defeat, victory of the mind is victory.\nSays Kabir, through faith in the one Guru, one attains recognition.",
    moods: ["restless", "seeking", "frustrated", "hopeful"]
  },
  {
    id: "doha_3",
    hindi: "\u0936\u093E\u0902\u0924\u093F \u0938\u0947 \u091C\u094B \u0926\u093F\u0932 \u092D\u0930\u093E, \u0909\u0938\u0915\u094B \u0915\u0939\u093E\u0901 \u0909\u0926\u093E\u0938\u0940\u0964\n\u0938\u0941\u0916 \u0926\u0941\u0903\u0916 \u0926\u094B\u0928\u094B\u0902 \u0924\u091C\u0915\u0930, \u092A\u093E\u0935\u0947 \u092A\u0930\u092E\u093E\u0928\u0902\u0926\u0940\u0965",
    transliteration: "Shanti se jo dil bhara, usko kahan udasi.\nSukh dukh dono tajkar, paave paramanandi.",
    translation: "A heart filled with peace knows no sorrow.\nAbandoning both joy and pain, one attains supreme bliss.",
    moods: ["peaceful", "content", "enlightened", "fulfilled"]
  },
  {
    id: "doha_4",
    hindi: "\u0939\u0902\u0938\u0940 \u0916\u0941\u0936\u0940 \u0938\u0947 \u091C\u094B \u0930\u0939\u0947, \u0938\u0926\u093E \u092A\u094D\u0930\u092D\u0941 \u0915\u0947 \u0938\u093E\u0925\u0964\n\u0915\u0939\u0947 \u0915\u092C\u0940\u0930 \u0935\u0939\u0940 \u091C\u0928, \u092A\u093E\u0935\u0947 \u0905\u092E\u0930\u093E \u092C\u093E\u091F\u0965",
    transliteration: "Hansi khushi se jo rahe, sada prabhu ke saath.\nKahe Kabir vahi jan, paave amara baat.",
    translation: "One who lives with laughter and joy, always with the divine.\nSays Kabir, such a person finds the path to immortality.",
    moods: ["joyful", "grateful", "loving", "devotional"]
  },
  {
    id: "doha_5",
    hindi: "\u092C\u093F\u0928 \u0918\u0928 \u092A\u0930\u0924 \u092B\u0941\u0939\u093E\u0930 \u0939\u0948, \u092C\u093F\u0928 \u0917\u0941\u0930\u0941 \u092A\u0930\u0924 \u0928 \u091C\u094D\u091E\u093E\u0928\u0964\n\u0915\u092C\u0940\u0930 \u0924\u092C \u092A\u0930\u093F\u092F\u0947 \u092C\u093F\u0930\u0939 \u0915\u093E, \u0926\u0941\u0938\u0930\u093E \u0928 \u0915\u094B\u0908 \u0920\u093E\u0928\u0965",
    transliteration: "Bin ghan parat fuhar hai, bin guru parat na gyan.\nKabir tab pariye biraha ka, dusra na koi thaan.",
    translation: "Just as rain falls without clouds, knowledge doesn't come without a guru.\nKabir says, then embrace the pain of separation, there is no other way.",
    moods: ["restless", "seeking", "yearning", "confused"]
  },
  {
    id: "doha_6",
    hindi: "\u0915\u093E\u0932 \u0915\u0930\u0947 \u0938\u094B \u0906\u091C \u0915\u0930, \u0906\u091C \u0915\u0930\u0947 \u0938\u094B \u0905\u092C\u0964\n\u092A\u0932 \u092E\u0947\u0902 \u092A\u0930\u0932\u092F \u0939\u094B\u090F\u0917\u0940, \u092C\u0939\u0941\u0930\u093F \u0915\u0930\u0947\u0917\u093E \u0915\u092C\u0965",
    transliteration: "Kaal kare so aaj kar, aaj kare so ab.\nPal mein parlay hoegi, bahuri karega kab.",
    translation: "What you plan to do tomorrow, do today; what you plan to do today, do now.\nDestruction can happen in a moment, when will you do it again?",
    moods: ["anxious", "reflective", "awakening", "urgent"]
  },
  {
    id: "doha_7",
    hindi: "\u0926\u0941\u0903\u0916 \u092E\u0947\u0902 \u0938\u0941\u092E\u093F\u0930\u0928 \u0938\u092C \u0915\u0930\u0947, \u0938\u0941\u0916 \u092E\u0947\u0902 \u0915\u0930\u0947 \u0928 \u0915\u094B\u092F\u0964\n\u091C\u094B \u0938\u0941\u0916 \u092E\u0947\u0902 \u0938\u0941\u092E\u093F\u0930\u0928 \u0915\u0930\u0947, \u0924\u094B \u0926\u0941\u0903\u0916 \u0915\u093E\u0939\u0947 \u0915\u094B \u0939\u094B\u092F\u0965",
    transliteration: "Dukh mein sumiran sab kare, sukh mein kare na koye.\nJo sukh mein sumiran kare, to dukh kahe ko hoye.",
    translation: "Everyone remembers God in sorrow, none do so in happiness.\nIf one remembers God in happiness, why would sorrow ever come?",
    moods: ["grateful", "wise", "contemplative", "devotional"]
  },
  {
    id: "doha_8",
    hindi: "\u092E\u093E\u0932\u093E \u092B\u0947\u0930\u0924 \u091C\u0941\u0917 \u092D\u092F\u093E, \u092B\u093F\u0930\u093E \u0928 \u092E\u0928 \u0915\u093E \u092B\u0947\u0930\u0964\n\u0915\u0930 \u0915\u093E \u092E\u0928\u0915\u093E \u0921\u093E\u0930 \u0926\u0947, \u092E\u0928 \u0915\u093E \u092E\u0928\u0915\u093E \u092B\u0947\u0930\u0965",
    transliteration: "Mala pherat jug bhaya, phira na man ka pher.\nKar ka manka daar de, man ka manka pher.",
    translation: "Ages have passed turning prayer beads, but the mind's wandering hasn't stopped.\nThrow away the beads in your hand, and turn the beads of your mind instead.",
    moods: ["frustrated", "seeking", "questioning", "wise"]
  },
  {
    id: "doha_9",
    hindi: "\u0917\u0941\u0930\u0941 \u0917\u094B\u0935\u093F\u0928\u094D\u0926 \u0926\u094B\u090A \u0916\u0921\u093C\u0947, \u0915\u093E\u0915\u0947 \u0932\u093E\u0917\u0942\u0902 \u092A\u093E\u0901\u092F\u0964\n\u092C\u0932\u093F\u0939\u093E\u0930\u0940 \u0917\u0941\u0930\u0941 \u0906\u092A\u0928\u0947, \u0917\u094B\u0935\u093F\u0928\u094D\u0926 \u0926\u093F\u092F\u094B \u092C\u0924\u093E\u092F\u0965",
    transliteration: "Guru govind dou khade, kaake laagoon paanv.\nBalihari guru aapne, govind diyo bataay.",
    translation: "When both Guru and God stand before me, whose feet should I touch first?\nI bow to my Guru first, who showed me the way to God.",
    moods: ["grateful", "devoted", "humble", "wise"]
  },
  {
    id: "doha_10",
    hindi: "\u0938\u0941\u0916\u093F\u092F\u093E \u0938\u092C \u0938\u0902\u0938\u093E\u0930 \u0939\u0948, \u0916\u093E\u0935\u0948 \u0905\u0930 \u0938\u094B\u0935\u0948\u0964\n\u0926\u0941\u0916\u093F\u092F\u093E \u0926\u093E\u0938 \u0915\u092C\u0940\u0930 \u0939\u0948, \u091C\u093E\u0917\u0948 \u0905\u0930 \u0930\u094B\u0935\u0948\u0965",
    transliteration: "Sukhiya sab sansaar hai, khaavai ar sovai.\nDukhiya daas Kabir hai, jaagai ar rovai.",
    translation: "The whole world is happy, eating and sleeping.\nOnly Kabir's devotee is sorrowful, staying awake and weeping (for the divine).",
    moods: ["melancholic", "yearning", "seeking", "devoted"]
  },
  {
    id: "doha_11",
    hindi: "\u092A\u094B\u0925\u0940 \u092A\u0922\u093C\u093F \u092A\u0922\u093C\u093F \u091C\u0917 \u092E\u0941\u0906, \u092A\u0902\u0921\u093F\u0924 \u092D\u092F\u093E \u0928 \u0915\u094B\u092F\u0964\n\u0922\u093E\u0908 \u0906\u0916\u0930 \u092A\u094D\u0930\u0947\u092E \u0915\u093E, \u092A\u0922\u093C\u0947 \u0938\u094B \u092A\u0902\u0921\u093F\u0924 \u0939\u094B\u092F\u0965",
    transliteration: "Pothi padhi padhi jag mua, pandit bhaya na koye.\nDhaai aakhar prem ka, padhe so pandit hoye.",
    translation: "Reading books, the whole world died, but none became truly learned.\nWhoever reads the two and a half letters of 'love' becomes truly wise.",
    moods: ["wise", "loving", "enlightened", "questioning"]
  },
  {
    id: "doha_12",
    hindi: "\u0928\u093F\u0902\u0926\u0915 \u0928\u093F\u092F\u0930\u0947 \u0930\u093E\u0916\u093F\u090F, \u0906\u0902\u0917\u0928 \u0915\u0941\u091F\u0940 \u091B\u0935\u093E\u092F\u0964\n\u092C\u093F\u0928 \u092A\u093E\u0928\u0940, \u0938\u093E\u092C\u0941\u0928 \u092C\u093F\u0928\u093E, \u0928\u093F\u0930\u094D\u092E\u0932 \u0915\u0930\u0947 \u0938\u0941\u092D\u093E\u092F\u0965",
    transliteration: "Nindak niyare raakhiye, aangan kuti chhawaay.\nBin paani, saabun bina, nirmal kare subhaay.",
    translation: "Keep your critic close by, build them a hut in your courtyard.\nWithout water or soap, they will cleanse your character.",
    moods: ["wise", "humble", "patient", "accepting"]
  },
  {
    id: "doha_13",
    hindi: "\u091C\u093E\u0924\u093F \u0928 \u092A\u0942\u091B\u094B \u0938\u093E\u0927\u0941 \u0915\u0940, \u092A\u0942\u091B \u0932\u0940\u091C\u093F\u092F\u0947 \u091C\u094D\u091E\u093E\u0928\u0964\n\u092E\u094B\u0932 \u0915\u0930\u094B \u0924\u0930\u0935\u093E\u0930 \u0915\u093E, \u092A\u0921\u093C\u093E \u0930\u0939\u0928 \u0926\u094B \u092E\u094D\u092F\u093E\u0928\u0965",
    transliteration: "Jaati na poocho saadhu ki, pooch leejiye gyaan.\nMol karo tarawaar ka, pada rahan do myaan.",
    translation: "Don't ask about a saint's caste, ask about their wisdom.\nValue the sword, let the sheath remain aside.",
    moods: ["wise", "questioning", "enlightened", "compassionate"]
  },
  {
    id: "doha_14",
    hindi: "\u0932\u0942\u091F \u0938\u0915\u0947 \u0924\u094B \u0932\u0942\u091F \u0932\u0947, \u0930\u093E\u092E \u0928\u093E\u092E \u0915\u0940 \u0932\u0942\u091F\u0964\n\u092A\u093E\u091B\u0947 \u092B\u093F\u0930 \u092A\u091B\u0924\u093E\u090F\u0917\u093E, \u092A\u094D\u0930\u093E\u0923 \u091C\u093E\u0939\u093F\u0902 \u091C\u092C \u091B\u0942\u091F\u0965",
    transliteration: "Loot sake to loot le, raam naam ki loot.\nPaache phir pachhataega, praan jahin jab chhoot.",
    translation: "Plunder while you can, plunder the wealth of God's name.\nLater you will regret when life leaves the body.",
    moods: ["urgent", "awakening", "regretful", "seeking"]
  },
  {
    id: "doha_15",
    hindi: "\u0915\u0939\u0948 \u0915\u092C\u0940\u0930 \u0926\u0947\u092F \u0924\u0942, \u091C\u092C \u0932\u0917 \u0924\u0947\u0930\u0940 \u0926\u0947\u0939\u0964\n\u0926\u0947\u0939 \u0916\u0947\u0939 \u0939\u094B\u092F \u091C\u093E\u090F\u0917\u0940, \u0915\u094C\u0928 \u0915\u0939\u0947\u0917\u093E \u0926\u0947\u0939\u0965",
    transliteration: "Kahai Kabir dey tu, jab lag teri deh.\nDeh kheh hoye jaegi, kaun kahega deh.",
    translation: "Says Kabir, give while you have this body.\nWhen the body turns to dust, who will call it a body?",
    moods: ["contemplative", "wise", "generous", "mortal"]
  },
  {
    id: "doha_16",
    hindi: "\u0915\u092C\u0940\u0930\u093E \u0916\u0921\u093C\u093E \u092C\u093E\u091C\u093C\u093E\u0930 \u092E\u0947\u0902, \u092E\u093E\u0902\u0917\u0947 \u0938\u092C\u0915\u0940 \u0916\u0948\u0930\u0964\n\u0928\u093E \u0915\u093E\u0939\u0942 \u0938\u0947 \u0926\u094B\u0938\u094D\u0924\u0940, \u0928 \u0915\u093E\u0939\u0942 \u0938\u0947 \u092C\u0948\u0930\u0965",
    transliteration: "Kabeera khada baazaar mein, maange sabki khair.\nNa kaahu se dosti, na kaahu se bair.",
    translation: "Kabir stands in the marketplace, wishing well for everyone.\nNeither friendship with anyone, nor enmity with anyone.",
    moods: ["compassionate", "peaceful", "detached", "loving"]
  },
  {
    id: "doha_17",
    hindi: "\u0906\u0935\u0924 \u0917\u093E\u0930\u0940 \u090F\u0915 \u0939\u0948, \u0909\u0932\u091F\u0924 \u0939\u094B\u092F \u0905\u0928\u0947\u0915\u0964\n\u0915\u0939 \u0915\u092C\u0940\u0930 \u0928\u0939\u093F\u0902 \u0909\u0932\u091F\u093F\u090F, \u0935\u0939\u0940 \u090F\u0915 \u0915\u0940 \u090F\u0915\u0965",
    transliteration: "Aavat gaari ek hai, ultat hoye anek.\nKah Kabir nahin ultiye, vahi ek ki ek.",
    translation: "When abuse comes, it's just one, but when returned, it becomes many.\nSays Kabir, don't return it, let it remain just one.",
    moods: ["patient", "wise", "peaceful", "forgiving"]
  },
  {
    id: "doha_18",
    hindi: "\u0927\u0940\u0930\u0947-\u0927\u0940\u0930\u0947 \u0930\u0947 \u092E\u0928\u093E, \u0927\u0940\u0930\u0947 \u0938\u092C \u0915\u0941\u091B \u0939\u094B\u092F\u0964\n\u092E\u093E\u0932\u0940 \u0938\u0940\u0902\u091A\u0947 \u0938\u094C \u0918\u0921\u093C\u093E, \u090B\u0924\u0941 \u0906\u090F \u092B\u0932 \u0939\u094B\u092F\u0965",
    transliteration: "Dheere-dheere re mana, dheere sab kuch hoye.\nMaali seeche sau ghada, ritu aae phal hoye.",
    translation: "Slowly, slowly, O mind, everything happens slowly.\nThe gardener may water a hundred pots, but fruit comes only in its season.",
    moods: ["patient", "peaceful", "wise", "accepting"]
  },
  {
    id: "doha_19",
    hindi: "\u0924\u093F\u0928\u0915\u093E \u0915\u092C\u0939\u0941\u0901 \u0928\u093E \u0928\u093F\u0902\u0926\u093F\u092F\u0947, \u091C\u094B \u092A\u093E\u0901\u092F\u0928 \u0924\u0930 \u0939\u094B\u092F\u0964\n\u0915\u092C\u0939\u0941\u0901 \u0909\u0921\u093C\u093F \u0906\u0901\u0916\u093F\u0928 \u092A\u0921\u093C\u0947, \u0924\u094B \u092A\u0940\u0930 \u0918\u0928\u0947\u0930\u0940 \u0939\u094B\u092F\u0965",
    transliteration: "Tinka kabahun na nindiye, jo paanyan tar hoye.\nKabahun udi aankhain pade, to peer ghaneri hoye.",
    translation: "Never despise a tiny straw that lies under your feet.\nIf it flies and gets in your eye, it causes great pain.",
    moods: ["humble", "wise", "respectful", "cautious"]
  },
  {
    id: "doha_20",
    hindi: "\u091C\u092C \u092E\u0948\u0902 \u0925\u093E \u0924\u092C \u0939\u0930\u093F \u0928\u0939\u0940\u0902, \u0905\u092C \u0939\u0930\u093F \u0939\u0948\u0902 \u092E\u0948\u0902 \u0928\u093E\u0939\u093F\u0902\u0964\n\u092A\u094D\u0930\u0947\u092E \u0917\u0932\u0940 \u0905\u0924\u093F \u0938\u093E\u0902\u0915\u0930\u0940, \u0924\u093E\u092E\u0947\u0902 \u0926\u094B \u0928 \u0938\u092E\u093E\u0939\u093F\u0902\u0965",
    transliteration: "Jab main tha tab hari nahin, ab hari hain main naahin.\nPrem gali ati saankari, taamein do na samahin.",
    translation: "When I existed, God was not there; now that God is here, I am not.\nThe lane of love is very narrow, two cannot fit in it.",
    moods: ["enlightened", "devoted", "surrendered", "mystical"]
  },
  {
    id: "doha_21",
    hindi: "\u0938\u093E\u0908\u0902 \u0907\u0924\u0928\u093E \u0926\u0940\u091C\u093F\u092F\u0947, \u091C\u093E \u092E\u0947 \u0915\u0941\u091F\u0941\u092E \u0938\u092E\u093E\u092F\u0964\n\u092E\u0948\u0902 \u092D\u0940 \u092D\u0942\u0916\u093E \u0928 \u0930\u0939\u0942\u0901, \u0938\u093E\u0927\u0941 \u0928\u093E \u092D\u0942\u0916\u093E \u091C\u093E\u092F\u0965",
    transliteration: "Saayin itna deejiye, ja me kutum samay.\nMain bhi bhookha na rahun, saadhu na bhookha jaay.",
    translation: "O Lord, give me only this much, that my family can fit in.\nThat I don't remain hungry, and no saint goes hungry from my door.",
    moods: ["content", "generous", "simple", "grateful"]
  },
  {
    id: "doha_22",
    hindi: "\u0926\u0941\u0930\u094D\u0932\u092D \u092E\u093E\u0928\u0941\u0937 \u091C\u0928\u094D\u092E \u0939\u0948, \u0926\u0947\u0939 \u0928 \u092C\u093E\u0930\u092E\u094D\u092C\u093E\u0930\u0964\n\u0924\u0930\u0941\u0935\u0930 \u091C\u094D\u092F\u094B\u0902 \u092A\u0924\u094D\u0924\u0940 \u091D\u0921\u093C\u0947, \u092C\u0939\u0941\u0930\u093F \u0928 \u0932\u093E\u0917\u0947 \u0921\u093E\u0930\u0965",
    transliteration: "Durlabh maanush janma hai, deha na baarambaar.\nTaruvar jyon patti jhade, bahuri na laage daar.",
    translation: "Human birth is rare, the body doesn't come again and again.\nLike leaves that fall from a tree, they don't stick back to the branch.",
    moods: ["contemplative", "urgent", "mortal", "awakening"]
  },
  {
    id: "doha_23",
    hindi: "\u0915\u0938\u094D\u0924\u0942\u0930\u0940 \u0915\u0941\u0902\u0921\u0932 \u092C\u0938\u0948, \u092E\u0943\u0917 \u0922\u0942\u0902\u0922\u0947 \u092C\u0928 \u092E\u093E\u0939\u093F\u0964\n\u0910\u0938\u0947 \u0918\u091F\u093F \u0918\u091F\u093F \u0930\u093E\u092E \u0939\u0948, \u0926\u0941\u0928\u093F\u092F\u093E \u0926\u0947\u0916\u0947 \u0928\u093E\u0939\u093F\u0965",
    transliteration: "Kasturi kundal basai, mrig dhoodhe ban maahi.\nAise ghati ghati raam hai, duniya dekhe naahi.",
    translation: "The musk deer has musk in its own navel, but searches for it in the forest.\nSimilarly, God resides in every heart, but the world doesn't see.",
    moods: ["seeking", "confused", "enlightened", "mystical"]
  },
  {
    id: "doha_24",
    hindi: "\u0939\u092E \u0918\u0930 \u091C\u093E\u0932\u094D\u092F\u093E \u0906\u092A\u0923\u093E, \u0932\u093F\u092F\u093E \u092E\u0941\u0930\u093E\u0921\u093C\u093E \u0939\u093E\u0925\u0964\n\u0905\u092C \u0918\u0930 \u091C\u093E\u0932\u0942\u0902 \u0924\u093E\u0938 \u0915\u093E, \u091C\u0947 \u091A\u0932\u0948 \u0939\u092E\u093E\u0930\u0947 \u0938\u093E\u0925\u0965",
    transliteration: "Ham ghar jaalya aapna, liya muraada haath.\nAb ghar jaalu taas ka, je chalai hamaare saath.",
    translation: "I burned down my own house, taking a torch in hand.\nNow I'll burn down the house of anyone who walks with me.",
    moods: ["revolutionary", "passionate", "destructive", "transformative"]
  },
  {
    id: "doha_25",
    hindi: "\u0930\u093E\u092E \u0928\u093E\u092E \u0915\u0940 \u0932\u0942\u091F \u0939\u0948, \u0932\u0942\u091F \u0938\u0915\u0947 \u0938\u094B \u0932\u0942\u091F\u0964\n\u0915\u0941\u091B \u0926\u093F\u0928 \u092E\u0947\u0902 \u092A\u093E\u091B\u0947 \u092B\u093F\u0930\u0942\u0902, \u0935\u0939\u0940 \u092E\u093F\u0932\u0947\u0917\u0940 \u0938\u0942\u0924\u0965",
    transliteration: "Raam naam ki loot hai, loot sake so loot.\nKuch din mein paache phirun, vahi milegi soot.",
    translation: "There's a plunder of God's name available, whoever can plunder should plunder.\nIn a few days when I return, only emptiness will be found.",
    moods: ["urgent", "opportunistic", "spiritual", "awakening"]
  },
  {
    id: "doha_26",
    hindi: "\u0938\u092C \u0927\u0930\u0924\u0940 \u0915\u093E\u0917\u0926 \u0915\u0930\u0942\u0902, \u0932\u0947\u0916\u0928\u0940 \u0938\u092C \u092C\u0928\u0930\u093E\u092F\u0964\n\u0938\u093E\u0924 \u0938\u092E\u0941\u0926\u094D\u0930 \u0915\u0940 \u092E\u0938\u093F \u0915\u0930\u0942\u0902, \u0917\u0941\u0930\u0941 \u0917\u0941\u0923 \u0932\u093F\u0916\u093E \u0928 \u091C\u093E\u092F\u0965",
    transliteration: "Sab dharti kaagad karun, lekhani sab banraay.\nSaat samudra ki masi karun, guru gun likha na jaay.",
    translation: "If I make all the earth my paper, and all the forests my pens,\nAnd make the seven seas my ink, still the Guru's qualities cannot be written.",
    moods: ["grateful", "devoted", "humble", "overwhelmed"]
  },
  {
    id: "doha_27",
    hindi: "\u0905\u0924\u093F \u0915\u093E \u092D\u0932\u093E \u0928 \u092C\u094B\u0932\u0928\u093E, \u0905\u0924\u093F \u0915\u0940 \u092D\u0932\u0940 \u0928 \u091A\u0942\u092A\u0964\n\u0905\u0924\u093F \u0915\u093E \u092D\u0932\u093E \u0928 \u092C\u0930\u0938\u0928\u093E, \u0905\u0924\u093F \u0915\u0940 \u092D\u0932\u0940 \u0928 \u0927\u0942\u092A\u0965",
    transliteration: "Ati ka bhala na bolna, ati ki bhali na choop.\nAti ka bhala na barasna, ati ki bhali na dhoop.",
    translation: "Too much talking is not good, too much silence is not good either.\nToo much rain is not good, too much sun is not good either.",
    moods: ["wise", "balanced", "moderate", "practical"]
  },
  {
    id: "doha_28",
    hindi: "\u0915\u093E\u0902\u0915\u0930 \u092A\u093E\u0925\u0930 \u091C\u094B\u0930\u093F \u0915\u0947, \u092E\u0938\u091C\u093F\u0926 \u0932\u0908 \u091A\u0941\u0928\u093E\u092F\u0964\n\u0924\u093E \u091A\u0922\u093F \u092E\u0941\u0932\u094D\u0932\u093E \u092C\u093E\u0902\u0917 \u0926\u0947, \u092C\u0939\u0930\u093E \u0939\u0941\u0906 \u0916\u0941\u0926\u093E\u092F\u0965",
    transliteration: "Kaankar paathar jori ke, masjid lai chunaay.\nTa chadhi mulla baang de, bahra hua khudaay.",
    translation: "Gathering stones and rocks, they built a mosque.\nThe mullah climbs on it to call for prayer - has God become deaf?",
    moods: ["questioning", "critical", "rebellious", "spiritual"]
  },
  {
    id: "doha_29",
    hindi: "\u092C\u0921\u093C\u093E \u0939\u0941\u0906 \u0924\u094B \u0915\u094D\u092F\u093E \u0939\u0941\u0906, \u091C\u0948\u0938\u0947 \u092A\u0947\u0921\u093C \u0916\u091C\u0942\u0930\u0964\n\u092A\u0902\u0925\u0940 \u0915\u094B \u091B\u093E\u092F\u093E \u0928\u0939\u0940\u0902, \u092B\u0932 \u0932\u093E\u0917\u0947 \u0905\u0924\u093F \u0926\u0942\u0930\u0965",
    transliteration: "Bada hua to kya hua, jaise ped khajoor.\nPanthi ko chhaaya nahin, phal laage ati door.",
    translation: "What's the use of being tall, like a date palm tree?\nIt gives no shade to the traveler, and its fruit hangs too high.",
    moods: ["humble", "practical", "critical", "wise"]
  },
  {
    id: "doha_30",
    hindi: "\u091A\u0932\u0924\u0940 \u091A\u0915\u094D\u0915\u0940 \u0926\u0947\u0916 \u0915\u0930, \u0926\u093F\u092F\u093E \u0915\u092C\u0940\u0930\u093E \u0930\u094B\u092F\u0964\n\u0926\u094B \u092A\u093E\u091F\u0928 \u0915\u0947 \u092C\u0940\u091A \u092E\u0947\u0902, \u0938\u093E\u092C\u0941\u0924 \u092C\u091A\u093E \u0928 \u0915\u094B\u092F\u0965",
    transliteration: "Chalti chakki dekh kar, diya Kabeera roye.\nDo paatan ke beech mein, saabut bacha na koye.",
    translation: "Seeing the grinding mill turn, Kabir wept.\nBetween the two grinding stones, nothing remains whole.",
    moods: ["compassionate", "sorrowful", "philosophical", "empathetic"]
  },
  {
    id: "doha_31",
    hindi: "\u092E\u093E\u092F\u093E \u092E\u0930\u0940 \u0928 \u092E\u0928 \u092E\u0930\u093E, \u092E\u0930 \u092E\u0930 \u0917\u090F \u0936\u0930\u0940\u0930\u0964\n\u0906\u0936\u093E \u0924\u0943\u0937\u094D\u0923\u093E \u0928 \u092E\u0930\u0940, \u0915\u0939 \u0917\u090F \u0926\u093E\u0938 \u0915\u092C\u0940\u0930\u0965",
    transliteration: "Maya mari na man mara, mar mar gaye shareer.\nAasha trishna na mari, kah gaye daas Kabir.",
    translation: "Neither illusion died nor the mind died, only the body perished again and again.\nDesire and thirst never died, says the servant Kabir.",
    moods: ["frustrated", "philosophical", "awakening", "seeking"]
  },
  {
    id: "doha_32",
    hindi: "\u092C\u094B\u0932\u0940 \u090F\u0915 \u0905\u0928\u092E\u094B\u0932 \u0939\u0948, \u091C\u094B \u0915\u094B\u0908 \u092C\u094B\u0932\u0948 \u091C\u093E\u0928\u093F\u0964\n\u0939\u093F\u092F\u0947 \u0924\u0930\u093E\u091C\u0942 \u0924\u094C\u0932\u093F \u0915\u0947, \u0924\u092C \u092E\u0941\u0916 \u092C\u093E\u0939\u0930 \u0906\u0928\u093F\u0965",
    transliteration: "Boli ek anmol hai, jo koi bolai jaani.\nHiye taraaju tauli ke, tab mukh baahar aani.",
    translation: "Speech is priceless, if one knows how to speak.\nWeigh it on the scale of the heart, then let it come out of the mouth.",
    moods: ["wise", "thoughtful", "careful", "contemplative"]
  },
  {
    id: "doha_33",
    hindi: "\u0915\u092C\u0940\u0930\u093E \u0917\u0930\u094D\u0935 \u0928 \u0915\u0940\u091C\u093F\u092F\u0947, \u090A\u0902\u091A\u093E \u0926\u0947\u0916\u093F \u0905\u0935\u093E\u0938\u0964\n\u0915\u093E\u0932 \u092A\u0930\u0948 \u092D\u0941\u0907\u0902 \u0932\u0947\u091F\u0928\u093E, \u090A\u092A\u0930\u093F \u091C\u092E\u0938\u0940 \u0918\u093E\u0938\u0965",
    transliteration: "Kabeera garva na keejiye, ooncha dekhi avaasa.\nKaal parai bhuin letna, oopari jamsi ghaasa.",
    translation: "Kabir, don't be proud seeing your high dwelling.\nTomorrow you'll lie on the ground, and grass will grow above.",
    moods: ["humble", "mortal", "realistic", "contemplative"]
  },
  {
    id: "doha_34",
    hindi: "\u091C\u0939\u093E\u0901 \u0926\u092F\u093E \u0924\u0939\u093E\u0901 \u0927\u0930\u094D\u092E \u0939\u0948, \u091C\u0939\u093E\u0901 \u0932\u094B\u092D \u0924\u0939\u093E\u0901 \u092A\u093E\u092A\u0964\n\u091C\u0939\u093E\u0901 \u0915\u094D\u0930\u094B\u0927 \u0924\u0939\u093E\u0901 \u0915\u093E\u0932 \u0939\u0948, \u091C\u0939\u093E\u0901 \u0915\u094D\u0937\u092E\u093E \u0924\u0939\u093E\u0901 \u0906\u092A\u0965",
    transliteration: "Jahan daya tahan dharma hai, jahan lobha tahan paapa.\nJahan krodha tahan kaala hai, jahan kshama tahan aapa.",
    translation: "Where there is compassion, there is righteousness; where greed, there is sin.\nWhere there is anger, there is death; where forgiveness, there is the divine self.",
    moods: ["wise", "compassionate", "forgiving", "enlightened"]
  },
  {
    id: "doha_35",
    hindi: "\u0905\u0902\u0927\u093E \u0939\u0941\u0906 \u0938\u094B \u0905\u0902\u0927 \u0939\u0948, \u0910\u0938\u093E \u0924\u094B \u0938\u092D \u0915\u094B\u092F\u0964\n\u0915\u0939\u0948 \u0915\u092C\u0940\u0930 \u0906\u0902\u0916 \u0935\u093E\u0932\u0947, \u092F\u0947 \u092D\u0940 \u0905\u0902\u0927\u0947 \u0939\u094B\u092F\u0965",
    transliteration: "Andha hua so andha hai, aisa to sabh koye.\nKahai Kabir aankh waale, ye bhi andhe hoye.",
    translation: "A blind person is blind, that everyone knows.\nSays Kabir, even those with eyes are blind too.",
    moods: ["wise", "critical", "awakening", "questioning"]
  },
  {
    id: "doha_36",
    hindi: "\u0915\u092C\u0940\u0930 \u0938\u094B\u0908 \u092A\u0940\u0930 \u0939\u0948, \u091C\u094B \u091C\u093E\u0928\u0947 \u092A\u0930 \u092A\u0940\u0930\u0964\n\u091C\u094B \u092A\u0930 \u092A\u0940\u0930 \u0928 \u091C\u093E\u0928\u0939\u0940, \u0938\u094B \u0915\u093E\u092B\u093F\u0930 \u092C\u0947\u092A\u0940\u0930\u0965",
    transliteration: "Kabir soi peer hai, jo jaane par peer.\nJo par peer na jaanhi, so kaafir bepeer.",
    translation: "Kabir says, only that person is a saint who understands others' pain.\nOne who doesn't understand others' pain is heartless and faithless.",
    moods: ["compassionate", "empathetic", "wise", "caring"]
  },
  {
    id: "doha_37",
    hindi: "\u091C\u0917 \u092E\u0947\u0902 \u092C\u0948\u0930\u0940 \u0915\u094B\u0908 \u0928\u0939\u0940\u0902, \u091C\u094B \u092E\u0928 \u0936\u0940\u0924\u0932 \u0939\u094B\u092F\u0964\n\u092F\u093E \u0906\u092A\u093E \u0915\u094B \u0921\u093E\u0930\u093F \u0926\u0947, \u0926\u092F\u093E \u0915\u0930\u0948 \u0938\u092C \u0915\u094B\u092F\u0965",
    transliteration: "Jaga mein bairi koi nahin, jo man sheetal hoye.\nYa aapa ko daari de, daya karai sab koye.",
    translation: "There is no enemy in the world, if the mind becomes cool.\nAbandon this ego, and everyone will show compassion.",
    moods: ["peaceful", "forgiving", "humble", "loving"]
  },
  {
    id: "doha_38",
    hindi: "\u0938\u0941\u0916 \u0926\u0941\u0903\u0916 \u0926\u094B\u0928\u094B\u0902 \u090F\u0915 \u0938\u092E, \u091C\u093E\u0928\u0947 \u091C\u094D\u091E\u093E\u0928\u0940 \u0939\u094B\u092F\u0964\n\u0924\u093F\u0928\u0915\u094B \u0928\u093F\u0915\u091F \u0928 \u091C\u093E\u0907\u092F\u0947, \u091C\u094B \u0915\u0939\u0924\u0947 \u0915\u0941\u091B \u0914\u0930\u0965",
    transliteration: "Sukh dukh dono ek sama, jaane gyaani hoye.\nTinko nikat na jaaiye, jo kahte kuchh aura.",
    translation: "One who sees joy and sorrow as equal becomes wise.\nDon't go near those who say one thing but mean another.",
    moods: ["wise", "balanced", "enlightened", "cautious"]
  },
  {
    id: "doha_39",
    hindi: "\u0915\u092C\u0940\u0930\u093E \u0924\u0947 \u0928\u0930 \u0905\u0902\u0927 \u0939\u0948\u0902, \u0917\u0941\u0930\u0941 \u0915\u094B \u0915\u0939\u0924\u0947 \u0914\u0930\u0964\n\u0939\u0930\u093F \u0930\u0942\u0920\u0947 \u0917\u0941\u0930\u0941 \u0920\u094C\u0930 \u0939\u0948, \u0917\u0941\u0930\u0941 \u0930\u0942\u0920\u0947 \u0928\u0939\u0940\u0902 \u0920\u094C\u0930\u0965",
    transliteration: "Kabeera te nara andha hain, guru ko kahte aura.\nHari ruthe guru thaura hai, guru ruthe nahin thaura.",
    translation: "Kabir says, those people are blind who consider the guru as ordinary.\nIf God is angry, the guru is the refuge; if guru is angry, there is no refuge.",
    moods: ["devoted", "grateful", "wise", "humble"]
  },
  {
    id: "doha_40",
    hindi: "\u092A\u0939\u0932\u0947 \u0936\u092C\u094D\u0926 \u092C\u093F\u091A\u093E\u0930\u093F \u0915\u0947, \u092A\u0940\u091B\u0947 \u0915\u0930\u0928\u0940 \u0915\u0930\u093F\u0964\n\u092F\u0947 \u0915\u0939\u0948\u0902 \u0938\u0928\u094D\u0924 \u0915\u092C\u0940\u0930 \u091C\u0940, \u0938\u092C\u0938\u0947 \u092E\u093F\u0932\u093F\u092F\u094B \u0918\u0930\u093F\u0965",
    transliteration: "Pahle shabda bichaari ke, peeche karni kari.\nYe kahain sant Kabir ji, sabse miliyo ghari.",
    translation: "First consider your words carefully, then act accordingly.\nSaint Kabir says, meet everyone with love in your heart.",
    moods: ["wise", "thoughtful", "loving", "careful"]
  },
  {
    id: "doha_41",
    hindi: "\u0906\u092F\u093E \u0925\u093E \u0915\u093F\u0938 \u0915\u093E\u092E \u0915\u094B, \u0924\u0942 \u092D\u0942\u0932 \u0917\u092F\u093E \u092D\u093E\u0908\u0964\n\u0938\u094B\u0928\u093E \u091A\u093E\u0902\u0926\u0940 \u092E\u093E\u092F\u093E \u092E\u0947\u0902, \u0905\u092A\u0928\u093E \u0906\u092A \u0917\u0902\u0935\u093E\u0908\u0965",
    transliteration: "Aaya tha kis kaam ko, tu bhool gaya bhaai.\nSona chaandi maya mein, apna aapa ganvaai.",
    translation: "What purpose did you come for, brother, you have forgotten.\nIn gold, silver and illusion, you have lost your true self.",
    moods: ["awakening", "lost", "forgetful", "seeking"]
  },
  {
    id: "doha_42",
    hindi: "\u0930\u093E\u092E \u0917\u092F\u0947, \u0930\u093E\u0935\u0923 \u0917\u092F\u0947, \u0917\u092F\u0947 \u091C\u094B \u0915\u094C\u0930\u0935 \u092A\u093E\u0902\u0921\u0935\u0964\n\u0915\u094B\u0908 \u092F\u0939\u093E\u0901 \u091F\u093F\u0915\u093E \u0928\u0939\u0940\u0902, \u0938\u092C \u0917\u092F\u0947 \u0917\u0921\u093C\u0917\u0921\u093C\u093E\u0935\u0965",
    transliteration: "Raam gaye, Raavan gaye, gaye jo Kaurava Paandava.\nKoi yahaan tika nahin, sab gaye gadgadaava.",
    translation: "Rama went, Ravana went, the Kauravas and Pandavas went.\nNo one stayed here, all departed with great noise.",
    moods: ["mortal", "philosophical", "contemplative", "realistic"]
  },
  {
    id: "doha_43",
    hindi: "\u092E\u0928 \u092E\u0948\u0932\u093E \u0924\u0928 \u090A\u091C\u0930\u093E, \u092C\u0917\u0941\u0932\u093E \u0915\u092A\u091F\u0940 \u0905\u0902\u0917\u0964\n\u0924\u093E\u0938\u094B\u0902 \u0924\u094B \u0915\u094C\u0906 \u092D\u0932\u093E, \u0924\u0928 \u092E\u0928 \u090F\u0915\u0939\u0940 \u0930\u0902\u0917\u0965",
    transliteration: "Man maila tana oojara, bagula kapati anga.\nTaason to kauaa bhala, tana mana ekahi ranga.",
    translation: "Mind dirty but body white, like a deceitful heron.\nBetter than that is a crow, whose body and mind are the same color.",
    moods: ["honest", "authentic", "critical", "wise"]
  },
  {
    id: "doha_44",
    hindi: "\u0915\u092C\u0940\u0930 \u0915\u0942\u0924\u093E \u0930\u093E\u092E \u0915\u093E, \u092E\u0941\u0924\u093F\u092F\u093E \u092E\u0947\u0930\u093E \u0928\u093E\u0909\u0902\u0964\n\u0917\u0932\u0947 \u0930\u093E\u092E \u0915\u0940 \u091C\u0947\u0935\u0921\u093C\u0940, \u091C\u093F\u0924 \u0916\u0948\u0902\u091A\u0947 \u0924\u093F\u0924 \u091C\u093E\u0909\u0902\u0965",
    transliteration: "Kabir koota Raama ka, mutiya mera naaun.\nGale Raama ki jevadi, jita khaiche tita jaaun.",
    translation: "Kabir is God's dog, my name is 'Pearl'.\nAround my neck is God's chain, wherever He pulls, there I go.",
    moods: ["devoted", "surrendered", "humble", "faithful"]
  },
  {
    id: "doha_45",
    hindi: "\u0910\u0938\u0940 \u0935\u093E\u0923\u0940 \u092C\u094B\u0932\u093F\u090F, \u092E\u0928 \u0915\u093E \u0906\u092A \u0916\u094B\u092F\u0947\u0964\n\u0905\u092A\u0928\u093E \u0924\u0928 \u0936\u0940\u0924\u0932 \u0915\u0930\u0948, \u0914\u0930\u0928 \u0915\u094B \u0938\u0941\u0916 \u0939\u094B\u092F\u0947\u0965",
    transliteration: "Aisi vaani boliye, mana ka aapa khoye.\nApna tana sheetal karai, aurana ko sukha hoye.",
    translation: "Speak such words that dissolve the ego of the mind.\nIt should cool your own body and bring joy to others.",
    moods: ["peaceful", "kind", "wise", "loving"]
  },
  {
    id: "doha_46",
    hindi: "\u0915\u092C\u0940\u0930\u093E \u0927\u0940\u0930\u091C \u0915\u0947 \u0927\u0930\u0948, \u0939\u093E\u0925\u0940 \u092E\u0928 \u092D\u0930 \u0916\u093E\u092F\u0964\n\u091F\u0942\u091F \u092E\u0942\u0920\u0940 \u0926\u0947\u0915\u094D\u0916\u093F \u0915\u0930\u093F, \u0915\u0941\u0924\u094D\u0924\u093E \u092D\u0942\u0902\u0915\u0923 \u091C\u093E\u092F\u0965",
    transliteration: "Kabeera dheeraja ke dharai, haathi mana bhara khaaye.\nToota moothi dekhi kari, kutta bhoonkana jaaye.",
    translation: "Kabir says, with patience, an elephant eats to its heart's content.\nSeeing a broken fist, even a dog stops barking.",
    moods: ["patient", "wise", "strategic", "calm"]
  },
  {
    id: "doha_47",
    hindi: "\u092C\u093F\u0928\u093E \u0924\u0947\u0932 \u092C\u093F\u0928\u093E \u092C\u093E\u0924\u0940, \u092C\u093F\u0928\u093E \u0906\u0917 \u092C\u093F\u0928\u093E \u0927\u0941\u0906\u0964\n\u0915\u0939\u0948 \u0915\u092C\u0940\u0930 \u0938\u0941\u0928\u094B \u092D\u093E\u0908, \u0938\u0939\u091C \u091C\u094B\u0924 \u091C\u0917\u092E\u0917\u093E\u0908\u0965",
    transliteration: "Bina tela bina baati, bina aaga bina dhuaa.\nKahai Kabir suno bhaai, sahaja jota jagmagaai.",
    translation: "Without oil, without wick, without fire, without smoke.\nSays Kabir, listen brother, the natural light is shining bright.",
    moods: ["enlightened", "mystical", "peaceful", "awakened"]
  },
  {
    id: "doha_48",
    hindi: "\u0917\u093E\u0921\u093C\u093E \u092E\u093E\u091F\u0940 \u0928\u0947 \u0938\u092C \u0915\u094B, \u091A\u093E\u0932\u0915 \u0915\u094B \u0928\u093E \u091A\u0947\u0924\u0964\n\u0906\u091C \u0915\u0939\u0940\u0902 \u0915\u0932 \u092F\u0939\u0940\u0902 \u0939\u0948, \u0915\u0939\u0948 \u0915\u092C\u0940\u0930 \u0938\u0941\u092E\u0947\u0924\u0965",
    transliteration: "Gaada maati ne saba ko, chaalaka ko naa cheta.\nAaja kaheen kala yaheen hai, kahai Kabir sumeta.",
    translation: "Earth has buried everyone, but the driver doesn't understand.\nToday somewhere, tomorrow right here, says Kabir, remember this.",
    moods: ["mortal", "awakening", "contemplative", "urgent"]
  },
  {
    id: "doha_49",
    hindi: "\u0915\u092C\u0940\u0930\u093E \u0917\u0941\u0930\u0941 \u0915\u0940 \u092D\u0915\u094D\u0924\u093F \u0915\u0930, \u0924\u091C \u0935\u093F\u0937\u092F \u0930\u0938 \u091A\u094C\u091C\u0964\n\u092C\u093E\u0939\u0930 \u0922\u0942\u0902\u0922\u0947 \u091C\u094B \u092E\u093F\u0932\u0947, \u092D\u0940\u0924\u0930 \u0915\u093E \u0939\u0948 \u0915\u094C\u091C\u0965",
    transliteration: "Kabeera guru ki bhakti kara, taja vishaya rasa chauja.\nBaahara dhooandhe jo mile, bheetara ka hai kauja.",
    translation: "Kabir, worship the guru and abandon sensual pleasures.\nWhat you seek outside, the treasure is within.",
    moods: ["seeking", "devoted", "wise", "inner-focused"]
  },
  {
    id: "doha_50",
    hindi: "\u091C\u0940\u0935\u0924 \u0915\u094B\u092F \u0938\u092E\u091D\u093E\u0935\u0948, \u0915\u094B\u090A \u0928 \u0938\u092E\u091D\u093E\u092F \u092E\u0941\u090F\u0964\n\u0915\u0939 \u0915\u092C\u0940\u0930 \u0910\u0938\u0940 \u0932\u093F\u0916\u0940, \u0932\u093F\u0916 \u092A\u0922\u093C\u093F \u0905\u0932\u0937 \u0939\u0941\u090F\u0965",
    transliteration: "Jeevata koye samajhaavai, kooo na samajhaaye mue.\nKaha Kabir aisi likhi, likha padhi alasha hue.",
    translation: "Someone may understand while alive, but none can be taught when dead.\nSays Kabir, such is the script written, writing and reading, we become lazy.",
    moods: ["wise", "urgent", "realistic", "awakening"]
  },
  {
    id: "doha_51",
    hindi: "\u0915\u0939\u093E \u0915\u093F\u092F\u093E \u0939\u092E \u0906\u092A\u0915\u093E, \u091C\u094B \u092D\u0908 \u0926\u094D\u0935\u093F\u0917\u0941\u0928 \u0930\u0940\u0924\u0964\n\u0924\u0941\u092E\u0938\u0947\u0902 \u0905\u0927\u093F\u0915 \u0939\u092E\u093E\u0930\u0947 \u0915\u0930, \u0915\u0930\u0924 \u0928 \u092C\u093F\u0938\u093E\u0930\u0947\u0902 \u092A\u094D\u0930\u0940\u0924\u0965",
    transliteration: "Kaha kiya ham aapka, jo bhayi dvigun reet.\nTumse adhik hamaare kar, karat na bisaare preet.",
    translation: "What have we done for you that your kindness has doubled?\nOur hands are lesser than yours, yet love doesn't forget.",
    moods: ["grateful", "humble", "loving", "devoted"]
  },
  {
    id: "doha_52",
    hindi: "\u0938\u092E\u091D\u0940 \u092C\u093E\u0924 \u0915\u0939\u093E\u0902 \u0917\u0908, \u0917\u0908 \u092C\u091A\u0940 \u0928\u0939\u0940\u0902 \u0915\u0941\u091B \u092D\u0940\u0964\n\u0915\u0939\u0942\u0902 \u0915\u093F\u0938\u0938\u0947 \u0905\u092C \u0905\u092A\u0928\u0940, \u0938\u0941\u0928\u094D\u0928\u0947 \u0935\u093E\u0932\u093E \u0915\u094C\u0928 \u0939\u0948\u0965",
    transliteration: "Samjhi baat kahan gayi, gayi bachi nahin kuch bhi.\nKahun kisse ab apni, sunne waala kaun hai.",
    translation: "Where did understanding go? Nothing remains now.\nTo whom shall I speak my heart? Who is there to listen?",
    moods: ["lonely", "lost", "melancholic", "yearning"]
  },
  {
    id: "doha_53",
    hindi: "\u0930\u093E\u092E \u0930\u0938\u093E\u092F\u0928 \u092A\u094D\u0930\u0947\u092E \u0930\u0938, \u092A\u0940\u0915\u0930 \u092A\u093E\u0917\u0932 \u0939\u094B\u092F\u0964\n\u0938\u0926\u0917\u0941\u0930\u0941 \u0938\u093F\u0930\u092E\u094C\u0930 \u0939\u092E\u093E\u0930\u0947, \u0930\u093E\u092E \u092E\u093F\u0932\u0928 \u0915\u0930\u0935\u093E\u092F\u0965",
    transliteration: "Raam rasaayan prem ras, peekar paagal hoye.\nSadguru sirmaur hamaare, raam milan karavaay.",
    translation: "Drinking the elixir of divine love, one becomes intoxicated.\nOur crown jewel Guru facilitates the union with God.",
    moods: ["ecstatic", "devoted", "grateful", "mystical"]
  }
];

// server/storage.ts
var MemStorage = class {
  dohas;
  constructor() {
    this.dohas = dohasData;
  }
  async getDohasByMood(mood) {
    return this.dohas.filter(
      (doha) => doha.moods.some((m) => m.toLowerCase() === mood.toLowerCase())
    );
  }
  async getAllMoods() {
    const moodSet = /* @__PURE__ */ new Set();
    this.dohas.forEach((doha) => {
      doha.moods.forEach((mood) => moodSet.add(mood));
    });
    return Array.from(moodSet).sort();
  }
  async getRandomDohaByMood(mood) {
    const dohas = await this.getDohasByMood(mood);
    if (dohas.length === 0) return void 0;
    const shuffledDohas = [...dohas];
    for (let i = shuffledDohas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledDohas[i], shuffledDohas[j]] = [shuffledDohas[j], shuffledDohas[i]];
    }
    return shuffledDohas[0];
  }
};
var storage = new MemStorage();

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/moods", async (req, res) => {
    try {
      const moods = await storage.getAllMoods();
      res.json(moods);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch moods" });
    }
  });
  app2.get("/api/dohas/:mood", async (req, res) => {
    try {
      const { mood } = req.params;
      const dohas = await storage.getDohasByMood(mood);
      if (dohas.length === 0) {
        return res.status(404).json({ message: `No dohas found for mood: ${mood}` });
      }
      res.json(dohas);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch dohas" });
    }
  });
  app2.get("/api/dohas/:mood/random", async (req, res) => {
    try {
      const { mood } = req.params;
      const doha = await storage.getRandomDohaByMood(mood);
      if (!doha) {
        return res.status(404).json({ message: `No dohas found for mood: ${mood}` });
      }
      res.json(doha);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch doha" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5001", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
