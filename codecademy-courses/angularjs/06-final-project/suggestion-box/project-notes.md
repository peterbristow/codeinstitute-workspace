# Notes #

## User stories ##
I want to be able to create a suggestion.
I want to be able to upvote a suggestion.
I want the most upvoted suggestions to rise to the top.
I want to comment on a suggestion.


## Questions ##
### What kinds of problems does a real suggestion box solve? ###
+ A way of collecting many suggestions
+ A way of seeing if there are popular suggestions

### How can a suggestion box app help alleviate those problems? ###
+ A view for the whole list of suggestions.
+ A way to input suggestions.
+ A way to upvote suggestions.
+ A way to comment on a suggestion.

### Does a suggestion box app cause any problems that a real suggestion box doesn’t?
+ People could falsify the results.


## Translate needs into the building blocks of code ##
+ A view is going to be an HTML file, and we can feed into it a list of suggestions from a controller.
+ To input suggestions, we will need to write a form that updates the model of our app. It will update it using a controller, since the controller is the middle-man between the view and the model.
+ To upvote a suggestion, we can add a button that changes the amount of upvotes a specific suggestion has in the model.
+ To comment on a suggestion, we will need to add routing to add another view. We can use similar ideas as above to build out the comments functionality.


## App outline ##
+ Suggestion List
    - A home.html file for the view.
    - A home controller for suggestion item actions inc upvote.
+ Comments
    - A posts.html file for the view, so we can see an individual post to comment on.
    - A posts controller for comment actions.
+ Store Suggestions and Comments
    - A service for storing data.

## Coding steps ##
1. Create folder and file structure then wire up angular
2. Create app.js
3. Create HomeController.js
4. Create index.html and test in browser
5. Link bootstrap to index.html
6. Create suggestions.js service and wire in
7. Complete coding...
8. When finished test and debug code
9. Ensure the user stories have been satisfied.


## Possible improvements ##
1. Save user changes
2. Ensure you can't upvote your own suggestions
3. Limit the amount of times a user can upvote by adding a logon model and tracking user activity
4. Track which user sugested what
5. 
