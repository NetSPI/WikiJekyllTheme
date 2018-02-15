# NetSPIWiki

This is the base jekyll theme for NetSPI's Community wikis. It builds all the default styling, abstracts high-level templates, and makes life extremely easy for managing these wikis. Documentation for this is currently a work in progress. Create an issue for any questions. If you would like to contribute to a specific wiki see [CONTRIBUTING.md](CONTRIBUTING.md).



## Build instructions
Install docker and run the below commands. This makes it so we don't have to have a full ruby development environment.
```
$> docker run --rm -p 4000:4000 --volume="%CD%:/srv/jekyll" -it jekyll/jekyll:3.5 /bin/sh
# jekyll serve --force-polling
```
