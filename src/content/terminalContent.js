const text = (value) => ({type: 'text', value});
const entity = (entityType, value) => ({type: 'entity', entity: entityType, value});
const lineBreak = () => ({type: 'lineBreak'});

export const terminalContent = {
    help: [
        ['whoami', 'Who am I?'],
        ['education', 'Get information about my education!'],
        ['spotify', 'Play three of my favourite songs.'],
        ['experience', 'Get information about my work experience.'],
        ['clear', 'Clears the console.'],
    ],
    welcome: [
        text('>>> I am a '),
        entity('role', 'AI Engineer '),
        text('and '),
        entity('role', 'Data Scientist '),
        text('\u00a0working on search, information extraction, and language-model software.'),
        lineBreak(),
        lineBreak(),
        text('Outside work, I build small things for myself and friends, usually because a very specific problem has started bothering me.'),
        lineBreak(),
        lineBreak(),
        text('Type '),
        {type: 'strong', value: 'help'},
        text(' to poke around.'),
        lineBreak(),
    ],
    commands: {
        whoami: [
            text(' My name is '),
            entity('developer', ' Matei Penca '),
            text('. I was born in Romania and, after completing high school there, started a new chapter by studying for my Bachelor\'s and Master\'s degrees in different Dutch cities. I still live in the Netherlands, enjoying the not-so-frequent sunny days. My hobbies include running, biking, bouldering, and occasional video game sessions.'),
        ],
        education: [
            text('I started my higher education in Groningen in 2019, studying Computing Science—which is just another term for Computer Science :). I was always attracted to the business side of software and had something of a premonition about AI taking over, so I continued with a Master\'s in Data Science at the University of Amsterdam.'),
        ],
        experience: [
            text('My first software role was at '),
            entity('company', 'Syntho'),
            text(', working on synthetic-data tooling. After that I moved to '),
            entity('company', 'Elsevier '),
            text('where I build search, information-extraction, and language-model applications.'),
        ],
    },
    spotify: {
        intro: [
            lineBreak(),
            text(' Three songs I have had on repeat. The previews can be played here. '),
            lineBreak(),
            lineBreak(),
        ],
        playlist: [
            {
                id: 1,
                title: 'Bleach',
                writer: 'Anatu',
                youtubeUrl: 'https://www.youtube.com/watch?v=EqdM24AJb3Q',
                img: 'https://i.scdn.co/image/ab67616d00001e0280df66933577254e0ec78868',
                src: 'https://p.scdn.co/mp3-preview/0988f434a22698bbc4b66d4cc8ef2f011c1a013f?cid=cfe923b2d660439caf2b557b21f31221',
            },
            {
                id: 2,
                title: 'Interstelar',
                writer: 'Alexia',
                youtubeUrl: 'https://www.youtube.com/watch?v=zUqxUSuCoQQ',
                img: 'https://i.scdn.co/image/ab67616d0000b2738da174a5a172967f23a7cac6',
                src: 'https://p.scdn.co/mp3-preview/132aafd543baa27b13249b14e8def5e94ce29caa?cid=cfe923b2d660439caf2b557b21f31221',
            },
            {
                id: 3,
                title: 'Candy Thief',
                writer: 'Beatpella',
                youtubeUrl: 'https://www.youtube.com/watch?v=oJ492O5Z1f4',
                img: 'https://i.scdn.co/image/ab67616d0000b273bb0001514868a3156783bcd8',
                src: 'https://p.scdn.co/mp3-preview/140113f7c2cceee9c60d105fec8ac5b57a2a2318?cid=cfe923b2d660439caf2b557b21f31221',
            },
        ],
    },
};
