# Text UI Testing Tutorial

1. Create a folder `[project root]\text-ui-test`
1. Add a `runtest.bat` (if you are on Windows) or `runtest.sh` (if you are on a *nix OS) into the folder, containing the script below.<br>
  `runtest.bat`:
   ```
   @ECHO OFF
   
   REM create bin directory if it doesn't exist
   if not exist ..\bin mkdir ..\bin
   
   REM delete output from previous run
   del ACTUAL.TXT
   
   REM compile the code into the bin folder
   javac  -cp ..\src -Xlint:none -d ..\bin ..\src\main\java\Duke.java
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
   
   `runtest.sh`:
   ```shell
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
   if ! javac -cp ../src -Xlint:none -d ../bin ../src/main/java/Duke.java
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
1. Update the `javac` and `java` commands in the script to match the name/location of your main class.
1. Add an `EXPECTED.txt` to the same folder, containing the expected output.
1. Add an `input.txt` containing the input commands.
1. Run the `.bat`/`.sh` file to execute the test.

--------------------------------------------------------------------------------
**Authors:**
* Initial Version: based on se-edu/addressbook-level2, adapted by Jeffry Lum
