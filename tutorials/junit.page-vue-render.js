
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_m(2),_v(" "),_c('p',[_v("Sections below explains how to use JUnit in a project.")]),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_c('p',[_v("As JUnit is a third-party library, you need to add support to it specifically in your project. Given below is how you can do that using the "),_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("a build tool and a dependency management tool")]},proxy:true}])},[_v("Gradle")]),_v(". While it is possible to add JUnit to your project without Gradle, we recommend using Gradle as it can make things easier in the long run.")],1),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_c('div',{staticClass:"code-block"},[_m(10),_c('div',{staticClass:"code-block-content"},[_c('pre',[_m(11),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])]),_c('p',[_v("Next, add the following, to tell Gradle that JUnit is to be used as the testing tool (and to configure a few aspects of how Gradle handles JUnit tests).")]),_v(" "),_c('div',{staticClass:"code-block"},[_m(12),_c('div',{staticClass:"code-block-content"},[_c('pre',[_m(13),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])]),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_v("If using an IDE, restart the IDE after updating the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file.")])]),_v(" "),_m(14),_v(" "),_c('div',{staticClass:"code-block"},[_m(15),_c('div',{staticClass:"code-block-content"},[_c('pre',[_m(16),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])]),_m(17),_v(" "),_m(18),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_v("If the above doesn't work, you may want to go to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("File")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Settings")]),_v(" and change the"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Run tests using:")]),_v(" setting to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Intellij IDEA")]),_v(" (instead of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Gradle")]),_v("), as shown below:")]),_v(" "),_c('panel',{attrs:{"peek":"","no-close":"","no-switch":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Expand to see screenshot ...")])]},proxy:true}])},[_v(" "),_c('p',[_c('a',{attrs:{"href":"/guides/tutorials/images/gradle/intellijRunTestsUsingIntellij.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/gradle/intellijRunTestsUsingIntellij.png","alt":"change Intellij settings to not use Gradle"}})])])])],1),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_c('ul',[_m(23),_v(" "),_c('li',[_v("[If using Intellij UI to run the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test")]),_v(" task] The location of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test")]),_v(" task in the Gradle task hierarchy is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tasks -> verification -> test")]),_v(" (see screenshot below)."),_c('br'),_v(" "),_c('pic',{attrs:{"src":"/guides/tutorials/images\\junit\\gradleTaskHierarchy.png"}})],1)]),_v(" "),_m(24),_v(" "),_m(25),_v(" "),_m(26),_v(" "),_c('p',[_v("After you are able to run JUnit tests successfully using a dummy test class such as the above, you can add more tests and test classes as necessary.")]),_v(" "),_m(27),_v(" "),_m(28),_v(" "),_m(29),_c('p')],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#using-junit"}},[_v("Using JUnit‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#conventions-to-follow"}},[_v("Conventions to follow‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#adding-junit-support-to-your-project"}},[_v("Adding JUnit support to your project‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#running-tests"}},[_v("Running tests‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#writing-useful-junit-tests"}},[_v("Writing useful JUnit tests‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#resources"}},[_v("Resources‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(30)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"using-junit"}},[_v("Using JUnit"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-junit","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"lead"},[_c('p',[_c('a',{attrs:{"href":"https://junit.org/junit5/"}},[_v("JUnit")]),_v(" is a testing framework for Java.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"conventions-to-follow"}},[_v("Conventions to follow"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#conventions-to-follow","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Add test code in a folder named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[project root]\\src\\test\\java\\")]),_v(" folder.")]),_v(" "),_c('li',[_v("Name the test class to match the class being tested ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Todo.java")]),_v(" can be tested by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TodoTest.java")]),_v("), and put it in a package to match "),_c('span',{staticClass:"dimmed"},[_v("(reason: if packages are matched, the test class can access package-private members of the target class)")]),_v("."),_c('br'),_v("\nFor example,\n"),_c('ul',[_c('li',[_v("Class being tested "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("seedu.duke.Todo")]),_v(": "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src\\main\\java\\seedu\\duke\\Todo.java")])]),_v(" "),_c('li',[_v("Test class "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("seedu.duke.TodoTest")]),_v(": "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src\\test\\java\\seedu\\duke\\TodoTest.java")])])])])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"indented-level2"},[_c('div',{staticClass:"tree"},[_c('span',{staticClass:"far fa-folder",attrs:{"aria-hidden":"true"}}),_v(" [project root] "),_c('span',{staticClass:"dimmed"},[_v("e.g., C:\\courses\\project\\")]),_v("\n└── "),_c('span',{staticClass:"far fa-folder",attrs:{"aria-hidden":"true"}}),_v(" src\\\n    ├── "),_c('span',{staticClass:"far fa-folder",attrs:{"aria-hidden":"true"}}),_v(" "),_c('mark',[_v("main")]),_v("\\\n    │   └── "),_c('span',{staticClass:"far fa-folder",attrs:{"aria-hidden":"true"}}),_v(" java\\\n    │       └── "),_c('span',{staticClass:"far fa-folder",attrs:{"aria-hidden":"true"}}),_v(" seedu\\\n    │           └── "),_c('span',{staticClass:"far fa-folder",attrs:{"aria-hidden":"true"}}),_v(" duke\\\n    │               └── "),_c('span',{staticClass:"far fa-file",attrs:{"aria-hidden":"true"}}),_v(" "),_c('mark',[_v("ToDo")]),_v(".java\n    └── "),_c('span',{staticClass:"far fa-folder",attrs:{"aria-hidden":"true"}}),_v(" "),_c('mark',[_v("test")]),_v("\\\n        └── "),_c('span',{staticClass:"far fa-folder",attrs:{"aria-hidden":"true"}}),_v(" java\\\n            └── "),_c('span',{staticClass:"far fa-folder",attrs:{"aria-hidden":"true"}}),_v(" seedu\\\n                └── "),_c('span',{staticClass:"far fa-folder",attrs:{"aria-hidden":"true"}}),_v(" duke\\\n                    └── "),_c('span',{staticClass:"far fa-file",attrs:{"aria-hidden":"true"}}),_v(" "),_c('mark',[_v("ToDoTest")]),_v(".java\n")]),_v(" "),_c('br')])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"adding-junit-support-to-your-project"}},[_v("Adding JUnit support to your project"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-junit-support-to-your-project","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('span',[_c('span',{staticClass:"glyphicon glyphicon-exclamation-sign",attrs:{"aria-hidden":"true"}})]),_v(" "),_c('strong',[_v("Prerequisite:")]),_v(" The project is configured to use Gradle already. If you have not done that yet, follow the "),_c('a',{attrs:{"href":"/guides/tutorials/gradle.html"}},[_c('em',[_v("Gradle Tutorial")])]),_v(" to add Gradle support to the project first.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("1. Update the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file")]),_v(" to include JUnit as a dependency. Here are the relevant lines that needs to be in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" (change the version number as necessary):")])}
},function anonymous(
) {
with(this){return _c('p',[_v("First, add the following two dependencies to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("dependencies")]),_v(" block, to tell which JUnit libraries to be used:")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"code-block-heading"},[_c('span',[_v("build.gradle")])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"heading":"build.gradle","class":"hljs groovy"}},[_c('span',[_v("dependencies {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("testImplementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.junit.jupiter'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'junit-jupiter-api'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'5.10.0'")])]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("testRuntimeOnly "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'org.junit.jupiter'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'junit-jupiter-engine'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'5.10.0'")])]),_v("\n")]),_c('span',[_v("}\n")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"code-block-heading"},[_c('span',[_v("build.gradle")])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"heading":"build.gradle","class":"hljs groovy"}},[_c('span',[_v("test {\n")]),_c('span',[_v("    useJUnitPlatform()\n")]),_c('span',[_v("\n")]),_c('span',[_v("    testLogging {\n")]),_c('span',[_v("        events "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"passed\"")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"skipped\"")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"failed\"")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_v("        showExceptions "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("true")]),_v("\n")]),_c('span',[_v("        exceptionFormat "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"full\"")]),_v("\n")]),_c('span',[_v("        showCauses "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("true")]),_v("\n")]),_c('span',[_v("        showStackTraces "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("true")]),_v("\n")]),_c('span',[_v("        showStandardStreams = "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("false")]),_v("\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("}\n")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("2. Add a test class")]),_v(", while following "),_c('a',{attrs:{"href":"#conventions-to-follow"}},[_v("the conventions given earlier in this page")]),_v(". If you don't follow those conventions, Gradle will not be able to find your test class. For example, if you have a class "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src\\main\\java\\seedu\\duke\\Todo.java")]),_v(", you can add a test class "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src\\")]),_c('mark',[_v("test")]),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("\\java\\seedu\\duke\\")]),_c('mark',[_v("TodoTest.java")]),_v(". Here's some sample code:")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"code-block-heading"},[_c('span',[_v("src\\test\\java\\seedu\\duke\\TodoTest.java")])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"line-numbers hljs java","heading":"src\\test\\java\\seedu\\duke\\TodoTest.java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("package")]),_v(" seedu.duke;  "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("//same package as the class being tested")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" org.junit.jupiter.api.Test;\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("static")]),_v(" org.junit.jupiter.api.Assertions.assertEquals;\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("DukeTest")]),_v(" ")]),_v("{\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"highlighted"}},[_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Test")])]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("void")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("dummyTest")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("()")])]),_v("{\n")]),_c('span',[_v("        assertEquals("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("2")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("2")]),_v(");\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"highlighted"}},[_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Test")])]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("void")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("anotherDummyTest")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("()")])]),_v("{\n")]),_c('span',[_v("        assertEquals("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("4")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("4")]),_v(");\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("}\n")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("3. Run tests")]),_v(", either using the Intellij UI (preferred -- this makes debugging failed test cases easier) or using Gradle itself, as explained in the section below.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"running-tests"}},[_v("Running tests"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#running-tests","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_c('strong',[_v("In Intellij IDEA:")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("To run a specific JUnit test class (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/test/java/seedu/DukeTest.java")]),_v("), right-click on the test class, and choose "),_c('span',{staticClass:"text-success"},[_c('span',{staticClass:"fas fa-play",attrs:{"aria-hidden":"true"}})]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Run {classname}")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("To run all tests in a folder (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/test/java")]),_v(" folder), right-click on the folder, and choose "),_c('span',{staticClass:"text-success"},[_c('span',{staticClass:"fas fa-play",attrs:{"aria-hidden":"true"}})]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Run Tests in '...'")]),_v(".")]),_v(" "),_c('li',[_v("Other supported IDEs (e.g., Eclipse, NetBeans, VS Code, etc.) have similar mechanisms.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_c('strong',[_v("Using Gradle:")])]),_v(":")])}
},function anonymous(
) {
with(this){return _c('li',[_v("To run all tests in the project, run the Gradle task "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test")]),_v(" ("),_c('a',{attrs:{"href":"/guides/tutorials/gradle.html#running-gradle-tasks"}},[_v("more info on running Gradle tasks")]),_v(")")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_c('strong',[_v("Other ways:")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("There is also "),_c('a',{attrs:{"href":"https://junit.org/junit5/docs/current/user-guide/#running-tests-console-launcher"}},[_v("a way to run JUnit tests in the console (without Gradle or an IDE)")]),_v(", which is not used as much as the above two methods.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"writing-useful-junit-tests"}},[_v("Writing useful JUnit tests"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#writing-useful-junit-tests","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("To learn how to write useful JUnit test cases, refer "),_c('a',{attrs:{"href":"https://se-education.org/se-book/cppToJava/junit/basic/index.html"}},[_v("this section")]),_v(" of our SE book. For a quick overview of more advance JUnit features, refer "),_c('a',{attrs:{"href":"https://se-education.org/se-book/cppToJava/junit/intermediate/index.html"}},[_v("this section")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"resources"}},[_v("Resources"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://junit.org/junit5/docs/current/user-guide/"}},[_v("JUnit 5 User Guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://docs.gradle.org/current/userguide/java_testing.html#using_junit5"}},[_v("Gradle documentation for JUnit")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")]),_v(" on Thu, 6 Feb 2025, 19:02:04 GMT+8]")])])])}
}];
  