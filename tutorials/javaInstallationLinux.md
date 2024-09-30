{% set title="Java 17 Installation Guide for Linux Users" %}
<frontmatter>
  title: "{{ title }}"
  pageNav: 2
</frontmatter>

# {{ title }}

This guide explains how to install the **==[OpenJDK Java 17](https://openjdk-sources.osci.io/openjdk17/)==** on Linux. This guide was created using Ubuntu 22.04 but the steps for other Linux distros should be similar.

## Installation Using APT (requires `sudo`)
This should be the default option for users with admin access to their system and have access to Advanced Packaing Tool (`apt`).

* **Update APT repositories** {{ step_numbers }}
   * First we need to ensure our apt repositories are updated. Enter the following command in your terminal: 
     ```bash
     sudo apt update && sudo apt upgrade
     ```
     Enter your password if prompted.
* **Install JDK**
   * Install the Java 17 OpenJDK version by running:
     ```bash
     sudo apt install openjdk-17-jdk 
     ```
* **Verify Installation**
   * To verify the installation, run:
     ```bash
     java -version
     ```

<!-- ======================================================================= -->

## Switching between Java versions

If you have multiple versions of Java installed, you can switch between them using SDKMAN.

* **To see the currently active Java version** run,
  ```bash
  ```
* **To switch to a different installed version**, run the following command.
  ```bash
  ```
* **If you don't have the desired version installed**, you can install it by running the following command (as before):
  ```bash
  ```
* **To set a different version as the default**, use the following command (as before):
  ```bash
  ```

--------------------------------------------------------------------------------

**Authors:**
* Initial Version: Drustan Yeo ([@drustanyjt](https://github.com/drustanyjt))
