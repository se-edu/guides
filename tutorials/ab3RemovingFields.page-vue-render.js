
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://se-education.org","title":"SE-EDU"}},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_c('strong',[_v("SE-EDU")])])])])]},proxy:true},{key:"right",fn:function(){return [_c('li',{staticClass:"nav-link"},[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search this site","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/index.html"}},[_c('span',[_c('strong',[_v("Home")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/guides/about.html"}},[_c('span',[_c('strong',[_v("About")])])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/se-edu/guides"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p'),_c('div',[_c('box',{attrs:{"type":"important","seamless":""},scopedSlots:_u([{key:"icon",fn:function(){return [_c('span',{staticClass:"fas fa-bug",attrs:{"aria-hidden":"true"}})]},proxy:true}])},[_v(" "),_c('p',[_c('strong',[_v("Noticed any bugs/issues or unclear areas")]),_v(" while following this tutorial? Help us improve it by reporting it at "),_c('a',{attrs:{"href":"https://github.com/se-edu/guides/issues"}},[_v("our issue tracker")]),_v(".")])])],1),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_c('box',{attrs:{"type":"success"}},[_c('p',[_c('strong',[_v("If you have done the "),_c('a',{attrs:{"href":"/guides/tutorials/ab3AddRemark.html"}},[_v("Add "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("remark")]),_v(" command tutorial")]),_v("  already")]),_v(", you should know where the code had to be updated to add the field "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("remark")]),_v(". From that experience, you can deduce where the code needs to be changed to "),_c('em',[_v("remove")]),_v(" that field too. The removing of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("address")]),_v(" field can be done similarly.\n"),_c('br'),_v(" "),_c('br'),_v("\nHowever, if you have no such prior knowledge, removing a field can take a quite a bit of detective work. This tutorial takes you through that process. "),_c('strong',[_v("At least have a read even if you don't actually do the steps yourself.")])])]),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_c('pic',{attrs:{"src":"/guides/tutorials/images/remove/UnsafeDelete.png"}}),_v(" "),_m(9),_v(" "),_c('pic',{attrs:{"src":"/guides/tutorials/images/remove/SafeDeleteConflicts.png"}}),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_c('ol',[_m(12),_v(" "),_m(13),_v(" "),_c('li',[_c('p',[_v("Select "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("View Usages")]),_v(" again."),_c('br'),_v(" "),_c('pic',{attrs:{"src":"/guides/tutorials/images/remove/UnsafeDeleteOnField.png"}})],1)]),_v(" "),_c('li',[_m(14),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tip:")]),_v(" Removing usages may result in errors. Exercise discretion and fix them. For example, removing the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("address")]),_v(" field from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" class will require you to modify its constructor.")])])],1),_v(" "),_m(15)]),_v(" "),_c('p',[_v("After you are done, verify that the application still works by compiling and running it again.")]),_v(" "),_m(16),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_c('pic',{attrs:{"src":"/guides/tutorials/images/remove/$address.png","width":"800"}}),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_c('pre',[_m(21),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_m(22),_v(" "),_c('pre',[_m(23),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_m(24),_v(" "),_m(25),_v(" "),_m(26),_v(" "),_m(27),_v(" "),_m(28),_v(" "),_c('pre',[_m(29),_c('div',{staticClass:"function-btn-container"},[_c('button',{staticClass:"function-btn d-print-none",attrs:{"onclick":"copyCodeBlock(this)"}},[_v("\n    "),_c('div',{staticClass:"function-btn-body"},[_v("\n    \n"),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18","viewBox":"0 0 18 18","version":"1.1"}},[_v("\n    "),_c('g',{attrs:{"id":"surface1"}},[_v("\n      "),_c('path',{attrs:{"d":"M 11.273438 0 L 2.546875 0 C 1.746094 0 1.089844 0.613281 1.089844\n      1.363281 L 1.089844 10.910156 L 2.546875 10.910156 L 2.546875 1.363281 L 11.273438\n      1.363281 Z M 13.453125 2.726562 L 5.453125 2.726562 C 4.65625 2.726562 4 3.339844 4\n      4.089844 L 4 13.636719 C 4 14.386719 4.65625 15 5.453125 15 L 13.453125 15 C 14.253906\n      15 14.910156 14.386719 14.910156 13.636719 L 14.910156 4.089844 C 14.910156 3.339844\n      14.253906 2.726562 13.453125 2.726562 Z M 13.453125 13.636719 L 5.453125 13.636719 L\n      5.453125 4.089844 L 13.453125 4.089844 Z M 13.453125 13.636719 "}}),_v("\n    ")]),_v("\n")]),_v("\n\n    ")]),_v("\n    ")])])]),_m(30),_v(" "),_m(31),_v(" "),_c('hr'),_v(" "),_m(32),_v(" "),_m(33),_c('p')],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#ab3-tutorial-removing-fields"}},[_v("AB3 Tutorial: Removing Fields‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#safely-deleting-address"}},[_v("Safely deleting Address‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#assisted-refactoring"}},[_v("Assisted refactoring‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#manual-refactoring"}},[_v("Manual refactoring‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#tidying-up"}},[_v("Tidying up‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(34)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"guides-for-se-student-projects"}},[_c('span',{staticClass:"text-dark"},[_c('strong',[_c('strong',[_v("Guides for SE student projects »")])])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guides-for-se-student-projects","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"ab3-tutorial-removing-fields"}},[_v("AB3 Tutorial: Removing Fields"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#ab3-tutorial-removing-fields","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.")]),_v(" "),_c('p',[_v("—  Antoine de Saint-Exupery")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("When working on an existing code base, you will most likely find that some features that are no longer necessary.\nThis tutorial aims to give you some practice on such a code 'removal' activity by removing the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("address")]),_v(" field from "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" class.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"safely-deleting-address"}},[_v("Safely deleting "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Address")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#safely-deleting-address","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("IntelliJ IDEA provides a refactoring tool that can identify "),_c('em',[_v("most")]),_v(" parts of a removal easily. Let’s try to use it as much as we can.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"assisted-refactoring"}},[_v("Assisted refactoring"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#assisted-refactoring","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("address")]),_v(" field in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" is actually an instance of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("seedu.address.model.person.Address")]),_v(" class. Since removing the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Address")]),_v(" class will break the application, we start by identifying "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Address")]),_v("'s usages. This allows us to see code that depends on "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Address")]),_v(" to function properly and edit them on a case-by-case basis. Right-click the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Address")]),_v(" class and select "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Refactor")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Safe Delete")]),_v(" through the menu.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("💡 To make things simpler, you can unselect the options "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Search in comments and strings")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Search for text occurrences")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Choose to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("View Usages")]),_v(" and you should be presented with a list of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Safe Delete Conflicts")]),_v(". These conflicts describe locations in which the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Address")]),_v(" class is used.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Remove usages of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Address")]),_v(" by performing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Safe Delete")]),_v("s on each entry i.e., double-click on the entry (which takes you to the code in concern, right-click on that entity, and choose "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Refactor")]),_v(" -> "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Safe delete")]),_v(" as before). You will need to exercise discretion when removing usages of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Address")]),_v(". Functions like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ParserUtil#parseAddress()")]),_v(" can be safely removed but its usages must be removed as well. Other usages like in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonDescriptor")]),_v(" may require more careful inspection.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Let’s try removing references to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Address")]),_v(" in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonDescriptor")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_v("Safe delete the field "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("address")]),_v(" in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonDescriptor")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_v("Select "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Yes")]),_v(" when prompted to remove getters and setters.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Remove the usages of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("address")]),_v(" and select "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Do refactor")]),_v(" when you are done.")])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_v("Repeat the steps for the remaining usages of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Address")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"manual-refactoring"}},[_v("Manual refactoring"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#manual-refactoring","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Unfortunately, there are usages of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Address")]),_v(" that IntelliJ IDEA cannot identify. You can find them by searching for instances of the word "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("address")]),_v(" in your code ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Edit")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Find")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Find in path")]),_v(").")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Places of interest to look out for would be resources used by the application. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("main/resources")]),_v(" contains images and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("fxml")]),_v(" files used by the application and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test/resources")]),_v(" contains test data. For example, there is a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("$address")]),_v(" in each "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PersonCard")]),_v(" that has not been removed nor identified.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("A quick look at the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PersonCard")]),_v(" class and its "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("fxml")]),_v(" file quickly reveals why it slipped past the automated refactoring.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PersonCard.java")])])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("...\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@FXML")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" Label address;\n")]),_c('span',[_v("...\n")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PersonListCard.fxml")])])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("...\n")]),_c('span',[_v("<Label fx:id=\"phone\" styleClass=\"cell_small_label\" text=\"\\$phone\" />\n")]),_c('span',[_v("<Label fx:id=\"address\" styleClass=\"cell_small_label\" text=\"\\$address\" />\n")]),_c('span',[_v("<Label fx:id=\"email\" styleClass=\"cell_small_label\" text=\"\\$email\" />\n")]),_c('span',[_v("...\n")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("After removing the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Label")]),_v(", we can proceed to formally test our code. If everything went well, you should have most of your tests pass. Fix any remaining errors until the tests all pass.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"tidying-up"}},[_v("Tidying up"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tidying-up","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("At this point, your application is working as intended and all your tests are passing. What’s left to do is to clean up references to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Address")]),_v(" in test data and documentation.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/test/data/")]),_v(", data meant for testing purposes are stored. While keeping the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("address")]),_v(" field in the json files does not cause the tests to fail, it is not good practice to let cruft from old features accumulate.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalidPersonAddressBook.json")]),_v(":")])])}
},function anonymous(
) {
with(this){return _c('code',{pre:true,attrs:{"class":"hljs json"}},[_c('span',[_v("{\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("\"persons\"")]),_v(": [ {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("\"name\"")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"Person with invalid name field: Ha!ns Mu@ster\"")]),_v(",\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("\"phone\"")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"9482424\"")]),_v(",\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("\"email\"")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"hans@example.com\"")]),_v(",\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("\"address\"")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"4th street\"")]),_v("\n")]),_c('span',[_v("  } ]\n")]),_c('span',[_v("}\n")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("You can go through each individual "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("json")]),_v(" file and manually remove the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("address")]),_v(" field.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/guides/tutorials/ab3AddRemark.html"}},[_c('span',{staticClass:"fas fa-arrow-left",attrs:{"aria-hidden":"true"}}),_v(" Previous")]),_v(" | "),_c('a',{attrs:{"href":"/guides/tutorials/ab3.html"}},[_c('span',{staticClass:"fas fa-arrow-up",attrs:{"aria-hidden":"true"}}),_v(" "),_c('strong',[_v("ToC")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Authors:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Initial Version: Jeffry Lum")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Powered by "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")]),_v(" on Mon, 23 Sept 2024, 13:23:33 GMT+8]")])])])}
}];
  