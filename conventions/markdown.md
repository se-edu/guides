<frontmatter>
title: "Markdown coding standard"
</frontmatter>

{% from 'scripts/macros.njk' import show_example with context %}

# Markdown coding standard

* The term 'markdown' in this document refers to _GitHub Flavored Markdown_.
* **Follow the syntax as strictly as specified** [here](https://guides.github.com/features/mastering-markdown/).

  <box type="info" seamless>

  RATIONALE: Minor deviations from the markdown syntax are sometimes forgiven by GitHub markdown rendering but may not be forgiven by [GitHub Pages html rendering](https://github.blog/2016-12-09-publishing-with-github-pages-now-as-easy-as-1-2-3/).
  </box>

* **Do not wrap lines at a specific length.** Coding standards for other languages typically specify a maximum length for a statement. However, Markdown is used to write natural language content which should not be chopped into a sentence fragments.

  <box type="info" seamless>

  RATIONALE: Doing so could throw off grammar checkers, and make it harder to modify content later (because a simple change might require re-sizing many adjacent lines).
  </box>

* **Add a blank line at the beginning of a list.**
{% call show_example('good') %}
```markdown
Here is a list:

* item 1
* item 2
```
{% endcall %}
{% call show_example('bad') %}
```markdown
Here is a list:
* item 1
* item 2
```
{% endcall %}


* **Add a blank line at the beginning of a code block.**

* **Add a space at the start of a heading.**

{% call show_example('good') %}
```markdown
# Heading
```
{% endcall %}
{% call show_example('bad') %}
```markdown
#Heading
```
{% endcall %}

* **Use blank lines to separate headings**

{% call show_example('good') %}
```markdown
## Heading

Content of the paragraph.
```
{% endcall %}
{% call show_example('bad') %}
```markdown
## Heading
Content of the paragraph.
```
{% endcall %}

* **Use blockquote symbol in every line of the blockquote.**

{% call show_example('good') %}
```markdown
> first line
> second line
```
{% endcall %}
{% call show_example('bad') %}
```markdown
> first line
  second line
```
{% endcall %}


* **Use generic numbering for ordered lists.** i.e., use `1.` for every item in an ordered list can make it easy to insert more items later. Generic numbers are converted to the correct numbers by GitHub markdown renderer.

  <box type="info" seamless>

  RATIONALE: If you use generic numbers, you can insert items into the middle of the list without modifying any existing items.
  </box>

{% call show_example('good') %}
```markdown
1. item 1
1. item 2
1. item 3
```
{% endcall %}
{% call show_example('bad') %}
```markdown
1. item 1
2. item 2
3. item 3
```
{% endcall %}

* **Use `*` for bullet-points** (not `-`).

  <box type="info" seamless>

  RATIONALE: Although both work, `*` closer to the final outcome.
  </box>

{% call show_example('good') %}
```markdown
* item 1
* item 2
* item 3
```
{% endcall %}
{% call show_example('bad') %}
```markdown
- item 1
- item 2
- item 3
```
{% endcall %}

* **Use `_` for italics** (not `*`).

  <box type="info" seamless>

  RATIONALE: Although both work, `_` is easier to relate to italics.
  </box>

{% call show_example('good') %}
```markdown
He _really_ meant it.
```
{% endcall %}
{% call show_example('bad') %}
```markdown
He *really* meant it.
```
{% endcall %}