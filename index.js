function writeCards(name, event){
    let thankYouCard = []  
     for (let i = 0; i <name.length; i++) {
         thankYouCard.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  
    }
    return thankYouCard;
 }
 function countDown(count){
 while (count >0) {
     console.log(count)
 count-=1;
 }
 console.log(count)
                 
                    }