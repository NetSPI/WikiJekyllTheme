# Contributing

This is the documentation for contributing to an individual wiki, information for contributing to the theme repository is a WIP.

## Basic contributing
To start contributing, fork the repository and make your changes. After you are done making your changes submit a pull request to the main repository with an explanation of your changes. For any help, please create an issue.

## Editing Content
To edit existing content in a wiki, navigate to the page you would like to edit on the website. Look at the URL and match that to the directory structure of the repo.

###Example
If you want to edit `https://sqlwiki.netspi.com/attackQueries/persistence`, you would navigate to 'https://github.com/NetSPI/SQLInjectionWiki/attackQueries/persistence.html' and make your changes in that file.

## Adding a new section
To add a new page or section place it in the appropriate location. Top level sections should go in the root of the directory, sections with no children should have a .html file in the root directory (unless utilizing some themes), and children of a section should go under the parent directory.

After adding a new section, modify the \_data/nav.yml file and add the section in its proper place. There should only be 3 navigation types as stated above.
