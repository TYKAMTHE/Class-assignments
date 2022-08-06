
const locations = [0, 1, 1, 0, 1]
let hitsCount = 0
let guessCount = 0

while(hitsCount!=3){

    const choice = prompt('Enter a number (1-5)')   
    
    if(choice < 0 || choice > 5){
        alert('Enter a valid number') 
        continue
    }

    guessCount++

   if(locations[choice-1] == 1){
    alert('You have hit a battleship')
    hitsCount++
    locations[choice - 1] = 2
   }else if(locations[choice - 1] == 2){
    alert('You have already hit this battleship')
   }
    else {
    alert('You missed the battleship')
   }
   alert('Total guesses:' + guessCount) 
}
