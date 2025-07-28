{% set title="Java 17 Installation Guide for Windows Users" %}
<frontmatter>
title: "{{ title }}"
pageNav: 2
</frontmatter>

# {{ title }}

This guide explains how to install the **==[Oracle Java 17 JDK](https://www.oracle.com/java/technologies/downloads/#java17)== on Windows**.

## Installation

* **Download JDK** {{ step_numbers }}
   * Go to the Oracle download site [here](https://www.oracle.com/java/technologies/downloads/#java17).{{ abcd_numbers }}
   * Choose **JDK 17** &rarr; **Windows**.
   * Download the **x64 Installer**:
   <pic src="images/javaInstallationWindows/java_installer_windows.png" width="800">
   
   <box type="tip" seamless>

   Go ahead and sign in if you are prompted by Oracle, or register an account if you haven't done so.

   You may also take a look at the JDK distributors here which do not require an account to install.

   Similar to Oracle, download the **x64 Installer** of **JDK 17** for **Windows**.

   * [**Amazon**](https://docs.aws.amazon.com/corretto/latest/corretto-17-ug/downloads-list.html)<br>
   <pic src="images/javaInstallationWindows/java_installer_amazon.png" width="700" style="padding: 10px;">
   * [**Microsoft**](https://learn.microsoft.com/en-my/java/openjdk/download)<br>
   <pic src="images/javaInstallationWindows/java_installer_microsoft.png" width="800" style="padding: 10px;">
   * [**Temurin**](https://adoptium.net/temurin/releases/?version=17)<br>
   <pic src="images/javaInstallationWindows/java_installer_temurin.png" width="800" style="padding: 10px;">
   </box>

* **Install JDK**
   * Run the downloaded installer and follow the instructions to complete the installation. {{ abcd_numbers }}
   * Suppose the JDK was installed in the directory `C:\Program Files\Java\jdk-17` (this is the default location for Oracle, please check with the installation directory within the installer for other distributors).
   <br>
   <br>

* **Verify installation** by running the following command in your terminal (e.g. Command Prompt, PowerShell). You should see the version information for Java 17.0.16. 
  ```bash
   java -version
   ```

<!-- ======================================================================= -->

## Switching between Java versions

If you have multiple versions of Java installed, you can switch between them by editing the system environment variables. This involves updating the "Path" settings to point to your desired JDK version.

* **To see the currently active Java version** run the following command in a terminal window,{{ step_numbers }}
  ```bash
  java -version
  ```
* **To switch to a different installed version**,
   * Open the Start Menu by clicking the **Start** button on your taskbar or pressing the **Windows** :fab-windows: key on your keyboard.
   * Type "environment variables" in the search bar and click "Edit the system environment variables" from the search results:
     <img src="images/javaInstallationWindows/edit_system_env_var.png" width="720" style="padding: 10px;">
   * In the window that opens, click on the "Environment Variables" button located near the bottom:
     <img src="images/javaInstallationWindows/env_var_button.png" style="padding: 10px;">
   * Scroll through the "System variables" section to find the "Path" variable, select it and click "Edit".
     <img src="images/javaInstallationWindows/edit_path_button.png" style="padding: 10px;">
   * In the "Edit Environment Variable" window, you will see a list of paths. These paths represent directories your system searches to find executables like Java.
      * To prioritize a different Java version: Find the path to your desired Java installation (e.g., `C:\Program Files\Java\jdk-17\bin`) and move it to the top of the list.
     
        <img src="images/javaInstallationWindows/move_path_button.png" style="padding: 10px;">
     
      * To add a new Java version: Click "New" and add the path to the bin folder of the Java version you want to use (e.g., `C:\Program Files\Java\jdk-11\bin`).
      
        <img src="images/javaInstallationWindows/new_path_button.png" style="padding: 10px;">
  
   * Click OK on both "Edit Environment Variable" and "Environment Variables" windows to save your changes and close the windows.
* **Verify Version Change** by running the following command in a new terminal window (note: if the terminal window was already open before you changed the system variables, you need to restart the terminal window for it to be able to 'see' the updated system variables):
   ```bash
   java -version
   ```
* **If you already have a `JAVA_HOME` system variable** defined earlier, you need to update it to point to the JDK of your choice. The procedure is similar to how you changed the `Path` variable.
--------------------------------------------------------------------------------

**Authors:**
* Initial Version: Ryan Chiang ([@macareonie](https://github.com/macareonie))
