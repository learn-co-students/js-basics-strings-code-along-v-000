// Write your code in this file!
const currentUser = 'Grace Hopper'
//const welcomeMessage = "Welcome to Flatbook, " + currentUser + "!";
// using template literals

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!` ;

const excitedWelcomeMessage = welcomeMessage.toUpperCase() ;



const shortGreeting = `Welcome, ${currentUser[0]}!` ;
//or you could use
//    const shortGreeting = `Welcome, ${currentUser.charAt(0)}!` ;
