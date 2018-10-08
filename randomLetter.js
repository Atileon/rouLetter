let myName = "Steve";
const arrText = [
  "Hello World!",
  `I'm ${myName}`,
  "do you like animations?",
  "I'm Just playin with rAF",
  "instead of setTimeout & brothers :P",
  "I love it :>, you must try it",
  "try it and practice",
  "Have a Nice Day :)"
];

const pText = document.getElementById("text");
const spanText = document.getElementById("randomTxt");

//create class to get array
/** Class to create the text roulette which take phrases into an array and print it on a DOM element letter by letter */
class TextRoll {
  /**
   *
   * @param {*} theSpan - The DOM element container for the words to be writed
   * @param {*} txtArr - The Array with words/phrases to be printed
   * @param {number} period - Time lapse to pause from a word/phrase to next one on array
   */
  constructor(theSpan, txtArr, period) {
    this.span = theSpan;
    this.txtArr = txtArr;
    this.velocity = 200;
    this.period = period;
    this.delTxt = false; //delete text
    this.countLoop = 0; //iterator on text array
    this.txtOnSpan = "";
    //vars for animation
    this.start = 0;
  }
  randVal(min, max) {
    return Math.random() * (max - min) + min;
  }
  tick() {
    let i = this.countLoop % this.txtArr.length;
    let fullTxt = this.txtArr[i];
    if (!this.delTxt) {
      this.txtOnSpan = fullTxt.substring(0, this.txtOnSpan.length + 1);
      //   console.log(this.txtOnSpan);
    } else {
      this.txtOnSpan = fullTxt.substring(0, this.txtOnSpan.length - 1);
      //   console.log(this.txtOnSpan);
    }
    this.span.textContent = this.txtOnSpan;
    console.log(this.txtOnSpan);
    if (this.delTxt) {
      this.velocity = 50;
    }
    if (!this.delTxt && this.txtOnSpan === fullTxt) {
      this.velocity = this.period;
      this.delTxt = true;
    } else if (this.delTxt && this.txtOnSpan === "") {
      this.delTxt = false;
      this.countLoop++;
      this.velocity = 100;
    }
  }
  animate() {
    let myAnimation = time => {
      window.requestAnimationFrame(myAnimation);

      let rand = this.randVal(32, 122);
      let randLetter = String.fromCharCode(rand);
      spanText.textContent = randLetter;

      if (!this.start) this.start = time;
      let progress = parseInt(time - this.start, 10);
      console.log(progress);
      if (progress >= this.velocity) {
        this.tick();
        this.start = 0;
      }
    };

    window.requestAnimationFrame(myAnimation);
  }
}

let animRoll = new TextRoll(pText, arrText, 1500);
animRoll.animate();
// //set a min and max value to get a random value
// function randVal(min, max) {
//   return Math.random() * (max - min) + min;
// }
// rAF for the roulette numbers

// let start = null;
// let every = 0;
// function randTxt(time) {
//   //   myReq = window.requestAnimationFrame(randTxt);
//   if (!start) start = time;
//   let progress = ((time - start) / 1000).toFixed(1);
//   console.log(progress);

//   let rand = randVal(32, 122);
//   let randLetter = String.fromCharCode(rand);
//   spanText.textContent = randLetter;
//   arrText.map(el => {});
//   console.log(randLetter);
// }
// myReq = window.requestAnimationFrame(randTxt);
