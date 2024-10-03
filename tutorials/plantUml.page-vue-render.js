
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_m(1),_v(" "),_m(2),_v(" "),_c('p',[_v("The sections below explains how to use PlantUML in a project.")]),_v(" "),_m(3),_v(" "),_c('box',{attrs:{"type":"info"}},[_c('p',[_v("This section explains how to install the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PlantUML integration")]),_v(" plugin in IntelliJ IDEA. If you are not using Intellij IDEA, you can refer to "),_c('a',{attrs:{"href":"https://plantuml.com/starting"}},[_v("this guide")]),_v(" on how to use PlantUML locally.")])]),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_c('box',{attrs:{"type":"info"}},[_c('p',[_v("This section is for those using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PlantUML integration")]),_v(" plugin in IntelliJ IDEA. Others can refer to "),_c('a',{attrs:{"href":"https://plantuml.com/starting"}},[_v("this guide")]),_v(" on how to use PlantUML locally.")])]),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_c('p',[_v("It is highly recommended to consistently color your UML diagrams as an visual aid. You can achieve this by creating a dictionary of colors and import it like CSS.")]),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_c('pre',[_m(15),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_c('p',[_v("Then you can use it in another PlantUML file like this:")]),_v(" "),_m(16),_v(" "),_c('pre',[_m(17),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_m(18),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_v("For a comprehensive list of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("skinparam")]),_v("s, see "),_c('a',{attrs:{"href":"https://plantuml-documentation.readthedocs.io/en/latest/"}},[_v("unofficial PlantUML skinparam documentation")]),_v(".")])]),_v(" "),_m(19),_v(" "),_c('p',[_v("While PlantUML’s automatic layout engine usually produces satisfactory results, at times the result can be less than ideal, especially on larger diagrams. Here is an example where the default layout generated by PlantUML has a lot of overlapping lines that are hard to decipher:")]),_v(" "),_m(20),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("In most cases, you should consider decomposing the diagram into smaller ones or focusing on a more specific portion of the diagram.")])]),_v(" "),_c('p',[_v("Here are some techniques you can use to obtain a more palatable diagram.")]),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_m(23),_v(" "),_m(24),_v(" "),_c('p',[_v("Clever usage of arrow directions will resolve most layout issues. For example, the table below shows how the way in which you specify arrows can results in drastically different layouts for the same diagram.")]),_v(" "),_c('table',[_c('caption',[_v("Table: Link directions")]),_v(" "),_m(25),_v(" "),_m(26),_v(" "),_c('tbody',[_c('tr',{staticClass:"odd"},[_c('td',[_c('pre',[_v("A --> Z\nB --> Z\nC --> Z\nD --> Z\n"),_c('p',[_v("A --> 1\nB --> 2\nC --> 3\nD --> 4")]),_v("\n"),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])]),_v(" "),_m(27)]),_v(" "),_c('tr',{staticClass:"even"},[_c('td',[_c('pre',[_v("'default is down\nA --> Z\n'specify down\nB -down-> Z\n'shorthand for down\nC -d-> Z\n'arrow lengths take priority\nD -down> Z\n\nA -up-> 1\nB -up-> 2\nC -up-> 3\nD -up-> 4\n"),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])]),_v(" "),_m(28)]),_v(" "),_c('tr',{staticClass:"odd"},[_c('td',[_c('pre',[_v("A -up-> Z\nB -up-> Z\nC -up-> Z\nD -up-> Z\n\nA --> 1\nB --> 2\nC --> 3\nD --> 4\n\n'Force A B C D\nA -right[hidden]- B\nB -right[hidden]- C\nC -right[hidden]- D\n"),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])]),_v(" "),_m(29)])])]),_v(" "),_m(30),_v(" "),_c('table',[_c('caption',[_v("Table: Definition ordering and outcomes")]),_v(" "),_m(31),_v(" "),_m(32),_v(" "),_c('tbody',[_c('tr',{staticClass:"odd"},[_c('td',[_c('pre',[_v("A --> B\nC --> D\n"),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])]),_v(" "),_m(33)]),_v(" "),_c('tr',{staticClass:"even"},[_c('td',[_c('pre',[_v("'Class C is defined before A\nClass C\n\nA --> B\nC --> D\n"),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])]),_v(" "),_m(34)]),_v(" "),_c('tr',{staticClass:"odd"},[_c('td',[_c('pre',[_v("package \"Rule Of Thumb\";{\n    Class C\n    A --> B\n    C --> D\n}\n"),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])])]),_v(" "),_m(35)])])]),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_v("Explicitly define all symbols to avoid any potential layout mishaps.")])]),_v(" "),_m(36),_v(" "),_m(37),_v(" "),_c('p',[_v("Refer to the following example:")]),_v(" "),_c('pre',[_m(38),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_c('pic',{attrs:{"src":"/guides/tutorials/images/plantuml/OriginalSequenceDiagram.png","width":"500"}}),_v(" "),_c('p',[_v("The sequence diagram illustrates two main actions: marking a cell and retrieving its appearance. We can simplify the diagram by moving the latter into a new reference frame.")]),_v(" "),_c('p',[_v("First we update the original diagram as follows:")]),_v(" "),_c('pre',[_m(39),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_c('pic',{attrs:{"src":"/guides/tutorials/images/plantuml/ParentReferenceFrameDiagram.png","width":"300"}}),_v(" "),_c('p',[_v("Then, we create a new diagram for the reference frame.")]),_v(" "),_c('pre',[_m(40),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_c('pic',{attrs:{"src":"/guides/tutorials/images/plantuml/ReferenceFrameDiagram.png","width":"300"}}),_v(" "),_c('hr'),_v(" "),_m(41),_v(" "),_m(42),_c('p')],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#using-plantuml"}},[_v("Using PlantUML‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#setting-up-plantuml"}},[_v("Setting up PlantUML‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#creating-editing-exporting-diagrams"}},[_v("Creating/editing/exporting diagrams‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#tips-and-tricks"}},[_v("Tips and tricks‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#maintaining-consistency-in-formatting"}},[_v("Maintaining consistency in formatting‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#repositioning-elements"}},[_v("Repositioning elements‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#using-reference-frames"}},[_v("Using reference frames‎")])])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(43)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"using-plantuml"}},[_v("Using PlantUML"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-plantuml","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"lead"},[_c('p',[_c('strong',[_c('a',{attrs:{"href":"http://plantuml.com/"}},[_v("PlantUML")]),_v(" is a tool for specifying various diagrams in a textual form.")]),_v(" It is particularly useful in software projects where you want to update the diagrams incrementally, as the project evolves over time.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"setting-up-plantuml"}},[_v("Setting up PlantUML"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up-plantuml","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Go to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("File")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Settings")]),_v(" to access the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Settings")]),_v(" page.")])]),_v(" "),_c('li',[_c('p',[_v("Go to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Settings")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Plugins")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Marketplace")]),_v(" and install the plugin "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PlantUML integration")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Then go to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Settings")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Languages & Frameworks")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PlantUML")]),_v(" or search for PlantUML. You can also use a specific version of PlantUML from the "),_c('a',{attrs:{"href":"https://github.com/plantuml/plantuml/releases"}},[_v("releases page")]),_v(".\n"),_c('a',{attrs:{"href":"/guides/tutorials/images/plantuml/ConfiguringSettings.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/plantuml/ConfiguringSettings.png","alt":"Settings - Other Settings - PlantUML: location of PlantUML.jar"}})])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"creating-editing-exporting-diagrams"}},[_v("Creating/editing/exporting diagrams"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#creating-editing-exporting-diagrams","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("After installing the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PlantUML integration")]),_v(" plugin, simply create or open any "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".puml")]),_v(" file to start editing it.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/guides/tutorials/images/plantuml/EditingDeleteSequenceDiagram.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/plantuml/EditingDeleteSequenceDiagram.png","alt":"Editing `DeleteSequenceDiagram.puml`"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Any changes you make in editor pane on the left will be reflected in the preview pane on the right. However, do take note that these changes "),_c('em',[_v("will not")]),_v(" be reflected in your actual documentation until you export the diagram.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_c('strong',[_v("Saving the Diagram as an image")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("When using MarkBind")]),_v(" as the site generation tool:\n"),_c('ul',[_c('li',[_v("MarkBind has built-in support for PlantUML. The diagram will be generated and saved as an image automatically. No additional work needed from you. Refer to "),_c('a',{attrs:{"href":"https://markbind.org/userGuide/components/imagesAndDiagrams.html#plantuml-diagrams"}},[_v("this section of the MarkBind User Guide")]),_v(" for more details.")])])]),_v(" "),_c('li',[_c('strong',[_v("When using Jekyll")]),_v(" as the site generation tool:\n"),_c('ul',[_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PlantUML integration")]),_v(" plugin allows you to export individual diagrams to a location of your choosing. Click the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Save Current Diagram Only")]),_v(" button and choose the location to export the image file.")]),_v(" "),_c('li',[_v("You will have to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git add")]),_v(" any new diagrams generated!")])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"tips-and-tricks"}},[_v("Tips and tricks"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tips-and-tricks","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"maintaining-consistency-in-formatting"}},[_v("Maintaining consistency in formatting"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#maintaining-consistency-in-formatting","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("For example, you can create a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Style.puml")]),_v(" with the contents:")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Style.puml.")])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("!define LOGIC_COLOR #3333C4\n")]),_c('span',[_v("!define LOGIC_COLOR_T1 #7777DB\n")]),_c('span',[_v("!define LOGIC_COLOR_T2 #5252CE\n")]),_c('span',[_v("!define LOGIC_COLOR_T3 #1616B0\n")]),_c('span',[_v("!define LOGIC_COLOR_T4 #101086\n")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("UndoSequenceDiagram.puml.")])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("!include Style.puml\n")]),_c('span',[_v("\n")]),_c('span',[_v("box Logic LOGIC_COLOR_T2\n")]),_c('span',[_v("participant \":LogicManager\" as LogicManager LOGIC_COLOR\n")]),_c('span',[_v("participant \":AddressBookParser\" as AddressBookParser LOGIC_COLOR\n")]),_c('span',[_v("participant \":UndoCommand\" as UndoCommand LOGIC_COLOR\n")]),_c('span',[_v("end box\n")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("You can fine-tune the formatting of PlantUML diagrams with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("skinparam")]),_v(" command. For example, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("skinparam backgroundColor transparent")]),_v(" turns the background of the diagram transparent.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"repositioning-elements"}},[_v("Repositioning elements"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#repositioning-elements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/guides/tutorials/images/plantuml/RawUiDiagram.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/plantuml/RawUiDiagram.png","alt":"The UI class diagram without additional formatting"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"link-lengths"}},[_v("Link lengths"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#link-lengths","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("By default, a short link ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("->")]),_v(") points to right and a long link ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-->")]),_v(") points downwards. you can extend any link to make it longer ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--->")]),_v(").")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/guides/tutorials/images/plantuml/ArrowLength.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/guides/tutorials/images/plantuml/ArrowLength.png","alt":"Length of arrows and its effects"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"link-directions"}},[_v("Link directions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#link-directions","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('colgroup',[_c('col',{staticStyle:{"width":"40%"}}),_v(" "),_c('col',{staticStyle:{"width":"60%"}})])}
},function anonymous(
) {
with(this){return _c('thead',[_c('tr',{staticClass:"header"},[_c('th',[_v("Source")]),_v(" "),_c('th',[_v("Result")])])])}
},function anonymous(
) {
with(this){return _c('td',[_c('img',{attrs:{"src":"/guides/tutorials/images/plantuml/AllDown.png"}})])}
},function anonymous(
) {
with(this){return _c('td',[_c('img',{attrs:{"src":"/guides/tutorials/images/plantuml/UpAndDown.png"}})])}
},function anonymous(
) {
with(this){return _c('td',[_c('img',{attrs:{"src":"/guides/tutorials/images/plantuml/HiddenArrows.png"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Another technique you can use to influence the layout is to reorder definitions.")]),_v(" The layout engine will attempt to order objects in the order in which they are defined. If there is no formal definition, the objects is taken to be declared upon its first usage.")])}
},function anonymous(
) {
with(this){return _c('colgroup',[_c('col',{staticStyle:{"width":"70%"}}),_v(" "),_c('col',{staticStyle:{"width":"30%"}})])}
},function anonymous(
) {
with(this){return _c('thead',[_c('tr',{staticClass:"header"},[_c('th',[_v("Source")]),_v(" "),_c('th',[_v("Result")])])])}
},function anonymous(
) {
with(this){return _c('td',[_c('img',{attrs:{"src":"/guides/tutorials/images/plantuml/ABeforeC.png"}})])}
},function anonymous(
) {
with(this){return _c('td',[_c('img',{attrs:{"src":"/guides/tutorials/images/plantuml/CBeforeA.png"}})])}
},function anonymous(
) {
with(this){return _c('td',[_c('img',{attrs:{"src":"/guides/tutorials/images/plantuml/PackagesAndConsistency.png"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"using-reference-frames"}},[_v("Using reference frames"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-reference-frames","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Reference frames in PlantUML sequence diagrams allow you to "),_c('strong',[_v("group and reuse sequences")]),_v(" of interactions, which helps improve readability and reduce repetition in complex scenarios. By encapsulating sequences into reference frames, you can also "),_c('strong',[_v("reduce complexity")]),_v(", making it easier to manage and understand the overall flow of interactions within your diagrams.")])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("@startuml\n")]),_c('span',[_v("\n")]),_c('span',[_v("hide footbox\n")]),_c('span',[_v("skinparam sequenceReferenceBackgroundColor #f7807c\n")]),_c('span',[_v("\n")]),_c('span',[_v("actor Player\n")]),_c('span',[_v("\n")]),_c('span',[_v("participant \":TextUi\" as TextUi #EE82EE\n")]),_c('span',[_v("participant \":MSLogic\" as MSLogic #90EE90\n")]),_c('span',[_v("\n")]),_c('span',[_v("Player -> TextUi : mark x y\n")]),_c('span',[_v("TextUi -> MSLogic : markCellAt(x, y)\n")]),_c('span',[_v("return\n")]),_c('span',[_v("\n")]),_c('span',[_v("TextUi -> MSLogic : getAppearanceOfCellAt(x, y)\n")]),_c('span',[_v("MSLogic -> TextUi : getConfig()\n")]),_c('span',[_v("TextUi --> MSLogic : config\n")]),_c('span',[_v("MSLogic --> TextUi : cellAppearance\n")]),_c('span',[_v("\n")]),_c('span',[_v("TextUi --> Player : Show updated minefield\n")]),_c('span',[_v("\n")]),_c('span',[_v("@enduml\n")])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("@startuml\n")]),_c('span',[_v("\n")]),_c('span',[_v("hide footbox\n")]),_c('span',[_v("skinparam sequenceReferenceBackgroundColor #f7807c\n")]),_c('span',[_v("\n")]),_c('span',[_v("actor Player\n")]),_c('span',[_v("\n")]),_c('span',[_v("participant \":TextUi\" as TextUi #EE82EE\n")]),_c('span',[_v("participant \":MSLogic\" as MSLogic #90EE90\n")]),_c('span',[_v("\n")]),_c('span',[_v("Player -> TextUi : mark x y\n")]),_c('span',[_v("TextUi -> MSLogic : markCellAt(x, y)\n")]),_c('span',[_v("return\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("ref over TextUi, MSLogic")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("get minefield appearance")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"highlighted"}},[_v("end ref")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_v("TextUi --> Player : Show updated minefield\n")]),_c('span',[_v("\n")]),_c('span',[_v("@enduml\n")])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("@startuml\n")]),_c('span',[_v("\n")]),_c('span',[_v("hide footbox\n")]),_c('span',[_v("\n")]),_c('span',[_v("participant \":TextUi\" as TextUi #EE82EE\n")]),_c('span',[_v("participant \":MSLogic\" as MSLogic #90EE90\n")]),_c('span',[_v("\n")]),_c('span',[_v("group sd get minefield appearance\n")]),_c('span',[_v("    TextUi -> MSLogic : getAppearanceOfCellAt(x, y)\n")]),_c('span',[_v("    MSLogic -> TextUi : getConfig()\n")]),_c('span',[_v("    TextUi --> MSLogic : config\n")]),_c('span',[_v("    MSLogic --> TextUi : cellAppearance\n")]),_c('span',[_v("end\n")]),_c('span',[_v("\n")]),_c('span',[_v("@enduml\n")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Authors:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Initial Version: Jeffry Lum")]),_v(" "),_c('li',[_v("Contributors:\n"),_c('ul',[_c('li',[_v("MUHAMMAD FIKRI BIN ABDUL KALAM (@mfjkri): added the part on SD reference frames")])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")]),_v(" on Thu, 3 Oct 2024, 15:57:51 GMT+8]")])])])}
}];
  