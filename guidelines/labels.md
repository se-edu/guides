<frontmatter>
  title: "Working with GitHub labels"
  pageNav: 3
</frontmatter>

# Working with GitHub labels

<div class="lead">

As a project grows, issue/PR labels can play an increasingly important role in managing a large number of issues/PRs. This document has some guidelines that can improve consistency across projects and help make the use of labels more productive.
</div>

Unless mentioned otherwise, *labels are applied to issues only* (not PRs).

<!-- ==================================================================================================== -->

## Label groups

While GitHub does not have the concept of label groups, we can simulate label groups using systematic label naming.
i.e. labels having the same prefix are considered part of a label group.

There are two types of label groups:

* **Exclusive groups**: No more than one label from the group can be applied to an issue
* **Non-exclusive groups**: Multiple labels from a group can be applied to an issue

*Common label groups*:

* exclusive: `s.` status, `p.` priority, `c.` category, `d.` difficulty, `e.` effort,
* non-exclusive: `a-` aspect, `f-` feature, `t-` tech,

<!-- ==================================================================================================== -->

## Common labels

<!-- ------------------------------------------------------------------------------------------------------ -->

### Priority (`p.`)

* `p.Critical`: Would like to fix it ASAP and release as a hot patch.
* `p.Urgent`: Would like to handle in the very next release.
* `p.High`: Enhances user experience significantly, would like to do in the next few releases.
* `p.Medium`: Marginal impact on user experience.
* `p.Low`: Very little impact, unlikely to do in the near future.
* `p.Zero`: Unlikely to do, ever.

NOTE: An issue is considered as _accepted_ when a priority label has been assigned.

<!-- ------------------------------------------------------------------------------------------------------ -->

### Status (`s.`)

* Open issues
  * No status: New issue yet to be triaged.
  * `s.OnHold`: The work on the issue has been put on hold pending some other event.
* Open PR
  * `s.ToReview`: Waiting for the review.
  * `s.Ongoing`: The PR is being worked on.
  * `s.ToMerge`: Main reviewer approved the changes.
  * `s.MergeApproved`: Both main reviewer and the code quality reviewer has approved the merge. PR can be merged.
  * `s.OnHold`: The work on the PR has been put on hold pending some other event.

<!-- ------------------------------------------------------------------------------------------------------ -->

### Category (`c.`)

* Changes to _functionality_, categorized based on size
  * `c.Enhancement`: An enhancement to an existing functionality (not big enough to be considered as a user story).
  * `c.Story` : A user story.<br>
    OR `c.Feature`: A new feature.
  * `c.Epic` or `c.Theme`: A feature that be broken down into many user-stories/features.
* Other work
  * `c.Bug`
  * `c.Task`, `c.Chore`: Other work items such as updating documentation.
  * `c.Message`: Issue used as a means of discussing something with the dev team.<br>
    e.g. a request for help on setting up dev environment.

<!-- ------------------------------------------------------------------------------------------------------ -->

### Difficulty (`d.`)

* `d.Easy`: For new contributors to do as their first PR. MUST be simple enough to be contained in one commit.
* `d.Moderate`: Moderate difficulty. Small localized change.
* `d.Hard`, `d.VeryHard`: More difficult issues that are better left for committers or more senior developers.

<!-- ------------------------------------------------------------------------------------------------------ -->

### Effort (`e.`)

This label can be used to indicate how much effort is expected for (or was spent on) an issue.

`e.1` is roughly equal to an hour of work, `e.2` is two hours of work, and so on. Recommended values: 1,2,4,8,16,32

Effort labels can be applied to PRs indicate effort for reviewing (by the main reviewer). Those applied for issues can indicate
the effort for fixing the issue.

<!-- ------------------------------------------------------------------------------------------------------ -->

### Aspect (`a-`)

Classifies the issues based on the non-functional aspect it tackles. Some examples:


Label |Description
------|-----------
`a-AccessControl` |Controlling access to user groups, authentication, privacy, anonymity
`a-CodeQuality` |Refactorings that are mainly to improve code/design quality
`a-Concurrency` |Things related to concurrent access, session control
`a-DevOps` |CI, release management, version control, dev docs
`a-Docs` |User docs, product website
`a-FaultTolerance` |Resilience to user errors, environmental problems
`a-Performance` |Speed of operation
`a-Persistence` |Saving data permanently
`a-Scalability` |Related to behavior at increasing loads
`a-Security` |Protection from security threats
`a-Testing` |Testing efficiency and robustness (as opposed to testing a specific feature)
`a-UIX` |User interface, User experience, Responsiveness

<!-- ------------------------------------------------------------------------------------------------------ -->

### Feature (`f-`)

Classifies the issue based on the feature it involves. These labels depend on the project.
e.g. `f-Admin`, `f-Sessions`, `f-Delete`

<!-- ------------------------------------------------------------------------------------------------------ -->

### Tech (`t-`)

Classifies the issue based on the tool/technology it involves. Some examples given below.

Label |Description
------|-----------
`t-CSS` |CSS, Bootstrap
`t-HTML` |HTML, Browsers
`t-JS` |Javascript, JQuery
`t-JSTL` |JSTL, JSP, Servlets

<!-- ------------------------------------------------------------------------------------------------------ -->

### Special labels

* `good first issue`: for first time contributors (note that [GitHub treats this label in a special way](https://help.github.com/en/github/building-a-strong-community/encouraging-helpful-contributions-to-your-project-with-labels))
* `kudos`: to appreciate good work done in a PR

<!-- ==================================================================================================== -->

## Other guidelines

* When choosing label colors:
  * Choose bright colors for labels that should get more attention. https://github.com/oss-generic/process/labels?sort=name-asc[Here] are some sample labels with suitable colors.
  * Label groups that represent a scale (e.g., difficulty, effort, severity) can be given increasingly darker shades of the same color ([example](https://github.com/oss-generic/process/labels?q=e.))
* Use UpperCamelCase for label names; Keep group prefixes short and use lower case.
