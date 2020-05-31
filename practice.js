const person = {
    first: 'Charlene',
    last: 'Gipulan',
    country: 'USA'
}

const {first, last} = person;

console.log(first, last)

////////////////
const charlene = {
    first: 'Charlene',
    last: 'Gipulan',
    links: {
        social: {
            twitter: 'https://twitter.com/charlene',
            facebook: 'https://facebook.com/charlene'
        }
    }
}

//pull out twitter and facebook old way
//const twitter = charlene.links.social.twitter;

//with destructuring
const {twitter, facebook} = charlene.links.social;
console.log(twitter, facebook)