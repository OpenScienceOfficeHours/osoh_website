---
layout: page
title: Open Science Badges
permalink: "/os-badges/"
image: assets/images/icons_big/helpers.svg
featured: yes
---
<!--- This first line will be displayed on the landing page with the Post title--->
Program under construction - Coming soon!

<div class="row align-items-end justify-content-between">
    <div class="col-md-8">
      <p class="lead text-lg-left text-left">
        The Open Science Badges program aims to recognize and reward concrete and achievable contributions to open science by McGill trainees (undergraduate, graduate students and PostDoctoral fellows).
        This initiative provides a structured pathway for trainees to begin their open science journey or expand on the one they are already on by working towards earning badges in core areas of open science.
      </p>
    </div>
    <div class="col-md-4 text-right pl-0 pl-lg-6 mt-4 mb-3">
      <a href="https://www.youtube.com/watch?v=5X0kNwo9Hp8&ab_channel=MontrealNeuro"><img width="400" src="../assets/images/icons_big/news_osoh_launch.png" alt="IMAGE ALT TEXT" style="float: right;"></a>
    </div>
</div>

Support from Open Science Office Hours is available to help you with any Open Science practice you may be struggling with on your way to obtain the bagdes.
Visit the **[Office Hours page](https://openscienceofficehours.github.io/osoh_website/office-hours/)** to learn where, when and how to find us.

<hr>

<div class="row align-items-end justify-content-between">
    <div class="col-md-6">
        <h3>Why participate?</h3>
        TEst test test
    </div>
    
    <div class="col-md-6 text-left">
        <h3>Eligibility</h3>
        test test
    </div>
</div>

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

### Why join?
* Your participation in the Open Science Badges program highlights your commitment to open science.
* Your participation in this program can be formally recognized in your McGill co-curricular file (CCR). _Applicable only to McGill students._
* You are eligible to receive financial incentives for your final achievements at the end of each academic year.
* By participating, you can significantly enhance your open science skills, network, and be part of a vibrant Open Science community.

### Eligibility and general requirements
* To be eligible for the program, you must be a student currently registered McGill, or a current postdoctoral fellow at McGill. Please note that for undergraduate students it is not necessary to be currently doing research at a lab.
* The documentation presented to request a badge must not be more than 2 years old
* More details on requirements, and how to apply can be found on each specific Badge's page

### FAQ

<details>
<summary>General</summary>

<h5>Why is open science important?</h5>
Open Science implements transparency and reproducibility in scientific research, while contributing to the standardization 
and integrity of scientific research and the creation of a highly collaborative community to ultimately advance science for the benefit of humanity.
Implementing Open Science is also beneficial for you and your lab: it makes your research more efficient, and more likely cited.

<h5>Do badges expire?</h5>
No, they do not.

<h5>Can I get support to help me improve the skills needed to earn a badge?</h5>
Yes, support is available through the Open Science Office Hours (OSOH) drop-in sessions.

</details>

<details>
<summary>Application Process</summary>

<h5>Who can apply for an open science badge?</h5>
All trainees and undergraduate students currently registered at McGill.

</details>

<details>
<summary>Evaluation Process</summary>

<h5>Who evaluates the Badges?</h5>
The evaluation committee is composed of members of the Trainee Council and the TOSI team.

<h5>How is the documentation scored?</h5>
A scoring rubric for each specific badge can be found on the badge's page.

</details>

<details>
<summary>Recognition</summary>

<h5>What are the advantages of earning an open science badge?</h5>
Badges will allow you to participate or increase your involvement in the open science community. It will also be a great asset to your professional profiles like ResearchGate and LinkedIn, ORCID and resume.

<h5>Can my participation in the program earn me school credits?</h5>
The Open Science badges do not count towards McGill credits, but can be formally recognized through the McGill Cross-Curricular record.

</details>
