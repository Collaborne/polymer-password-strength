# `<password-strength>`
## A Polymer password strength indicator, powered by [zxcvbn](https://github.com/dropbox/zxcvbn)

[![Build Status](https://travis-ci.org/limonte/polymer-password-strength.svg?branch=master)](https://travis-ci.org/limonte/polymer-password-strength)
![Bower version](https://badge.fury.io/bo/polymer-password-strength.svg)
[![npm version](https://badge.fury.io/js/polymer-password-strength.svg)](https://www.npmjs.com/package/polymer-password-strength)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/limonte/polymer-password-strength)
![Polymer 2 only](https://img.shields.io/badge/Polymer%202-only-blue.svg)

[Live demo ↗](https://limonte.github.io/polymer-password-strength/components/password-strength/#/elements/password-strength/demos/demo/index.html)

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="password-strength.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<div id="random-password"></div>
<password-strength></password-strength>

<script>
  const passwordStrength = document.querySelector('password-strength')
  setInterval(() => {
    const random = Math.random().toString(36).substring(Math.random()*10)
    passwordStrength.password = random
    document.querySelector('#random-password').innerText = 'Current password: ' + random
  }, 1000)
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
