---
layout: page
title: Open Science Badges
permalink: "/os-badges/"
image: assets/images/icons_big/helpers.svg
featured: yes
---
<!--- This first line will be displayed on the landing page with the Post title--->
Receive recognition for you Open Science accomplishments!

<div class="row align-items-end justify-content-between">
  <div class="col-md-8">
      <p class="lead text-lg-left text-left">
        Brief description of the program .... Brief description of the program ....Brief description of the program .... Brief description of the program ....
Brief description of the program .... Brief description of the program ....Brief description of the program .... Brief description of the program ....
Brief description of the program .... Brief description of the program ....Brief description of the program .... Brief description of the program ....
      </p>
</div>
<div class="col-md-4 text-right pl-0 pl-lg-6 mt-4 mb-3">
  <a href="https://www.youtube.com/watch?v=OHxnwzOKqHM&list=PL4IAzeXaocvx2rSfU1YCuTN3SmnOMqOz3&index=4E"><img width="400" src="../assets/images/video_screenshots/2023-10-05_osoh_ko_oct-video-screenshot.png" alt="IMAGE ALT TEXT" style="float: right;"></a>
</div>
</div>

<hr>
<hr>

### Available Badges
<!-- Featured Posts
================================================== -->
<section class="row justify-content-center text-center">
  {% for post in site.posts %}
      {% if post.badge == true %}
          <div class="col-md-4 mb-5">
          {% include featpostbox.html %}
          </div>
      {% endif %}
  {% endfor %}
</section>
