{% set title = "Intellij IDEA: Configuring the JDK" %}
<frontmatter>
  title: "{{ title }}"
</frontmatter>

# {{ title }}

1. **Ensure you have installed a suitable {{ jdk_popover }}**, as explained in our [Java Installation Guides](javaInstallation.html).

1. **Install IntelliJ IDEA**: You can get it from [here](https://www.jetbrains.com/idea/download). Either the Community Edition (free) or the Ultimate Edition (free for students) will do.

1. **Configure the JDK.**

<div class="indented-level1">

<box type="info" seamless>

Note: step (b) is needed only if your project is using Gradle (i.e., if there is a `build.gradle` file in the project root folder).
</box>

<include src="intellijImportGradleProject.md#configure-intellij-sdk" />
<p/>
</div>

4. **Create your first project.**

<tabs>
  <tab header="{{ icon_text }}">

* [[IntelliJ Official Tutorial] **Creating, Running and Packaging Your First Java Application**](https://www.jetbrains.com/help/idea/creating-running-and-packaging-your-first-java-application.html)

</tab>
<tab header="{{ icon_video }}">

@[youtube](c0efB_CKOYo)

A slightly more detailed explanation %%(from CodeLaunch)%% with some additional info at the end.

@[youtube](https://www.youtube.com/watch?v=S764o0mAXhg)

  </tab>
</tabs>

