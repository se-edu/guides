{% set title="Java 17 Installation Guide for Mac Users" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

# {{ title }}

This guide explains how to install the **==[Java 17 JDK+FX Azul distribution](https://www.azul.com/downloads/?version=java-17-lts&os=macos&package=jdk-fx#zulu)== on macOS using SDKMAN**.

**Why this specific version of JDK?**

* This version comes with <tooltip content="a Java framework used to develop Java GUI programs">JavaFX</tooltip> (which is not included in most <tooltip content="different versions or implementations of the Java Development Kit (JDK), for example, Oracle JDK and OpenJDK">JDK distros</tooltip>).
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
     sdk install java 17.0.11.fx-zulu
     ```
   * This version should be automatically set as the default, but if it is not, set it as the default by running:
     ```bash
     sdk default java 17.0.11.fx-zulu
     ```
* **Verify installation** by running the following command. You should see the version information for Java 17.0.11.fx-zulu.
   ```bash
   java -version
   ```

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
