## Background

> Clickjacking, also known as a "UI redress attack", is when an attacker uses multiple transparent or opaque layers to trick a user into clicking on a button or link on another page when they were intending to click on the the top level page. Thus, the attacker is "hijacking" clicks meant for their page and routing them to another page, most likely owned by another application, domain, or both.

> Using a similar technique, keystrokes can also be hijacked. With a carefully crafted combination of stylesheets, iframes, and text boxes, a user can be led to believe they are typing in the password to their email or bank account, but are instead typing into an invisible frame controlled by the attacker.

- [OWASP Clickjacking](https://www.owasp.org/index.php/Clickjacking)

> One way to defend against clickjacking is to include a "frame-breaker" script in each page that should not be framed. The following methodology will prevent a webpage from being framed even in legacy browsers, that do not support the X-Frame-Options-Header.

- [OWASP Clickjacking Defense Cheat Sheet](https://www.owasp.org/index.php/Clickjacking_Defense_Cheat_Sheet)

## What this library does

ember-anti-clickjacking adds some JavaScript that runs before the application
boots and prevents it from being rendered within the context of another page.

## Is this all I need?

No! Defense in depth is important for protecting against clickjacking because
of variations among browsers.

You should also be setting an appropriate `X-Frame-Options` header. If there are
no cases in which your application can be embedded, the safest thing to do is
deny framing altogether:

```http
X-Frame-Options: DENY
```

If you're using a
[Content Security Policy]([Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP))
(and you should be!), you should also set an appropriate `frame-ancestors` list.
To prevent embedding altogether, set it to `"none"`:

```http
Content-Security-Policy: frame-ancestors "none";
```

## Options

By default, ember-anti-clickjacking will inject

```html
<style id="antiClickjack">body{display:none !important;}</style>
```

into your `index.html`. This is a protection for some older browsers that allow
attackers to clobber `top.location`. Unfortunately, it doesn't play well with
`<noscript>`. If you're using a Content Security Policy, the `<style>` tag also
requires the `style-src 'unsafe-inline'` directive.

You can turn off the injection of the `<style>` tag as follows:

```js
// config/environment.js:

module.exports = function(environment) {
  var ENV = {
    'ember-anti-clickjacking': {
      style: false
    }
  }
  // ...
};
```
