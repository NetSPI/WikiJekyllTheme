## Tab layout
The [tab layout](https://github.com/NetSPI/WikiJekyllTheme/blob/master/_layouts/tab.html) is an interesting one, but I hope it's useful. It allows a couple different configurations for hopefully every situation that will be required.

### Front Matter
The Tab front matter is as follows, make sure to remove everything including and after the `#` character.
```
---
layout: tab # (REQUIRED)
description: # HTML meta tag description (REQUIRED)
keywords: # HTML meta tag keywords (REQUIRED)
title: # HTML meta tag title (REQUIRED)
ignoreURL: # If the tabs do not need to be maintained across different pages, set to true. More explanation below (OPTIONAL)
tabs:
  - title: # The title that will show up for the tab (REQUIRED)
    shortName: # A shortname for the code to reference the tab by, only lowercase and no spaces (REQUIRED)
    fileName: # The relative filepath of the html for the tab (REQUIRED)
    default: # If it should be the default tab (if ignoreURL is true this is REQUIRED, else this parameter is ignored)
  # Add more tabs ad nauseum
---
```

The ignoreURL parameter is the only really important parameter here. For wikis like the SQL Injection Wiki, we have tabs that should maintain state across the entire wiki. In that case, so the user is always brought to the relevant DBMS.
Some wikis will not require that state handling (which is done in the url via a hash parameter), so they can set `ignoreURL` to true, making them stateless tabs. In this case, make sure to set a default tab, otherwise you'll end up with no tabs selected on page load.

### Partial Tabbed Pages
This feature is also only used as a top-level feature, meaning the entire page is a tabbed page. If you would like a tabbed layout further down the page, i.e. https://sqlwiki.netspi.com/detection#oracle, add the following code:

_Make sure to pay attention to the `id` and `for` parameters. They must be equal for each tab._

```
<div id="tabs" class="tabs">
  <input class="tabInput" name="tabs" type="radio" id="tab1" checked/>
  <label class="tabLabel" for="tab1">Tab 1</label>
  <div class="tabPanel">
    Tab 1 content
  </div>
  <input class="tabInput" name="tabs" type="radio" id="tab2" />
  <label class="tabLabel" for="tab2">Tab 2</label>
  <div class="tabPanel">
    Tab 2 content, and repeat
  </div>
</div>
```
