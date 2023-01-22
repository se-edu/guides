{% set title="Using GitHub Actions" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

{% from "scripts/macros.njk" import embed with context %}

# {{ title }}

<div class="lead">

[GitHub Actions](https://github.com/features/actions) is CI/CD tool integrated into GitHub.
</div>

<!-- ==================================================================================================== -->

## Setting up a custom workflow

In the simplest case, setting up is a matter of adding a `.yml` file into the `[root]\.github\workflows` folder ([example](https://github.com/se-edu/duke/blob/full-template/.github/workflows/gradle.yml)).

GitHub Actions will run the workflow (as per the `.yml` file) every time certain project events are triggered (e.g., when a PR is updated, or the `master` branch is updated).


<!-- ==================================================================================================== -->
## Resources

* [GitHub Actions documentation](https://help.github.com/en/actions)
