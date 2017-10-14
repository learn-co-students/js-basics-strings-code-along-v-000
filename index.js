// Write your code in this file!
const currentUser = 'Bartek';
const welcomeMessage = "Welcome to Flatbook, " + currentUser + '!';
// For some reason I could not get ${currentUser} to run correctly
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
