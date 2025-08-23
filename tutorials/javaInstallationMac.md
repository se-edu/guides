{% set title="Java 17 Installation Guide for Mac Users" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

# {{ title }}

This guide explains how to install the {{ jdk_popover}} (specifically, **==[Java 17 JDK+FX Azul distribution](https://www.azul.com/downloads/?version=java-17-lts&os=macos&package=jdk-fx#zulu)==) on macOS using SDKMAN**.

**Why this specific version of JDK?**

* This version comes with <tooltip content="a Java framework used to develop Java GUI programs">JavaFX</tooltip> (which is not included in most <popover content="'distros' is a shorter term for 'distributions'. So, 'JDK distros' are different versions or implementations of the Java Development Kit (JDK) e.g., Oracle JDK, OpenJDK, Azul JDKs etc.">JDK distros</popover>).
* This version is resilient to <tooltip content="e.g., a GUI created using an ARM Mac might not work on an Intel Mac, and vice versa">compatibility issues between Mac ARM and Mac Intel computers</tooltip>  when creating/running Java GUI applications built using JavaFX.

**Why SDKMAN**? [SDKMAN](https://sdkman.io/) simplifies the process of installing, switching between, and managing multiple versions of <tooltip content="Software Development Kits e.g., JDK for Java">SDKs</tooltip> on Unix-based systems.

## Installation

* **Install SDKMAN** if you don't have it already.{{ step_numbers }}
   * Open Terminal and run the following command.{{ abcd_numbers }}
     ```bash
     curl -s "https://get.sdkman.io" | bash
     ```
   * Follow the instructions on the screen to complete the installation.
   * Restart your terminal or run:
     ```bash
     source "$HOME/.sdkman/bin/sdkman-init.sh"
     ```
   * To verify the installation, run:
     ```bash
     sdk version
     ```
* **Install JDK using SDKMAN**
   * Install the Java 17 JDK FX version (codename Zulu) by running:{{ abcd_numbers }}
     ```bash
     sdk install java 17.0.14.fx-zulu
     ```
   * This version should be automatically set as the default, but if it is not, set it as the default by running:
     ```bash
     sdk default java 17.0.14.fx-zulu
     ```
   <box type="tip" seamless>

   **If your installation terminated prematurely** (e.g., due to a network connectivity issue), it can result in an incomplete installation that will get in the way of future re-installations (i.e., `sdk install` command will give the error `HTTP server doesn't seem to support byte ranges. Cannot resume.`).<br>
     Remedy: Run the `sdk flush` command to purge the previous incomplete installation.
   </box>

* **Verify installation** by running the following command. You should see the version information for Java 17.0.14.fx-zulu.
   ```bash
   java -version
   ```
   <box type="tip" seamless>

   To find where the currently-active JDK is located, you can run the `which java` command (it is typically somewhere inside `~/.sdkman/candidates/java/` folder).
   ```bash
   which java

   ~/.sdkman/candidates/java/current/bin/java
   ```
   </box>

If you encountered issues while following the above instructions, you can also watch the video below for a more visual explanation (note that the JDK version it uses is not the one we want -- so, adapt accordingly).

<panel type="seamless" header="video: using SDKMAN to install multiple Java versions" peek>

@[youtube](5cc8IZRvRcI)

</panel>
<p/>

<!-- ======================================================================= -->

## Switching between Java versions

If you have multiple versions of Java installed, you can switch between them using SDKMAN.

* **To see the currently active Java version** run,
  ```bash
  sdk current java
  ```
* **To switch to a different installed version**, run the following command first.
  ```bash
  sdk use java
  ```
  Then press the <kbd>Tab</kbd> key to see the available versions installed on your computer. Keep pressing the same key until you select the desired version, and hit <kbd>Enter</kbd>.<p/>
* **If you don't have the desired version installed**, you can install it by running the following command (as before):
  ```bash
  sdk install java <version>
  ```
* **To set a different version as the default**, use the following command (as before):
  ```bash
  sdk default java <version>
  ```

--------------------------------------------------------------------------------

**Authors:**
* Initial Version: Jay Hong ([@hjungwoo01](https://github.com/hjungwoo01))
