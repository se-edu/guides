<frontmatter>
  title: "Java 17 Installation Guide for Mac Users"
  pageNav: 2
</frontmatter>

# Java 17 Installation Guide for Mac Users

## Introduction

This guide provides detailed steps to install Java JDK-FX 17.0.11.fx-zulu on macOS using SDKMAN.

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

## Conclusion

You have successfully installed Java JDK-FX 17.0.11.fx-zulu on your Mac using SDKMAN. Your environment is now set up to develop JavaFX applications.
