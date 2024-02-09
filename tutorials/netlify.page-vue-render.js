
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_c('div',{staticClass:"lead"},[_c('p',[_m(2),_v(" Its "),_m(3),_v(" feature is particularly useful for "),_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("i.e., how would the final output of the documentation will change if the PR is merged")]},proxy:true}])},[_v("previewing documentation changes in a PR")]),_v(".")],1)]),_v(" "),_c('p',[_v("The sections below explains how to use Netlify in a project.")]),_v(" "),_c('box',{attrs:{"type":"important","seamless":""}},[_c('p',[_c('strong',[_v("Caution:")]),_v(" Netlify allows only 300 free build minutes per month. They use an unsavory practice of letting you exceed the limit silently and then sending you an invoice for the extra use. You will not be able to use Netlify again unless you pay (or get them to cancel the charge). Therefore, we caution you to use Netlify (if at all) during times you update documentation and only if you want to use Netlify "),_c('em',[_v("Deploy Previews")]),_v(" to help review such PRs.")])]),_v(" "),_m(4),_v(" "),_c('ol',[_m(5),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_c('li',[_m(9),_v(" "),_m(10),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("For both Jekyll and MarkBind, omit the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cd docs &&")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("docs/")]),_v(" from the "),_c('em',[_v("build command")]),_v(" and the "),_c('em',[_v("publish directory")]),_v(" respectively if the documentation is in the root (i.e., not inside the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("docs")]),_v(" folder).")])])],1),_v(" "),_m(11)]),_v(" "),_m(12),_v(" "),_c('p',[_v("If you don’t like the site name given by Netlify, you can change it as follows:")]),_v(" "),_m(13),_c('p')],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#using-netlify"}},[_v("Using Netlify‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#setting-up"}},[_v("Setting up‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#changing-the-site-name"}},[_v("Changing the site name‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(14)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"using-netlify"}},[_v("Using Netlify"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-netlify","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('strong',[_c('a',{attrs:{"href":"https://www.netlify.com/"}},[_v("Netlify")]),_v(" is an automated hosting platform for deploying websites.")])}
},function anonymous(
) {
with(this){return _c('a',{attrs:{"href":"https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/"}},[_c('em',[_v("deploy previews")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"setting-up"}},[_v("Setting up"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_v("Go to "),_c('a',{attrs:{"href":"https://www.netlify.com/"}},[_v("https://www.netlify.com/")]),_v(" and click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Sign Up")]),_v(". Next, click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("GITHUB SIGN IN")]),_v(", enter your GitHub account details and authorize netlify.")])])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_v("After logging in, click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("New site from Git")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_v("You will then be brought to the setup page. Click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("GitHub")]),_v(" to link your repository to Netlify.")]),_v(" "),_c('ul',[_c('li',[_v("Depending on whether you are the owner of the repository, you can either grant or request access to Netlify so that it can access your repository and build your documentation."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/guides/tutorials/images/netlify/grant_or_request_access.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/netlify/grant_or_request_access.png","alt":"Grant or request access"}})])]),_v(" "),_c('li',[_v("After granting or requesting access to your repository, click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Authorize netlify")]),_v(".")])])])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_v("Pick your repository from the list.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Fill out the details as follows and then click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Deploy site")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Branch to deploy: select "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master")]),_v(" branch")]),_v(" "),_c('li',[_v("If using Jekyll for project documentation:\n"),_c('ul',[_c('li',[_v("Build command: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cd docs && bundle install && bundle exec jekyll build")])]),_v(" "),_c('li',[_v("Publish directory: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("docs/_site")])])])]),_v(" "),_c('li',[_v("If using MarkBind for project documentation:\n"),_c('ul',[_c('li',[_v("Build Command: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cd docs && npm i markbind-cli -g && markbind build --baseUrl")])]),_v(" "),_c('li',[_v("Publish directory: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("docs/_site")])])])])])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_v("Once Netlify has completed building your project, you can now:")]),_v(" "),_c('ul',[_c('li',[_v("View your main branch’s deployed documentation on the site name given by Netlify (customizable as shown "),_c('a',{attrs:{"href":"#changing_the_site_name"}},[_v("below")]),_v(")."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/guides/tutorials/images/netlify/temp_site_name.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/netlify/temp_site_name.png","alt":"Temporary site name"}})])]),_v(" "),_c('li',[_v("Preview the updated documentation whenever a pull request is made by clicking the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Details")]),_v(" hyperlink next to the Netlify test status."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/guides/tutorials/images/netlify/netlify_details.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/netlify/netlify_details.png","alt":"Netlify details link"}})])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"changing-the-site-name"}},[_v("Changing the site name"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#changing-the-site-name","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Click on "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Settings")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Then click "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Change site name")]),_v(" and fill in your desired site name."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/guides/tutorials/images/netlify/change_site_name.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/netlify/change_site_name.png","alt":"Change site name"}})])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.2.0")]),_v(" on Fri, 9 Feb 2024, 17:07:42 GMT+8]")])])])}
}];
  