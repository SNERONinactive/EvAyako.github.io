# Official NrPs Demonlist
Welcome! This is the source code for the NrPs private server daemon. If you are interested in how a particular mechanic is implemented or if you want to help in some way with the development, then you are in the right place.


Some backgrounds were taken from global demonlist. You can look at their site [here](https://demonlist.org/).

# For list moderators 
**How to add levels to the top?**
1. First, open the addDemon.js or addChallenge.js file, depending on what you are going to add. Both files are in ./js.
2. Scroll down and find the following lines:

 ```js
  ReactDOM.render(
    React.DOM.ul({
        className: 'dl-list'
    }, 
 ```
