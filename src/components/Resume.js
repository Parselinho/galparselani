import image from "../../public/images/profile2.jpg";
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
            <p>Experienced in Sales Operations and CRM analysis, I excel in optimizing CRM and lead management systems within the tech industry, enhancing efficiency and sales conversion rates. Alongside my professional role, I've pursued a passion for full-stack development over the past 1.5 years, enriching my technical and problem-solving skills. This unique combination of strategic CRM management, sales operations expertise, and technical proficiency drives my approach to creating innovative solutions in fast-paced environments.</p>
          </section>

          <section class="resumeExperience">
            <h3>Professional Experience:</h3>
            <h4>🚀 CRM Analyst & Sales Operations Analyst</h4>
            <div class='resumeTime'>
              <h5>360 Affiliate LTD, Tel-Aviv</h5>
              <p class='year'>March 2018 - Present</p>
            </div>
            <p>In my role at a leading crypto-currency trading firm, I have been pivotal in orchestrating and refining the lead management and sales operation strategies. My contributions have been instrumental in scaling the company's lead handling capacities and optimizing conversion rates, directly impacting our market presence and profitability.</p>
            <p><b>Key Responsibilities:</b></p>
            <ul>
                <li>    
                    <b>Strategic Lead Management:</b> Spearheaded the optimization of lead distribution, managing a complex system handling thousands of leads daily. Ensured leads were effectively routed to the most suitable call centers, enhancing conversion opportunities.
                </li>
                <li>    
                    <b>Data-Driven Decision Making:</b> Utilized advanced analytics to monitor lead traffic and conversion rates across diverse geographic markets. My insights and strategies led to substantial improvements in operational efficiency and sales results.
                </li>
                <li>    
                    <b>Market Analysis and Growth Strategy:</b> Identified key market trends and potential growth areas. Developed and implemented targeted strategies to boost company performance in underperforming regions, leading to significant increases in customer acquisition.
                </li>
                <li>    
                    <b>Sales Operations Optimization:</b> Collaborated with sales teams to refine lead distribution strategies within the internal system. Adapted lead allocation in real-time based on performance data, ensuring optimal engagement and conversion rates.
                </li>
                <li>    
                    <b>Demand and Supply Management:</b> Addressed gaps where demand exceeded supply by guiding sales teams to acquire additional customers and call centers, particularly in high-potential markets.
                </li>
            </ul>
            <p><b>Achievements:</b><br>Successfully managed an increase in lead handling capacity by approximately 700%.
            Achieved a growth in deposit conversions by about 300%.
            Played a pivotal role in expanding the company’s reach in strategic markets, contributing to a substantial increase in daily deposits, notably in previously underperforming regions.
            Recognized for implementing innovative strategies and technological solutions that kept pace with the rapidly evolving crypto-currency market, bolstering the company's competitive edge.            
            </p>
            <p><b>Summary:</b><br>My tenure at 360 Affiliate LTD has been marked by a relentless pursuit of excellence in lead management and sales operations. I have driven significant improvements in operational efficiency and market penetration, proving myself as a vital asset in navigating the complexities of the crypto-currency trading sector.</p>
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
            <h3 class='skillsHeading'>Skills</h3>
            </div>
            <ul class='skills'>
                <li><b>Strategic Lead Management & Optimization:</b> Highly skilled in managing and optimizing complex lead distribution systems. Proficient in maximizing efficiency and improving conversion rates across diverse markets.</li>
                <li><b>Data Analysis & Strategic Insight Generation:</b> Expertise in analyzing large datasets to derive actionable insights, significantly impacting lead routing strategies and sales performance.</li>
                <li><b>Operational Efficiency Enhancement:</b> Adept at identifying and addressing inefficiencies within lead management systems, implementing solutions that boost overall performance and productivity.</li>
                <li><b>Adaptability & Continuous Learning:</b> Demonstrates flexibility in adapting to industry trends and new technologies, with a dedicated focus on continuous improvement in lead management and data analysis.</li>
                <li><b>Innovative Problem-Solving:</b> Renowned for exceptional problem-solving abilities, consistently delivering innovative and efficient solutions to complex challenges.  Excel at synthesizing diverse information to find unique solutions.</li>
                <li><b>Technical Reporting & Data Visualization:</b> Proficient in crafting detailed reports and visualizations that effectively communicate complex data and insights to varied audiences.</li>
                <li><b>Collaboration & Communication:</b> Strong communicator capable of bridging the gap between technical teams and non-technical stakeholders, ensuring seamless information flow and collaboration.</li>
                <li><b>Project Management & Strategic Execution:</b> Experienced in leading projects that enhance lead management systems, meeting critical deadlines and achieving strategic objectives.</li>
                <li class='last-item'><b>Technical Proficiency:</b> Solid foundation in database management and analysis with tools like SQL and MongoDB. Familiarity with programming languages and frameworks such as JavaScript, React, Next.js, TypeScript, Node.js, and Express, contributing to a comprehensive understanding of the technological aspects of lead systems.</li>
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
            <p>Dedicated volunteer at Chabad House in Hatikva neighborhood, contributing to impactful initiatives such as preparing meals, distributing food at Chabad Herzliya, and Lihiyot-Bekavod in Rishon Lezion.</p>
            <div class="border"></div>

        </section>

          <section class="resumeFinal">
            <h3>Seek Opportunities</h3>
              <p>As a seasoned professional in Sales Operations, with a specific focus on CRM and data-driven lead management, my career journey has been characterized by a steadfast dedication to mastering CRM analytics and optimizing sales strategies. In the ever-evolving tech industry, I've excelled in roles that demanded a deep understanding of CRM systems, lead distribution, sales operations analysis, and customer acquisition strategies. My ability to dissect and manage lead data across diverse dimensions, such as geographical segmentation and market trends, has been a cornerstone of my success.


              In my capacity as a CRM Analyst & Sales Operations Analyst, I have consistently demonstrated the ability to not only efficiently manage and direct lead traffic but also to guide teams in formulating and executing effective strategies for market expansion and customer engagement. My expertise in refining CRM processes and integrating technological advancements has solidified my role as a critical asset to organizations that value data-driven, strategic approaches to sales and CRM management.
              
              
              I am now eager to bring my wealth of experience and strategic insights to a new challenge. I am excited about opportunities to leverage my skills in CRM analytics, lead management, strategic planning, and collaborative leadership to drive sales excellence and operational efficiency. My goal is to join a forward-thinking organization where innovative, data-informed methods are at the forefront of business growth and customer acquisition strategies.
              
              </p>
            </section>

          </div>
        `;
  }
}
export default Resume;
