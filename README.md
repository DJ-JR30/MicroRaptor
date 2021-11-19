<h1 style="color: goldenrod; text-align: center;">MicroRaptor</h1>

<h4 style="text-align: center;">Badges</h4>
![Version](https://img.shields.io/badge/Version-1.0.13-HEX(CB3837))
-----
<br>
-----

<p style="text-align: center;">This is designed to be easy for even a noob at coding can use.<br><br><br><a style="color: red;">README.md will be updated and a docs will be made soon.</a><br><br><br>Difference between 1.0.0 - 1.0.12<br>Change name from before because name in-use.</p>

<br><br>
-----
<br>
<h4 style="text-align: center;">Define package</h4>
<br>

```js
  const { MicroRaptor } = require('micro-raptor');
```

<br>
-----
<h4 style="color: white; text-align: center;">Password Generator Usage</h4>
<br>
<p>This is for generates a password. For the options you need the <a style="color: #FF1493;">Length</a> + <a style="color: #FF1493;">one or more of the true/false options set to true</a> to work unless it will console.log a error.</p>

```js
  const i = MicroRaptor({
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


-----

<h4 style="text-align: center;">UUID Generator Usage</h4>
<br>
<p>This generates a uuidv4. You have to have the options type.</p>
<br><br>
<p style="color: red; text-align: center;">v1 and v5 will be added later.</p>


```js
  const i = MicroRaptor({
    Feature: 'Generator-UUID',
    Options: {
      Type: 4
    }
  });
  
  console.log(i);
```


-----

<h4 style="text-align: center;">Tempature Convertor Usage</h4>
<br>
<p>This converts Tempature to °C or to °F. You have to have the options type.</p>
<br><br>

```js
  const i = MicroRaptor({
    Feature: 'Convert-Tempature',
    Options: {
      Tempature: 86,
      ConversionTo: 'C'
    }
  });
  
  console.log(i);
```

ConversionTo can equal the following:

`C`,`c`,`Celsius`,`celsius`
`F`,`f`,`Farenheit`,`farenheit`

-----

<h4 style="text-align: center;">Format Commas Usage</h4>
<br>
<p>This will format numbers. You have to have the options type.</p>
<br><br>



```js
  const i = MicroRaptor({
    Feature: 'Format-Commas',
    Options: {
      Numbers: '1,000,000',
      Commas: 'Auto'
    }
  });
  
  console.log(i);
```

Commas option default is `Auto` but it can also be `auto`, `true`, and `false`.


