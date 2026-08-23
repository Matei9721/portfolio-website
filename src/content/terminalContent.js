const text = (value) => ({type: 'text', value});
const entity = (entityType, value) => ({type: 'entity', entity: entityType, value});
const lineBreak = () => ({type: 'lineBreak'});

export const terminalContent = {
    help: [
        ['whoami', 'Who am I?'],
        ['education', 'Get information about my education!'],
        ['spotify', 'Listen to the Spotify preview of my favourite songs.'],
        ['experience', 'Get information about my work experience.'],
        ['clear', 'Clears the console.'],
    ],
    welcome: [
        text('>>> Most days I turn slightly ambitious ideas into real-world products powered by artificial intelligence. I work as a '),
        entity('role', 'Software Engineer '),
        text('and '),
        entity('role', 'Data Scientist '),
        text('\u00a0across search, information extraction, RAG and multi-agent systems.'),
        lineBreak(),
        lineBreak(),
        text('I still think like a '),
        entity('role', 'Software Engineer '),
        text('\u00a0at heart: I enjoy moving between model behaviour, product decisions and code that survives production.'),
        lineBreak(),
        lineBreak(),
        text('You can '),
        {type: 'strong', value: 'use this Terminal'},
        text(' to find more about me. Type '),
        {type: 'strong', value: 'help'},
        text(' to see all available commands!'),
        lineBreak(),
    ],
    commands: {
        whoami: [
            text(' My name is '),
            entity('developer', ' Matei Penca '),
            text('. I was born in Romania, and after completing the high school there, I started a new chapter in my life by doing my Bachelor and Master degrees in different cities around The Netherlands. Currently, I am still living in the Netherlands, enjoying the not so frequent sunny days. My hobbies include running, biking and bouldering with occasional video gaming sessions.'),
        ],
        education: [
            text('I have started my formal higher education in Groningen, The Netherlands in 2019 where I studied Computing Science which is just a different term for Computer Science :) . Because I was always attrached to the business aspect of software and because I had somewhat of a premonition of A.I. taking over I decided to do a Master\'s in Data Science at the University of Amsterdam.'),
        ],
        experience: [
            text('My first experience building A.I.-powered software started at '),
            entity('company', 'Syntho'),
            text(', where I learned to build, test and deploy software in a fast-moving start-up. I then joined '),
            entity('company', 'Elsevier '),
            text('as an intern and grew into a Senior Data Scientist role, building production AI systems and leading work across product, research and engineering.'),
        ],
    },
    spotify: {
        intro: [
            lineBreak(),
            text(' Here are 3 of my favourite songs I listed on repeat. As you can tell I like to listen to many genres and many languages, I hope one of these songs will be on your liking :) '),
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
