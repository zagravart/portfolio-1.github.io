import React from 'react';

function App() {
  return (
    <div class="site">
      <header class="header">
        <h1 class="text">RUSLAN PLASTUN</h1>
      </header>
      <main class="main">
        <div class="profile">
          <div class="image_container">
            <img src="./images/Untitled.png" class="my_image" />
          </div>
          <h1>Ruslan Plastun</h1>
          <h1>Front end developer</h1>
          <div class="contacts_list">
            <div><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ruslan-plastun/"><img src="/images/linkedin-square-social-media-512.png" /></a></div>
            <div><a target="_blank" rel="noopener noreferrer" href="https://github.com/zaharzagrava"><img src="/images/github-square-social-media-512.png" /></a></div>
            <div><a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/7735423/zahar-zagrava?tab=profile"><img src="/images/stackoverflow-square-social-media-512.png" /></a></div>
            <div><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/zaharzagrava"><img src="/images/twitter-square-social-media-512.png" /></a></div>
            <div><a target="_blank" rel="noopener noreferrer" href="mailto: admin@zaharzagrava.com"><img src="/images/mail-square-social-media-512.png" /></a></div>
          </div>
        </div>
        <div class="portfolio">
          <h1>Portfolio</h1>
          <div>
            <h2>Restomaster</h2>
            <p>Currently, I am working a new project where I use Storybook, Material-UI, React, Redux, GraphQL (using GraphCMS) and Firebase.
              Check out the project itself <a target="_blank" rel="noopener noreferrer" href="https://portfolio-project-2-f7d94.web.app/">here</a>. 
              Check out tits source code <a target="_blank" rel="noopener noreferrer" href="https://github.com/zaharzagrava/portfolio-project-2/">here</a>.
            </p>
          </div>
          <div>
            <a target="_blank" rel="noopener noreferrer" href="https://portfolio-project-2-f7d94.web.app/">
              <img src="./images/Restomaster.png" class="portfolio_image" />
            </a>
          </div>
          <div>
            <h2>Zigravio</h2>
            <p>I was working on a browser 2d online battle royale game, where I used Node.js, Javascript, HTML, CSS, Amazon Web Services, Digital Ocean, GameSparks, PlayFab and many more. The source code is <a href="https://bitbucket.org/zagrava/zigravio/src/master/">here</a></p>
            <p>Dec. 2017 - Sept. 2018</p>
          </div>
        </div>
        <div class="skills">
          <h1>Skills</h1>
          <div class="tag_container">
            <div class="tag">Javascript</div>
            <div class="tag">HMTL</div>
            <div class="tag">CSS</div>
            <div class="tag">SASS</div>
            <div class="tag">Bootstrap</div>
            <div class="tag">React.js</div>
            <div class="tag">Redux</div>
            <div class="tag">Next.js</div>
            <div class="tag">Node.js</div>
          </div>
        </div>
        <div data-aos="zoom-in-up" class="education">
          <h1>Education</h1>
          <div>
            <h2>University</h2>
            <p>Currently, I am studying at the <a href="https://cibs.ubs.edu.ua/en/">State Higher Educational Institution Banking University Cherkasy Institute</a> in the specialty "Software Engineering."</p>
            <p>Sept. 2018 - Now</p>
          </div>
          <div>
            <h2>CS 50</h2>
            <p>I finished Harvard Online Course CS 50. I loved it :) The certificate is <a href="https://courses.edx.org/certificates/d6e6467705eb4a1b820e6fa7475ae63d">here</a>.</p>
            <p>Febr. 2018</p>
          </div>
        </div>
        <div class="about_me">
          <h1>About Me</h1>
          <p>Hello! I am an aspiring front end developer who focuses on writing elegant, clean, and efficient code. I loved programming from a young age, and I have a long history of various programming endeavors and achievements.</p>
        </div>
      </main>
      <footer class="footer">  
        <h1>Contact Me</h1>
        <div class="contacts_list">
          <div><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ruslan-plastun/"><img width="30px" src="/images/linkedin-square-social-media-512.png" /></a></div>
          <div><a target="_blank" rel="noopener noreferrer" href="https://github.com/ZaharZagrava"><img width="30px" src="/images/github-square-social-media-512.png" /></a></div>
          <div><a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/7735423/zahar-zagrava?tab=profile"><img width="30px" src="/images/stackoverflow-square-social-media-512.png" /></a></div>
          <div><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/zaharzagrava"><img width="30px" src="/images/twitter-square-social-media-512.png" /></a></div>
          <div><a target="_blank" rel="noopener noreferrer" href="mailto: admin@zaharzagrava.com"><img width="30px" src="/images/mail-square-social-media-512.png" /></a></div>
        </div>
      </footer>
    </div>
  );
}

export default App;