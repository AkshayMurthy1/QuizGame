class Question {

  constructor() {
    this.title = createElement('h1')
    this.question = createElement('h3')

    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.choice1 = createElement('h4')
    this.choice2 = createElement('h4')
    this.choice3 = createElement('h4')
    this.choice4= createElement('h4')
    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)




    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("What came first the chicken or the egg?")
    this.question.position(150, 280)
    this.choice1.html("The Chicken")
    this.choice1.position(150, 330)
    this.choice2.html("The Egg")
    this.choice2.position(150,350)
    this.choice3.html("I don't know")
    this.choice3.position(150,370)
    this.choice4.html("Both")
    this.choice4.position(150,390)



    this.input1.position(150, 230);
    this.button.position(500, 390);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
        this.message("Thank You!")
    })


  }
}
