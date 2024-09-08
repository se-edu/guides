
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#best-practices-for-reviewing-prs"}},[_v("Best practices for reviewing PRs‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#best-practices-for-reviewers"}},[_v("Best practices for reviewers‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#best-practices-for-authors"}},[_v("Best practices for authors‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p'),_c('h1',{attrs:{"id":"best-practices-for-reviewing-prs"}},[_v("Best practices for reviewing PRs"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#best-practices-for-reviewing-prs","onclick":"event.stopPropagation()"}})]),_v(" "),_c('div',{staticClass:"lead"},[_c('p',[_v("Reviewing PRs is not just about the code or the tools, "),_c('strong',[_v("the way you phrase your comments matters too")]),_v(", especially if you are a peer reviewer.")])]),_v(" "),_c('h2',{attrs:{"id":"best-practices-for-reviewers"}},[_v("Best practices for reviewers"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#best-practices-for-reviewers","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('strong',[_v("Add specific comments at relevant places of the code")]),_v(", rather than give one overall comment for the entire PR.\n"),_c('ul',[_c('li',[_v("It is typical for the comment to be added right below the code line it refers to."),_c('br'),_v("\nIt is possible to "),_c('a',{attrs:{"href":"https://twitter.com/natfriedman/status/1179097330097643521"}},[_v("mark multiple lines")]),_v(" as linked to the comment too.")]),_v(" "),_c('li',[_v("You can use Markdown (specifically, "),_c('a',{attrs:{"href":"https://guides.github.com/features/mastering-markdown/"}},[_v("GitHub-Flavored Markdown")]),_v(") in your comments.")])])]),_v(" "),_c('li',[_c('mark',[_c('strong',[_v("It's best to phrase comments as questions")])]),_v(", especially if you are a peer reviewer."),_c('br'),_v("\ne.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Should this be extracted out?")]),_v(" rather than "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Extract this out")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("This should be extracted out")]),_v(".")]),_v(" "),_c('li',[_c('strong',[_v("Say 'I like', not 'good/bad'")]),_v(". Consider these two alternatives:"),_c('br'),_v("\nOption 1: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("This separation of X from Y is good")]),_v(" (or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("correct")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("wrong")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bad")]),_v(")"),_c('br'),_v("\nOption 2: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("I like how you separated X from Y")]),_v(" (or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("didn't like")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Not sure I like")]),_v(")"),_c('br'),_v("\nThe second one is less judgemental and less likely to cause the author to become defensive.")]),_v(" "),_c('li',[_c('strong',[_v("Feel free to ask for more info from the author")]),_v(", to help you understand the code/design. For example, you can ask why the author chose to write the code in a specific way.")]),_v(" "),_c('li',[_c('strong',[_v("You can also suggest alternatives for the author to consider.")]),_c('br'),_v("\nCombining this with the previous point, you can ask "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Any reason why you did it this way instead of that way?")])]),_v(" "),_c('li',[_c('strong',[_v("Feel free to compliment the author when appropriate")]),_v(" instead of focusing on negative things only."),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_v("e.g., "),_c('em',[_v("hey, I like how clean this bit of code is")]),_v(" 👍")])]),_v(" "),_c('li',[_c('strong',[_v("Say please, but don't say "),_c('em',[_v("please")])]),_v(". Beware of overusing 'please' as it can be interpreted as a condescending tone. For example, someone can interpret "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Please use better variable names")]),_v(" as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Please for the love of God can you use better variable names?")]),_v(". Instead, you can say "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Perhaps a more intuitive variable name here?")]),_v(" which doesn't run any risk of misinterpretation.")]),_v(" "),_c('li',[_c('strong',[_v("No need to repeat the same comment "),_c('em',[_v("many")]),_v(" times")]),_v(". It's not the job of the reviewer to clean up after a sloppy author. If you notice the same problem in multiple places, after commenting an a few of them, you can simply say "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("... I noticed the same issue in several other places too")]),_v(".")]),_v(" "),_c('li',[_c('strong',[_v("Remember the "),_c('em',[_v("other")]),_v(" readers")]),_v(". PR comments can be read by people other than the reviewer and the author e.g., future programmers. Use regular English and avoid slang, colloquialisms, cultural references etc.")])]),_v(" "),_c('p',[_c('strong',[_c('strong',[_v("Further readings")])]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("Read the blog post "),_c('a',{attrs:{"href":"https://developers.redhat.com/blog/2019/07/08/10-tips-for-reviewing-code-you-dont-like/"}},[_c('strong',[_v("10 tips for reviewing code you don’t like")])]),_v(" - by David Lloyd (a Red Hat developer).")])]),_v(" "),_c('h2',{attrs:{"id":"best-practices-for-authors"}},[_v("Best practices for authors"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#best-practices-for-authors","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('strong',[_v("Don't get into arguments with reviewers.")]),_v(" If you disagree with the reviewer, you can explain your own view in a non-confrontational way without trying to prove your way is better.")]),_v(" "),_c('li',[_v("Thank reviewers for their inputs.")])]),_c('p')])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")]),_v(" on Sun, 8 Sept 2024, 18:25:16 GMT+8]")])])])}
}];
  