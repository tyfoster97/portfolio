import List from '../../utils/List'

const LANGUAGES: List<string> = {
  name: 'Programming Languages',
  items: [
    'C/C++',
    'CSS/SCSS',
    'HTML',
    'Java',
    'JavaScript/TypeScript',
    'LaTeX',
    'MongoDB',
    'Python',
    'SQL/MySQL/PostgreSQL',
  ],
}

const FRAMEWORKS: List<string> = {
  name: 'Software Frameworks',
  items: [
    'Angular',
    'Express',
    'Git',
    'Jest',
    'JSON',
    'JUnit',
    'Mongoose',
    'Node.js',
    'React',
    'Redux',
    'REST',
  ],
}

const SOFTWARE: List<string> = {
  name: 'Software',
  items: [
    'Astah UML',
    'Circle CI',
    'Microsoft Azure',
    'Microsoft Office',
    'SolidWorks',
    'Travis CI',
    'Visual Studio Code',
  ],
}

const SKILLS: List<string> = {
  name: 'Professional Skills',
  items: [
    'Agile Development',
    'CI/CD',
    'Customer Service',
    'Employee Training',
    'Remote Work',
    'Teaching',
    'Test-Driven Development',
    'Unified Modeling Language',
  ],
}

const ABOUT: List<List<string>> = {
  name: 'About Me',
  items: [
    {
      name: 'Coffee Enthusiast',
      items: [
        'Flat White is my favorite drink',
        'Transitioned from Chai Lattes to Black Coffee over 4 years',
        'I make my own Cold Brew during the Summer',
      ],
    },
    {
      name: 'Avid Gamer',
      items: [
        'Warlock main in Destiny 2',
        'Support main in Overwatch',
        'Personal Minecraft Server',
        'Bi-weekly Amoung Us',
        'Civilization franchinse enthusiast',
        "Assassin's Creed franchise player",
        'Pokemon Trainer',
      ],
    },
    {
      name: 'Social Media Influencer',
      items: [
        '15.3k followers on current TikTok account',
        '20.1k followers on retired TikTok account',
        'Occasional Twitch streamer',
      ],
    },
    {
      name: '2.5 lingual',
      items: ['English (native)', 'French (fluent)', 'Spanish (beginner)'],
    },
    LANGUAGES,
    FRAMEWORKS,
    SOFTWARE,
    SKILLS,
  ],
}

export default ABOUT
