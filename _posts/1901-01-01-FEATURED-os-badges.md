---
layout: page
title: Open Science Badges
permalink: "/os-badges/"
image: assets/images/icons_big/helpers.svg
featured: yes
---
<!--- This first line will be displayed on the landing page with the Post title--->
Program under construction - Coming soon!

<!---
<div class="row align-items-end justify-content-between">
    <div class="col-md-6">
      <p class="lead text-lg-left text-left">
        The Open Science Badges program aims to recognize and reward concrete and achievable contributions to Open Science by McGill trainees (undergraduate, graduate students, and postdoctoral fellows).
        This initiative provides a structured pathway for trainees to begin their Open Science journey or expand on the one they are already on by working towards earning badges in core areas of Open Science. 
      </p>
    </div>
    <div class="col-md-6 text-right pl-0 pl-lg-6 mt-4 mb-3">
        {% include youtubePlayer.html id="yCdWpluyp-8" %}
    </div>
</div>

<hr>
--->

{% include youtubePlayer.html id="yCdWpluyp-8" %}

 The Open Science Badges program aims to recognize and reward concrete and achievable contributions to Open Science by McGill trainees (undergraduate, graduate students, and postdoctoral fellows).
 This initiative provides a structured pathway for trainees to begin their Open Science journey or expand on the one they are already on by working towards earning badges in core areas of Open Science.

<hr>

<div class="row align-items-end justify-content-between">
    <div class="col-md-6">
        <h3>Why participate?</h3>
        <ul>
          <li>To highlight your commitment to Open Science</li>
          <li>To have your contributions formally recognized in your McGill co-curricular file (CCR) <i>(Applicable only to McGill students)</i></li>
          <li>To receive financial incentives for your achievements at the end of each academic year</li>
          <li>To improve your Open Science skills, increase your network, and take part of a vibrant Open Science community</li>
        </ul> 
    </div>
    
    <div class="col-md-6 text-left">
        <h3>Eligibility</h3>
        <ul>
          <li>All currently enrolled McGill students or current McGill postdoctoral fellows are eligible. Please note that for undergraduate students, it is not necessary to be currently engaged in research in a laboratory.</li>
          <li>The achievements and documentation presented to request a badge must not be more than 2 years old.</li>
          <li>You can find more details about the requirements and application process on each specific badge page below.</li>
        </ul>
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

### FAQ

Open Science Office Hours support is available to assist you with any Open Science practice you may be struggling with in the process of obtaining the badges.
Visit the **[Office Hours page](https://openscienceofficehours.github.io/osoh_website/office-hours/)** to learn where, when, and how to find us.

<details>
<summary>General</summary>

<h5>Why is Open Science important?</h5>
Open science implements transparency and reproducibility in scientific research, while contributing to the standardization
and integrity of scientific research and the creation of a highly collaborative community to advance science for the benefit of humanity.
Implementing Open Science also benefits you and your lab: it makes your research more efficient and more likely to be cited.

<h5>Where can I learn more about the open science badges?</h5>
To learn more, click [here](https://openscienceofficehours.github.io/osoh_website/os-badges/)

<h5>Do badges expire?</h5>
No, they do not expire.

<h5>Can I get support to help me improve the skills needed to earn a badge?</h5>
Yes, support is available through the Open Science Office Hours (OSOH) drop-in sessions. Click on the following link to learn how to get help from the OSOH team [Office Hour page](https://openscienceofficehours.github.io/osoh_website/office-hours/)


</details>

<details>
<summary>Application Process</summary>

<h5>Who can apply for an open science badge?</h5>
All trainees (graduate students and postdoctoral fellows) and undergraduate students currently registered at McGill.

</details>

<details>
<summary>Evaluation Process</summary>

<h5>Who evaluates the Badges?</h5>
The evaluation committee is composed of members of the TOSI Trainee Council and the TOSI core team.

<h5>How is the documentation scored?</h5>
A scoring rubric for each specific badge can be found on the badge's page.

</details>

<details>
<summary>Recognition</summary>

<h5>What are the advantages of earning an Open Science badge?</h5>
Badges will allow you to participate or increase your involvement in the Open Science community. It will also be a great asset to your professional profiles like ResearchGate and LinkedIn, ORCID and resume.

<h5>Can my participation in the program earn me school credits?</h5>
The Open Science badges do not count towards McGill credits, but can be formally recognized through the McGill Cross-Curricular record.

</details>
