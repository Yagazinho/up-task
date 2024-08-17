## How to run the app

1. clone repository and download files
2. run application with the command npm run dev

    Documenting the Thought Process for Creating the Radio Component
   
📌 Define Requirements
The goal was to create a React component that:
Allows users to select an option from a group of radio buttons.
Persists the selected option across page refreshes using localStorage.
Includes a text box for entering a discount code with basic validation.
Has a button to generate and display a mock discount code.
Provides a text area for users to enter notes or comments, with the text being stored in the application state.



📌 Implementation Steps

a. Implement Persistence
On component mount, retrieve the selected option from localStorage and set it in the state.
Update localStorage whenever the selected option changes.

b. Validate and Generate Code
i used regular expressions to validate the discount code.
and used a for loop function to generate a random alphanumeric string for the mock discount code.

c. For the textarea i created a variable 'notes' to store text entered by user, using handleNotesChange to updates state of the notes variable when user inputs texts, then i added a <textarea> element for user input, putting its value to the notes state, and set the onChange handler to handleNotesChange. Finally to display the text i added a paragraph for the current notes, showing a placeholder message if no notes are entered



