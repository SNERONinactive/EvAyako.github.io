# Official NrPs Demonlist
Welcome! This is the source code for the NrPs private server daemon. If you are interested in how a particular mechanic is implemented or if you want to help in some way with the development, then you are in the right place.


Some backgrounds were taken from global demonlist. You can look at their site [here](https://demonlist.org/). <hr />

# For list moderators 
**__How to add levels to the top?__**
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

3. Finally add, remove, change the position of the level in our sheet.
4. After that, add a file called id to the ./img/lvls/ section. Example: 49.png
5. Open the ./lvls section. Copy the code from the example.html file. Create a file with the name of the level id. Example: 21.html. Now you should paste the code from example.html into your file. Now you have to replace the text.  <hr />
 
**__How to add a record under the level?__**
1. Open the file with the level you need in the ./lvls/ directory.
2. Find the block of code with the table. It will look something like this:
```js
  <table>
    <tr class="first-tr">
      <td><h5>Player</h5></td>
      <td><h5>Progress</h5></td>
      <td><h5>Proofs</h5></td>
    </tr></div>
    <tr>
      <td>Name</td>
      <td>100%</td>
      <td><a href="#">YouTube</a></td>
    </tr>
  </table>
```
  3. To add a new record, you must copy the last block of <tr> tags. After that, paste it after the last <tr> tag block.
  4. It remains only to change the nickname, record and link to proofs.
