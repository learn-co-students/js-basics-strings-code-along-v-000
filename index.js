const currentUser = 'Grace Hopper';

const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

//const shortGreeting = 'Welcome, ' + (currentUser.substring(0,1)) + '!';
//method above also passed the tests
//const shortGreeting = 'Welcome, ' + (currentUser.charAt(0)) + '!';
//method above also passed the tests
const shortGreeting = 'Welcome, ' + currentUser[0] + '!';
