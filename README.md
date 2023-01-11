# Flashcard Quiz
This repository contains a flashcard quiz application built with HTML, CSS and JavaScript. The application allows users to select from a variety of flashcard decks, study the cards and test their knowledge on the cards.

## File Structure
- index.html: The main HTML file that defines the structure of the application.
- css/style.css, css/generic.css, css/togglable.css: CSS stylesheets for the application.
- js/shuffle.js, js/Togglable.js, js/spanish.js, js/english.js, js/cards.js: JavaScript files for the application.
- js/spanish.js is contains the flashcards in Spanish language. Each flashcard deck is represented as an array of arrays, with each inner array containing a pair of strings representing the front and back of a flashcard.

## Functionality
- index.html: This file defines the structure of the application, including the layout of the different screens, such as the set selection screen, the flashcard quiz screen, and the menu button.

- css/*.css: These files define the styling of the different elements of the application.

- js/shuffle.js: This file contains a function called shuffle which takes a list as its argument and returns a new list with the elements of the original list in a random order.

- js/Togglable.js: This file contains a constructor function called Togglable, which creates a new HTML element with a "toggled" state and provides methods to interact with that state.

- js/spanish.js : This file contains Spanish flashcard Decks with the name, level, and the flashcards list.

- js/cards.js: This file contains the JavaScript code that controls the behavior of the application. It creates the set selection screen using the flashcard deck from spanish.js, allows the user to select which sets to study, and starts the flashcard quiz. The file uses the functions from shuffle.js and Togglable.js to shuffle the flashcards and create toggle buttons for selecting sets.

## How to use
1. Clone the repository or download it as a zip file
2. Open the index.html file in any browser
3. Select flashcard deck from the available flashcard sets
4. You can select multiple flashcard sets. To quick select all sets, click the deck heading eg. English - Spanish
5. Select start button
6. The flashcards will appear one by one on the screen and prompt you to either flip the card or move to next card
7. Once completed all the flashcards,you can select start button again to start with new set of flashcards.

## Dependencies
The project uses the JavaScript functions in the files shuffle.js and Togglable.js

## Support
If you have any questions or issues with this project, please don't hesitate to open an issue on the GitHub repository.