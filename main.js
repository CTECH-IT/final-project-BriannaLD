let inputXPos = 500;
let inputYPos = 30;

function setup() {
    createCanvas(1536, 713);

    input = createInput();
    input.position(inputXPos, inputYPos);
    input.size(500);

    //button = createButton("Create");
    //button.position(inputXPos + 55, inputYPos + 25);

    //button.mousePressed(draw);
  };

  //Setting up Constructors Here

  //New instance of this constructor doesn't work in the for loop. Why?
    function AngrySquare() {
      let angryColorArray = ["255,0,0", "220,20,60", "255, 36, 0"];
      randomColorNumber = Math.random() * (2 - 0) + 0;
      this.color = angryColorArray[randomColorNumber];
  
      this.squareX = Math.random() * (1536 - 0) + 0;
      this.squareY = Math.random() * (1536 - 0) + 0;
  
      randomSquareWidthNumber = Math.random() * (80 - 30) + 30;
      this.squareWidth = randomSquareWidthNumber;
      this.squareHeight = this.squareWidth;
  
      //How to use the randomized color codes. Maybe use different format that doesn't have commas?
      fill(255,0,0);
  
      rect(this.squareX, this.squareY, this.squareWidth, this.squareHeight);
    };
  
  
  


  function draw() {
    background(0);

    //Setting up constructors
    //let newSquare = new AngrySquare();

    let noPunctuationWords = (input.value()).replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"");

    let lowerCaseAndNoPunctuationWords = noPunctuationWords.toLowerCase();

    let splitWordsArray = split(lowerCaseAndNoPunctuationWords, ' ');
    //console.log(splitWordsArray);

    for (var indexCounter = 0; indexCounter < splitWordsArray.length; indexCounter++) {
      //This is where we'd have the library. See if splitWordsArray[indexCounter] == any of the items from a list of words.
      //Then have multiple "options" or parts that get decided, like the size and exact shape.
      //Then put the decided image onto the console!
      //However... Will I need to create a new object each time for every new thing I draw? Or will it stay?
      //Nvm. Unless you clear the console, it'll stay on the screen.

      //"Mad" synonyms
      if (splitWordsArray[indexCounter] == "mad" || splitWordsArray[indexCounter] == "angry" || splitWordsArray[indexCounter] == "furious"
      || splitWordsArray[indexCounter] == "infuriated" || splitWordsArray[indexCounter] == "irate" || splitWordsArray[indexCounter] == "raging"
      || splitWordsArray[indexCounter] == "enraged" || splitWordsArray[indexCounter] == "fuming" || splitWordsArray[indexCounter] == "blazing"
      || splitWordsArray[indexCounter] == "incensed" || splitWordsArray[indexCounter] == "wrathful" || splitWordsArray[indexCounter] == "cross"
      || splitWordsArray[indexCounter] == "indignant" || splitWordsArray[indexCounter] == "exasperated" || splitWordsArray[indexCounter] == "irritated"
      || splitWordsArray[indexCounter] == "berserk" || splitWordsArray[indexCounter] == "livid" || splitWordsArray[indexCounter] == "rant") {
        
        let newSquare = new AngrySquare();
        // fill(255,0,0);

        // //Alright, issue with this is that it keeps updating and will give you a literal seizure. 
        // //Might be funny though. You get a moving piece filled with all of your mixed emotions. I'm going to leave it for now.
        // let madShapeX = Math.random() * (1536 - 0) + 0;
        // let madShapeY = Math.random() * (1536 - 0) + 0;
        // rect(madShapeX, madShapeY, 50, 50);
      }

      //"Sad" synonyms
      if (splitWordsArray[indexCounter] == "sad" || splitWordsArray[indexCounter] == "unhappy" || splitWordsArray[indexCounter] == "sorrowful"
      || splitWordsArray[indexCounter] == "dejected" || splitWordsArray[indexCounter] == "regretful" || splitWordsArray[indexCounter] == "depressed"
      || splitWordsArray[indexCounter] == "downcast" || splitWordsArray[indexCounter] == "miserable" || splitWordsArray[indexCounter] == "downhearted"
      || splitWordsArray[indexCounter] == "down" || splitWordsArray[indexCounter] == "despondent" || splitWordsArray[indexCounter] == "despairing"
      || splitWordsArray[indexCounter] == "disconsolate" || splitWordsArray[indexCounter] == "desolate" || splitWordsArray[indexCounter] == "wretched"
      || splitWordsArray[indexCounter] == "glum" || splitWordsArray[indexCounter] == "gloomy" || splitWordsArray[indexCounter] == "doleful"
      || splitWordsArray[indexCounter] == "dismal" || splitWordsArray[indexCounter] == "blue" || splitWordsArray[indexCounter] == "melancholy"
      || splitWordsArray[indexCounter] == "mournful" || splitWordsArray[indexCounter] == "woeful" || splitWordsArray[indexCounter] == "forlorn"
      || splitWordsArray[indexCounter] == "crestfallen" || splitWordsArray[indexCounter] == "heartbroken" || splitWordsArray[indexCounter] == "inconsolable"
      || splitWordsArray[indexCounter] == "miserable" || splitWordsArray[indexCounter] == "pitiful" || splitWordsArray[indexCounter] == "depressing"
      || splitWordsArray[indexCounter] == "distressing" || splitWordsArray[indexCounter] == "shameful" || splitWordsArray[indexCounter] == "regrettable"
      || splitWordsArray[indexCounter] == "pathetic") {
        fill(0,0,255);

        //Alright, issue with this is that it keeps updating and will give you a literal seizure. 
        //Might be funny though. You get a moving piece filled with all of your mixed emotions. I'm going to leave it for now.
        let madShapeX = Math.random() * (1536 - 0) + 0;
        let madShapeY = Math.random() * (1536 - 0) + 0;
        rect(madShapeX, madShapeY, 50, 50);
      }

      //"Happy" synonyms
      if (splitWordsArray[indexCounter] == "happy" || splitWordsArray[indexCounter] == "contented" || splitWordsArray[indexCounter] == "content"
      || splitWordsArray[indexCounter] == "cheerful" || splitWordsArray[indexCounter] == "cheery" || splitWordsArray[indexCounter] == "merry"
      || splitWordsArray[indexCounter] == "joyful" || splitWordsArray[indexCounter] == "jovial" || splitWordsArray[indexCounter] == "jolly"
      || splitWordsArray[indexCounter] == "joking" || splitWordsArray[indexCounter] == "jocular" || splitWordsArray[indexCounter] == "gleeful"
      || splitWordsArray[indexCounter] == "carefree" || splitWordsArray[indexCounter] == "untroubled" || splitWordsArray[indexCounter] == "delighted"
      || splitWordsArray[indexCounter] == "smiling" || splitWordsArray[indexCounter] == "beaming" || splitWordsArray[indexCounter] == "grinning"
      || splitWordsArray[indexCounter] == "glowing" || splitWordsArray[indexCounter] == "satisfied" || splitWordsArray[indexCounter] == "gratified"
      || splitWordsArray[indexCounter] == "buoyant" || splitWordsArray[indexCounter] == "radiant" || splitWordsArray[indexCounter] == "sunny"
      || splitWordsArray[indexCounter] == "blithe" || splitWordsArray[indexCounter] == "joyous" || splitWordsArray[indexCounter] == "blessed"
      || splitWordsArray[indexCounter] == "lighthearted" || splitWordsArray[indexCounter] == "thrilled" || splitWordsArray[indexCounter] == "exuberant"
      || splitWordsArray[indexCounter] == "elated" || splitWordsArray[indexCounter] == "exhilarated" || splitWordsArray[indexCounter] == "ecstatic"
      || splitWordsArray[indexCounter] == "blissful" || splitWordsArray[indexCounter] == "euphoric" || splitWordsArray[indexCounter] == "overjoyed"
      || splitWordsArray[indexCounter] == "chipper" || splitWordsArray[indexCounter] == "chuffed") {
        fill(255,255,0);

        //Alright, issue with this is that it keeps updating and will give you a literal seizure. 
        //Might be funny though. You get a moving piece filled with all of your mixed emotions. I'm going to leave it for now.
        let madShapeX = Math.random() * (1536 - 0) + 0;
        let madShapeY = Math.random() * (1536 - 0) + 0;
        rect(madShapeX, madShapeY, 50, 50);
      }

      //"Scared" synonyms
      if (splitWordsArray[indexCounter] == "scared" || splitWordsArray[indexCounter] == "frightened" || splitWordsArray[indexCounter] == "afraid"
      || splitWordsArray[indexCounter] == "fearful" || splitWordsArray[indexCounter] == "nervous" || splitWordsArray[indexCounter] == "panicky"
      || splitWordsArray[indexCounter] == "panicked" || splitWordsArray[indexCounter] == "alarmed" || splitWordsArray[indexCounter] == "worried"
      || splitWordsArray[indexCounter] == "intimidated" || splitWordsArray[indexCounter] == "terrified" || splitWordsArray[indexCounter] == "petrified"
      || splitWordsArray[indexCounter] == "horrified" || splitWordsArray[indexCounter] == "frantic" || splitWordsArray[indexCounter] == "hysterical"
      || splitWordsArray[indexCounter] == "shaky" || splitWordsArray[indexCounter] == "jumpy" || splitWordsArray[indexCounter] == "jittery"
      || splitWordsArray[indexCounter] == "spooked" || splitWordsArray[indexCounter] == "spooky" || splitWordsArray[indexCounter] == "anxious"
      || splitWordsArray[indexCounter] == "startled" || splitWordsArray[indexCounter] == "shocked" || splitWordsArray[indexCounter] == "unnerved"
      || splitWordsArray[indexCounter] == "petrified") {
        fill(148,0,211);

        //Alright, issue with this is that it keeps updating and will give you a literal seizure. 
        //Might be funny though. You get a moving piece filled with all of your mixed emotions. I'm going to leave it for now.
        let madShapeX = Math.random() * (1536 - 0) + 0;
        let madShapeY = Math.random() * (1536 - 0) + 0;
        rect(madShapeX, madShapeY, 50, 50);
      }

    };

    //If it finds either "sad" or "unhappy" at index position zero, it will display a blue square.
    // if (splitWordsArray[1] == "sad" || splitWordsArray[1] == "unhappy") {
    //     fill(0,0,255);
    //     rect(50, 10, 50, 50);
    // }

    //console.log(input.value());

    //I need to find a way to separate out all of the words based on spacing (Also find a way to deal with punctuation)
    //This can be done with the .split(); function. It asks for the input and on what you're splitting the list by.
    //If given ' ' as its splitting paramter, it will separate all of the words into an array.

    //When words are split into separate pieces, put them into a list, then iterate through that list.
    //It will check if the word is in our library, if not, it'll move on.
    //If it's in the library, we need to analyze it, see what emotion the word is categorized as.
    //Based on its assigned emotion, it will be randomly assigned a color/shape from lists that are assigned to that emotion.
    //It will then draw the new shape, it's size, and color, on the canvas.
    //Perhaps a constructor could be used to create all of these new individual objects? 
    //It's parameter would be "word", and then it can use that word to create a shape.
    //A new instance of this constructor would be made for every word in the user's input.

    // if (input.value() == "mad") {
    //     fill(255, 204, 0);
    //     rect(10, 10, 50, 50);
    // };
  };