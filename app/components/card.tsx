import Image from 'next/image';

const profile_description = "Software Developer with 3+ years of experience designing and building scalable systems for SaaS platforms and product-focused teams. Skilled with AWS cloud services and modern databases to deliver robust, reliable applications. Experienced in architecting solutions using web frameworks like Ruby on Rails and FastAPI. Contributed to the integration of Gen-AI solutions into core products, enhancing user experience with intelligent features. Passionate about building streamlined, integrated solutions and eager to contribute within high-performance teams by leveraging expertise in systems design, cloud infrastructure, and service reliability."
const skillset = " Ruby on Rails, Python, FastAPI, PostgreSQL, Redis, Docker, AWS, Jenkins, JWT, System Design."

const Card = () => {
  return (
    <section style={{ display: "flex" }}>

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

      <svg className="-mx-6" width="512" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M65.44 153.526V149.526H61.44H20.48C11.3675 149.526 4 142.163 4 133.105V51.4211C4 42.3628 11.3675 35 20.48 35H102.4C111.513 35 118.88 42.3628 118.88 51.4211V166.187C118.88 195.935 95.103 220.165 65.44 220.979V153.526ZM198.56 153.526V149.526H194.56H153.6C144.487 149.526 137.12 142.163 137.12 133.105V51.4211C137.12 42.3628 144.487 35 153.6 35H235.52C244.633 35 252 42.3628 252 51.4211V166.187C252 195.935 228.223 220.165 198.56 220.979V153.526Z" stroke="currentColor" stroke-width="8"></path>
      </svg>
    </section>
  );
};

export default Card
