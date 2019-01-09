const person = {
    name: 'Akhil',
    age: 26,
    location: {
        city: 'sydney',
        temp: 26
    }
}

const {name: firstName = 'Anonymous', age} = person;
console.log(`${firstName} is ${age}.`)

const {city, temp: temperature} = person.location;
if(city && temperature){
    console.log(`it is ${temperature} in ${city}.`)
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(`The book ${book.title} whose author is ${book.author} is published by ${publisherName}.`)

const item = ['Coffee(hot)', '$2.00', '$2.50', '$2.75']

const [coffee_name, ,coffee_price] = item

console.log(`A medium ${coffee_name} costs ${coffee_price}.`)