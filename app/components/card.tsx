import Image from 'next/image';

const skillset = "Ruby on Rails, Python, FastAPI, Microservices, AWS, Docker, PostgreSQL, Redis, Generative AI, LLMs"

const Card = () => {
  return (
    <section className="relative card lg:w-[60%] max-w-[1200px] flex flex-col md:flex-row items-center justify-center md:items-start bg-(--foreground) p-4 md:p-8 mt-18 md:mt-26 rounded-xl shadow-[0_4px_15px_0_rgba(71,85,105,0.5)] text-white">
        
        {/* Profile Image Container */}
        <div className="relative w-full aspect-square md:aspect-auto md:w-[300px] md:h-[350px] overflow-hidden rounded-lg mb-4 md:mb-0 shrink-0">
          <Image src="/profile_photo.jpg" alt="Profile Photo" fill className="object-cover profile-photo"/>
        </div>

        {/* Text Content */}
        <div className="md:ml-6 flex-1 text-white/90">
          <p className="text-justify text-base lg:text-sm leading-relaxed font-light">
            I&apos;m a <u>Software Developer</u> with 3+ years of experience designing and <u>building scalable systems for SaaS platforms</u> and product-focused teams. Skilled with AWS cloud services and modern databases to deliver robust, reliable applications. Experienced in architecting solutions using web frameworks like Ruby on Rails and FastAPI. Contributed to the integration of Gen-AI solutions into core products, enhancing user experience with intelligent features. Passionate about building streamlined, integrated solutions and eager to contribute within high-performance teams by leveraging expertise in systems design, cloud infrastructure, and service reliability.
          </p>
          <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
            <p className="text-sm md:text-base lg:text-xs">
              <strong className="text-white">Skills</strong>: { skillset }
            </p>
          </div>
        </div>
        <svg className="absolute -top-8 -right-16 hidden md:block" width="96" height="96" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M65.44 153.526V149.526H61.44H20.48C11.3675 149.526 4 142.163 4 133.105V51.4211C4 42.3628 11.3675 35 20.48 35H102.4C111.513 35 118.88 42.3628 118.88 51.4211V166.187C118.88 195.935 95.103 220.165 65.44 220.979V153.526ZM198.56 153.526V149.526H194.56H153.6C144.487 149.526 137.12 142.163 137.12 133.105V51.4211C137.12 42.3628 144.487 35 153.6 35H235.52C244.633 35 252 42.3628 252 51.4211V166.187C252 195.935 228.223 220.165 198.56 220.979V153.526Z" stroke="currentColor" strokeWidth="8"></path>
        </svg>
    </section>
  );
};

export default Card;
