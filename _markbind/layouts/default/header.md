<header>
<navbar placement="top" type="light">
<a slot="brand" href="https://se-edu.github.io" title="More SE-EDU Resources" class="navbar-brand"><img src="https://se-edu.github.io/images/SeEduLogo.png" alt="SE-EDU" width="30"></a>
  <li><a href="https://se-edu.github.io/addressbook-level3/" class="nav-link"><md>AB-3</md></a></li>
  <li><a href="https://se-edu.github.io/se-book/" class="nav-link"><md>Book</md></a></li>
  <dropdown header="Tutorials" class="nav-link">
    <li><a href="{{baseUrl}}/index.html" class="dropdown-item"><md>Home</md></a></li>
    <li><a href="{{baseUrl}}/about.html" class="dropdown-item"><md>About</md></a></li>
    <li><a href="https://github.com/se-edu/guides" class="dropdown-item"><md>{{ fab_github }} GitHub</md></a></li>
  </dropdown>
  <li slot="right" class="nav-link">
    <form class="navbar-form">
      <searchbar :data="searchData" placeholder="Search Guides" :on-hit="searchCallback" menu-align-right ></searchbar>
    </form>
  </li>
</navbar>
</header>
