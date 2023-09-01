<frontmatter>
  title: "Automating the testing of text UIs"
  pageNav: 2
</frontmatter>

# Automating the testing of text UIs

<div class="lead">

[_I/O redirection_ technique](https://se-education.org/se-book/testing/#automated-testing-of-cli-applications:~:text=Automated%20testing%20of%20CLI%20applications) can be used to semi-automate the testing of text UIs.
</div>

Sections below explain how to use that technique in a small project.

## Setting up

Given below are the steps to set it up for a project.

1. Create a folder to hold the relevant files e.g., `[project root]\text-ui-test`
1. Add a `runtest.bat` (if you are on Windows) or `runtest.sh` (if you are on a *nix OS) into the folder, containing the script below.<br>

   <tabs>
   <tab header="`runtest.bat`">

   ```bat
   @ECHO OFF

   REM create bin directory if it doesn't exist
   if not exist ..\bin mkdir ..\bin

   REM delete output from previous run
   del ACTUAL.TXT

   REM compile the code into the bin folder
   javac  -cp ..\src\main\java -Xlint:none -d ..\bin ..\src\main\java\*.java
   IF ERRORLEVEL 1 (
       echo ********** BUILD FAILURE **********
       exit /b 1
   )
   REM no error here, errorlevel == 0

   REM run the program, feed commands from input.txt file and redirect the output to the ACTUAL.TXT
   java -classpath ..\bin Duke < input.txt > ACTUAL.TXT

   REM compare the output to the expected output
   FC ACTUAL.TXT EXPECTED.TXT
   ```
   </tab>
   <tab header="`runtest.sh`">

   ```sh
   #!/usr/bin/env bash

   # create bin directory if it doesn't exist
   if [ ! -d "../bin" ]
   then
       mkdir ../bin
   fi

   # delete output from previous run
   if [ -e "./ACTUAL.TXT" ]
   then
       rm ACTUAL.TXT
   fi

   # compile the code into the bin folder, terminates if error occurred
   if ! javac -cp ../src/main/java -Xlint:none -d ../bin ../src/main/java/*.java
   then
       echo "********** BUILD FAILURE **********"
       exit 1
   fi

   # run the program, feed commands from input.txt file and redirect the output to the ACTUAL.TXT
   java -classpath ../bin Duke < input.txt > ACTUAL.TXT

   # compare the output to the expected output
   diff ACTUAL.TXT EXPECTED.TXT
   if [ $? -eq 0 ]
   then
       echo "Test result: PASSED"
       exit 0
   else
       echo "Test result: FAILED"
       exit 1
   fi
   ```
   </tab>
   </tabs>
   <br>

1. Update the `javac` and `java` commands in the script to match the name/location of your main class.<br>
   If you are using packages, the two commands need to take the packages into account too.
1. Add an `input.txt` containing the input commands.
1. Add an `EXPECTED.txt` to the same folder, containing the expected output.
1. Run the `.bat`/`.sh` file to execute the test.
   * If the actual output matches the EXPECTED.TXT, the test passes.
   * If the actual output differs from the EXPECTED.TXT, the script will report a failure.


## Updating tests as the program evolves

The purpose of testing as explained in the previous section is to confirm there are no <tooltip content="i.e., _unintentional_ behavior changes">_regressions_</tooltip>. However, we often update the behavior of the program intentionally e.g., enhance an existing feature. Let's look at how to update our test set up in those cases.

**Option 1:** This is the ideal but more tedious approach.
1. Determine how the expected behavior _should_ change due to your update to the code.
1. Update the `EXPECTED.TXT` file accordingly.
1. Run the test to confirm the actual behavior is same as the _updated_ expected behavior.

**Option 2:** This is a more practical shortcut.
1. Run the test as per normal after updating the code. The test will fail because the new program behavior is different from the one given in the `EXPECTED.TXT`.
1. Use a diff tool to compare the `ACTUAL.TXT` against the `EXPECTED.TXT`.<br>
   {{ icon_tip }} [Intellij IDEA can compare two files](https://www.jetbrains.com/help/idea/comparing-files-and-folders.html). There are stand-alone tools for comparing files too e.g., WinDiff, WinMerge
1. Confirm the differences indicate the behavior has changed as you intended. If the differences are not as intended, your code is buggy; fix the code and repeat from step 1.
1. Copy over the content of the `ACTUAL.TXT` to `EXPECTED.TXT` i.e., we accept that the current actual behavior should be the new _expected_ behavior. Rerun the test to confirm that it passes this time.

## Troubleshooting

* **Problem**: The `ACTUAL.TXT` and `EXPECTED.TXT` looks exactly the same but the test fails.<br>
**Explanation**: The likely cause that the line endings are different (not visible to the naked eye) because the two files were created in two different operating systems.<br>
**Solution**: You can use the `dos2unix` utility (available in git-bash and *nix operating systems) to convert a file to Unix format.

--------------------------------------------------------------------------------
**Authors:**
* Initial Version: based on se-edu/addressbook-level2, adapted by Jeffry Lum
