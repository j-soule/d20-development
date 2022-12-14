const words =
  "This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Hey, you know how I'm, like, always trying to save the planet? Here's my chance. I was part of something special. Do you have any idea how long it takes those cups to decompose. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. So you two dig up, dig up dinosaurs? Hey, take a look at the earthlings. Goodbye! My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard! My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard! Must go faster... go, go, go, go, go! Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! Life finds a way. I was part of something special. Life finds a way. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. What do they got in there? King Kong? Checkmate... Hey, take a look at the earthlings. Goodbye! They're using our own satellites against us. And the clock is ticking. Do you have any idea how long it takes those cups to decompose. Do you have any idea how long it takes those cups to decompose.".split(
    " "
  );

const joiner = "and with for is was the using of".split(" ");
const numberOfWordsInTitle = randomNumber(3, 5);

let title = ``;

function randomNumber(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function toUpper(makeUpperCase) {
  const word = makeUpperCase;
  const firstLetter = word.substring(0, 1).toUpperCase();
  const rest = word.substring(1, word.length);
  return firstLetter + rest;
}

export function generateRandomTitle(){
  title=``
   
    for (let i = 0; i < numberOfWordsInTitle; i++) {
       
      if (i === 1) {
          title += " " + toUpper(joiner[Math.floor(Math.random() * joiner.length)]);
        }

       
      
      
        if (i === 3) {
          title += " " + toUpper(joiner[Math.floor(Math.random() * joiner.length)]);
        }
      
     
        title += " " + toUpper(words[Math.floor(Math.random() * words.length)]);
      }
      
      return title
}