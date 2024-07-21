{% set title="Java 17 Installation Guide for Mac Users" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

# {{ title }}

## Introduction

This guide provides detailed steps to install Java JDK-FX 17.0.11.fx-zulu on macOS using SDKMAN.

SDKMAN is a tool that simplifies the process of installing, switching between, and managing multiple versions of software development kits on Unix-based systems. It's particularly useful for Java developers as it allows easy installation and management of different Java versions.

## Installation Steps

### Step 1: Install SDKMAN

1. Open Terminal and install SDKMAN by running:
   ```bash
   curl -s "https://get.sdkman.io" | bash
   ```
2. Follow the instructions on the screen to complete the installation.
3. Restart your terminal or run:
   ```bash
   source "$HOME/.sdkman/bin/sdkman-init.sh"
   ```

### Step 2: Install JDK-FX Using SDKMAN

1. Install the required version (e.g., 17.0.11.fx-zulu) by running:
   ```bash
   sdk install java 17.0.11.fx-zulu
   ```
2. This version should be automatically set as the default, but if it is not, set it as the default by running:
   ```bash
   sdk default java 17.0.11.fx-zulu
   ```

### Step 3: Verify Installation

1. Verify the installation by running:
   ```bash
   java -version
   ```
   You should see the version information for Java 17.0.11.fx-zulu.

## Switching Between Java Versions

If you have multiple versions of Java installed, you can switch between them using SDKMAN.

You can list the currently active Java version by running:
   ```bash
   sdk current java
   ```

### Switch to a Different Java Version

1. To switch to a different installed version, use:
   ```bash
   sdk use java
   ```
   Then press the `TAB` key to see the available versions installed on your computer. Keep pressing `TAB` until you select the desired version.

2. If you don't have the desired version installed, you can install it by running:
   ```bash
   sdk install java <version>
   ```
   After the installation is complete, switch to the newly installed version using:
   ```bash
   sdk use java <version>
   ```

3. To set a different version as the default, use:
   ```bash
   sdk default java <version>
   ```

--------------------------------------------------------------------------------
**Authors:**
* Initial Version: Jay Hong (@hjungwoo01)
