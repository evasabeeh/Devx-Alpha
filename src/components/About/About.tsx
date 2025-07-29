'use client';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <section className="relative w-full min-h-screen z-10">

        <Image
          src="/about/about1.jpg"
          alt="About Hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />


        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
          <h1
            className="text-white border-4 border-[#CB1919]
                 px-4 py-2 sm:px-6 md:px-8 lg:px-10
                 font-semibold 
                 text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[55px]
                 leading-[100%] tracking-[-0.02em]"
          >
            About Us
          </h1>


          <p
            className="mt-4 font-medium text-white 
                 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 
                 max-w-[90%] sm:max-w-[80%] md:max-w-[700px]"
          >
            Crafting Experiences That Inspire, Connect, and Deliver Impact.
          </p>
        </div>
      </section>

    {/* second section */}
      <section className="w-full flex justify-center px-4 relative z-20 -mt-16 md:-mt-24">


        <div className="relative z-20  md:-mt-24 mt-0 w-[190vh] max-w-5xl bg-white flex flex-col md:flex-row  border border-gray-200 overflow-hidden  min-h-[80vh] md:h-[75vh]">



          <div className="w-full md:w-1/2 p-4 flex">

            <div className='text-center px-4 md:px-7'>

              <h1 className=" font-bold text-[32px] sm:text-[36px] md:text-[40px] leading-[100%] tracking-[-0.02em] text-[#CB1919] mb-4 mt-5">
                We Are Devx Alpha
              </h1>
              <p className=" text-[20px] sm:text-[22px] md:text-[29px] leading-[100%] tracking-[-0.02em] text-black mb-4 py-5 text-bold">
                Our Purpose & Passion
              </p>


              <p className="text-black text-base leading-relaxed text-left py-5 px-7">
                At Devx Alpha, we don’t just offer products—we craft experiences. Every detail, from design to delivery, reflects our commitment to quality, creativity, and care. We aim to inspire and serve by understanding your needs and transforming ideas into meaningful results.
              </p>
              <p className="text-black text-base leading-relaxed text-left py-3  px-7">
                Driven by authenticity and innovation, we bring fresh ideas to life while staying true to our core values. From concept to creation, our work is guided by a passion for excellence and a desire to make a positive impact in the lives of our customers. Your trust fuels us, and your satisfaction is our greatest reward.
              </p>

            </div>
          </div>


          <div className="w-full md:w-1/2 h-64 md:h-auto">
            <img src="/about/about2.jpg" alt="Vision" className="w-full h-full object-cover" />

          </div>
        </div>
      </section>
      {/* third section */}
      <section className="w-full flex justify-center z-10 relative md:my-0 my:3">
        <div className="relative z-20 w-full bg-white flex flex-col md:flex-row  border border-gray-200 overflow-hidden h-auto md:h-[85vh]">

          <div className="w-full md:w-1/2 h-64 md:h-auto relative">

            <img
              src="/about/about3.jpg"
              alt="Background Vision"
              className="w-full h-full object-cover"
            />


            <img
              src="/about/about4.jpg"
              alt="Overlay Team Image"
              className="absolute top-8 left-12 w-[90%] md:w-[755px] h-auto  shadow-lg"
            />
          </div>


          <div className="w-full md:w-1/2 p-4  px-20">
            <div className="text-center">
              <h1 className=" text-[32px] sm:text-[36px] md:text-[40px] leading-[100%] tracking-[-0.02em] text-[#CB1919] mb-4 mt-12 md:mt-7">
                How we work
              </h1>
              <p className="text-black text-base leading-relaxed text-center md:text-left py-2 px-10">
                At Devx Alpha, we combine creativity and strategy to deliver results that matter. We focus on your goals, crafting quality solutions with care to help your business grow confidently.
              </p>

            </div>
            <div className="flex flex-col gap-6 mt-10 px-4 sm:px-10">
              {[
                {
                  title: "Discover",
                  description: "We understand your goals, audience, and vision.",
                  icon: "icon/Frame.png",
                },
                {
                  title: "Strategy",
                  description: "We plan a clear, effective roadmap for your project.",
                  icon: "icon/Frame1.png",
                },
                {
                  title: "Design",
                  description: "We craft engaging, user-focused designs.",
                  icon: "icon/Frame2.png",
                },
                {
                  title: "Deliver",
                  description: "We launch your project with quality and care.",
                  icon: "icon/Frame3.png",
                },
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-red-600 text-3xl"><img
                    src={step.icon}
                    alt={step.title}
                    className="w-10 h-10 object-contain mt-1"
                  />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-black text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>
      {/* fourth section */}
      <section className="w-full bg-white py-10 px-4">
        <h2 className="text-center text-[28px] sm:text-[32px] md:text-[50px] font-semibold mb-10 text-black">
          Milestones That Matter
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-0 max-w-6xl mx-auto">


          <div className="text-center md:text-left px-6 py-4 max-w-sm ">
            <p className="text-[#CB1919] text-[40px] font-bold text-center">86+</p>
            <h3 className="text-lg font-semibold mt-1 text-center">Happy Clients</h3>
            <p className="text-gray-600 text-sm mt-1 text-center">
              Proudly serving over 86 satisfied clients with dedication and care.
            </p>
          </div>


          <div className="hidden md:block h-24 w-px bg-gray-700 mx-3" />


          <div className="text-center md:text-left px-20 py-4 max-w-sm">
            <p className="text-[#CB1919] text-[40px] font-bold text-center">3+</p>
            <h3 className="text-lg font-semibold mt-1 text-center">Years of Experience</h3>
            <p className="text-gray-600 text-sm mt-1 text-center">
              Bringing over three years of consistent quality to every project.
            </p>
          </div>


          <div className="hidden md:block h-24 w-px bg-gray-700 mx-3" />


          <div className="text-center md:text-left px-20 py-4 max-w-sm">
            <p className="text-[#CB1919] text-[40px] font-bold text-center">32+</p>
            <h3 className="text-lg font-semibold mt-1 text-center">Business Partners</h3>
            <p className="text-gray-600 text-sm mt-1 text-center">
              Collaborating with 32+ trusted partners to deliver impact.
            </p>
          </div>
        </div>
      </section>
      {/* fifth section */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
          <div className="flex items-center justify-center gap-4 my-8">

            <div className=" w-[2px] h-10 bg-[#CB1919]"></div>


            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 pb-1 mb-2">
              Meet Our Team
            </h2>


            <div className=" w-[2px] h-10 bg-[#CB1919]"></div>
          </div>



          <p className="text-black font-bold text-sm sm:text-base md:text-lg mb-10">We are the best team</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">

            <div className="flex flex-col items-center text-center p-0 m-0">
              <img
                src="/team/team1.jpg"
                alt="Martin Rivera"
                className="w-full h-60 object-cover mb-0"
              />

            </div>


            <div className="flex flex-col items-center text-center p-0 m-0 bg-white shadow-md shadow-gray-400 rounded-b-sm">
              <img
                src="/team/team2.jpg"
                alt="John Doe"
                className="w-full h-60 object-cover mb-0"
              />
            
              <h3 className="text-base sm:text-lg font-semibold mt-2">Martin Rivera</h3>
              <p className="text-gray-500 text-sm sm:text-base">Co-Founder</p>
            </div>


            <div className="flex flex-col items-center text-center p-0 m-0">
              <img
                src="/team/team3.jpg"
                alt="Anna Smith"
                className="w-full h-60 object-cover mb-0"
              />

            </div>
          </div>
        </div>
      </section>






    </div>
  );
}


