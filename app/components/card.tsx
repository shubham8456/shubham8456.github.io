import Image from 'next/image';

const profile_description = "Software Developer with 3+ years of experience designing and building scalable systems for SaaS platforms and product-focused teams. Skilled with AWS cloud services and modern databases to deliver robust, reliable applications. Experienced in architecting solutions using web frameworks like Ruby on Rails and FastAPI. Contributed to the integration of Gen-AI solutions into core products, enhancing user experience with intelligent features. Passionate about building streamlined, integrated solutions and eager to contribute within high-performance teams by leveraging expertise in systems design, cloud infrastructure, and service reliability."
const skillset = " Ruby on Rails, Python, FastAPI, PostgreSQL, Redis, Docker, AWS, Jenkins, JWT, System Design."

const Card = () => {
  return (
    <section className="card" style={{ display: "flex" }}>
      <div className="relative w-full min-w-[250px] overflow-hidden">
        <Image src="/profile_photo.jpg" alt="Profile Photo" fill className="object-cover" style={{ clipPath: "polygon(0% 0%, 100% 0%, 75% 100%, 0% 100%)" }}/>
      </div>
      <div style={{ marginLeft: "50px" }}>
        <p className="text-justify">{ profile_description }</p>
          <br/>
        <p><strong>Skills</strong>:{ skillset }</p>
      </div>
    </section>
  );
}; 

export default Card
