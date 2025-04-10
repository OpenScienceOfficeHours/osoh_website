# Open Science Office Hours Website
Notes for developers 

Built/Adapted from Affiliates - Free Jekyll Theme
[Live Demo](https://wowthemesnet.github.io/affiliates-jekyll-theme/) | [Docs & Download](https://bootstrapstarter.com/template-affiliates-bootstrap-jekyll/) |  [Buy me a coffee](https://www.wowthemes.net/donate/)

Resources page layout and underlying tagging/filtering funcitonnalities adapted from https://www.datalad.org/in-the-wild.html / https://github.com/datalad/datalad

## Website Stucture/Backend
* 3 types of content/pages

### Featured "posts" - actually Pages
* Displayed under the main hero block
* These are the Pages for the main Components of what OSOH does (Resources repository, One-on-One Support, ...)
* In the backend, located in _posts
* File name needs to start with a date (yyyy-mm-dd-) or it won't be displayed. The rest of the title is for you. 
* File Header:
  * Title: "The title that will be displayed"
  * Image: "The image that will be displayed"
  * Layout: pages
  * Featured: yes
  * Categories: (not needed)
  * Author: (not needed)
* Should be limited to 3 total with the current sizing of things
* Images for Featured Post
  * Should be standard size (or at least H/W ratio) so that the display is nice and consistent on the landing page.
  * Currently 1000px wide by 600px high

### Regular Posts - News and Events
* Displayed after the 'featured posts'
* These are more frequently added for Events, Theme of the Months, Other news...
* In the backend, located in _posts
  * Everything contained in _posts that is not a "Featured: yes" post will end up here. If you want to remove posts, you may move them in _posts/archive
* File name needs to start with a date (yyyy-mm-dd-) or it won't be displayed. It can't be a date in the future otherwise it won't create the post. This date will be displayed on the landing page and on the Post Page. 
* File Header:
  * Title: "The title that will be displayed"
  * Image: "The image that will be displayed"
  * Layout: pages
  * Featured: no
  * Categories: [caterogy1 caterory2] (Categories are important because you can browse posts by categories)
  * Author: (If left empty only the date will be diplayed, if Author provided "By Author, Date" will be displayed)
* Images for regular Posts (news and events)
  * Should be standard size (or at least H/W ratio) so that the display is nice and consistent on the landing page.
  * Currently 1000px wide by 600px high

### Pages listed in the top/right navigation menu
* These are links at the top-right of all pages, and may be use for general stuff; About, Get in Touch, Contribute, ...
* In the backend, located in pages (but not everything in Pages has to end up in the nav menu)
* What goes into the Nav Menu is configured in _data/menus.yml

## Things to update each Month/Theme
* This is subject to change
* Create a Monthly theme Regular Post (to go in News an Events)
* Change text ant link for the main page button redirecting to the monhtly theme page, in index.html
* Edit the Office Hours Featured post to update with the current month expert. OR- do not mention the details of the Theme/Expert on this page, instead link to the Monthly theme Post. In this case the link needs to be updated.

## Resources page
* Requirements to run the code to update the resources displayed on this page:
  * Python >= 3.8
  * pandas (`pip install pandas`)
* To add new resources, follow these steps
  * Download the logo for the new resources. Note that we're trying to get the simplest version of the logo (without a lot of text), since the resource name will be displayed under the logo.
  *  -> put it in assets/images/logos_small
  * Fill in [this Google survey](https://docs.google.com/forms/d/e/1FAIpQLSc94Y6PckHO51iPIlmWFtHj2fbLHX8xV01vSLkV0FSP-ZgL2Q/viewform?usp=sf_link) with the required information
  * Download [this Google spreadsheet](https://docs.google.com/spreadsheets/d/1q-ujR9ORSaDh5cAt-BOMcH1vU_a4DYatabzXbar1Fwg/edit?usp=drive_link) as a .csv. This contains the survey responses (i.e., the information about each resource)
  * Delete this file: `assets/js/Collecting Open-Science Resources v3 (Responses) - Form Responses 1.csv`
  * Move the newly-downloaded csv file there ^ 
  * Run the python file that takes this .csv and turns it into a .json that the js code reads, using this command: `python3 integrations_csv_to_json.py`
  * Push the 3 modifications to the repo (logo file, csv file and json file), or upload them there from the web interface.
 
## Visual Identity
* Many of the images/thumbnails are adapted from [undraw](https://undraw.co), free an open source.
* The color scheme contains 5 colors:
  * Orange #ffc463
  * Teal #40b39f
  * Pink #fc4889
  * Purple #472a84
  * Dark Purple #36213a
    
  ![osoh palette](assets/images/osoh_palette.png)

  
