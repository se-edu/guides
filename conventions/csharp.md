<frontmatter>
title: "C# coding standard"
pageNav: 3
</frontmatter>

{% from 'scripts/macros.njk' import show_example with context %}

# C# coding standard

**Important:** Use [CSharpGuidelines](https://github.com/dennisdoomen/CSharpGuidelines) for any topics not covered in this document.

<box>

The coding standard is primarily based on [CSharpGuidelines](https://github.com/dennisdoomen/CSharpGuidelines) (by Aviva Solutions) but differs from it in these ways:

* Structure of the document is adapted from [C# coding standards for .NET](http://se.inf.ethz.ch/old/teaching/ss2007/251-0290-00/project/CSharpCodingStandards.pdf) and [C# Coding Style Guide](http://www.icsharpcode.net/TechNotes/SharpDevelopCodingStyle03.pdf).
* Some examples were taken from other sources listed under [References](#references).
</box>


<!-- --------------------------------------------------------------------------------------------------------- -->

## File Organization

#### 1. Source file name and class name should always match.

MyClass.cs → `public class MyClass { ... }`

#### 2. Directory names should follow namespace for the class.

`System.Windows.Forms.Control` should use the path System\Windows\Forms\Control.cs

<box type="info" seamless>

Do not use namespace name with dots. This will make it easier to map namespaces to the directory layout.
</box>


<!-- --------------------------------------------------------------------------------------------------------- -->

## Formatting

### Layout

#### 1. Avoid putting multiple namespaces or classes per file.

This will make your code more readable and also make it easier to find the .cs file for a particular class.

#### 2. Place _using_ directives at the top of the file, grouped and ordered alphabetically.

```cs
// .NET namespaces first
using System;
using System.Collections;

// Then any other namespaces in alphabetical order
using Company.Business;
using Company.Standard;

using Telerik.Ajax;
using Telerik.WebControls;
```

#### 3. Maintain a common order for each file.

1. Member variable
1. Constructors and Finalizer
1. Nested Enums, Structs and Classes
1. Properties
1. Methods

<box type="info" seamless>

Sequence declaration within type groups are based on StyleCop's SA1202 ordering: `public, internal, protected internal, protected, private`.
</box>


### Indentation

#### 1. Basic indentation should be 4 spaces(not tabs).

```cs
// A Hello World! program in C#.
using System;

namespace HelloWorld
{
    class Hello 
    {
        static void Main() 
        {
            Console.WriteLine("Hello World!");
        }
    }
}
```

#### 2. Maximum line length is 130 characters.

When an expression does not fit, follow the general guidelines:

* Break after a comma
* Break after an operator
* Align the new line with the beginning of the expression at the same level on the previous line
* Prefer higher-level breaks to lower-level breaks

Example of breaking up method calls:

{% call show_example('good') %}
```cs
longMethodCall(expr1, expr2,
               expr3, expr4, expr5);
```
{% endcall %}
{% call show_example('bad') %}
```cs
longMethodCall(expr1, expr2
        ,expr3, expr4, expr5);
```
{% endcall %}

Example of breaking an arithmetic expression:

{% call show_example('good') %}
```cs
var result = a * b / (c - g + f) +
             4 * z;
```
{% endcall %}
{% call show_example('bad') %}
```cs
var result = a * b / (c - g +
             f) + 4 * z;
```
{% endcall %}


The top one is preferred, since the break occurs outside the parenthesized expression, which is higher-level.

#### 3. Always place curly braces on a new line.

This is known as the https://en.wikipedia.org/wiki/Indent_style#Allman_style[Allman style].

```cs
while (x < y)
{
    firstMethod();
    secondMethod();
}

lastMethod();
```

#### 4. Always put curly braces even if it might not be required.

Such as having only one statement in the `if` clause. This is to enforce consistency.

```cs
if (x > y) 
{
    doSomething();
}
```

### White Space

#### 1. General guidelines.

* Keywords like `if`, `while` should be followed by a white space.
* Semicolons in `for` statements should be followed by a white space.
* Commas should be followed by a white space.
* Add a white space around operators like `+`, `-`, `==` etc.
* Do not add white space after `(` and before `)`.

Examples:

{% call show_example('good') %}
`a = (b + c) * d;`{.cs}<br>
`while (true)`{.cs}<br>
`doSomething(a, b, c, d)`{.cs}<br>
`for (i = 0; i < 10; i++)`{.cs}
{% endcall %}
{% call show_example('bad') %}
`a=(b+c)*d;`{.cs}<br>
`while(true)`{.cs}<br>
`doSomething(a,b,c,d)`{.cs}<br>
`for(i=0;i<10;i++)`{.cs}
{% endcall %}

## Naming

#### 1. All names should be written in English.

English is the preferred language for international development.

#### 2. Use proper casing for language elements.

<box type="info" seamless>

* Pascal casing: the first letter of every word is capitalized.
* Camel casing: the first letter of every word, except for the first word, is capitalized.
</box>


|Language element |Casing |Example
|-----------------|-------|-------
|Class, Struct |Pascal |`AppDomain`
|Interface |Pascal |`IBusinessService`
|Enumeration type |Pascal |`ErrorLevel`
|Enumeration values |Pascal |`FatalError`
|Event |Pascal |`Click`
|Private field |Camel |`listItem`
|Protected field |Pascal |`MainPanel`
|Constant field |Pascal |`MaximumItems`
|Constant local variable |Camel |`maximumItems`
|Read-only static field |Pascal |`RedValue`
|Local variable |Camel |`listOfValues`
|Method |Pascal |`ToString`
|Namespace |Pascal |`System.Drawing`
|Parameter |Camel |`typeName`
|Type parameter |Pascal |`TView`
|Property |Pascal |`BackColor`

#### 3. Avoid using abbreviations.

Unless the full name is excessive:

* Avoid abbreviations longer than 5 characters.
* Abbreviations must be widely known and accepted.
* Use upper case for 2-character abbreviations, and Pascal Case for longer abbreviations.

{% call show_example('good') %}
```cs
UIControl
HtmlSource
```
{% endcall %}
{% call show_example('bad') %}
```cs
UiControl
HTMLSource
```
{% endcall %}

#### 4. Prefix boolean variables with `Can`, `Is`, or `Has`.

Examples: `CanEvaluate`, `IsVisible`, `HasLicense`.

<box type="info" seamless>

Avoid boolean variables that represent the negation of things. e.g., use `IsInitialized` instead of `IsNotInitialized`.
</box>

#### 5. Do not include the parent class name within a property name.

{% call show_example('good') %}
```cs
Customer.Name
```
{% endcall %}
{% call show_example('bad') %}
```cs
Customer.CustomerName
```
{% endcall %}


#### 6. Do not use Hungarian Notation.

Hungarian notation is a defined set of pre and postfixes which are applied to names to reflect the type of the variable. This style was used in early Windows programming, but is now obsolete.

{% call show_example('good') %}
```cs
Name
Colors
```
{% endcall %}
{% call show_example('bad') %}
```cs
strName
ColorsEnum
```
{% endcall %}


<box type="info" seamless>

*Exception*: All fields and variable names that contain GUI elements like button should be postfixed with their type name without abbreviations. e.g., `cancelButton`, `nameTextBox`.
</box>

<!-- --------------------------------------------------------------------------------------------------------- -->

## Commenting

#### 1. General guidelines.

* Place the comment on a separate line, not at the end of a line of code.
* Begin comment text with an upper case letter.
* Insert one space between comment delimiter (`//`) and comment text.
* Use `//` or `///` but never `/* ... */`.
* The length of comment should not exceed the length of code.

#### 2. Document all public, protected and internal types and members.

Documenting your code allows Visual Studio to pop-up the documentation when your class is used somewhere else. You can form your documentation using https://msdn.microsoft.com/en-us/library/5ast78ax.aspx[XML tags].

```css
/// <summary>
/// Get a value indicating whether the user has a license.
/// </summary>
/// <returns>
/// <c>true</c> if the user has a license; otherwise <c>false</c>.
/// </returns>
public bool HasLicense() { ... }
```

<!-- --------------------------------------------------------------------------------------------------------- -->

## Language Conventions

#### 1. Do not omit access modifiers.

Explicitly declare all identifiers with the appropriate access modifiers instead of allowing the default.

{% call show_example('good') %}
```cs
private void WriteEvent(string message)
```
{% endcall %}
{% call show_example('bad') %}
```cs
void WriteEvent(string message)
```
{% endcall %}


#### 2. Always use the built-in C# data type aliases, instead of the .NET common type system.

{% call show_example('good') %}
```cs
short
int
long
string
```
{% endcall %}
{% call show_example('bad') %}
```cs
Int16
Int32
Int64
String
```
{% endcall %}


#### 3. Only use var when the type is very obvious.

When the type of a variable is clear from the context, use var in the declaration.

```cs
var welcomeMessage = "This is a welcome message!";
var account = new Account();
```

Do not use var when the type is not apparent from the right side of the assignment.

```cs
int result = ExampleClass.ResultSoFar();
```

<box type="info" seamless>

To know more about when to use/not to use implicit typing read [Uses and misuses of implicit typing](https://blogs.msdn.microsoft.com/ericlippert/2011/04/20/uses-and-misuses-of-implicit-typing/).
</box>

#### 4. Favor Object and Collection initializers over separate statements.

{% call show_example('good') %}
```cs
var startInfo = new ProcessStartInfo("myapp.exe");
{
    StandardOutput = Console.Output,
    UseShellExecute = true
};
```
{% endcall %}
{% call show_example('bad') %}
```cs
var startInfo = new ProcessStartInfo("myapp.exe");
startInfo.StandardOutput = Console.Output;
startInfo.UseShellExecute = true;
```
{% endcall %}


<!-- --------------------------------------------------------------------------------------------------------- -->

## References

* [C# Coding Conventions (C# Programming Guide)](https://msdn.microsoft.com/en-us/library/ff926074.aspx) -- From Microsoft
* [C# coding standards for .NET](http://se.inf.ethz.ch/old/teaching/ss2007/251-0290-00/project/CSharpCodingStandards.pdf) -- By Lance Hunt
* [C# Coding Style Guide](http://www.icsharpcode.net/TechNotes/SharpDevelopCodingStyle03.pdf) -- By Mike Krüger
* [CSharpGuidelines](https://github.com/dennisdoomen/CSharpGuidelines) -- From Aviva Solutions
