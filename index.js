// Write your code in this file!


let currentUser = "Gigi";

let welcomeMessage = "Welcome to Flatbook, " + currentUser + "!";

let excitedWelcomeMessage = welcomeMessage.toUpperCase() + currentUser.toUpperCase() + "!";

let shortGreeting = "Welcome, " + currentUser[0] + "!";


//let shortGreeting = "Welcome, " + 
//     it("contains the first initial of the name stored in the 'currentUser' variable", () => {
//       const firstInitial = currentUser[0];
//       const restOfName = currentUser.slice(1);

//       expect(shortGreeting).to.have.string(firstInitial);
//       expect(shortGreeting).to.not.have.string(restOfName);
//     });

//     it('ends with an exclamation point', () => {
//       expect(shortGreeting.substr(-1)).to.eq('!');
//     });
//   });
// });
