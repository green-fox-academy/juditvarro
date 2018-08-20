// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

'use strict';

class PostIt {
  private backgroundcolor: string;
  private text: string;
  private textColor: string;
  constructor(backgroundcolor: string, text: string, textColor: string) {
    this.backgroundcolor = backgroundcolor;
    this.text = text;
    this.textColor = textColor;
  }
}

let orangePostIt: PostIt = new PostIt('orange', 'Idea 1', 'blue');
let pinkPostIt: PostIt = new PostIt('pink', 'Awesome', 'black');
let yellowPostIt: PostIt = new PostIt('yellow', 'Superb!', 'green');