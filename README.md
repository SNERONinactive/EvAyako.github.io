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
And
```js
    ), document.getElementById('dl-content')
);
```
Between these lines is the list of levels itself. In order to add or remove a level, you need to remove or add a block of code, respectively. As an example, take these lines:
```js
React.createElement(newDemon, {
  top: 1,
  username: 'r1val',
  lvlname: 'Sakupen Hell v2',
  src: './img/lvls/99.png',
  id: 99
}),
```
Here you can see the settings for the appearance of the line with the level.
- top is the location of the level in the top.
- username is the nickname of the player who passed this level.
- lvlname is the name of the level.
- src is the location of the level preview file.
- id is the id of the level
