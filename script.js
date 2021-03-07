const message = document.getElementById("message")



let messageWords = []
let theMostFrequentWord;
let numberOfWordsInTheMessage = [];

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


const string = '[]'

const usingSplit = string.split('');
const usingSpread = [...string];
const usingArrayFrom = Array.from(string);
const usingObjectAssign = Object.assign([], string);

console.log(`The most frequent word of the message is "${theMostFrequentWord}"`)
console.log(`The number of words in the message is ${[]}`)


function theMostFrequentElement(inputArg) {
  var type = typeof inputArg,
      length,
      mostFrequent,
      counts,
      index,
      value;
  
  if (inputArg === null || type === 'undefined') {
      throw TypeError('inputArg was "null" or "undefined"');
  }

  mostFrequent = [];
  if (type === 'function' || !Object.prototype.hasOwnProperty.call(inputArg, 'length')) {
      mostFrequent[0] = inputArg;
      mostFrequent[1] = 1;
  } else {
      counts = {};
      length = inputArg.length;
      for (index = 0; index < length; index += 1) {
          value = inputArg[index];
          type = typeof value;
          counts[type] = counts[type] || {};
          counts[type][value] = (counts[type][value] || 0) + 1;
          if (!mostFrequent.length || counts[type][value] >= mostFrequent[1]) {
              mostFrequent[0] = value;
              mostFrequent[1] = counts[type][value];
          }
      }
  }

  return mostFrequent;
}


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


var arr = [];
var counts = {};

for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}


Object.defineProperties(Array.prototype, {
  count: {
      value: function(query) {
          
          var count = 0;
          for(let i=0; i<this.length; i++)
              if (this[i]==query)
                  count++;
          return count;
      }
  }
});

  
  function check() { 

    if(document.getElementById('checkBox').checked)
        document.getElementById('texto').innerHTML = "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey";
    else
        document.getElementById('texto').innerHTML = "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore";
  
  }





