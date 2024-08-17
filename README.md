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

📌 Component Design
State Management
Selected Option:
Purpose: Store the currently selected radio button option.
Implementation: Use useState to manage the selected option and localStorage to persist it across page refreshes.

Discount Code:
Purpose: Store the discount code entered by the user and validate it.
Implementation: Use useState to manage the discount code and a regular expression to validate it.
Generated Code:
Purpose: Store and display a randomly generated discount code.
Implementation: Use useState to store the generated code and a function to create it.

Notes:
Purpose: Store user-entered notes or comments.
Implementation: Use useState to manage the notes.

b. User Interface
Radio Buttons:
Create a group of radio buttons with options A, B, and C.
Ensure that selecting a radio button updates the state and persists it using localStorage.

Discount Code Input:
Add an input field for entering the discount code.
Implement validation using a regular expression to ensure the code contains only letters and numbers.

Generate Discount Code Button:
Add a button that, when clicked, generates a random alphanumeric discount code.
Display the generated code to the user.

Notes Text Area:
Add a text area for entering notes or comments.
Update the state with the content of the text area.

📌3. Implementation Steps
a. Create the Component
Use React.FC to define a functional component.
Initialize state variables using useState.
Implement event handlers for updating state based on user interactions.

b. Implement Persistence
On component mount, retrieve the selected option from localStorage and set it in the state.
Update localStorage whenever the selected option changes.

c. Validate and Generate Code
Use a regular expression to validate the discount code.
Create a function to generate a random alphanumeric string for the mock discount code.

d. Render the UI
Use Tailwind CSS for styling the component.
Render radio buttons, input fields, buttons, and text areas with appropriate styling and layout.

📌4. Testing and Validation
Test the component by interacting with all its features: selecting radio buttons, entering discount codes, generating mock codes, and typing notes.
Validate that the state is updated correctly and persists across page refreshes.
