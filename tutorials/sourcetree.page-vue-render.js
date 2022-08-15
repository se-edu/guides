
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#sourcetree-tips"}},[_v("Sourcetree Tips‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#connecting-sourcetree-to-your-github-account"}},[_v("Connecting Sourcetree to Your GitHub Account‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#on-windows"}},[_v("On Windows‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#on-a-mac"}},[_v("On a Mac‎")])])])])],1)])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"anchor",attrs:{"id":"guides-for-se-student-projects"}}),_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p'),_c('h1',{attrs:{"id":"sourcetree-tips"}},[_c('span',{staticClass:"anchor",attrs:{"id":"sourcetree-tips"}}),_v("Sourcetree Tips"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#sourcetree-tips","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h2',{attrs:{"id":"connecting-sourcetree-to-your-github-account"}},[_c('span',{staticClass:"anchor",attrs:{"id":"connecting-sourcetree-to-your-github-account"}}),_v("Connecting Sourcetree to Your GitHub Account"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#connecting-sourcetree-to-your-github-account","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://www.sourcetreeapp.com/"}},[_v("SourceTree")]),_v(" is a free GUI client for Git.\nOne hurdle you might face while using Sourcetree is getting it to work with your GitHub account using GitHub's PAT (Personal Access Token).\nGiven below are some things you can try if you encounter that problem.")]),_v(" "),_c('h3',{attrs:{"id":"on-windows"}},[_c('span',{staticClass:"anchor",attrs:{"id":"on-windows"}}),_v("On Windows"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#on-windows","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("Option 1:")])]),_v(" "),_c('ol',[_c('li',[_v("Authenticate with your default browser on your GitHub account with your normal GitHub username/password.")]),_v(" "),_c('li',[_v("In the SourceTree, choose "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tools")]),_v(" -> "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Options")]),_v(" -> "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Authentication")])]),_v(" "),_c('li',[_v("If any GitHub authentication methods are shown in that dialog, delete them.")]),_v(" "),_c('li',[_v("Click on "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Add")]),_v(", to add an authentication method.")]),_v(" "),_c('li',[_v("In the next dialog, choose:\n"),_c('ul',[_c('li',[_v("Hosting Service: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("GitHub")])]),_v(" "),_c('li',[_v("Preferred Protocol: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("HTTPS")])]),_v(" "),_c('li',[_v("Authentication: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("OAuth")])])])]),_v(" "),_c('li',[_v("Click on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Refresh OAuth token")]),_v(" button."),_c('br'),_v("\nIf a Browser Window pops up and asks you to login to GitHub and to authorize SourceTree accessing your GitHub account, do so.")]),_v(" "),_c('li',[_v("Now, your Sourcetree should be able to push code to a GitHub repo that you have write permission to.")])]),_v(" "),_c('p',[_c('strong',[_v("Option 2:")])]),_v(" "),_c('ol',[_c('li',[_v("In the SourceTree, choose "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tools")]),_v(" -> "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Options")]),_v(" -> "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Authentication")])]),_v(" "),_c('li',[_v("If any GitHub authentication methods are shown in that dialog, delete them.")]),_v(" "),_c('li',[_v("Click on "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Add")]),_v(", to add an authentication method.")]),_v(" "),_c('li',[_v("In the next dialog, choose:\n"),_c('ul',[_c('li',[_v("Hosting Service: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("GitHub")])]),_v(" "),_c('li',[_v("Preferred Protocol: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("HTTPS")])]),_v(" "),_c('li',[_v("Authentication: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Basic")]),_v(" "),_c('mark',[_v("(different from option 1 above)")])])])]),_v(" "),_c('li',[_v("Click on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Refresh Password")]),_v(" button. When prompted, enter your usual GitHub username but give the PAT (the one you created in step 1) instead of the regular password.")]),_v(" "),_c('li',[_v("Now, your Sourcetree should be able to push code to a GitHub repo that you have write permission to.")])]),_v(" "),_c('p',[_c('strong',[_v("If neither of the above works")]),_v(", you can try them again but first delete any GitHub credentials already saved by Windows.\nHere are the steps:")]),_v(" "),_c('ol',[_c('li',[_c('a',{attrs:{"href":"https://support.microsoft.com/en-gb/windows/accessing-credential-manager-1b5c916a-6a16-889f-8581-fc16e8165ac0"}},[_v("Open the Windows Credential Manager")]),_v(".")]),_v(" "),_c('li',[_v("Delete any credentials related to GitHub (if the name mentions GitHub) in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Web Credentials")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Windows Credentials")]),_v(" categories.")])]),_v(" "),_c('h3',{attrs:{"id":"on-a-mac"}},[_c('span',{staticClass:"anchor",attrs:{"id":"on-a-mac"}}),_v("On a Mac"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#on-a-mac","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Try this guide from Medium: "),_c('a',{attrs:{"href":"https://eekayonline.medium.com/connecting-mac-sourcetree-with-your-github-account-b6b3bb3c5a66"}},[_v("Connecting Mac SourceTree with your GitHub account")]),_v(".")]),_v(" "),_c('p',[_v("If the above doesn't work, try this guide (also from Medium): "),_c('a',{attrs:{"href":"https://medium.com/geekculture/using-personal-access-token-in-sourcetree-to-connect-to-github-3702a29554d3"}},[_v("Using Sourcetree to connect to Github without password")]),_v("."),_c('br'),_v("\nIt gives two methods. Recommended to try method 2 first.")]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}}),_c('p')])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.0.0")]),_v(" on Tue, 16 Aug 2022, 0:40:45 GMT+8]")])])])}
}];
  