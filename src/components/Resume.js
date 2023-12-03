import image from "../../public/images/aqua2.png";
import treehouseSvg from "../../public/svg/treehouse.svg";
import udemySvg from "../../public/svg/udemy-3.svg";

class Resume {
  render() {
    return `
        <div class="resumeMainContainer">
            <div class="resumeAndExperience">
          <section class="resumeHeader">

          <figure class="figureResume">
            <img src="${image}" alt="Gals Picture" loading="lazy">
            <figcaption class="offscreen">Gal Parselani</figcaption>
          </figure>

            <h2>Gal Parselani Profile Summary</h2>
            <p>Innovative and solutions-driven Full-Stack Developer with expertise in JavaScript, HTML, CSS, React, Node.js, Express, MongoDB, and SQL. Proven abillity to leverage advanced studies in front-end and full stack development to deliver impactful projects. Knows for exceptional problem-solving skills and a keen eye for technological advancements.</p>
          </section>

          <section class="resumeExperience">
            <h3>Professional Experience</h3>
            <h5>360 Affiliate LTD, Tel-Aviv — System Manager and Team Leader</h5>
            <p>November 2022 - Present</p>
            <ul>
                <li>    
                    Orchestrated traffic navigation using statistical analysis, enhancing conversion rates.
                </li>
                <li>    
                    Led a high-performance team to achieve ambitious goals based on data-driven insights.
                </li>
                <li>    
                    Implemented efficient systems and workflows, resulting in a significant increase in leads.
                </li>
                <li>    
                    Fostered an innovative technological culture, keeping the team abreast of industry advancements.
                </li>
            </ul>
                <div class="border"></div>
            <h5>Tomer & Alon Marketing and Publicity, Ramat Gan - System Manager and Team Leader</h5>
            <p>March 2019 - November 2022</p>
            <ul>
                <li>
                The company operates in the forex and bitcoin industry, specializing in connecting affiliates with brokers.
                </li>
                <li>
                My work involved handling operations across various countries, each with several affiliates and brands. My responsibilities included analyzing statistics and adjusting the system accordingly. For instance, if Brand 'A' performed exceptionally in the United Kingdom with Affiliate 'A' between 12:00-17:00, I would prioritize it in the system, followed by the arrangement of subsequent brands. This process was replicated for each country and affiliate based on specific regional data.
                </li>
                <li>
                Success Example: When I joined the company, there were only 0-2 deposits in Hungary per month. However, within four months, we achieved over 200 deposits during peak months, with an average of 50 deposits in subsequent months.
                </li>
                <li>
                Another Example: Initially, when I suggested exploring brand opportunities in India, my manager was skeptical, citing a lack of prior deposits in the region and extensive industry experience. Despite this, I insisted on the potential in the Indian market. As a result, we identified a brand that consistently generated an average of 70 deposits per month
                </li>
                <li>
                Additionally, I successfully managed an average of 13,000 leads per day single-handedly. Currently, this volume of work is distributed among three people, each handling 3-4K leads per day.
                </li>
                <li>
                Conducted comprehensive data analysis, extracting actionable insights to guide strategic decision-making.
                </li>
                <li>
                Utilized advanced statistical techniques to interpret complex datasets, enabling the identification of trends and patterns.
                </li>
                <li>
                Developed and maintained dashboards and reports for executive teams, providing real-time visibility into key performance indicators.
                </li>
                <li>
                Collaborated with cross-functional teams to define data requirements and ensure accurate and relevant reporting.
                </li>
                <li>
                Implemented data quality measures, contributing to a culture of accuracy and reliability in data-driven decision-making.
                </li>
            </ul>
          </section>
          </div>
          <div class="bordersolid"></div>

          <section class="resumeSide">
            <h3>Education</h3>
  
            <h4><a href="https://www.ariel.ac.il/university/minisite/" target='_blank' rel="noopener" title="visit ariel website">Ariel University</a></h4>
            <p>Bachelor's Degree in Criminology and Middle Eastern Studies (Specialization in Terrorism)
            2016-2019</p>

            <div class="nopadding">
            <div class='logoAndHeading'>
            <img src="${treehouseSvg}" alt="treehouse logo" loading="lazy">
            <h4><a href="https://teamtreehouse.com" target='_blank' rel="noopener" title="visit treehouse website">teamTreeHouse</a></h4>
            </div>
            <p>TechDegree in Full Stack JavaScript, and Front End Web Development. 2022-2023</p>
            <div class="certDiv">
                <a href='https://www.credential.net/7a967360-dd18-4c50-ba1b-0bb865c6b2cc#gs.0q0eho' target='_blank' rel="noopener" title="navigate to the full stack certification">certification for FSJS</a>
                <a href='https://www.credential.net/1c3e2d8f-a879-46c6-a466-4b1eb0c9fc72#gs.0q0i5i' target='_blank' rel="noopener" title="navigate to the front end certification">certification for FEWD</a>
            </div>
            </div>
            <div class="nopadding">
            <div class='logoAndHeading'>
            <img src="${udemySvg}" alt="udemy logo" loading="lazy">
            <h4><a href="https://udemy.com" target='_blank' rel="noopener" title="visit udemy website">Udemy</a></h4>
            </div>
            <p>TechDegree in NodeJS and Express. 2023</p>
            <div class="certDiv">
                <a href='https://www.udemy.com/certificate/UC-d36709d8-6208-4206-bf7b-5be6b8086342/' target='_blank' rel="noopener" title="navigate to the full stack certification">certification for NodeJs and Express</a>
            </div>
            </div>


            <div class="border"></div>

            <div class='logoAndHeading'>
            <h3>Skills</h3>
            </div>
            <ul>
                <li><b>HTML, CSS, JavaScript, nodeJS, express, mongoDB, SQL, ReactJS</b></li>
                <li>Proficient in Full-Stack Development, with a focus on JavaScript technologies.</li>
                <li>Strong analytical and problem-solving capabilities.</li>
                <li>Effective under pressure with a knack for efficient task execution.</li>
                <li>Excellent team leadership and project management skills.</li>
            </ul>
            <div class="border"></div>

            <h3>Languages:</h3>
            <ul>
                <li>Hebrew (Native)</li>
                <li>English (Highly Proficient)</li>
            </ul>
            <div class="border"></div>


            <h3>Millitary Service</h3>
            <p>Combat Intelligence Support, IDF (2009-2012)</p>
            <div class="border"></div>

            
            <h3>Volunteering</h3>
            <p>Active volunteer at Chabad House, Hatikva Neighborhood. Engaged in community services initiatives including meal preparation and distribution in Herzliya. also helped distribution in Rishon Leziyon at "Lichiot Bekavod"</p>
            <div class="border"></div>

        </section>

          <section class="resumeFinal">
            <h3>Seek Opportunities</h3>
            <p>As an adept Full-Stack Developer, I am looking for opportunities to leverage my comprehensive knowledge in both front-end and back-end technologies. Skilled in HTML, CSS, JavaScript, alongside server-side language nodeJS, express. and database management like mongoDB and SQL, I aim to contribute to robust and scalable web applications. I'm eager to join a dynamic team that values innovation and offers growth opportunities in full-stack developmet</p>
          <section>

          </div>
        `;
  }
}
export default Resume;
