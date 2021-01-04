{% set title="Best practices for reviewing PRs" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 3
</frontmatter>

{% from 'scripts/macros.njk' import step, embed with context %}

# {{ title }}

<div class="lead">

Reviewing PRs is not just about the code or the tools, **the way you phrase your comments matters a too**, especially if you are a peer reviewer.
</div>

<!-- ==================================================================================================== -->

## Best practices for reviewers

* **Add specific comments at relevant places of the code**, rather than give one overall comment for the entire PR.
  * It is typical for the comment to be added right below the code line it refers to.<br>
    It is possible to [mark multiple lines](https://twitter.com/natfriedman/status/1179097330097643521) as linked to the comment too.
  * You can use Markdown (specifically, [GitHub-Flavored Markdown](https://guides.github.com/features/mastering-markdown/)) in your comments.
* ==**It's best to phrase comments as questions**==, especially if you are a peer reviewer.<br>
  e.g., `Should this be extracted out?` rather than `Extract this out` or `This should be extracted out`.
* **Say 'I like', not 'good/bad'**. Consider these two alternatives:<br>
  Option 1: `This separation of X from Y is good` (or `correct` or `wrong` or `bad`)<br>
  Option 2: `I like how you separated X from Y` (or `didn't like` or `Not sure I like`)<br>
  The second one is less judgemental and less likely to cause the author to become defensive.
* **Feel free to ask for more info from the author**, to help you understand the code/design. For example, you can ask why the author chose to write the code in a specific way.
* **You can also suggest alternatives for the author to consider.**<br>
  Combining this with the previous point, you can ask `Any reason why you did it this way instead of that way?`
* **Feel free to compliment the author when appropriate** instead of focusing on negative things only.<br>
  %%e.g., _hey, I like how clean this bit of code is_ :+1:%%
* **Say please, but don't say _please_**. Beware of overusing 'please' as it can be interpreted as a condescending tone. For example, someone can interpret `Please use better variable names` as `Please for the love of God can you use better variable names?`. Instead, you can say `Perhaps a more intuitive variable name here?` which doesn't run any risk of misinterpretation.
* **No need to repeat the same comment _many_ times**. It's not the job of the reviewer to clean up after a sloppy author. If you notice the same problem in multiple places, after commenting an a few of them, you can simply say `... I noticed the same issue in several other places too`.
* **Remember the _other_ readers**. PR comments can be read by people other than the reviewer and the author e.g., future programmers. Use regular English and avoid slang, colloquialisms, cultural references etc.

****Further readings****:
* Read the blog post [**10 tips for reviewing code you don’t like**](https://developers.redhat.com/blog/2019/07/08/10-tips-for-reviewing-code-you-dont-like/) - by David Lloyd (a Red Hat developer).

<!-- ==================================================================================================== -->

## Best practices for authors

* **Don't get into arguments with reviewers.** If you disagree with the reviewer, you can explain your own view in a non-confrontational way without trying to prove your way is better.
* Thank reviewers for their inputs.
