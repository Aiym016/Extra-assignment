const message = document.getElementById("message")



let messageWords = []
let theMostFrequentWord;
let numberOfWordsInTheMessage = 0;

let messages = ["A wizard is never late, nor is he early. He arrives precisely when he means to", "We must all face the choice between what is right and what is easy", "You are a wizard, Harry"]

const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
]


const string = 'A wizard is never late, nor is he early. He arrives precisely when he means to.'
'We must all face the choice between what is right and what is easy.'
'You are a wizard, Harry.';

const usingSplit = string.split('');
const usingSpread = [...string];
const usingArrayFrom = Array.from(string);
const usingObjectAssign = Object.assign([], string);



arr = ['A wizard is never late, nor is he early. He arrives precisely when he means to'];


function foo(arr) {
    var a = [],
      b = [],
      prev;
  
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== prev) {
        a.push(arr[i]);
        b.push(1);
      } else {
        b[b.length - 1]++;
      }
      prev = arr[i];
    }
  
    return [a, b];
  }
  
  var result = foo(arr);
  console.log('[' + result[0] + ']','[' + result[1] + ']')


arr = ['We must all face the choice between what is right and what is easy.']

  function foo(arr) {
    var a = [],
      b = [],
      prev;
  
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== prev) {
        a.push(arr[i]);
        b.push(1);
      } else {
        b[b.length - 1]++;
      }
      prev = arr[i];
    }
  
    return [a, b];
  }
  
  var result = foo(arr);
  console.log('[' + result[0] + ']','[' + result[1] + ']')

arr = ['You are a wizard, Harry.']

  function foo(arr) {
    var a = [],
      b = [],
      prev;
  
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== prev) {
        a.push(arr[i]);
        b.push(1);
      } else {
        b[b.length - 1]++;
      }
      prev = arr[i];
    }
  
    return [a, b];
  }
  
  var result = foo(arr);
  console.log('[' + result[0] + ']','[' + result[1] + ']')


console.log(`The most frequent word of the message is "${theMostFrequentWord}"`)
console.log(`The number of words in the message is ${numberOfElementsInTheArray}`)

const arr = ['A wizard is never late, nor is he early. He arrives precisely when he means to', 'We must all face the choice between what is right and what is easy.', 'You are a wizard, Harry'];
console.log(arr);

arr.length = 16, 14, 5; 
console.log(arr);

arr.forEach(element => console.log(element));


var exchangeMessages = 
["A wizard is never late, nor is he early. He arrives precisely when he means to", 
"We must all face the choice between what is right and what is easy", 
"You are a wizard, Harry"];

function Exchangemessages() {
    var exchangeMessages = Math.floor(Math.random() * (message.length));
    document.getElementById ('submit').innerHTML = message[exchangeMessages];
}


