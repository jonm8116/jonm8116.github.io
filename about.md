---
layout: page
title : About
permalink: /about/
---
<div>
  <h3 style="font-family: Shojumaru; font-size:100pt;
  text-align: center;"><em>jmat</em></h3>
  <!-- <img class="about-pic-container"
  src="../assets/fb_pro_pic.jpg" />  
   <br/><br/><br/> -->
  <div class="excerpt-container">
   <p></p>
        Hi, my name is Jon, and I'm a computer scientist,
        software engineer, athlete, writer, and college student. I
        currently am a research assistant in
        my school's computer science department. Outside of
        school, I am a developer for Elixir Labs a nonprofit that 
        creates software for other nonprofits. Previously, I 
        was a software engineering intern at LBi Software 
        and a teaching assistant for my school's introduction 
        to software development course.
   <p></p>
        I really enjoy Python, Machine Learning, Scientific
        Computing, Computational Biology, Rock Climbing,
        Fantasy Writing, Physics, Logic Puzzles, Math
        Simulations, Soccer, Basketball, and Volleyball.
   <p></p>
        Below I have my projects and future endeavors goals
        listed.
   <br/><br/><br/>
   <h2>Projects</h2>
   <ul>

   <li>2019 &emsp; 
   <a href="#">
   Tweet Otter</a>
   <br/>
   
   <div class="proj-desc">
   <br/>
   I built a scalable twitter clone for my University's Cloud computing
   course in Fall 2019. During the course we learned about many of the
   technologies and concepts used to build scalable web services today such 
   as Docker, Kubernetes, RabbitMQ, load balancing, micro service
   architecture and more (hoping to make a blog post on some topics from 
   the class and my own server architecture later on). My server 
   architecture consisted of a load balancer which distributed the load 
   among three main microservices for users, tweets and media. The web 
   services were hosted on OpenStack Ubuntu servers during the duration of 
   the course. I wrote the backend in Node.JS and initially designed the 
   frontend in Bootstrap and Vanilla JS but am beginning to remake that 
   frontend in React in order to teach myself the framework. 
   <br/><br/>

   Tools & Stack:<br/>

   <i class="icon-img devicon-nodejs-plain colored"></i>
   <i class="icon-img devicon-mongodb-plain-wordmark colored"></i>
   <i class="icon-img devicon-bootstrap-plain-wordmark colored"></i>
   <i class="icon-img devicon-nginx-plain colored"></i>
   <i class="icon-img devicon-ubuntu-plain-wordmark colored"></i>
   
   </div>
   </li>

   <br/>

   <li>2019 &emsp; 
   <a href="#">
   Gradpics.py</a>
   <br/>

   <div class="proj-desc">
   <br/>
   
   This was a script I wrote for my friends and myself this past May. Since
   taking graduation pictures is a tradition for many college seniors, many
   of popular spots on campus get filled rather quickly. When my friends 
   and I went to take pictures it was pretty late out so many of the 
   pictures we took came out dark. Usually you could fix this quick with
   photo editing software but I didn't have photoshop and wasn't keen on
   paying for it. So I used Open-CV's Python library to brighten the 400
   images we had taken that day, while keeping other image qualities 
   as is.  

   <br/><br/>
   Tools & Stack:<br/>
   
   <i class="icon-img devicon-python-plain-wordmark colored"></i>
   <i class="icon-img devicon-vim-plain colored"></i>

   </div>
   </li>

   <br/>

   <li>2019 &emsp; 
   <a href="https://github.com/jonm8116/jonm8116.github.io">
   Personal Website</a>
   <br/>
   
   <div class="proj-desc">
   <br/>

   This personal website I made using jekyll and an already
   developed theme called Gravity. I added some additional
   custom css to the make the design more suit my tastes.
   This website will mainly be used to host updates on my
   upcoming endeavors and my blog where I'll write posts on
   tutorials, thoughts and creative writing.
   For the design of my website I took inspiration from Kat
   Huang and Sarah Lim. You should check out their pages as
   well!
   <br/><br/>
   Tools & Stack:<br/>
   <i class="icon-img devicon-html5-plain colored"></i>
   <i class="icon-img devicon-css3-plain colored"></i>
   <i class="icon-img devicon-javascript-plain colored"></i>
  </div>
   </li>

   <br/>

   <li>2019 &emsp; 
   <a href="https://github.com/artvegas/overdrive_frontend">
   Overdrive Comics</a>
   <br/>

   <div class="proj-desc">
   <br/>

   This was the fullstack application I completed with a
   team for my school's capstone computer science course,
   software engineering. I worked in a team of four as the
   lead programmer and worked mostly on developing the
   angular architecture of the application. I also helped to
   make a few REST endpoints for our backend. At the end of
   the course we created a fullstack application written in
   Angular and Java Spring that acted as a social media site
   for web comics. Users could upload and create their own
   comics on the site. The site was hosted on AWS for the
   duration of the class.

   <br/><br/>
   Tools & Stack:<br/>
   
   <i class="icon-img devicon-angularjs-plain colored"></i>
   <i class="icon-img devicon-java-plain-wordmark colored"></i>
   <i class="icon-img devicon-html5-plain colored"></i>
   <i class="icon-img devicon-foundation-plain-wordmark colored"></i>
   <i class="icon-img devicon-amazonwebservices-plain-wordmark colored"></i>
   <i class="icon-img devicon-mongodb-plain-wordmark colored"></i>

   </div>
   </li>


   <br/>

   <li>2018 &emsp; 
   <a
   href="https://github.com/jonm8116/YouTube-Trending-Project">
   YouTube Trending Videos Classifier</a>
   
   <br/>
   <div class="proj-desc">
   <br/>

   Using google's tensorflow library I worked with friends
   to train a deep feedforward neural network to recognize
   whether a particular YouTube video was trending or not
   when the video id was passed to the application. We first
   had built our dataset by scraping for both trending and
   non-trending videos on YouTube and using one existing
   trending videos dataset on kaggle. After we had scraped
   for all these video id's we pulled the data video using
   Google's video api. This was compiled into our final
   dataset of about 15k entries. Our neural network was able
   to recognize trending videos with about 90% training
   accuracy and 75% testing accuracy. 
   
   <br/><br/>
   Tools & Stack:<br/>
   <i class="icon-img devicon-python-plain-wordmark colored"></i>   
   <i class="icon-img devicon-google-plain colored"></i>
   <i class="icon-img devicon-atom-original colored"></i>
   
   </div>
   </li>

   <br/>

   <li>2018 &emsp; Stony Script</li>
   <div class="proj-desc">
   <br/>
   This was a simple programming language I made for my
   school's programming languages course. Given the
   requirements for the class I developed the parse tree for
   the language and created the language using a python
   implementation of lex and yacc, <a href="https://www.dabeaz.com/ply/">ply</a>. 
   The language was able to create variables, if statements and perform loops.
   <br/><br/>
   Tools & Stack:<br/>
   <i class="icon-img devicon-python-plain-wordmark colored"></i>   
   <i class="icon-img devicon-atom-original colored"></i>

   </div>
   
   <br/>

   <li>2017 &emsp; 
   <a
   href="https://github.com/jonm8116/Course-Site-Generator">
   Course Site Generator</a></li>
   <div class="proj-desc">
   <br/>
   This was the final project in my introduction to software engineering
   course. I developed an application in JavaFX that provided an interface
   for users to generate college course websites. During the course I 
   developed UML class and sequence diagrams for my implementation and 
   developed unit tests to check various use cases. The websites that were
   generated from the application were made using plain HTML/CSS and 
   vanilla JS. I went on to be a teaching assistant for the course the 
   following semester.
   <br/><br/>
   Tools & Stack:<br/>

   <i class="icon-img devicon-java-plain-wordmark colored"></i>
   <i class="icon-img devicon-html5-plain colored"></i>
   <i class="icon-img devicon-css3-plain colored"></i>
   <i class="icon-img devicon-javascript-plain colored"></i>
   <i class="icon-img devicon-bitbucket-plain-wordmark colored"></i>
   
   </div>


   </ul>

   <br/><br/>
   <h2>Social/Contact</h2>
   <ul>
   <li>
    Github: <a
    href="http://github.com/jonm8116">@jonm8116</a>
   </li>
   <li>
    Quora: <a
    href="https://www.quora.com/profile/Jon-Mathai">@Jon-Mathai</a>
   </li>
   <li>
    Email: <a href="mailto:jmat8116@gmail.com">jmat8116 [at]
    google [dot] com</a>
   </li>

   </ul>

   </div>
</div>
