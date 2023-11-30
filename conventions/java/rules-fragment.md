<sub>Versions: [[Basic Rules]({{baseUrl}}/conventions/java/basic.html)] [[Basic + Intermediate Rules]({{baseUrl}}/conventions/java/intermediate.html)] [[All Rules]({{baseUrl}}/conventions/java/index.html)]</sub>

{{ icon_tip }} Use the [Google Java style guide](https://google.github.io/styleguide/javaguide.html) for any topics not covered in this document.

<span tags="level--intermediate">
<box>

**Legend**: {{ icon_level_basic }} basic rule | {{ icon_level_intermediate }} intermediate rule | {{ icon_level_advanced }} advanced rule
</box>
</span>


- [**Naming**](#naming)
- [**Layout**](#layout)
- [**Statements**](#statements): [Package/Import](#package-and-import-statements) | <span tags="level--advanced"> [Classes and Interfaces](#classes-and-interfaces)
| [Methods](#methods) | </span>[Types](#types) | <span tags="level--intermediate"> [Variables](#variables) | </span>[Loops](#loops) | [Conditionals](#conditionals)
- [**Comments**](#comments)
- [References](#references)
- [Contributors](#contributors)


## **Naming**

**{{ icon_level_basic }} Names representing packages should be in all lower case.**

```java
com.company.application.ui
```

%%{{ icon_info}} [More on package naming](https://docs.oracle.com/javase/tutorial/java/package/namingpkgs.html)%%

For school projects, the root name of the package should be your group name or project name followed by logical group names.` e.g. todobuddy.ui, todobuddy.file etc`.

%%{{ icon_info}} Rationale: Your code is not officially ‘*produced by NUS*’, therefore do not use `edu.nus.comp.*` or anything similar.%%

**{{ icon_level_basic }} Class/enum names must be nouns and written in PascalCase.**

```java
Line, AudioSystem
```

**{{ icon_level_basic }} Variable names must be in camelCase.**

```java
line, audioSystem
```

**{{ icon_level_basic }} Constant names must be all uppercase using underscore to separate words (aka SCREAMING_SNAKE_CASE).**

```java
MAX_ITERATIONS, COLOR_RED
```

**{{ icon_level_basic }} Names representing methods must be verbs and written in camelCase.**

```java
getName(), computeTotalWidth()
```

Underscores may be used in test method names using the following three part format **`featureUnderTest_testScenario_expectedBehavior()`**

e.g. `sortList_emptyList_exceptionThrown()` `getMember_memberNotFount_nullReturned`

Third part or both second and third parts can be omitted depending on what's covered in the test.
For example, the test method `sortList_emptyList()` will test `sortList()` method for all variations of the 'empty list'
scenario and the test method `sortList()` will test the `sortList()` method for all scenarios.

<div tags="level--intermediate">

**{{ icon_level_intermediate }} Abbreviations and acronyms should not be uppercase when used as a part of a name.**
<div class="row">
  <div class="col">

{{ good }}
```java
exportHtmlSource();
openDvdPlayer();
```
  </div>
  <div class="col">

{{ bad }}
```java
exportHTMLSource();
openDVDPlayer();
```
  </div>
</div>

</div>
<div tags="level--intermediate-only">{{ pagebreak }}</div>

**{{ icon_level_basic }} All names should be written in English.**

%%{{ icon_info}} Rationale: The code is meant for an international audience.%%

<div tags="level--intermediate">

**{{ icon_level_intermediate }} Variables with a large scope should have long names, variables with a small scope can have short names.**

Scratch variables used for temporary storage or indices can be kept short. A programmer reading such variables should be able to assume that its value is not used outside a few lines of code. Common scratch variables for integers are `i, j, k, m, n` and for characters `c` and `d`.

%%{{ icon_info }} Rationale: When the scope is small, the reader does not have to remember it for long.%%

</div>

**{{ icon_level_basic }} Boolean variables/methods should be named to sound like booleans**

```java
//variables
isSet, isVisible, isFinished, isFound, isOpen, hasData, wasOpen

//methods
boolean hasLicense();
boolean canEvaluate();
boolean shouldAbort = false;
```
<box type="info" seamless>

As much as possible, use a prefix such as `is`, `has`, `was`, etc. for boolean variable/method names so that linters can automatically verify that this style rule is being followed.
</box>

<div tags="level--basic-only">{{ pagebreak }}</div>

Setter methods for boolean variables must be of the form:

```java
void setFound(boolean isFound);
```

%%{{ icon_info }} Rationale: This is the naming convention for boolean methods and variables used by Java core packages. It also makes the code read like%% normal English e.g. `if(isOpen) ...`

<div tags="level--basic">

**{{ icon_level_basic }} Plural form should be used on names representing a collection of objects.**

```java
Collection<Point> points;
int[] values;
```

%%{{ icon_info }} Rationale: Enhances readability since the name gives the user an immediate clue of the type of the variable and the operations that can be%% performed on  its elements. One space character after the variable type is enough to obtain clarity.

</div>

**{{ icon_level_basic }} Iterator variables can be called *i*, *j*, *k* etc.**

Variables named *j*, *k* etc. should be used for nested loops only.

```java
for (Iterator i = points.iterator(); i.hasNext(); ) {
    ...
}

for (int i = 0; i < nTables; i++) {
    ...
}
```

%%{{ icon_info }} Rationale: The notation is taken from mathematics where it is an established convention for indicating iterators.%%

<div tags="level--intermediate">

**{{ icon_level_intermediate }} Associated constants should have a common prefix.**

```java
static final int COLOR_RED   = 1;
static final int COLOR_GREEN = 2;
static final int COLOR_BLUE  = 3;
```

%%{{ icon_info }} Rationale: This indicates that they belong together, and make them appear together when sorted alphabetically.%%

</div>

## **Layout**

**{{ icon_level_basic }} Basic indentation should be 4 spaces (not tabs).**

```java
for (i = 0; i < nElements; i++) {
    a[i] = 0;
}
```

%%{{ icon_info }} Rationale: Just follow it :far-grin-tongue-squint:%%

**{{ icon_level_basic }} Line length should be no longer than 120 chars.**

Try to keep line length shorter than 110 characters (soft limit). But it is OK to exceed the limit slightly (hard limit: 120 chars). If the line exceeds the limit, use line wrapping at appropriate places of the line.

**Indentation for wrapped lines should be 8 spaces** (i.e. twice the normal indentation of 4 spaces) more than the parent line.

```java
setText("Long line split"
        + "into two parts.");
if (isReady) {
    setText("Long line split"
            + "into two parts.");
}
```

<div tags="level--intermediate">

**{{ icon_level_intermediate }} Place line break to improve readability**

When wrapping lines, the main objective is to improve readability. Do not always accept the auto-formatting suggested by the IDE.

In general:

- Break after a comma.

- Break before an operator. This also applies to the following "*operator-like*" symbols: the dot separator `.`, the ampersand in type bounds `<T extends Foo & Bar>`, and the pipe in catch blocks `catch (FooException | BarException e)`

<div class="indented-level2">

```java
totalSum = a + b + c
        + d + e;
setText("Long line split"
        + "into two parts.");
method(param1,
        object.method()
                .method2(),
        param3);
```
</div>

- A method or constructor name stays attached to the open parenthesis `(` that follows it.

<div class="row indented-level2">
  <div class="col-1">

{{ good }}
  </div>
  <div class="col">

```java
someMethodWithVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongName(
        int anArg, Object anotherArg);
```
  </div>
</div>
<div class="row indented-level2">
  <div class="col-1">

{{ bad }}
  </div>
  <div class="col">

```java
someMethodWithVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryVeryLongName
        (int anArg, Object anotherArg);
```
  </div>
</div>

- Prefer higher-level breaks to lower-level breaks. In the example below, the first is preferred, since the break occurs outside the parenthesized expression, which is at a higher level.

<div class="row indented-level2">
  <div class="col-1">

{{ good }}
  </div>
  <div class="col">

```java
longName1 = longName2 * (longName3 + longName4 - longName5)
        + 4 * longname6
```
  </div>
</div>
<div class="row indented-level2">
  <div class="col-1">

{{ bad }}
  </div>
  <div class="col">

```java
longName1 = longName2 * (longName3 + longName4
        - longName5) + 4 * longname6;
```
  </div>
</div>

- Here are two acceptable ways to format ternary expressions:

<div class="indented-level2">

```java
alpha = (aLongBooleanExpression) ? beta : gamma;
alpha = (aLongBooleanExpression)
        ? beta
        : gamma;
```
</div>

</div>

<div tags="level--intermediate-only">{{ pagebreak }}</div>

**{{ icon_level_basic }} Use K&R style brackets (aka [Egyptian style](https://blog.codinghorror.com/new-programming-jargon/)).**

<div class="row">
  <div class="col">

{{ good }}
```java
while (!done) {
    doSomething();
    done = moreToDo();
}

```
  </div>
  <div class="col">

{{ bad }}
```java
while (!done)
{
    doSomething();
    done = moreToDo();
}
```
  </div>
</div>

%%{{ icon_info }} Rationale: Just follow it. :far-grin-tongue-squint:%%

**{{ icon_level_basic }} Method definitions should have the following form:**

```java
public void someMethod() throws SomeException {
    ...
}
```
<div tags="level--basic-only">{{ pagebreak }}</div>

**{{ icon_level_basic }} The _if-else_ class of statements should have the following form:**

<div class="row">
  <div class="col">

```java
if (condition) {
    statements;
}




```
  </div>
  <div class="col">

```java
if (condition) {
    statements;
} else {
    statements;
}


```
  </div>
  <div class="col">

```java
if (condition) {
    statements;
} else if (condition) {
    statements;
} else {
    statements;
}
```
  </div>
</div>

**{{ icon_level_basic }} The _for_ statement should have the following form:**

```java
for (initialization; condition; update) {
    statements;
}
```

**{{ icon_level_basic }} The _while_ and the _do-while_ statements should have the following form:**

<div class="row">
  <div class="col">

```java
while (condition) {
    statements;
}
```
  </div>
  <div class="col">

```java
do {
    statements;
} while (condition);
```
  </div>
</div>


**{{ icon_level_basic }} The _switch_ statement should have the following form:** ==Note there is no indentation for `case` clauses.==<br>
{{ icon_tip }} Configure your IDE to follow this style instead.

```java
switch (condition) {
case ABC:
    statements;
    // Fallthrough
case DEF:
    statements;
    break;
case XYZ:
    statements;
    break;
default:
    statements;
    break;
}
```

The explicit `//Fallthrough` comment should be included whenever there is a `case` statement without a break statement.

%%{{ icon_info }} Rationale: Leaving out the `break` is a common error, and it must be made clear that it is intentional when it is not there.%%

<div tags="level--intermediate-only">{{ pagebreak }}</div>

**{{ icon_level_basic }} A _try-catch_ statement should have the following form:**

<div class="row">
  <div class="col">

```java
try {
    statements;
} catch (Exception exception) {
    statements;
}


```
  </div>
  <div class="col">

```java
try {
    statements;
} catch (Exception exception) {
    statements;
} finally {
    statements;
}
```
  </div>
</div>

<div tags="level--intermediate">

**{{ icon_level_intermediate }} White space within a statement**

It is difficult to give a complete list of the suggested use of whitespace in Java code. The examples below however should give a general idea of the intentions.

Rule | {{ good }} | {{ bad }}
-----|------------|----------
 Operators should be surrounded by a space character. | `a = (b + c) * d;` | `a=(b+c)*d;`
 Java reserved words should be followed by a white space. | `while (true) {` | `while(true){`
 Commas should be followed by a white space. | `doSomething(a, b, c, d);` | `doSomething(a,b,c,d);`
 Colons should be surrounded by white space when<br> used as a binary/ternary operator.<br>Does not apply to `switch x:`. Semicolons in `for`<br> statements should be followed by a space character. | `for (i = 0; i < 10; i++) {` | `for(i=0;i<10;i++){`

%%{{ icon_info }} Rationale: Makes the individual components of the statements stand out and enhances readability.%%

</div>
<div tags="level--intermediate">

**{{ icon_level_intermediate }} Logical units within a block should be separated by one blank line.**

```java
// Create a new identity matrix
Matrix4x4 matrix = new Matrix4x4();

// Precompute angles for efficiency
double cosAngle = Math.cos(angle);
double sinAngle = Math.sin(angle);

// Specify matrix as a rotation transformation
matrix.setElement(1, 1,  cosAngle);
matrix.setElement(1, 2,  sinAngle);
matrix.setElement(2, 1, -sinAngle);
matrix.setElement(2, 2,  cosAngle);

// Apply rotation
transformation.multiply(matrix);
```
%%{{ icon_info }} Rationale: Enhances readability by introducing white space between logical units. Each block is often introduced by a comment as indicated in the example above.%%

</div>

<div tags="level--basic-only">{{ pagebreak }}</div>

## **Statements**

### **Package and Import Statements**

**{{ icon_level_basic }} Put every class in a package.**

Every class should be part of some package.

%%{{ icon_info }} Rationale: It will help you and other developers easily understand the code base when all the classes have been grouped in packages.%%

<div tags="level--advanced">

**{{ icon_level_advanced }} Put related classes in a single package.**

Package together the classes that are related. For example in Java, the classes related to file writing is grouped in the package `java.io` and the classes which handle lists, maps etc are grouped in `java.util` package.

</div>
<div tags="level--intermediate">

**{{ icon_level_intermediate }} The ordering of import statements must be consistent.**

%%{{ icon_info }} Rationale: A consistent ordering of import statements makes it easier to browse the list and determine the dependencies when there are many%% imports.

<div tags="level--intermediate-only">{{ pagebreak }}</div>
Example:

```java
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.io.File;
import java.io.IOException;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;

import org.loadui.testfx.GuiTest;
import org.testfx.api.FxToolkit;

import com.google.common.io.Files;

import javafx.geometry.Bounds;
import javafx.geometry.Point2D;
import junit.framework.AssertionFailedError;
```

{{ icon_tip }} IDEs have support for auto-ordering import statements. However, note that the default orderings of different IDEs are not always the same. It is recommended that you and your team use the same IDE and stick to a consistent ordering.

</div>

**{{ icon_level_basic }} Imported classes should always be listed explicitly.**

<div class="row">
  <div class="col">

{{ good }}
```java
import java.util.List;
import java.util.ArrayList;
import java.util.HashSet;
```
  </div>
  <div class="col">

{{ bad }}
```java
import java.util.*;


```
  </div>
</div>

%%{{ icon_info }} Rationale: Importing classes explicitly gives an excellent documentation value for the class at hand and makes the class easier to comprehend and maintain. Appropriate tools should be used in order to always keep the import list minimal and up to date. IDE's can be configured to do this easily.%%

<div tags="level--advanced">

### **Classes and Interfaces**

</div>
<div tags="level--advanced">

**{{ icon_level_advanced }} Class and Interface declarations should be organized in the following manner:**

  1. Class/Interface documentation (Comments)
  1. **class** or **interface** statement
  1. Class (static) variables in the order **public**, **protected**, **package** (no access modifier), **private**
  1. Instance variables in the order **public**, **protected**, **package** (no access modifier), **private**
  1. Constructors
  1. Methods (no specific order)

%%{{ icon_info }} Rationale: Make code easy to navigate by making the location of each class element predictable.%%

</div>
<div tags="level--advanced">

### **Methods**

</div>
<div tags="level--advanced">

**{{ icon_level_advanced }} Method modifiers should be given in the following order:**

`<access> static abstract synchronized <unusual> final native`

```java
<access> = public | protected | private
<unusual> = volatile | transient
```

The `<access>` modifier (if present) must be the first modifier.

<div class="row">
  <div class="col">

{{ good }}
```java
public static double square(double a);
```
  </div>
  <div class="col">

{{ bad }}
```java
static public double square(double a);
```
  </div>
</div>


%%{{ icon_info }} Rationale: The most important point here is to keep the *access* modifier as the first modifier. The order is less important for the other modifiers , but it make sense to have a fixed convention.%%

</div>

### **Types**

**{{ icon_level_basic }} Array specifiers must be attached to the type not the variable.**

<div class="row">
  <div class="col">

{{ good }}
```java
int[] a = new int[20];
```
  </div>
  <div class="col">

{{ bad }}
```java
int a[] = new int[20];
```
  </div>
</div>

%%{{ icon_info }} Rationale: The *arrayness* is a feature of the base type, not the variable. Java allows both forms however.%%

<div tags="level--intermediate">

### **Variables**

</div>
<div tags="level--intermediate">

**{{ icon_level_intermediate }} Variables should be initialized where they are declared and they should be declared in the smallest scope possible.**

<div class="row">
  <div class="col">

{{ good }}
```java
int sum = 0;
for (int i = 0; i < 10; i++) {
    for (int j = 0; j < 10; j++) {
        sum += i * j;
    }
}

```
  </div>
  <div class="col">

{{ bad }}
```java
int i, j, sum;
sum = 0;
for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        sum += i * j;
    }
}
```
  </div>
</div>

%%{{ icon_info }} Rationale: This ensures that variables are valid at any time. Sometimes it is impossible to initialize a variable to a valid value where it is declared.  In these cases it should be left uninitialized rather than initialized to some phony value.%%

</div>
<div tags="level--intermediate-only">{{ pagebreak }}</div>
<div tags="level--intermediate">

**{{ icon_level_intermediate }} Class variables should never be declared public** unless the class is a _data class_ with no behavior. This rule does not apply to constants.

{{ bad }}

```java
public class Foo{

   public int bar;

}
```

%%{{ icon_info }} Rationale: The concept of Java information hiding and encapsulation is violated by public variables. Use non-public variables and access functions instead.%%

</div>
<div tags="level--advanced">

**{{ icon_level_advanced }} Avoid unnecessary use of `this` with fields.**

Use the `this` keyword only when a field is shadowed by a method or constructor parameter.

<div class="row">
  <div class="col">

{{ good }}
```java
public User(String name) {
    this.name = name;
    ...
}

```
  </div>
  <div class="col">

{{ bad }}
```java
public User(String name) {
    // 'id' is not shadowed by any method parameters
    this.id = User.getNewId();
    ...
}
```
  </div>
</div>

%%{{ icon_info }} Rationale: to reduce unnecessary noise.%%

</div>

### **Loops**

**{{ icon_level_basic }} The loop body should be wrapped by curly brackets irrespective of how many lines there are in the body.**

<div class="row">
  <div class="col">

{{ good }}
```java
for (i = 0; i < 100; i++) {
    sum += value[i];
}
```
  </div>
  <div class="col">

{{ bad }}
```java
for (i = 0, sum = 0; i < 100; i++)
    sum += value[i];

```
  </div>
</div>

%%{{ icon_info }} Rationale: When there is only one statement in the loop body, Java allows it to be written without wrapping it between `{ }`. However that is error prone and *very* strongly discouraged from using.%%

### **Conditionals**

**{{ icon_level_basic }} The conditional should be put on a separate line.**

<div class="row">
  <div class="col">

{{ good }}
```java
if (isDone) {
    doCleanup();
}
```
  </div>
  <div class="col">

{{ bad }}
```java
if (isDone) doCleanup();


```
  </div>
</div>

%%{{ icon_info }} Rationale: This helps when debugging using an IDE debugger. When writing on a single line, it is not apparent whether the condition is really true or not.%%

<div tags="level--basic-only">{{ pagebreak }}</div>

**{{ icon_level_basic }} Single statement conditionals should still be wrapped by curly brackets.**

<div class="row">
  <div class="col">

{{ good }}
```java
InputStream stream = File.open(fileName, "w");
if (stream != null) {
    readFile(stream);
}
```
  </div>
  <div class="col">

{{ bad }}
```java
InputStream stream = File.open(fileName, "w");
if (stream != null)
    readFile(stream);

```
  </div>
</div>

The body of the conditional should be wrapped by curly brackets irrespective of how many statements.

%%{{ icon_info }} Rationale: Omitting braces can lead to subtle bugs.%%


## **Comments**


**{{ icon_level_basic }} All comments should be written in English.**

Furthermore, use American spelling and avoid local slang.

%%{{ icon_info }} Rationale: The code is meant for an international audience.%%

<div tags="level--intermediate">

**{{ icon_level_intermediate }} Write descriptive header comments for all public classes/methods**.

You MUST write header comments for all classes, public methods. But they _can_ be omitted for the following cases:<br>
i. Getters/setters<br>
ii. When overriding methods (provided the parent method's Javadoc applies exactly _as is_ to the overridden method)

%%{{ icon_info }} Rationale: `public` method are meant to be used by others and the users should not be forced to read the code of the method to understand its exact behavior. The code, even if it is self-explanatory, can only tell the reader HOW the code works, not WHAT the code is supposed to do.%%

</div>
<div tags="level--advanced">

**{{ icon_level_advanced }} All non-trivial private methods should carry header comments.**

%%{{ icon_info }} Rationale: Writing header comments will hep novice programmers to self-detect abstraction problems. e.g. If it is hard to describe the method succinctly, there is something wrong with the method abstraction.%%

</div>
<div tags="level--intermediate-only">{{ pagebreak }}</div>
<div tags="level--basic">

**{{ icon_level_basic }} Javadoc comments should have the following form:**

```java
/**
 * Returns lateral location of the specified position.
 * If the position is unset, NaN is returned.
 *
 * @param x X coordinate of position.
 * @param y Y coordinate of position.
 * @param zone Zone of position.
 * @return Lateral location.
 * @throws IllegalArgumentException  If zone is <= 0.
 */
public double computeLocation(double x, double y, int zone)
        throws IllegalArgumentException {
    //...
}
```

Note in particular:
- The opening `/**` on a separate line.
- **Write the first sentence as a short summary of the method**, as Javadoc automatically places it in the method summary table (and index).
  - In method header comments, the first sentence should start in the form `Returns ...`, `Sends ...`, `Adds ...` (not `Return` or `Returnning` etc.)
- Subsequent `*` is aligned with the first one.
- Space after each `*`.
- Empty line between description and parameter section.
- Punctuation behind each parameter description.
- No blank line between the documentation block and the method/class.
- `@return` can be omitted if the method does not return anything or the return value is obvious from the rest of the comment.
- `@params` can be omitted if _all_ parameters of a method have self-explanatory names or already explained in the main part of the comment i.e., when adding `@param`s to the comment does not add any value. This means the comment will have `@param` for all its parameters, or none.
- When writing Javadocs for overridden methods, the `@inheritDoc` tag can be used to reuse the header comment from the parent method but with further modifications e.g., when the method has a slightly different behavior from the parent method.

Javadoc of class members can be specified on a single line as follows:

```java
/** Number of connections to this database */
private int connectionCount;
```

</div>
<div tags="level--basic">

**{{ icon_level_basic }} Comments should be indented relative to their position in the code.**

<div class="row">
  <div class="col">

{{ good }}
```java
while (true) {
    // Do something
    something();
}
```
  </div>
  <div class="col">

{{ bad }}
```java
while (true) {
        // Do something
    something();
}
```
  </div>
  <div class="col">

{{ bad }}
```java
while (true) {
// Do something
    something();
}
```
  </div>
</div>

%%{{ icon_info }} Rationale: This is to avoid the comments from breaking the logical structure of the program.%%

Note that trailing comments such as the below are allowed as well.

```java
    process('ABC'); // process a dummy String frst
```
</div>

## References

1. Oracle's Java Style Guide https://www.oracle.com/docs/tech/java/codeconventions.pdf
1. Google's Java Style Guide https://google.github.io/styleguide/javaguide.html

## Contributors

* Nimantha Baranasuriya - Initial draft
* Dai Thanh - Further tweaks
* Tong Chun Kit - Further tweaks
* Barnabas Tan - Converted from Google Docs to Markdown Document
