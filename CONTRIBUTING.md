# Contributing

This is the documentation for contributing to an individual wiki. Please create an issue for any unclear or missing information. Documentation for contributing to the theme repository is a WIP.

## Basic contributing
To start contributing, fork the repository and make your changes. After you are done making your changes submit a pull request to the main repository with an explanation of your changes. For any help, please create an issue.

## Editing Content
To edit existing content in a wiki, navigate to the page you would like to edit on the website. Look at the URL and match that to the directory structure of the repo.

### Example
If you want to edit `https://sqlwiki.netspi.com/attackQueries/persistence`, you would navigate to `https://github.com/[YOUR_USERNAME]/SQLInjectionWiki/attackQueries/persistence.html` and make your changes in that file.

## Style

Follow the styles already set in the existing files if not listed below.

- All tables should have classes of `table table-striped table-hover`
- All code snippets should be wrapped in `<code></code>`
- All top headers should be `<h3></h3>`
- All sub section headers should be `<h4 class="subheading"></h4>`
- Top level descriptions should be `<p class="readableText"></p>`
- Secondary descriptions should just be `<p></p>`
- All external links should be `<a target="_blank" rel="noopener" href="[link]"></a>`
## Adding a new section
To add a new page or section place it in the appropriate location. Top level sections should go in the root of the directory, sections with no children should have a .html file in the root directory (unless utilizing some themes), and children of a section should go under the parent directory.

After adding a new section, modify the \_data/nav.yml file and add the section in its proper place. There should only be 3 navigation types as stated above.

## Navigation Types
There are only 3 types of sections allowed through our navigation style. Top level clickable links with children, without children, and top level non-clickable links with children.
<img src="./images/contributingNavLinkExample.png"/>

## URL Path Rules
When setting the URL for a file, don't use a trailing backslash and leave out the html. Example: "/detection" for detection.html in the root directory.
Use the backslash when referring to a directory with an index.html file inside of it. Example: "/identification/" from /identification/index.html.
