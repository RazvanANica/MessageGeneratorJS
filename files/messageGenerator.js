const begginingWord = ['A robot', 'A chef', 'A ghost', 'A monkey', 'A superhero'];
const middleWord = ['juggles', 'bakes', 'scares', 'tickles', 'flies'];
const endWord = ["a Rubik's Cube.","in a haunted house.", "at a comedy club.", "wearing a top hat.", "while solving a crossword puzzle."];

function makeMessage(start, middle, end){
    let generatedMessage = [];

    for(let i = 0; i < 3; i++){
        
        randomNumber = Math.floor(Math.random() * 5);
        
        switch(i){
            case 0:
                generatedMessage.push(start[randomNumber]);
                break;
            case 1:
                generatedMessage.push(middle[randomNumber]);
                break;
            case 2:
                generatedMessage.push(end[randomNumber]);
                break;
            default:
                console.log('Error! The message failed to be created.');

        }
    }

        generatedMessage = generatedMessage.join(' ');


    return console.log(generatedMessage);
}

makeMessage(begginingWord, middleWord, endWord);
