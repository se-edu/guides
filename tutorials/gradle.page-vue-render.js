
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_c('panel',{attrs:{"peek":"","no-close":"","no-switch":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('div',[_c('span',[_c('span',{staticClass:"text-danger"},[_c('span',{staticClass:"fab fa-youtube",attrs:{"aria-hidden":"true"}})]),_v(" VIDEO: Working with Gradle")])])]},proxy:true}])},[_v(" "),_c('div',{staticClass:"block-embed block-embed-service-youtube",staticStyle:{"position":"relative","padding-bottom":"60.9375%"}},[_c('iframe',{attrs:{"type":"text/html","src":"//www.youtube.com/embed/6V6G3RyxEMk","frameborder":"0","webkitallowfullscreen":"","mozallowfullscreen":"","allowfullscreen":""}})])]),_v(" "),_c('p'),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_c('tabs',[_c('tab',{scopedSlots:_u([{key:"header",fn:function(){return [_v("Using Intellij")]},proxy:true}])},[_v(" "),_c('div',{staticClass:"ml-3"},[_c('div',[_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_v("If the project comes with Gradle support, you will see a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file in your project root.")])]),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""}},[_c('p',[_v("IntelliJ IDEA has the Gradle plugin installed by default.  If you have disabled it, go to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("File")]),_v(" → "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Settings")]),_v(" → "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Plugins")]),_v(" to re-enable it."),_c('br'),_v("\nIf your project involves GUI programming, similarly ensure the JavaFX plugin has not been disabled.")])]),_v(" "),_c('ol',[_c('li',[_v("Open Intellij.")]),_v(" "),_c('li',[_v("If you are in the welcome screen, Click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Open")]),_v(". Otherwise, click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("File")]),_v(" -> "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Open")]),_v("."),_c('br'),_v("\ni. Select the project directory, and click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("OK")]),_v("."),_c('br'),_v("\nii. If there are any further prompts, accept the defaults but do ensure that the selected version of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Gradle JVM")]),_v(" matches the JDK being used for the project.")]),_v(" "),_c('li',[_v("Confirm the correct Java version is being used for Gradle, as follows:")])]),_v(" "),_c('div',{staticClass:"indented-level1",attrs:{"id":"configure-intellij-sdk"}},[_c('p',[_v("(a) Confirm the project JDK is set to the one you are supposed to use for the project, as explained "),_c('a',{attrs:{"href":"https://www.jetbrains.com/help/idea/sdk.html#set-up-jdk"}},[_v("here")]),_v("."),_c('br'),_v("\n(b) Confirm the correct JVM is used for Gradle, as given in the panel below:")]),_v(" "),_c('div',{staticClass:"indented-level1"},[_c('panel',{attrs:{"peek":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Intellij: Setting the JVM for Gradle")])]},proxy:true}])},[_v(" "),_c('p',[_v("Go to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("File")]),_v(" -> "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Settings")]),_v(" and ensure the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Gradle JVM")]),_v(" is set as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Project SDK ...")]),_v(", so that Gradle will use the same JDK used by the project.")]),_v(" "),_c('pic',{attrs:{"src":"/guides/tutorials/images/gradle/intellijSetGradleJvm.png"}}),_v(" "),_c('p',[_v("Also take note of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Build and run using:")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Run tests using:")]),_v(" settings. They are useful if you want to control whether you want Intellij to use Gradle to build/run/test your project.")])],1)],1)]),_v(" "),_c('ol',{attrs:{"start":"4"}},[_c('li',[_v("After the importing of the project is complete (which could take a few minutes), you will see the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Gradle Toolbar")]),_v(" in the IDEA interface "),_c('span',{staticClass:"dimmed"},[_v("e.g., look for the elephant icon (on Windows, this appears on the right-edge of the IDE window) and click it")]),_v("."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/guides/tutorials/images/gradle/GradleIcon.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/gradle/GradleIcon.png","alt":"Gradle icon"}})])])])],1)])]),_v(" "),_c('tab',{scopedSlots:_u([{key:"header",fn:function(){return [_v("Not using an IDE")]},proxy:true}])},[_v(" "),_c('p',[_v("Run the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -version")]),_v(" command in the same terminal you use for running Gradle commands, to ensure you are using the intended Java version for Gradle.")]),_v(" "),_c('p',[_v("No further action required. You should be able to use Gradle via the command line right away.")])]),_v(" "),_c('p'),_v(" "),_c('p',[_c('strong',[_c('strong',[_v("Scenario 2:")])]),_v(" You are adding Gradle support to an ongoing project. Gradle wrapper files are available but have not been added to the project yet.")]),_v(" "),_c('p',[_v("First, add the Gradle wrapper files to the project. e.g., if they are in a separate branch, merge that branch.")]),_v(" "),_c('tabs',[_c('tab',{scopedSlots:_u([{key:"header",fn:function(){return [_v("Using Intellij")]},proxy:true}])},[_v(" "),_c('ol',[_c('li',[_v("Close the IDEA project if it is open.")]),_v(" "),_c('li',[_v("Delete the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".idea")]),_v(" folder."),_c('br'),_v(" "),_c('span',[_c('span',{staticClass:"fas fa-info-circle",attrs:{"aria-hidden":"true"}})]),_v(" Note that some operating systems hides folders/files starting with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".")]),_v(" by default. If you can't see the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".idea")]),_v(" folder, you might need to configure the OS to 'un-hide' those files/folders.")]),_v(" "),_c('li',[_v("Open/import the project again, as explained in scenario 1 above.")])])]),_v(" "),_c('tab',{scopedSlots:_u([{key:"header",fn:function(){return [_v("Not using an IDE")]},proxy:true}])},[_v(" "),_c('p',[_v("No further actions required. You should be able to use Gradle via the command line now.")])]),_v(" "),_c('p'),_v(" "),_c('p',[_c('strong',[_c('strong',[_v("Scenario 3:")])]),_v(" You are adding Gradle support to an ongoing project from scratch.")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://docs.gradle.org/current/userguide/gradle_wrapper.html"}},[_v("This")]),_v(" is a good place to start.")])]),_v(" "),_c('h2',{attrs:{"id":"running-gradle-tasks"}},[_v("Running Gradle tasks"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#running-gradle-tasks","onclick":"event.stopPropagation()"}})]),_v(" "),_c('tabs',[_c('tab',{scopedSlots:_u([{key:"header",fn:function(){return [_v("Using Intellij")]},proxy:true}])},[_v(" "),_c('p',[_v("There are several ways to run a Gradle task in Intellij. Examples:")]),_v(" "),_c('ul',[_c('li',[_v("Locate the task in the Gradle toolbar, and double-click it.")]),_v(" "),_c('li',[_v("Hit "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Ctrl")]),_v(" key twice (to bring up the command runner), and type "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("gradlew")]),_v(" followed by tasks to run e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("gradlew clean test")]),_v(".")])]),_v(" "),_c('p',[_v("See "),_c('a',{attrs:{"href":"https://www.youtube.com/watch?v=6V6G3RyxEMk#t=13m44s"}},[_v("this video")]),_v(" for more ways to run Gradle tasks inside Intellij.")]),_v(" "),_c('p',[_v("Alternatively, you can run Gradle tasks using the command line (even if you are using Intellij). Follow the instructions in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Using the terminal")]),_v(" tab above.")]),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_v("If the Gradle tasks don't appear in the Gradle window, click the 'refresh' button in the toolbar to reimport the Gradle project.")])]),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_v("Intellij uses Gradle to run your application by default. If you would like to run the project in the normal way, go to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("File")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Settings")]),_v(" and change the following settings:")]),_v(" "),_c('panel',{attrs:{"peek":"","no-close":"","no-switch":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Expand to see screenshot ...")])]},proxy:true}])},[_v(" "),_c('p',[_c('a',{attrs:{"href":"/guides/tutorials/images/gradle/intellijRunUsingGradle.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/gradle/intellijRunUsingGradle.png","alt":"change Intellij settings to not use Gradle"}})])])])],1)],1),_v(" "),_c('tab',{scopedSlots:_u([{key:"header",fn:function(){return [_v("Using the terminal")]},proxy:true}])},[_v(" "),_c('p',[_v("You can open a terminal, navigate to the project root, and type the following command in the terminal.")]),_v(" "),_c('ul',[_c('li',[_v("On Windows: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("gradlew <task1> <task2> …")]),_v(" e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("gradlew clean test")])]),_v(" "),_c('li',[_v("On Mac/Linux: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("./gradlew <task1> <task2> …")]),_v(" e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("./gradlew clean test")])])])]),_v(" "),_c('p'),_v(" "),_c('h2',{attrs:{"id":"managing-plugins-and-dependencies"}},[_v("Managing plugins and dependencies"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#managing-plugins-and-dependencies","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("Gradle functionality can be extended using plugins.")]),_v(" Here are some plugins commonly used in Java projects.")]),_v(" "),_c('p',[_v("More info on specific plugins:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://docs.gradle.org/current/userguide/java_plugin.html#java_plugin"}},[_v("Java")]),_v(" -- a built-in plugin that adds Java compilation along with testing and bundling capabilities to a project."),_c('br'),_v(" "),_c('a',{attrs:{"href":"https://docs.gradle.org/current/userguide/application_plugin.html#application_plugin"}},[_v("Application")]),_v(" -- a built-in plugin for creating an executable JVM application.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://docs.gradle.org/current/userguide/checkstyle_plugin.html#checkstyle_plugin"}},[_v("Checkstyle")]),_v(" -- a built-in plugin for using Checkstyle in a project.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://plugins.gradle.org/plugin/com.github.johnrengelman.shadow"}},[_v("Shadow")]),_v(" -- a third-party plugin for creating "),_c('trigger',{attrs:{"trigger":"click","for":"modal:gradleTutorial-fatJar"}},[_v("fat/uber JARs")]),_v(".")],1)]),_v(" "),_c('modal',{attrs:{"large":"","id":"modal:gradleTutorial-fatJar"},scopedSlots:_u([{key:"header",fn:function(){return [_v("Fat/Uber JAR files")]},proxy:true}])},[_v(" "),_c('div',[_c('p',[_c('strong',[_v("A normal JAR file contains only the classes and resources that you created for your app.")]),_v(" If your app has "),_c('em',[_v("dependencies")]),_v(" (i.e., third party libraries that your app depends on), the JAR file will not work unless the person running the JAR file also has those dependencies in their computer. This is not ideal.")]),_v(" "),_c('p',[_c('strong',[_v("A "),_c('em',[_v("fat")]),_v(" JAR (aka "),_c('em',[_v("uber")]),_v(" JAR) file solves the above problem by including all the dependencies inside the JAR file")]),_v(" itself "),_c('span',{staticClass:"dimmed"},[_v("(which makes the JAR file bigger than usual, hence the term "),_c('em',[_v("fat")]),_v(")")]),_v(".")])])]),_v(" "),_c('p',[_v("The relevant lines for adding the above plugins to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" are given below:")]),_v(" "),_c('div',{staticClass:"code-block"},[_c('div',{staticClass:"code-block-heading"},[_c('span',[_v("build.gradle")])]),_c('div',{staticClass:"code-block-content"},[_c('pre',[_c('code',{pre:true,attrs:{"heading":"build.gradle","class":"hljs groovy"}},[_c('span',[_v("plugins {\n")]),_c('span',[_v("    id "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'java'")]),_v("\n")]),_c('span',[_v("    id "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'application'")]),_v("\n")]),_c('span',[_v("    id "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'checkstyle'")]),_v("\n")]),_c('span',[_v("    id "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'com.github.johnrengelman.shadow'")]),_v(" version "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'7.1.2'")]),_v("\n")]),_c('span',[_v("}\n")])]),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])]),_c('p',[_v("You can follow the links in the list above to find what tasks are provided by a plugin and how to configure it. For example, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("run")]),_v(" is a task provided by the Application plugin, and you can set the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("mainClassName")]),_v(" ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("mainClass")]),_v(" in some versions) property, to indicate which class should be used as the as the entry point of the application:")]),_v(" "),_c('div',{staticClass:"code-block"},[_c('div',{staticClass:"code-block-heading"},[_c('span',[_v("build.gradle")])]),_c('div',{staticClass:"code-block-content"},[_c('pre',[_c('code',{pre:true,attrs:{"heading":"build.gradle","class":"hljs groovy"}},[_c('span',[_v("application {\n")]),_c('span',[_v("    mainClass.set("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"seedu.duke.Main\"")]),_v(")\n")]),_c('span',[_v("}\n")])]),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])]),_c('p',[_c('strong',[_v("Gradle can automate the management of dependencies to third-party libraries")]),_v(" too. You just need to add the dependency into the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file and Gradle will do the rest. For example, to add the Natty (a third-party library used for parsing natural language dates e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("today")]),_v("), you simply have to add the following line to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("dependencies")]),_v(" section of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file.")]),_v(" "),_c('div',{staticClass:"code-block"},[_c('div',{staticClass:"code-block-heading"},[_c('span',[_v("build.gradle")])]),_c('div',{staticClass:"code-block-content"},[_c('pre',[_c('code',{pre:true,attrs:{"heading":"build.gradle","class":"hljs groovy"}},[_c('span',[_v("implementation "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("group:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'com.joestelmach'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("name:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'natty'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("version:")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'0.13'")]),_v("\n")])]),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])]),_c('p',[_v("Tip: Most third-party libraries specify how to add it as a Gradle dependency ("),_c('a',{attrs:{"href":"https://mvnrepository.com/artifact/com.joestelmach/natty/0.13"}},[_v("example")]),_v(").")]),_v(" "),_c('p',[_c('strong',[_v("From where does Gradle download dependencies?")]),_v(" The public servers Gradle will search to find the specified dependencies are listed in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file. e.g.,")]),_v(" "),_c('div',{staticClass:"code-block"},[_c('div',{staticClass:"code-block-heading"},[_c('span',[_v("build.gradle")])]),_c('div',{staticClass:"code-block-content"},[_c('pre',[_c('code',{pre:true,attrs:{"heading":"build.gradle","class":"hljs groovy"}},[_c('span',[_v("repositories {\n")]),_c('span',[_v("    mavenCentral()\n")]),_c('span',[_v("    maven { url "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'https://oss.sonatype.org/content/repositories/snapshots/'")]),_v(" }\n")]),_c('span',[_v("}\n")])]),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])]),_c('box',{attrs:{"type":"tip","id":"after-updating-build-file","seamless":""}},[_c('p',[_c('strong',[_v("After updating the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file,")])]),_v(" "),_c('ul',[_c('li',[_v("if you are using an IDE: Use the IDE UI to reload dependencies based on the updated file. For example, if using Intellij  IDEA, you can click the "),_c('img',{attrs:{"src":"/guides/tutorials/images/gradle/RefreshGradleIcon.png"}}),_v(" icon in the Gradle tool window to reload the file."),_c('br'),_v("\nFor good measure, you can restart the IDE too.")]),_v(" "),_c('li',[_v("if not using an IDE: Run "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".\\gradlew clean build")]),_v(" to rebuild everything based on the updated file.")])])]),_v(" "),_c('h2',{attrs:{"id":"using-gradle-to-do-some-common-project-activities"}},[_v("Using Gradle to do some common project activities"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-gradle-to-do-some-common-project-activities","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"running-the-application"}},[_v("Running the application"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#running-the-application","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Run the "),_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("run")])]),_v(" task to launch the main class of the application."),_c('br'),_v("\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("./gradlew run")])]),_v(" "),_c('h3',{attrs:{"id":"cleaning-the-project"}},[_v("Cleaning the project"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#cleaning-the-project","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Run the "),_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")])]),_v(" to delete the files created during the previous build tasks (e.g. files in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build")]),_v(" folder)."),_c('br'),_v("\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("./gradlew clean")])]),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("You can use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(" to prevent Gradle from skipping tasks")]),_v(": When running a Gradle task, Gradle will try to figure out if the task needs running at all. If Gradle determines that the output of the task will be same as the previous time, it will not run the task. For example, it will not build the JAR file again if the relevant source files have not changed since the last time the JAR file was built. If you want to force Gradle to run a task, you can combine that task with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(" (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("./gradlew clean shadowJar")]),_v("). Once the build files have been "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(" ed, Gradle has no way to determine if the output will be same as before, and it will have no choice but to execute the task.")])]),_v(" "),_c('h3',{attrs:{"id":"running-checkstyle"}},[_v("Running Checkstyle"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#running-checkstyle","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("tasks "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("checkstyleMain")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("checkstyleTest")]),_v(" check if the main code and test code complies with the Checkstyle rules, respectively. "),_c('br'),_v("\ne.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("./gradlew checkstyleMain checkstyleTest")])]),_v(" "),_c('p',[_v("See our "),_c('a',{attrs:{"href":"/guides/tutorials/checkstyle.html"}},[_v("Checkstyle Tutorial")]),_v(" for more details.")]),_v(" "),_c('h3',{attrs:{"id":"running-tests"}},[_v("Running tests"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#running-tests","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Run the "),_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test")])]),_v(" to run all tests and test-related tasks."),_c('br'),_v("\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("./gradlew test")])]),_v(" "),_c('p',[_v("See our "),_c('a',{attrs:{"href":"/guides/tutorials/junit.html"}},[_v("JUnit tutorial")]),_v(" to find how to use JUnit with Gradle.")]),_v(" "),_c('h3',{attrs:{"id":"creating-jar-files"}},[_v("Creating JAR files"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#creating-jar-files","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Run the "),_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("shadowJar")])]),_v(" task to create a fat JAR file of the application."),_c('br'),_v("\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("./gradlew clean shadowJar")])]),_v(" "),_c('p',[_v("See our "),_c('a',{attrs:{"href":"/guides/tutorials/jar.html"}},[_v("JAR tutorial")]),_v(" to find more about creating JAR files using Gradle.")]),_v(" "),_c('h3',{attrs:{"id":"compiling"}},[_v("Compiling"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#compiling","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("There is no need to run these Gradle tasks manually as they are called automatically by other relevant Gradle tasks.")]),_v(" "),_c('ul',[_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("compileJava")])]),_v(": Checks whether the project has the required dependencies to compile and run the main program, and download any missing dependencies before compiling the classes.")]),_v(" "),_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("compileTestJava")])]),_v(": Checks whether the project has the required dependencies to perform testing, and download any missing dependencies before compiling the test classes.")])]),_v(" "),_c('h3',{attrs:{"id":"enabling-assertions"}},[_v("Enabling assertions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#enabling-assertions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("To enable assertions when executing Java code, add the following to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(" file.")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs groovy"}},[_c('span',[_v("run {\n")]),_c('span',[_v("    enableAssertions = "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("true")]),_v("\n")]),_c('span',[_v("}\n")])]),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_v(" "),_c('h2',{attrs:{"id":"resources"}},[_v("Resources"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://docs.gradle.org/current/userguide/userguide.html"}},[_v("Official Gradle Documentation")])])]),_v(" "),_c('hr'),_v(" "),_c('p',[_c('strong',[_v("Authors:")])]),_v(" "),_c('ul',[_c('li',[_v("Initial Version: Jeffry Lum")])])],1)],1)],1),_c('p')],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#gradle-tutorial"}},[_v("Gradle tutorial‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#basics"}},[_v("Basics‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#adding-gradle-to-the-project"}},[_v("Adding Gradle to the project‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#running-gradle-tasks"}},[_v("Running Gradle tasks‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#managing-plugins-and-dependencies"}},[_v("Managing plugins and dependencies‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#using-gradle-to-do-some-common-project-activities"}},[_v("Using Gradle to do some common project activities‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#running-the-application"}},[_v("Running the application‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#cleaning-the-project"}},[_v("Cleaning the project‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#running-checkstyle"}},[_v("Running Checkstyle‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#running-tests"}},[_v("Running tests‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#creating-jar-files"}},[_v("Creating JAR files‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#compiling"}},[_v("Compiling‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#enabling-assertions"}},[_v("Enabling assertions‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#resources"}},[_v("Resources‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(10)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"gradle-tutorial"}},[_v("Gradle tutorial"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#gradle-tutorial","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"lead"},[_c('p',[_v("Gradle is a "),_c('em',[_v("build automation tool")]),_v(" used to automate build processes, and it can help with managing external dependencies as well (e.g., third-party libraries).")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"basics"}},[_v("Basics"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#basics","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("You use a "),_c('em',[_v("build file")]),_v(" (named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("build.gradle")]),_v(") to describe how Gradle should behave for a project, using the following three mechanisms.")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('strong',[_v("Plugins")]),_v(" extend the functionality of Gradle. For example, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java")]),_v(" plugin adds support for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Java")]),_v(" projects.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Tasks")]),_v(" are reusable blocks of logic. For example, the task "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clean")]),_v(" simply deletes the project build directory.\nTasks can be composed of, or dependent on, other tasks.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Properties")]),_v(" change the behavior of tasks. For instance, when using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("application")]),_v(" plugin, we should use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("mainClassName")]),_v(" (or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("mainClass")]),_v(") property to tell Gradle which class is the entry point to your application. As Gradle favors "),_c('a',{attrs:{"href":"https://en.wikipedia.org/wiki/Convention_over_configuration"}},[_c('em',[_v("convention over configuration")])]),_v(", there is not much to you need to configure if you follow the recommended directory structure.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Even if you are not using Intellij, "),_c('mark',[_v("a quick watch of the following video is strongly recommended")])]),_v(" before proceeding with the rest of this tutorial, if you are new to Gradle. The video will help you grasp how Gradle fits into the big picture of a project, and how it looks like to be using it.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"adding-gradle-to-the-project"}},[_v("Adding Gradle to the project"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-gradle-to-the-project","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("There are several ways of integrating Gradle into a project. This tutorial uses the "),_c('em',[_v("Gradle wrapper")]),_v(" approach.\nGiven below are three scenarios of adding the Gradle wrapper to a project. Choose the one that fits your situation best.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_c('strong',[_v("Scenario 1:")])]),_v(" You are setting up a project that already has Gradle wrapper files.")])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")]),_v(" on Sun, 10 Nov 2024, 14:31:55 GMT+8]")])])])}
}];
  