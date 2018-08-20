https://voooodoo.github.io/testForm/

Create a registration form with next fields:
- name
- e-mail
should have verification of validation
- city
it should be a select field with any 5 cities
- password
must have at least 6 characters
- password confirmation
must match the password field
All fields except the field "city" are required.
When sending a form with invalid data, display error messages.
If the form is sent successfully, the form should be collapsed (the title and logo remains), in its place
appears a button that unfolds it.
Show a message like this: "Thank you for registering the NAME from the city CITY."
*NAME and CITY are entered values
*remember, CITY isn’t required field
When the form is re-sent, the message should be deleted.
Design
The form should have a centered title, in the left upper corner should be a positioned company logo (an
arbitrary picture downloaded from the Internet);
The rest of the styles are at your discretion.
Technologies
A mandatory requirement is the use of:
BEM
LESS or SASS
Logic can be written either on pure JS (ES6 preferably), or using any framework or library that you are
familiar with.