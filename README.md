<h1 style="color: white; text-align: center;">Yosemite</h1>
<br><br>

<p style="text-align: center;">This is designed to be easy for even a noob at coding can use.<br><br><br><a style="color: red;">README.md will be updated and a docs will be made soon.</a></p>

<br><br>
-----
<h4 style="color: white; text-align: center;">Basic Usage</h4>
<br>
<p>This is for generating a password. For the options you need the <a style="color: #FF1493;">Length</a> + <a style="color: #FF1493;">one or more of the true/false options set to true</a> to work unless it will console.log a error.</p>

```js
  const i = Yosemite({
    Feature: 'Generator-Password',
    Options: {
      Length: 20,
      Uppercase: false,
      Lowercase: true,
      Numbers: false,
      Symbols: false
    }
  });
  
  console.log(i);
```

