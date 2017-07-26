import Ember from 'ember';


var languages = [
    {
        name: 'Java',
        shortName: 'Java',
        rank: '1',
        description: 'It’s one of the most widely adopted programming languages, used by some 9 million developers and running on 7 billion devices worldwide. It’s also the programming language used to develop all native Android apps. Java’s popularity with developers is due to the fact that the language is grounded in readability and simplicity. Java has staying power since it has long-term compatibility, which makes sure older applications continue to work now into the future. It’s not going anywhere anytime soon and is used to power company websites like LinkedIn.com, Netflix.com and Amazon.com. ',
        year: '1995',
        linkToResources: 'http://docs.oracle.com/javase/8/',
        image: 'https://www.sololearn.com/Icons/Courses/1068.png',
        likes: '1',
        dislikes: '1'
    },
    {
        name: 'Structured Query Language',
        shortName: 'SQL',
        rank: '1',
        description: ' ',
        year: ' ',
        linkToResources: ' ',
        image: 'https://www.sololearn.com/Icons/Courses/1060.png',
        likes: '1',
        dislikes: '1'
    },
    {
        name: 'Javascript',
        shortName: 'JS',
        rank: '1',
        description: ' ',
        year: ' ',
        linkToResources: ' ',
        image: 'https://www.sololearn.com/Icons/Courses/1024.png',
        likes: '1',
        dislikes: '1'
    },
    {
        name: 'C#',
        shortName: 'c#',
        rank: '1',
        description: ' ',
        year: ' ',
        linkToResources: ' ',
        image: 'https://www.sololearn.com/Icons/Courses/1080.png',
        likes: '1',
        dislikes: '1'
    },
    {
        name: 'Python',
        shortName: 'Python',
        rank: '1',
        description: ' ',
        year: ' ',
        linkToResources: ' ',
        image: 'https://www.sololearn.com/Icons/Courses/1073.png',
        likes: '1',
        dislikes: '1'
    },
    {
        name: 'C Plus Plus',
        shortName: 'C++',
        rank: '1',
        description: ' ',
        year: ' ',
        linkToResources: ' ',
        image: 'https://www.sololearn.com/Icons/Courses/1051.png',
        likes: '1',
        dislikes: '1'
    },
    {
        name: 'Hypertext Preprocessor',
        shortName: 'PHP',
        rank: '1',
        description: ' ',
        year: ' ',
        linkToResources: ' ',
        image: 'https://www.sololearn.com/Icons/Courses/1059.png',
        likes: '1',
        dislikes: '1'
    },
    {
        name: 'Ruby on Rails',
        shortName: 'Ruby',
        rank: '1',
        description: ' ',
        year: ' ',
        linkToResources: ' ',
        image: 'https://www.sololearn.com/Icons/Courses/1081.png',
        likes: '1',
        dislikes: '1'
    },
    {
        name: 'Swift',
        shortName: 'Swift',
        rank: '1',
        description: ' ',
        year: ' ',
        linkToResources: ' ',
        image: 'https://www.sololearn.com/Icons/Courses/1075.png',
        likes: '1',
        dislikes: '1'
    }
]
export default Ember.Route.extend({
    model: function (){
        return languages;
    }
});
