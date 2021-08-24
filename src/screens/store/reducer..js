const INITIAL_STATE = {
    quiz:[{
        question:'Give the name of the shortest surah of the Qur’aan.',
        answer:["Surah Ikhlas","Surah Kauthar","Surah Naas","Surah Baqarah"],
        correct:"Surah Kauthar"
    },
{
    question:'What is the Arabic term used for the ‘interpretation of the Qur’an’?',
    answer:["Tafseer","Tatbeeq","Tahqeeq","Taid"],
    correct:'TafseTafseerer',
},
{
    question:'Which Surah of the Qur’an contains orders for the change of Qiblah direction to face while praying?',
    answer:["Surah Ikhlas","Surah Kauthar","Quraish","Surah Baqarah"],
    correct:'Al Baqarah',
},
{
    question:'Over what period was the complete Qur’an revealed?',
    answer:["25 months","23 months","23 years","24 years"],
    correct:'23 years',
},
{
    question:'How many chapters or surahs does the Qur’an contain? ',
    answer:["30","14","114","666"],
    correct:'114',
},
]
}

function reducer(state = INITIAL_STATE){
    return state;
}

export default reducer;