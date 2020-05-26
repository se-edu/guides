<frontmatter>
title: "HTML Coding Standard"
pageNav: 3
</frontmatter>

{% from 'scripts/macros.njk' import show_example with context %}

# HTML Coding Standard

----------------------------------------------------------------------------------------------------------------

## Document Properties

* **Use the HTML5 Doctype and HTML5 features**

{% call show_example('good') %}
```html{.no-line-numbers}
<!DOCTYPE html>
```
{% endcall %}


* **Do NOT include xml namespace in the document.**

{% call show_example('bad') %}
```html{.no-line-numbers}
<html xmlns="http://www.w3.org/1999/xhtml">
```
{% endcall %}

* **Character Encoding**: All markup should be delivered via the following HTML element as UTF-8, as it is the most friendly for internationalization.

{% call show_example('good') %}
```html{.no-line-numbers}
<meta charset="utf-8">
```
{% endcall %}

* **Responsiveness**: The following tag should be added in order to support mobile browsing.

{% call show_example('good') %}
```html{.no-line-numbers}
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
{% endcall %}


* **Indentation**: Indentation should be 2 spaces for html files. Spaces should be used instead of `tab`.

* **Readability vs Compression**: We prefer readability over file-size savings when it comes to maintaining existing files. Plenty of whitespace is encouraged, along with ASCII art, where appropriate. There is no need for any developer to purposefully compress HTML or CSS, nor obfuscate JavaScript.

* **Markup and inline styling**: Markup defines the structure and outline of a document and offers a structured content. It is not intended to define the look and feel of the content on the page beyond rudimentary concepts such as headers, paragraphs, and lists. The presentation attributes of HTML have all been deprecated and style should be contained in style sheets. Inline styling should not be used, and should be minimized if its usage is really necessary.

* **General structure for HTML document**:

  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>CS2103/T (Module website)</title>

    <!-- Sample stylesheet inclusion -->
    <link type="text/css" href="styles/common.css" rel="stylesheet">
  </head>
  <body>
    <!-- Body content goes here -->

    <!-- Sample javascript inclusion -->
    <script type="text/javascript" src="/js/jquery-minified.js"></script>
  </body>
  </html>
  ```

----------------------------------------------------------------------------------------------------------------

## Tags

* **All HTML tags are to be closed properly.**

{% call show_example('good') %}
```html
<div>Stuff</div>
```
{% endcall %}
{% call show_example('bad') %}
```html
<p>Stuff
<p>More Stuff
```
{% endcall %}


* **Do not use `/>` for _void_ elements.**<br>
  Example of void elements are: `br`, `img`, `link`, `meta`.
  The full list of HTML void elements can be accessed [here](http://www.w3.org/TR/html-markup/syntax.html#void-elements).

{% call show_example('good') %}
```html
<br>
<img src="a" width="5px" height="10px">
```
{% endcall %}
{% call show_example('bad') %}
```html
<br />
<img src="a" width="5px" height="10px" />
```
{% endcall %}


* **Use lowercase for all attributes and tag names.**

{% call show_example('good') %}
```html {.no-line-numbers}
<div id="frame">Test</div>
```
{% endcall %}
{% call show_example('bad') %}
```html {.no-line-numbers}
<DIV ID="frame">Test</div>
```
{% endcall %}

----------------------------------------------------------------------------------------------------------------

## Attributes

* **Use `attr="value"` for attribute values.**

{% call show_example('good') %}
```html
<input value="computer" id="some-input" disabled="disabled" tabindex="2">
```
{% endcall %}
{% call show_example('bad') %}
```html
<!-- single/no quotes -->
<input value=computer id='some-input' disabled='disabled' tabindex=2>

<!-- specify boolean variables in the attributes -->
<input value="computer" id="some-input" disabled tabindex="2">
```
{% endcall %}

----------------------------------------------------------------------------------------------------------------

## Naming

* **Classes: See [CSS Style Guide](../css).**
* **IDs: lower-case, join-by-hyphen.** e.g., `header-content-week3`


----------------------------------------------------------------------------------------------------------------

## Indentation

* **Indentation should be ==2 spaces== for HTML files (not 4).**
* **Spaces should be used instead of `tab`.**

----------------------------------------------------------------------------------------------------------------

## Miscellaneous

* **Follow this format for `script` tags:**

{% call show_example('good') %}
```html {.no-line-numbers}
<script type="text/javascript" src="/js/jquery-minified.js"></script>
```
{% endcall %}
{% call show_example('bad') %}
```html {.no-line-numbers}
<script language="JavaScript" src="/js/jquery-minified.js"></script>
```
{% endcall %}


* **Do not have trailing whitespaces between opening and closing tags.** However, line breaks and indentation are encouraged if it enhances readability.

{% call show_example('good') %}
```html
<p>Student Name</p>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore
et dolore magna aliqua. Ut enim ad minim veniam,
</p>
```
{% endcall %}
{% call show_example('bad') %}
```html
<p> Student Name </p>
```
{% endcall %}

* **Include `rel="noopener noreferrer"` when using `target="_blank"` in links.**

  <box type="info" light >

  RATIONALE: Leaving this out would enable attackers to get hold of `window.opener` object, which can be used to redirect to a malicious link. [[Source](https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c)]
  </box>

{% call show_example('good') %}
```html {.no-line-numbers}
<a target="_blank" rel="noopener noreferrer" href="https://example.com">Example.com</a>
```
{% endcall %}
{% call show_example('bad') %}
```html {.no-line-numbers}
<a target="_blank" href="https://example.com">Example.com</a>
```
{% endcall %}
