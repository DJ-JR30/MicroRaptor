<h1 style="color: white; text-align: center;">Yosemite</h1>
<br><br><br><br>


-----
<h4 style="color: white; text-align: center;">Basic Usage</h4>
<br>
<p>This is for generating a password. For the options you need the `Length` + only of the other true/false options to work unless it will console.log a error.</p>

```js
  const i = Yosemite({
    Feature: 'Generator-Password',
    Options: {
      Length: 20,
      Uppercase: false,
      Lowercase: false,
      Numbers: false,
      Symbols: false
    }
  });
  
  console.log(i);
```

