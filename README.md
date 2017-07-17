## Background

> Clickjacking, also known as a "UI redress attack", is when an attacker uses multiple transparent or opaque layers to trick a user into clicking on a button or link on another page when they were intending to click on the the top level page. Thus, the attacker is "hijacking" clicks meant for their page and routing them to another page, most likely owned by another application, domain, or both.

> Using a similar technique, keystrokes can also be hijacked. With a carefully crafted combination of stylesheets, iframes, and text boxes, a user can be led to believe they are typing in the password to their email or bank account, but are instead typing into an invisible frame controlled by the attacker.

- [OWASP](https://www.owasp.org/index.php/Clickjacking)

## Is this all I need?

No! You should also be setting an appropriate `X-Frame-Options` header. If there are no cases in which your application can be embedded, the safest thing to do is deny framing:

```http
X-Frame-Options: DENY
```
