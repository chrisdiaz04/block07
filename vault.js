       // Variable1 = operand1A + operand1B     // result will be one of combinations
        // Variable2 = operand2A - operand2B     // result will be one of combinations
        // Variable3 = operand3A * operand3B     // result will be one of combinations
        let code1 = 5 * 2;      //10
        let code2 = 120 / 3;    //40
        let code3 = 139 % 100   //39
        
// while loop so that the user is forced to open the vault        
while(true) {
            
            // Tells the user that they have been chosen to open a secret vault 
            //variable for user input
            let userInput = prompt('You have recieved this message because you have been chosen to open an important Vault. Would you like to see the combination? Y/N');
            
            //adding an if statement for the user to answer with either Y-yes or N-no.
if(userInput === 'Y' || userInput === 'y') {
    alert('okay, heres the combination')                                      
    alert(`The secret combintation is ${code1}-${code2}-${code3} `); // this will tell the user the combinations from the variables we provided.
    break;
}       else if (userInput === 'N' || userInput === 'n') {
} else {
    alert('invalid, try again')
}
 } 