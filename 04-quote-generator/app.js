const quotes = [{
    'author': 'Winston S. Churchill',
    'quote': 'Success is not final; failure is not fatal: It is the courage to continue that counts.'
},
{
    'author': 'Albert Einstein',
    'quote': 'Try not to become a man of success. Rather become a man of value.'
},
{
    'author': 'Herman Melville',
    'quote': 'It is better to fail in originality than to succeed in imitation.'
},
{
    'author': 'Colin R. Davis',
    'quote': 'The road to success and the road to failure are almost exactly the same.'
},
{
    'author': 'Henry David Thoreau',
    'quote': 'Success usually comes to those who are too busy to be looking for it.'
},
{
    'author': 'John D. Rockefeller',
    'quote': 'Dont be afraid to give up the good to go for the great.'
},
{
    'author': 'Thomas Jefferson',
    'quote': 'I find that the harder I work, the more luck I seem to have.'
},
];

function getQuote() {
const random = Number.parseInt(Math.random() * quotes.length + 1);
document.querySelector('#quote').textContent = `\"${quotes[random].quote}\"`;
document.querySelector('#author').textContent = `- ${quotes[random].author}`;
}