// Write your code in this file!
const currentUser = 'Grace Hopper';
const welcomeMessage = `Welcome to Flatbook, '${currentUser}'!`;
//or
//const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const shortGreeting =  `Welcome, '${currentUser.slice(0,1)}'!`;
//slice uses the index where it starts & the index before which it will ends
//in above, it starts at 0 & ends b4 1 just giving the first letter
//or
//const shortGreeting = `Welcome, '${currentUser[0]}'!`;
