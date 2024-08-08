
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_c('div',{attrs:{"id":"commit-message-subject-format"}},[_m(4),_v(" "),_m(5),_v(" "),_c('box',{attrs:{"type":"info","seamless":"","add-class":"ml-5"}},[_c('p',[_v("Rationale: Some tools show only a limited number of characters from the commit message.")])]),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_v("You can use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("scope: change")]),_v(" format or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("category: change")]),_v(" (when applicable).")]),_v(" "),_c('ul',[_c('li',[_v("e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person class: remove static imports")]),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Main.java: Remove blank lines")]),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bug fix: Add space after name")])])])]),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("There are other commit subject conventions such as the "),_c('a',{attrs:{"href":"https://www.conventionalcommits.org/"}},[_c('em',[_v("Conventional Commits")]),_v(" Format")]),_v(" which are more elaborate but have additional benefits.")])])],1),_v(" "),_m(12),_v(" "),_c('div',{attrs:{"id":"commit-message-body-format"}},[_m(13),_v(" "),_m(14),_v(" "),_c('p',[_v("Example: A commit message for a commit that is part of a multi-commit PR:")]),_v(" "),_c('pre',[_m(15),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_v("Tips for SourceTree users:")]),_v(" "),_c('ul',[_c('li',[_c('strong',[_v("Enable the column guide option")]),_v(" to help you keep the commit message width to a 72 characters:\n"),_c('ol',[_c('li',[_v("Choose "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tools")]),_v(" -> "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Options")]),_v(".")]),_v(" "),_c('li',[_v("Click on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("General")]),_v(" tab, scroll down to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Commit settings")]),_v(" section.")]),_v(" "),_c('li',[_v("Tick the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Display a column guide at commit message at [72] characters")]),_v(" option (if this option is disabled, first tick the option "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("used fixed-width fonts for commit messages")]),_v(" "),_c('span',{staticClass:"dimmed"},[_v("-- reason: a column guide makes sense only if a fixed-width font is used")]),_v(").")])])]),_v(" "),_c('li',[_c('strong',[_v("Enable the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("spell check commit messages")]),_v(" option")]),_v(" (found in the same place as above) too.")])])]),_v(" "),_m(16),_v(" "),_c('p',[_v("Example: A commit message for a bug fix:")]),_v(" "),_c('pre',[_m(17),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_m(18),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_c('pre',[_m(21),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_m(22),_v(" "),_c('p',[_v("Example: A commit message for a code quality refactoring:")]),_v(" "),_c('pre',[_m(23),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_c('box',{attrs:{"type":"info"}},[_c('p',[_v("Refer to the article "),_c('em',[_c('a',{attrs:{"href":"http://chris.beams.io/posts/git-commit/"}},[_v("How to Write a Git Commit Message")])]),_v(" for more advice on writing good commit messages.")])])],1),_v(" "),_m(24),_v(" "),_m(25),_c('p')]),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#git-conventions"}},[_v("Git conventions‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#commit-message-subject"}},[_v("Commit message: Subject‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#commit-message-body"}},[_v("Commit message: Body‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#branch-names"}},[_v("Branch names‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(26)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"git-conventions"}},[_v("Git conventions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#git-conventions","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Legend")]),_v(": "),_c('span',[_c('span',{staticClass:"badge rounded-pill bg-danger"},[_c('span',{staticClass:"far fa-star",attrs:{"aria-hidden":"true"}})])]),_v(" basic rule | "),_c('span',[_c('span',{staticClass:"badge rounded-pill bg-warning text-white"},[_c('span',{staticClass:"far fa-star",attrs:{"aria-hidden":"true"}}),_c('span',{staticClass:"far fa-star",attrs:{"aria-hidden":"true"}})])]),_v(" intermediate rule | "),_c('span',[_c('span',{staticClass:"badge rounded-pill bg-success"},[_c('span',{staticClass:"far fa-star",attrs:{"aria-hidden":"true"}}),_c('span',{staticClass:"far fa-star",attrs:{"aria-hidden":"true"}}),_c('span',{staticClass:"far fa-star",attrs:{"aria-hidden":"true"}})])]),_v(" advanced rule")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"commit-message-subject"}},[_v("Commit message: Subject"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#commit-message-subject","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('span',[_c('span',{staticClass:"badge rounded-pill bg-danger"},[_c('span',{staticClass:"far fa-star",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('strong',[_v("Every commit must have a well-written commit message "),_c('em',[_v("subject line")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("Try to limit the subject line to 50 characters (hard limit: 72 chars)")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('span',[_c('span',{staticClass:"badge rounded-pill bg-danger"},[_c('span',{staticClass:"far fa-star",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('strong',[_c('mark',[_v("Use the imperative mood in the subject line.")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('span',{staticStyle:{"color":"green"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-up",attrs:{"aria-hidden":"true"}}),_v(" Good")])])]),_v(": "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Add README.md")])]),_v(" "),_c('li',[_c('span',{staticStyle:{"color":"red"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-down",attrs:{"aria-hidden":"true"}}),_v(" Bad")])])]),_v(": "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Added README.md")])]),_v(" "),_c('li',[_c('span',{staticStyle:{"color":"red"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-down",attrs:{"aria-hidden":"true"}}),_v(" Bad")])])]),_v(": "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Adding README.md")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('span',[_c('span',{staticClass:"badge rounded-pill bg-danger"},[_c('span',{staticClass:"far fa-star",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('strong',[_v("Capitalize the first letter of the subject line.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('span',{staticStyle:{"color":"green"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-up",attrs:{"aria-hidden":"true"}}),_v(" Good")])])]),_v(": "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Move index.html file to root")])]),_v(" "),_c('li',[_c('span',{staticStyle:{"color":"red"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-down",attrs:{"aria-hidden":"true"}}),_v(" Bad")])])]),_v(": "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("move index.html file to root")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('span',[_c('span',{staticClass:"badge rounded-pill bg-danger"},[_c('span',{staticClass:"far fa-star",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('strong',[_v("Do not end the subject line with a period.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('span',{staticStyle:{"color":"green"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-up",attrs:{"aria-hidden":"true"}}),_v(" Good")])])]),_v(": "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Update sample data")])]),_v(" "),_c('li',[_c('span',{staticStyle:{"color":"red"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-down",attrs:{"aria-hidden":"true"}}),_v(" Bad")])])]),_v(": "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Update sample data.")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"commit-message-body"}},[_v("Commit message: Body"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#commit-message-body","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('span',[_c('span',{staticClass:"badge rounded-pill bg-danger"},[_c('span',{staticClass:"far fa-star",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('strong',[_v("Commit messages for non-trivial commits should have a "),_c('em',[_v("body")]),_v(" giving details of the commit.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("Separate subject from body with a blank line.")])]),_v(" "),_c('li',[_c('strong',[_v("Wrap the body at 72 characters.")])]),_v(" "),_c('li',[_c('strong',[_v("Use blank lines to separate paragraphs.")])])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Unify variations of toSet() methods\n")]),_c('span',[_v("\n")]),_c('span',[_v("There are several methods that convert a collection to a set. In some\n")]),_c('span',[_v("cases the conversion is in-lined as a code block in another method.\n")]),_c('span',[_v("\n")]),_c('span',[_v("Unifying all those duplicated code improves the code quality.\n")]),_c('span',[_v("\n")]),_c('span',[_v("As a step towards such unification, let's extract those duplicated code\n")]),_c('span',[_v("blocks into separate methods in their respective classes. Doing so will\n")]),_c('span',[_v("make the subsequent unification easier.\n")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('span',[_c('span',{staticClass:"badge rounded-pill bg-danger"},[_c('span',{staticClass:"far fa-star",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('strong',[_v("Use bullet points as necessary.")]),_v(" Instead of relying entirely on paragraphs of text, use other constructs such as bullet lists when it helps.")])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Find command: make matching case-insensitive\n")]),_c('span',[_v("\n")]),_c('span',[_v("Find command is case-sensitive.\n")]),_c('span',[_v("\n")]),_c('span',[_v("A case-insensitive find is more user-friendly because users cannot be\n")]),_c('span',[_v("expected to remember the exact case of the keywords.\n")]),_c('span',[_v("\n")]),_c('span',[_v("Let's,\n")]),_c('span',[_v("* update the search algorithm to use case-insensitive matching\n")]),_c('span',[_v("* add a script to migrate stress tests to the new format\n")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('span',[_c('span',{staticClass:"badge rounded-pill bg-warning text-white"},[_c('span',{staticClass:"far fa-star",attrs:{"aria-hidden":"true"}}),_c('span',{staticClass:"far fa-star",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('strong',[_v("Explain WHAT, WHY, not HOW")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("Use the body to explain WHAT the commit is about and WHY it was done that way. The reader can refer to the diff to understand HOW the change was done.")])]),_v(" "),_c('li',[_c('p',[_v("Give an explanation for the change(s) that is detailed enough so that the reader can judge if it is a good thing to do, without reading the actual diff to determine how well the code does what the explanation promises to do."),_c('br'),_v("\nIf your description starts to get too long, that's a sign that you probably need to split up your commit to finer grained pieces. [adapted from: "),_c('a',{attrs:{"href":"https://github.com/git/git/blob/e05806da9ec4aff8adfed142ab2a2b3b02e33c8c/Documentation/SubmittingPatches#L37-L132"}},[_v("git project")]),_v("]")])]),_v(" "),_c('li',[_c('p',[_v("Minimize repeating information that are given in code comments of the same commit.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('span',[_c('span',{staticClass:"badge rounded-pill bg-success"},[_c('span',{staticClass:"far fa-star",attrs:{"aria-hidden":"true"}}),_c('span',{staticClass:"far fa-star",attrs:{"aria-hidden":"true"}}),_c('span',{staticClass:"far fa-star",attrs:{"aria-hidden":"true"}})])]),_v(" "),_c('strong',[_v("Structure the body as follows")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("{current situation} -- use present tense\n")]),_c('span',[_v("\n")]),_c('span',[_v("{why it needs to change}\n")]),_c('span',[_v("\n")]),_c('span',[_v("{what is being done about it} -- use imperative mood\n")]),_c('span',[_v("\n")]),_c('span',[_v("{why it is done that way}\n")]),_c('span',[_v("\n")]),_c('span',[_v("{any other relevant info}\n")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Avoid terms such as 'currently', 'originally' when describing the current situation. They are implied.")]),_v(" "),_c('li',[_v("The word "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Let's")]),_v(" can be used to indicate the beginning of the section that describes the change done in the commit.")])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Person attributes classes: extract a parent class PersonAttribute\n")]),_c('span',[_v("\n")]),_c('span',[_v("Person attribute classes (e.g. Name, Address, Age etc.) have some common\n")]),_c('span',[_v("behaviors (e.g. isValid()).\n")]),_c('span',[_v("\n")]),_c('span',[_v("The common behaviors across person attribute classes cause code duplication.\n")]),_c('span',[_v("\n")]),_c('span',[_v("Extracting the common behavior into a super class allows us to use\n")]),_c('span',[_v("polymorphism when dealing with person attributes. For example, validity\n")]),_c('span',[_v("checking can be done for all attributes of a person in one loop.\n")]),_c('span',[_v("\n")]),_c('span',[_v("Let's pull up behaviors common to all person attribute classes into a new\n")]),_c('span',[_v("parent class named PersonAttribute.\n")]),_c('span',[_v("\n")]),_c('span',[_v("Using inheritance is preferable over composition in this situation\n")]),_c('span',[_v("because the common behaviors are not composable.\n")]),_c('span',[_v("\n")]),_c('span',[_v("Refer to this S/O discussion on dealing with attributes\n")]),_c('span',[_v("http://stackoverflow.com/some/question\n")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"branch-names"}},[_v("Branch names"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#branch-names","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"branch-names-format"}},[_c('p',[_v("Follow these rules to improve consistency:")]),_v(" "),_c('ul',[_c('li',[_v("Use a meaningful name consisting of some relevant keywords, in the "),_c('em',[_v("kebab case")]),_v(" format e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("refactor-ui-tests")]),_v(".")]),_v(" "),_c('li',[_v("If the branch is related to an issue, use the format "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("issueNumber-some-keywords-from-issue-title")]),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("1234-ui-freeze-error")])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.2")]),_v(" on Fri, 9 Aug 2024, 1:25:07 GMT+8]")])])])}
}];
  