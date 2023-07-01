const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// returns first letter of currentUser name
// can also use charAt(0)
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
