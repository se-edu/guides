
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_c('box',{attrs:{"type":"warning"}},[_c('p',[_c('strong',[_v("If you are working with a forked repo that is using MarkBind already")]),_v(", refer to "),_c('a',{attrs:{"href":"/guides/tutorials/markbind-forked-sites.html"}},[_v("this guide")]),_v(" instead.")])]),_v(" "),_m(2),_v(" "),_c('p',[_v("Given below are some information useful for when you want to update documentation in a project that uses MarkBind.")]),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("MarkBind is a superset of Markdown. Refer the "),_c('a',{attrs:{"href":"https://markbind.org/userGuide/gettingStarted.html"}},[_v("MarkBind user guide")]),_v(" for more details.")])]),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""}},[_c('p',[_v("While "),_c('em',[_v("live preview")]),_v(" can pick up most changes, it may not be able to pick up certain changes (e.g., changes to files in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("_markbind")]),_v(" folder or changes to nunjucks macros). Furthermore, some syntax errors in your code can cause the live preview to crash. In those cases, just stop the server ("),_c('kbd',[_v("Ctrl")]),_v("+"),_c('kbd',[_v("C")]),_v(" on Windows) and start it again.")])]),_v(" "),_m(10),_v(" "),_c('p',[_v("Project admins can,")]),_v(" "),_m(11),_c('p')],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#using-markbind-for-project-documentation"}},[_v("Using MarkBind for project documentation‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#installation"}},[_v("Installation‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#updating-documents"}},[_v("Updating documents‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#automating-pr-previews-deployments"}},[_v("Automating PR previews, deployments‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(12)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"using-markbind-for-project-documentation"}},[_v("Using MarkBind for project documentation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-markbind-for-project-documentation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"lead"},[_c('p',[_c('strong',[_c('a',{attrs:{"href":"https://markbind.org"}},[_v("MarkBind")]),_v(" is a tool for generating static websites from markdown-like text")]),_v(", particularly suitable for text-heavy websites such as software project documentation.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"installation"}},[_v("Installation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#installation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("You can choose one of the three methods described in "),_c('a',{attrs:{"href":"https://markbind.org/userGuide/gettingStarted.html"}},[_v("this page of the MarkBind User Guide")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"updating-documents"}},[_v("Updating documents"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#updating-documents","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("First, start the "),_c('em',[_v("live preview")])]),_v(": Unless it is a trivial change, you would want to see how your change to the documentation source files will reflect in the generated website. You can use the MarkBind "),_c('em',[_v("live preview")]),_v(" mode to preview the generated website as you update the source file. To start the live preview mode,")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Open a command prompt.")]),_v(" "),_c('li',[_v("Navigate to the the "),_c('em',[_v("documentation root")]),_v(" (in most projects, the documentation root is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[project root]/docs")]),_v(" -- if you are not sure, look for the folder containing the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("site.json")]),_v(" file).")]),_v(" "),_c('li',[_v("Run the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markbind serve")]),_v(" command. That will open the generated website in your default browser.")]),_v(" "),_c('li',[_v("In the browser, navigate to the page you want to modify.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Next, edit the files you want")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Edit the source files (usually, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".md")]),_v(" files).")]),_v(" "),_c('li',[_v("When you save the file, the live preview will update to reflect the new contents (after a few seconds).")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"automating-pr-previews-deployments"}},[_v("Automating PR previews, deployments"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#automating-pr-previews-deployments","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("set up Netlify to give a preview of how a PR can affect the generated website. More info "),_c('a',{attrs:{"href":"https://markbind.org/userGuide/deployingTheSite.html#deploying-to-netlify"}},[_v("here")]),_v(".")]),_v(" "),_c('li',[_v("set up Travis to automatically generate and deploy the project website when new code is pushed. More info "),_c('a',{attrs:{"href":"https://markbind.org/userGuide/deployingTheSite.html#deploying-to-github-pages"}},[_v("here")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")]),_v(" on Sun, 2 Mar 2025, 11:41:30 GMT+8]")])])])}
}];
  