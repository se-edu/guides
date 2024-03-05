
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_m(2),_v(" "),_c('ul',[_m(3),_v(" "),_m(4),_v(" "),_c('li',[_c('p',[_v("Divide long CSS files into sections.")]),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_v("\nBy segmenting the file(s) in this logical way, it is easy to locate css rules and to ensure that a new rule being added is not already present.\n")])],1)]),_v(" "),_m(5),_v(" "),_c('ul',[_c('li',[_m(6),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("RATIONALE: "),_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@import")])]),_v(" can be slow and may result in the page being rendered without css for a while before the page magically comes to life. As of now we are using css files as styles of HTML pages and thus the dependency must be clearly visible in the HTML page.")])]),_v(" "),_m(7)],1),_v(" "),_c('li',[_c('p',[_v("NO inline style sheets or inline styles in the HTML/JSP files.")]),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_v("\n  RATIONALE: The whole idea is to have Separation of Concerns (SoC). If css rules are specified everywhere, editing them in the future will be a hassle and redundant overriding of css rules may occur. If all are in one place management is also easier.\n  ")])],1)]),_v(" "),_c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_m(8),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_m(9),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])])]),_v(" "),_c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_m(10),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_m(11),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])])]),_v(" "),_c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_m(12),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_m(13),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])])]),_v(" "),_m(14),_v(" "),_c('ul',[_c('li',[_c('p',[_v("Do not use CSS3 selectors.")]),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("RATIONALE: Although they are powerful, cross-browser compatibility is difficult to achieve and many rules are supported by different browsers starting from different versions (refer: "),_c('a',{attrs:{"href":"http://www.w3schools.com/cssref/css3_browsersupport.asp"}},[_v("W3CSchools List")]),_v("). Also, we can stick to more functional names for the css and use classes to achieve our needs → more readable and easier to manage.")])])],1)]),_v(" "),_m(15),_v(" "),_c('ul',[_c('li',[_c('p',[_v("The selector(s) must be specified in separate lines.")]),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("RATIONALE: This eases reading as well as helps in revision control as conflicts reduce.")])])],1)]),_v(" "),_c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_m(16),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_m(17),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])])]),_v(" "),_c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_m(18),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_m(19),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])])]),_v(" "),_c('ul',[_c('li',[_m(20),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("RATIONALE: This gives a nice hierarchical structure to the file and helps to visually group css rules by indentation. In addition this gives an immediate idea as to how certain classes are being used in the HTML files (from the hierarchy) without actually reading HTML files.")])])],1)]),_v(" "),_m(21),_v(" "),_c('ul',[_c('li',[_m(22),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("RATIONALE: This speeds up the css match lookup. If such a qualification is actually required, either use another class on top of this to change the style or use a completely different class to start with. In any case, if this kind of qualification is needed, then probably the class has not been named well enough (see "),_c('a',{attrs:{"href":"#naming-classes"}},[_v("naming standards for classes")]),_v(")")])])],1),_v(" "),_c('li',[_m(23),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("RATIONALE: This is a strong recommendation as descendant selector is extremely expensive, especially when the specified ancestor has a lot of descendants.")])])],1)]),_v(" "),_m(24),_v(" "),_m(25),_v(" "),_m(26),_v(" "),_c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_m(27),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_m(28),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])])]),_v(" "),_c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_m(29),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_m(30),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])])]),_v(" "),_m(31),_v(" "),_m(32),_v(" "),_m(33),_v(" "),_c('ul',[_c('li',[_m(34),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("RATIONALE: It makes it easier to locate attributes in a css file.")])])],1)]),_v(" "),_c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_m(35),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_m(36),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])])]),_v(" "),_c('div',{staticClass:"container ml-3"},[_c('div',{staticClass:"row"},[_m(37),_v(" "),_c('div',{staticClass:"col"},[_c('pre',[_m(38),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])])])]),_v(" "),_m(39),_v(" "),_m(40),_v(" "),_m(41),_v(" "),_c('ul',[_m(42),_v(" "),_c('li',[_m(43),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("RATIONALE: Using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("!important")]),_v(" specifier overrides the natural flow of specificity and cascading hierarchy of css styles. Unless absolutely necessary do not use it. If there is such a situation clearly state the reason with comments ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("/* */")]),_v(").")])]),_v(" "),_m(44)],1)]),_v(" "),_m(45),_v(" "),_m(46),_c('p')]),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#css-coding-standard"}},[_v("CSS coding standard‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#general"}},[_v("General‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#css-files"}},[_v("CSS Files‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#selectors"}},[_v("Selectors‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#selector-formatting"}},[_v("Selector Formatting‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-of-efficient-selectors"}},[_v("Use of Efficient Selectors‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#classes"}},[_v("Classes‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#naming-classes"}},[_v("Naming Classes‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#attributes"}},[_v("Attributes‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#order-of-attributes"}},[_v("Order of Attributes‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#attribute-formatting"}},[_v("Attribute Formatting‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#general-details"}},[_v("General Details‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#resources"}},[_v("Resources‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(47)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"css-coding-standard"}},[_v("CSS coding standard"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#css-coding-standard","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"general"}},[_v("General"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#general","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_v("Use the "),_c('a',{attrs:{"href":"https://google.github.io/styleguide/htmlcssguide.xml"}},[_v("Google CSS Style Guide")]),_v("\nfor any topics not covered in this document.")])])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_v("If the project is using a framework (e.g. Bootstrap/jQuery UI), use classes from the framework as much as possible.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"css-files"}},[_v("CSS Files"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#css-files","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("CSS file includes must be done using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<link>")]),_v(" tags in the HTML/JSP files and NOT using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@import")]),_v(" in other css files.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('span',{staticStyle:{"color":"green"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-up",attrs:{"aria-hidden":"true"}}),_v(" Good")])])]),_v(": "),_c('code',{pre:true,attrs:{"class":"hljs inline html"}},[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("link")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("rel")]),_v("="),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"stylesheets\"")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("href")]),_v("="),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"../common.css\"")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("type")]),_v("="),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"text/css\"")]),_v(">")])]),_c('br'),_v(" "),_c('span',{staticStyle:{"color":"red"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-down",attrs:{"aria-hidden":"true"}}),_v(" Bad")])])]),_v(": "),_c('code',{pre:true,attrs:{"class":"hljs inline css"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("@import")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"common.css\"")]),_v(";")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"green"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-up",attrs:{"aria-hidden":"true"}}),_v(" Good")])])])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs css"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-selector-id"}},[_v("#mainDiv")]),_v(" {\n")]),_c('span',[_v("   "),_c('span',{pre:true,attrs:{"class":"hljs-attribute"}},[_v("border")]),_v(": thin solid black;\n")]),_c('span',[_v("   "),_c('span',{pre:true,attrs:{"class":"hljs-attribute"}},[_v("color")]),_v(": white;\n")]),_c('span',[_v("   "),_c('span',{pre:true,attrs:{"class":"hljs-attribute"}},[_v("margin")]),_v(": auto;\n")]),_c('span',[_v("}\n")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"red"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-down",attrs:{"aria-hidden":"true"}}),_v(" Bad")])])]),_v("  \n")])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs html"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("style")]),_v(">")]),_c('span',{pre:true,attrs:{"class":"css"}}),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"css"}},[_c('span',{pre:true,attrs:{"class":"hljs-selector-id"}},[_v("#mainDiv")]),_v(" {")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"css"}},[_v("   "),_c('span',{pre:true,attrs:{"class":"hljs-attribute"}},[_v("color")]),_v(": white;")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"css"}},[_v("}")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"css"}}),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("style")]),_v(">")]),_v("\n")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"red"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-down",attrs:{"aria-hidden":"true"}}),_v(" Bad")])])]),_v("  \n")])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs html"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("div")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("id")]),_v("="),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"mainDiv\"")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("style")]),_v("="),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"border: thin solid black; margin: auto\"")]),_v(">")]),_v("\n")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"selectors"}},[_v("Selectors"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#selectors","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"selector-formatting"}},[_v("Selector Formatting"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#selector-formatting","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"green"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-up",attrs:{"aria-hidden":"true"}}),_v(" Good")])])])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs css"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-selector-class"}},[_v(".button-sort-ascending")]),_c('span',{pre:true,attrs:{"class":"hljs-selector-pseudo"}},[_v(":hover")]),_v(",\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-selector-class"}},[_v(".button-sort-none")]),_c('span',{pre:true,attrs:{"class":"hljs-selector-pseudo"}},[_v(":hover")]),_v(" {\n")]),_c('span',[_v("   "),_c('span',{pre:true,attrs:{"class":"hljs-attribute"}},[_v("cursor")]),_v(": pointer;\n")]),_c('span',[_v("}\n")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"red"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-down",attrs:{"aria-hidden":"true"}}),_v(" Bad")])])]),_v("  \n")])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs css"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-selector-class"}},[_v(".button-sort-ascending")]),_c('span',{pre:true,attrs:{"class":"hljs-selector-pseudo"}},[_v(":hover")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-selector-class"}},[_v(".button-sort-none")]),_c('span',{pre:true,attrs:{"class":"hljs-selector-pseudo"}},[_v(":hover")]),_v(" {\n")]),_c('span',[_v("   "),_c('span',{pre:true,attrs:{"class":"hljs-attribute"}},[_v("cursor")]),_v(": pointer;\n")]),_c('span',[_v("}\n")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Group related/hierarchical style specifications (eg :hover, child specifier, etc) and provide an additional indent to the more specific selector. Refer to "),_c('a',{attrs:{"href":"http://isobar-idev.github.io/code-standards/#_css_formatting"}},[_v("here")]),_v(" for examples.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-of-efficient-selectors"}},[_v("Use of Efficient Selectors"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-of-efficient-selectors","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Do not qualify class/ID selectors using tag names (do not use: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("div.mainContent")]),_v(", simply use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".mainContent")]),_v("). Refer to "),_c('a',{attrs:{"href":"https://mdn.beonex.com/en/CSS/Writing_Efficient_CSS.html"}},[_v("Writing efficient CSS")]),_v(" for examples.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Use child selector rather than descendant selector (use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("#container > span")]),_v(" rather than "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("#container span")]),_v("). Refer to "),_c('a',{attrs:{"href":"https://mdn.beonex.com/en/CSS/Writing_Efficient_CSS.html"}},[_v("Writing efficient CSS")]),_v(" for examples.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"classes"}},[_v("Classes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#classes","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"naming-classes"}},[_v("Naming Classes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#naming-classes","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Use all lowercase letters."),_c('br'),_v("\nSeparate words with hyphens ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-")]),_v(") and no other separator."),_c('br'),_v("\nWe use 2 kinds of classes: Atomic and Component.\n"),_c('ul',[_c('li',[_c('strong',[_c('em',[_v("Atomic Classes")])]),_v(" describe atomic attributes like border-gray, align-center that can be used on any element.\nThey have at most 2 rules in them. Start their names with the attribute, followed by the value."),_c('br'),_v("\n(eg: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".align-center")]),_v(" and not "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".center-align")]),_v(")")]),_v(" "),_c('li',[_c('strong',[_c('em',[_v("Component Classes")])]),_v(" are used for components that have a particular role that (preferably) recurs in multiple pages. To name these classes, describe the function of the element rather than its location."),_c('br'),_v("\n(eg: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".panel-details")]),_v(" rather than "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".top-details-box")]),_v(")")])])])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"green"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-up",attrs:{"aria-hidden":"true"}}),_v(" Good")])])])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs css"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("/* Component Class */")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-selector-class"}},[_v(".comment-list")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-selector-class"}},[_v(".sort-icon")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("/* Atomic Class */")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-selector-class"}},[_v(".align-center")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-selector-class"}},[_v(".border-gray")]),_v("\n")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"red"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-down",attrs:{"aria-hidden":"true"}}),_v(" Bad")])])]),_v("  \n")])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs css"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-selector-class"}},[_v(".commentList")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-selector-class"}},[_v(".sort_icon")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-selector-class"}},[_v(".centeralign")]),_v("\n")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("When adding classes to style elements in the page, follow the following steps:\n"),_c('ul',[_c('li',[_v("Try and style the entire component using Bootstrap.")]),_v(" "),_c('li',[_v("For any additional css, if the component is used in many places create a functional name for the class.")]),_v(" "),_c('li',[_v("If the component does not have any recurring function, utilise the generic classes to achieve the styling.")]),_v(" "),_c('li',[_c('em',[_v("Exception:")]),_v(" If a particular element requires too many generic classes ( > 5) create a functional class name for it.")])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"attributes"}},[_v("Attributes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#attributes","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"order-of-attributes"}},[_v("Order of Attributes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#order-of-attributes","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Alphabetize the attributes, disregarding any browser prefix."),_c('br'),_v("\nAll browser-prefixed versions of an attribute must be written together.")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"green"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-up",attrs:{"aria-hidden":"true"}}),_v(" Good")])])])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs css"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-selector-class"}},[_v(".sort-icon")]),_v(" {\n")]),_c('span',[_v("   "),_c('span',{pre:true,attrs:{"class":"hljs-attribute"}},[_v("display")]),_v(": block;\n")]),_c('span',[_v("   "),_c('span',{pre:true,attrs:{"class":"hljs-attribute"}},[_v("float")]),_v(": right;\n")]),_c('span',[_v("   "),_c('span',{pre:true,attrs:{"class":"hljs-attribute"}},[_v("height")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("17px")]),_v(";\n")]),_c('span',[_v("   "),_c('span',{pre:true,attrs:{"class":"hljs-attribute"}},[_v("margin-top")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("1px")]),_v(";\n")]),_c('span',[_v("   "),_c('span',{pre:true,attrs:{"class":"hljs-attribute"}},[_v("width")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("12px")]),_v(";\n")]),_c('span',[_v("}\n")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"col-sm-auto"},[_c('span',{staticStyle:{"color":"red"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-down",attrs:{"aria-hidden":"true"}}),_v(" Bad")])])]),_v("  \n")])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs css"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-selector-class"}},[_v(".sort-icon")]),_v(" {\n")]),_c('span',[_v("   "),_c('span',{pre:true,attrs:{"class":"hljs-attribute"}},[_v("width")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("12px")]),_v(";\n")]),_c('span',[_v("   "),_c('span',{pre:true,attrs:{"class":"hljs-attribute"}},[_v("height")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("17px")]),_v(";\n")]),_c('span',[_v("   "),_c('span',{pre:true,attrs:{"class":"hljs-attribute"}},[_v("display")]),_v(": block;\n")]),_c('span',[_v("   "),_c('span',{pre:true,attrs:{"class":"hljs-attribute"}},[_v("margin-top")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("1px")]),_v(";\n")]),_c('span',[_v("   "),_c('span',{pre:true,attrs:{"class":"hljs-attribute"}},[_v("float")]),_v(": right;\n")]),_c('span',[_v("}\n")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"attribute-formatting"}},[_v("Attribute Formatting"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#attribute-formatting","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Semicolon after every attribute specification.")]),_v(" "),_c('li',[_v("Space after colon.")]),_v(" "),_c('li',[_v("Drop the units for 0 values (eg: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("margin: 0")]),_v(").")]),_v(" "),_c('li',[_v("All attribute(s) are to be specified in individual lines.")]),_v(" "),_c('li',[_v("Attributes must have one more indentation than the selector.")]),_v(" "),_c('li',[_v("Indent attributes that require browser specifications so that the actual attribute being declared is in one column. Refer to "),_c('a',{attrs:{"href":"http://learn.shayhowe.com/html-css/writing-your-best-code/#css-coding-practices"}},[_v("Writing Your Best Code")]),_v(" for examples.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"general-details"}},[_v("General Details"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#general-details","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_v("Use shorthands as much as possible (eg "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("border: 2px 0 1px 4px")]),_v(").")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("DO NOT use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("!important")]),_v(" specifier.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('span',{staticStyle:{"color":"red"}},[_c('span',[_c('strong',[_c('span',{staticClass:"fas fa-thumbs-down",attrs:{"aria-hidden":"true"}}),_v(" Bad")])])]),_v(": "),_c('code',{pre:true,attrs:{"class":"hljs inline css"}},[_c('span',{pre:true,attrs:{"class":"hljs-attribute"}},[_v("margin")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("10px")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("0")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("!important")]),_v(";")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"resources"}},[_v("Resources"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("Highly Recommended")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://google.github.io/styleguide/htmlcssguide.xml"}},[_v("Google CSS Style Guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"http://learn.shayhowe.com/html-css/writing-your-best-code/#css-coding-practices"}},[_v("Writing Your Best Code - CSS Coding Practices")])])])]),_v(" "),_c('li',[_c('p',[_v("Other Readings")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://code.tutsplus.com/tutorials/30-css-best-practices-for-beginners--net-6741"}},[_v("30 CSS Best Practices For Beginners")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://css-tricks.com/css-style-guides"}},[_v("A list of CSS style guides")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"http://isobar-idev.github.io/code-standards/"}},[_v("Isobar coding standards")])])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.3.0")]),_v(" on Tue, 5 Mar 2024, 16:05:05 GMT+8]")])])])}
}];
  