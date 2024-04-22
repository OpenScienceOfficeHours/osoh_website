---
layout: page
title: Open Science Badges
permalink: "/os-badges/"
image: assets/images/icons_big/helpers.svg
featured: yes
---
<!--- This first line will be displayed on the landing page with the Post title--->
Receive recognition for you Open Science accomplishments!

### Description of the program
  <a href="https://www.youtube.com/watch?v=OHxnwzOKqHM&list=PL4IAzeXaocvx2rSfU1YCuTN3SmnOMqOz3&index=4E"><img width="400" src="../assets/images/video_screenshots/2023-10-05_osoh_ko_oct-video-screenshot.png" alt="IMAGE ALT TEXT" style="float: right;"></a>
  <p>Brief description of the program .... Brief description of the program .... Brief description of the program .... Brief description of the program .... Brief description of the program .... Brief description of the program .... Brief description of the program .... Brief description of the program .... Brief description of the program .... Brief description of the program ....
... .... Brief description of the program .... Brief description of the program .... Brief description of the program .... Brief description of the program program. program..
 .... Brief description of the program .... Brief description of the program
 .... Brief description of the program .... Brief description of the program
</p>

<hr>
<hr>
### Available Badges
<!-- Featured Posts
================================================== -->
<section class="row">
  {% for post in site.posts %}
      {% if post.badge == true %}
          <div class="col-md-5 mb-5">
          {% include featpostbox.html %}
          </div>
      {% endif %}
  {% endfor %}
</section>
