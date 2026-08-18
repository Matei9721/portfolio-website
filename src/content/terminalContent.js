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
        text('>>> My day to day work revolves around turning cool ideas to real-world solutions powered by artificial intelligence. I\'ve been working as a '),
        entity('role', 'Software Engineer '),
        text('and '),
        entity('role', 'Data Scientist '),
        text('\u00a0where I\'ve build A.I. application in different domains and companies. Right now I am learning and building GenAI software, deep learning powered search engines and information extraction pipelines.  I love taking projects from brainstorm to reality, and I\'m really into leading and diving deep into different domains.'),
        lineBreak(),
        lineBreak(),
        text('Even though I currently work in the Data Science sphere, I still see myself as a '),
        entity('role', 'Software Engineer '),
        text('\u00a0at core. I like spending time coding in different languages (like JavaScript, Java or C for some low level projects) and learning new practices and patterns.'),
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
            text('My first experience with building A.I. powered software started at '),
            entity('company', 'Syntho'),
            text(' where I learnt how to build, test and deploy software in an Agile way. Working in a start-up was a great way to accumulate a lot of experience in a fast way. After that I moved my knowledge to '),
            entity('company', 'Elsevier '),
            text('where I am currently focusing on building generative A.I. powered but also traditional ML applications. I am focusing on developing both on the technical side but also on the business understanding and managing side.'),
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
