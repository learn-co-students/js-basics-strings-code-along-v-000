const currentUser = "Grace Hopper";

// Concatenate
//const welcomeMessage = "Welcome to Flatbook, " + currentUser + "!";

// Template literal - uses backticks
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`

const excitedWelcomeMessage = welcomeMessage.toUpperCase()

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`
