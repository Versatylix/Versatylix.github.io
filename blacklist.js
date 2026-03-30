// blacklist.js
const BANNED_WORDS = [
    // --- LV Terms ---
    "mauka", "kuce", "kucesdels", "dirsa", "pizda", "pizdabols", "peza", 
    "pimpis", "mudaks", "lohs", "suds", "mesls", "padauza", "pedins",
    "dirsalidejs", "kakulacis", "pipeljaizha", "pezhlaizisr", "matesdrazcjs", 
    "sudagabals", "akadirsejs", "pezuveste", "maukmabele", "aitasgalva", 
    "cirvis", "pimpausis", "eidirst", "izdiratakrizdole", "arpirkstutaisits", 
    "rokasnodirsasaug", "pissuda",

    // --- EN Terms ---
    "arse", "arsehead", "arsehole", "ass", "asshole", "bastard", "bitch", 
    "bloody", "bollocks", "brotherfucker", "bugger", "bullshit", "childfucker", 
    "cock", "cocksucker", "crap", "cunt", "dammit", "damn", "damned", "dick", 
    "dickhead", "dumbass", "dyke", "fag", "faggot", "fatherfucker", "fuck", 
    "fucked", "fucker", "fucking", "goddammit", "goddamn", "goddamned", 
    "godsdamn", "hell", "horseshit", "jackass", "kike", "motherfucker", 
    "nigga", "nigra", "pigfucker", "piss", "prick", "pussy", "shit", "shite", 
    "sisterfuck", "sisterfucker", "slut", "spastic", "tranny", "twat", "wanker"
];

window.wordFilter = BANNED_WORDS;