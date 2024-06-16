<frontmatter>
  title: "Using Checkstyle"
  pageNav: 2
</frontmatter>

# Using Checkstyle

<div class="lead">

Checkstyle is a static analysis tool that can check Java code against a set of style rules.
</div>

Given below are some instructions on how to use Checkstyle for some common project tasks.

<!-- ==================================================================================================== -->

## Configuring Checkstyle

Checkstyle expects configuration files for checkstyle (e.g., files that specify which style rules to follow) to be in `./config/checkstyle/` by convention.

The two config files to add are:

* `config/checkstyle/checkstyle.xml`:  Contains the set of code style rules to follow.
* `config/checkstyle/suppressions.xml`: Contains which rules to suppress under in which files.

<box type="tip" seamless>

Checkstyle configuration matching [our Java coding standard](../conventions/java/intermediate.html) can be found in the [AddressBook Level 3 project](https://github.com/se-edu/addressbook-level3/tree/master/config/checkstyle).
</box>

<box type="tip" seamless>

To suppress a rule for a segment of code, you can add in the comment `//CHECKSTYLE.OFF: RuleName` at the start of the code segment and `//CHECKSTYLE.ON: RuleName` at the end of the segment.
</box>


<!-- ==================================================================================================== -->

## Using Checkstyle with Gradle

<div id="config-prereq">

Prerequisite: The two config files `checkstyle.xml` and `suppressions.xml` are present (see the [_Configuring Checkstyle_ section above](#configuring-checkstyle) for more details on these two files).
</div>

Here is an example of relevant lines that should be in the `build.gradle` file.

```groovy {highlight-lines="2,6-8", heading="build.gradle"}
plugins {
    id 'checkstyle'
    // other plugins
}

checkstyle {
    toolVersion = '10.2'
}
```

Some relevant Gradle _tasks_ added by the CheckStyle plugin.
* `checkstyleMain`: checks if the main code complies with the style rules
* `checkstyleTest`: checks if the test code complies with the style rules

For example, you can run `gradlew checkstyleMain checkstyleTest` to verify that all your code complies with the style rules.

<!-- ==================================================================================================== -->

## Using Checkstyle-IDEA plugin

<include src="checkstyle.md#config-prereq" />

Given below are the steps to install the Checkstyle-IDEA plugin so that Intellij can alert you about code style problems as you write code.

1. Install the Checkstyle-IDEA plugin as follows:
   1. `File` \> `Settings` (Windows/Linux), or `IntelliJ IDEA` \> `Settings…​` (macOS)
   1. Select `Plugins` (on the left slide menu in the dialog that pops up)
   1. Select `Marketplace` (on to top center of the same dialog box)
   1. Find the plugin.
   1. Restart the IDE to complete the installation.

1. Click `File` \> `Settings` (Windows/Linux), or `IntelliJ IDEA` \> `Settings…​` (macOS)

1. Click `Tools` \> `Checkstyle`

1. Set `Scan Scope` to `Only Java sources (including tests)`, so that the plugin will run checkstyle for our test source codes as well

1. Ensure that the `Checkstyle version` is set to the one used by the project.<br>
{{ icon_tip }} If your project uses Gradle, you can check the `build.gradle` file to find the correct version.<br>
   ![checkstyle idea scan scope](images/checkstyle/checkstyle-idea-scan-scope.png)

1.  Click the `+` sign under `Configuration File`

1.  Enter an arbitrary description e.g. addressbook

1.  Select `Use a local Checkstyle file`

1.  Use the checkstyle configuration file found at `config/checkstyle/checkstyle.xml`

1.  Click `Next` \> `Finish`

1. Mark `Active` for the newly imported check configuration<br>
  ![checkstyle idea configuration](images/checkstyle/checkstyle-idea-configuration.png)

1. Click `OK`

1. To verify the plugin is set up correctly, temporarily modify the code to violate a style rule (e.g., add an extra line break before an `{`) and run the Checkstyle check using the plugin.<br>
   <img src="images/checkstyle/runCheckstyle.png" width="800" />

#### Troubleshooting

**Problem: When importing `checkstyle.xml`, Checkstyle-IDEA plugin complains that `The Checkstyle rules file could not be parsed. …​ The file has been blacklisted for 60s.`**
* Reason: `checkstyle.xml` is written for a particular version, but the plugin was not configured to the correct version.
* Solution: Ensure that you have selected the correct `Checkstyle
    version` that matches the version in `build.gradle` and have clicked
    `Apply`, as `checkstyle.xml` is written for Gradle’s checkstyle.

**Problem: After setting up `checkstyle.xml`, Checkstyle-IDEA plugin does not seem to highlight the errors / real-time scanning seems broken.**
* Reason: The plugin may not immediately run after setting it up.
* Solution: Restart the IDE.

<!-- ==================================================================================================== -->

## Resources

* [Checkstyle home page](https://checkstyle.sourceforge.io/)
* [Gradle documentation for the Checkstyle plugin](https://docs.gradle.org/current/userguide/checkstyle_plugin.html)
