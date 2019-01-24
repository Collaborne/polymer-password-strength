# `<password-strength>`
## A Polymer password strength indicator, powered by [zxcvbn](https://github.com/dropbox/zxcvbn)

[![Build Status](https://travis-ci.org/Collaborne/polymer-password-strength.svg?branch=master)](https://travis-ci.org/Collaborne/polymer-password-strength)

This element was originally developed by Limon Monte.

```html
<div id="random-password"></div>
<password-strength></password-strength>

<script>
  const passwordStrength = document.querySelector('password-strength')
  setInterval(() => {
    const random = Math.random().toString(36).substring(Math.random()*10);
    passwordStrength.password = random;
    document.querySelector('#random-password').innerText = 'Current password: ' + random;
  }, 1000);
</script>
```


# Installation

```bash
npm install --save polymer-password-strength
```

# Usage

```html
<password-strength password="[[ password ]]"></password-strength>
```
