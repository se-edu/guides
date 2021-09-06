
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_m(2),_v(" "),_c('p',[_v("Sections below explain how to use that technique in a small project.")]),_v(" "),_m(3),_v(" "),_c('p',[_v("Given below re steps to set it up for a project.")]),_v(" "),_c('ol',[_m(4),_v(" "),_c('li',[_m(5),_v(" "),_c('tabs',[_c('tab',{scopedSlots:_u([{key:"header",fn:function(){return [_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("runtest.bat")])]},proxy:true}])},[_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs bat"}},[_c('span',[_v("@"),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("ECHO")]),_v(" OFF\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}}),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("REM create bin directory if it doesn't exist")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("if")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("not")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("exist")]),_v(" ..\\bin "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("mkdir")]),_v(" ..\\bin\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}}),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("REM delete output from previous run")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("del")]),_v(" ACTUAL.TXT\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}}),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("REM compile the code into the bin folder")]),_v("\n")]),_c('span',[_v("javac  -cp ..\\src\\main\\java -Xlint:none -d ..\\bin ..\\src\\main\\java\\*.java\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("IF")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("ERRORLEVEL")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("1")]),_v(" (\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("echo")]),_v(" ********** BUILD FAILURE **********\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("exit")]),_v(" /b "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("1")]),_v("\n")]),_c('span',[_v(")\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("REM no error here, errorlevel == 0")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}}),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("REM run the program, feed commands from input.txt file and redirect the output to the ACTUAL.TXT")]),_v("\n")]),_c('span',[_v("java -classpath ..\\bin Duke < input.txt > ACTUAL.TXT\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}}),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("REM compare the output to the expected output")]),_v("\n")]),_c('span',[_v("FC ACTUAL.TXT EXPECTED.TXT\n")])])])]),_v(" "),_c('tab',{scopedSlots:_u([{key:"header",fn:function(){return [_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("runtest.sh")])]},proxy:true}])},[_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs sh"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("#!/usr/bin/env bash")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("# create bin directory if it doesn't exist")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("if")]),_v(" [ ! -d "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"../bin\"")]),_v(" ]\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("then")]),_v("\n")]),_c('span',[_v("    mkdir ../bin\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("fi")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("# delete output from previous run")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("if")]),_v(" [ -e "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"./ACTUAL.TXT\"")]),_v(" ]\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("then")]),_v("\n")]),_c('span',[_v("    rm ACTUAL.TXT\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("fi")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("# compile the code into the bin folder, terminates if error occurred")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("if")]),_v(" ! javac -cp ../src/main/java -Xlint:none -d ../bin ../src/main/java/*.java\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("then")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("echo")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"********** BUILD FAILURE **********\"")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("exit")]),_v(" 1\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("fi")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("# run the program, feed commands from input.txt file and redirect the output to the ACTUAL.TXT")]),_v("\n")]),_c('span',[_v("java -classpath ../bin Duke < input.txt > ACTUAL.TXT\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("# compare the output to the expected output")]),_v("\n")]),_c('span',[_v("diff ACTUAL.TXT EXPECTED.TXT\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("if")]),_v(" [ $? -eq 0 ]\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("then")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("echo")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"Test result: PASSED\"")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("exit")]),_v(" 0\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("else")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("echo")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"Test result: FAILED\"")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("exit")]),_v(" 1\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("fi")]),_v("\n")])])])])],1),_v(" "),_c('br')],1),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_m(9)]),_v(" "),_m(10),_v(" "),_c('p',[_v("The purpose of testing as explained in the previous section is to confirm there are no "),_c('span',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top.html",value:(tooltipInnerContentGetter),expression:"tooltipInnerContentGetter",modifiers:{"hover":true,"top":true,"html":true}}],staticClass:"trigger",attrs:{"data-mb-component-type":"tooltip"}},[_m(11),_c('em',[_v("regressions")])]),_v(". However, we often update the behavior of the program intentionally e.g., enhance an existing feature. Let's look at how to update our test set up in those cases.")]),_v(" "),_m(12),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_m(17),_v(" "),_c('hr'),_v(" "),_m(18),_v(" "),_m(19),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}}),_c('p')]),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{staticClass:"nav-link py-1",attrs:{"href":"#automating-the-testing-of-text-uis"}},[_v("Automating the testing of text UIs‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{staticClass:"nav-link py-1",attrs:{"href":"#setting-up"}},[_v("Setting up‎")]),_v(" "),_c('a',{staticClass:"nav-link py-1",attrs:{"href":"#updating-tests-as-the-program-evolves"}},[_v("Updating tests as the program evolves‎")]),_v(" "),_c('a',{staticClass:"nav-link py-1",attrs:{"href":"#troubleshooting"}},[_v("Troubleshooting‎")])])])],1)])],1),_v(" "),_m(20)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"anchor",attrs:{"id":"guides-for-se-student-projects"}}),_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"automating-the-testing-of-text-uis"}},[_c('span',{staticClass:"anchor",attrs:{"id":"automating-the-testing-of-text-uis"}}),_v("Automating the testing of text UIs"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#automating-the-testing-of-text-uis","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"lead"},[_c('p',[_c('a',{attrs:{"href":"https://se-education.org/se-book/testing/#automated-testing-of-cli-applications"}},[_c('em',[_v("I/O redirection")]),_v(" technique")]),_v(" can be used to semi-automate the testing of text UIs.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"setting-up"}},[_c('span',{staticClass:"anchor",attrs:{"id":"setting-up"}}),_v("Setting up"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_v("Create a folder to hold the relevant files e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[project root]\\text-ui-test")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Add a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("runtest.bat")]),_v(" (if you are on Windows) or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("runtest.sh")]),_v(" (if you are on a *nix OS) into the folder, containing the script below."),_c('br')])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_v("Update the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("javac")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java")]),_v(" commands in the script to match the name/location of your main class."),_c('br'),_v("\nIf you are using packages, the two commands need to take the packages into account too.")])])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_v("Add an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EXPECTED.txt")]),_v(" to the same folder, containing the expected output.")])])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_v("Add an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("input.txt")]),_v(" containing the input commands.")])])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_v("Run the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".bat")]),_v("/"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".sh")]),_v(" file to execute the test.")]),_v(" "),_c('ul',[_c('li',[_v("If the actual output matches the EXPECTED.TXT, the test passes.")]),_v(" "),_c('li',[_v("If the actual output differs from the EXPECTED.TXT, the script will report a failure.")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"updating-tests-as-the-program-evolves"}},[_c('span',{staticClass:"anchor",attrs:{"id":"updating-tests-as-the-program-evolves"}}),_v("Updating tests as the program evolves"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#updating-tests-as-the-program-evolves","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('span',{attrs:{"data-mb-slot-name":"_content"}},[_v("i.e., there are no "),_c('em',[_v("unintentional")]),_v(" behavior changes")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Option 1:")]),_v(" This is the ideal but more tedious approach.")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Determine how the expected behavior "),_c('em',[_v("should")]),_v(" change due to your update to the code.")]),_v(" "),_c('li',[_v("Update the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EXPECTED.TXT")]),_v(" file accordingly.")]),_v(" "),_c('li',[_v("Run the test to confirm the actual behavior is same as the "),_c('em',[_v("updated")]),_v(" expected behavior.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Option 2:")]),_v(" This is a more practical shortcut.")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Run the test as per normal after updating the code. The test will fail because the new program behavior is different from the one given in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EXPECTED.TXT")]),_v(".")]),_v(" "),_c('li',[_v("Use a diff tool to compare the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ACTUAL.TXT")]),_v(" against the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EXPECTED.TXT")]),_v("."),_c('br'),_v(" "),_c('span',{staticClass:"badge badge-pill badge-warning"},[_c('span',{staticClass:"fas fa-lightbulb",attrs:{"aria-hidden":"true"}})]),_v(" "),_c('a',{attrs:{"href":"https://www.jetbrains.com/help/idea/comparing-files-and-folders.html"}},[_v("Intellij IDEA can compare two files")]),_v(".")]),_v(" "),_c('li',[_v("Confirm the differences indicate the behavior has changed as you intended. If the differences are not as intended, your code is buggy; fix the code and repeat from step 1.")]),_v(" "),_c('li',[_v("Copy over the content of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ACTUAL.TXT")]),_v(" to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EXPECTED.TXT")]),_v(" i.e., we accept that the actual behavior should be the new "),_c('em',[_v("expected")]),_v(" behavior. Rerun the test to confirm that it passes this time.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"troubleshooting"}},[_c('span',{staticClass:"anchor",attrs:{"id":"troubleshooting"}}),_v("Troubleshooting"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#troubleshooting","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("Problem")]),_v(": The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ACTUAL.TXT")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EXPECTED.TXT")]),_v(" looks exactly the same but the test fails."),_c('br'),_v(" "),_c('strong',[_v("Explanation")]),_v(": The likely cause that the line endings are different (not visible to the naked eye) because the two files were created in two different operating systems."),_c('br'),_v(" "),_c('strong',[_v("Solution")]),_v(": You can use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("dos2unix")]),_v(" utility (available in git-bash and *nix operating systems) to convert a file to Unix format.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Authors:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Initial Version: based on se-edu/addressbook-level2, adapted by Jeffry Lum")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 3.0.6")]),_v(" on Mon, 6 Sept 2021, 23:44:32 GMT+8]")])])])}
}];
  