{% set title="VS Code - Community Resources" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 0
</frontmatter>

# {{ title }}

<box type="warning">

This page contains **'community resources' contributed by students**.
</box>

## Importing a Gradle project

<box type="tip" seamless>

If the project comes with Gradle support, you will see a build.gradle file in your project root.
</box>

<box type="warning" seamless>

Install the [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack) extension to enable support for Java extensions.  
Go to `Extensions` → Search `Extension Pack for Java` → Install.
</box>

1. Open Visual Studio Code.

2. If you are in the welcome screen, Click Open. Otherwise, click File -> Open.
   i. Select the project directory, and click Open.

3. Confirm the correct Java version is being used for Gradle, as follows:

    (a) Confirm the project JDK is set to the one you are supposed to use for the project, as given in the panel below:

    i. Open the Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).

    ii. Type "Java: Configure Java Runtime" and select it.

    iii. Check that the JDK version matches the one required for your project. If not, you can install the required JDK and configure it.

    **Note:** MacOS users need to download Azul Zulu compatible with their machine and Java 17, with the Java Package specified as JDK FX.

    (b) Confirm the correct JVM is used for Gradle, as given in the panel below:

    <panel header="VSCode: Setting the JVM for Gradle">

    1. Install the Gradle Extension: Search for "Gradle" in the Extensions view (`Ctrl+Shift+X`), and install a Gradle extension if you haven’t already (e.g., Gradle for Java).
    2. Open settings.json: You can find it by opening the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`), then typing "Preferences: Open User Settings (JSON)".
    3. Add or modify the following settings to configure the JVM for Gradle:

        ```
        {
          "java.configuration.runtimes": [
            {
              "name": "JavaSE-17",
              "path": "/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home"
            }
          ],
          "java.import.gradle.java.home": "/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home"
        }
        ```

    </panel>

4. After the importing of the project is complete (which could take a few minutes), you will see the Gradle Tab in the VSCode interface e.g., look for the elephant icon on the left and click it.
