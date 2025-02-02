"use client"; // Ensure this component is treated as a client component

import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Testimonials data
const testimonials = [
  {
    quote: "This service has been a game-changer for our business. Highly recommend!",
    name: "John Doe",
    position: "CEO, Company A",
  },
  {
    quote: "Amazing experience! The team was professional and the results were outstanding.",
    name: "Jane Smith",
    position: "Marketing Director, Company B",
  },
  {
    quote: "Exceptional service and support. We couldn’t be happier with the results.",
    name: "Michael Brown",
    position: "CTO, Company C",
  },
];

// Blogs data
const blogs = [
  {
    title: "Blog Post Title 1",
    description: "A brief description of the blog post goes here. It should be engaging and informative.",
    image: "/typescript.webp",
    link: "/blog-post-1",
  },
  {
    title: "Blog Post Title 2",
    description: "A brief description of the blog post goes here. It should be engaging and informative.",
    image: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/blog-post-2",
  },
  {
    title: "Blog Post Title 3",
    description: "A brief description of the blog post goes here. It should be engaging and informative.",
    image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg",
    link: "/blog-post-3",
  },
];

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Coding", "Full-Stack Development"],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy(); // Cleanup Typed instance on component unmount
    };
  }, []);

  return (
    <main className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white dark:bg-gradient-to-r dark:from-indigo-900 dark:to-purple-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="container px-4 py-20 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:mt-12">
          <h1 className="text-4xl font-extrabold leading-snug md:text-5xl">
            A <span className="text-yellow-300">Free Space</span> for localities
            <br className="hidden lg:block" /> components using{" "}
            <span className="font-bold text-yellow-300 underline">
              <span ref={el} />
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-200 dark:text-gray-400">
            Find bits of knowledge that illuminate your journey. Explore ideas that inspire creativity and growth. 
            Dive into stories that spark action and ignite change.
          </p>
          <div className="mt-8 max-w-lg mx-auto lg:max-w-3xl">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex items-center bg-white rounded-xl p-4 shadow-lg space-x-4 dark:bg-gray-700">
              <input
                type="text"
                placeholder="Search for components..."
                className="w-full px-4 py-2 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-100 dark:bg-gray-800 dark:focus:ring-indigo-300"
              />
              <Button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-700 text-white rounded-lg dark:bg-indigo-700 dark:hover:bg-indigo-600">
                Search
              </Button>
            </form>
          </div>
        </div>
        <div className="w-full mt-12 lg:mt-0 lg:w-1/2">
          <Image
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-auto max-w-lg mx-auto"
            width={600}
            height={600}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Hear from our satisfied customers
          </p>
          <div className="flex flex-wrap justify-center mt-10 space-x-6 space-y-6 md:space-x-12 md:space-y-0">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="p-8 bg-white rounded-xl shadow-xl hover:shadow-2xl transform transition duration-500 ease-in-out hover:scale-105 dark:bg-gray-700 dark:text-gray-200">
                  <p className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-300">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300">{testimonial.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-100 to-purple-200 dark:bg-gradient-to-r dark:from-indigo-800 dark:to-purple-800">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200">Top Blogs</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Check out our most popular blog posts
          </p>
          <div className="flex flex-wrap justify-center mt-10 space-x-6 space-y-6 md:space-x-12 md:space-y-0">
            {blogs.map((blog, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105 dark:bg-gray-700 dark:text-gray-200">
                  <Image
                    src={blog.image}
                    className="w-full h-64 object-cover rounded-t-lg"
                    width={600}
                    height={400}
                    alt={blog.title}
                  />
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{blog.title}</h3>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">{blog.description}</p>
                    <Button className="mt-4 px-6 py-3 bg-indigo-500 hover:bg-indigo-700 text-white rounded-lg dark:bg-indigo-700 dark:hover:bg-indigo-600">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;







// "use client"; // Ensure this component is treated as a client component

// import { Button } from "@/components/ui/button";
// import Typed from "typed.js";
// import React, { useRef, useEffect } from "react";
// import Image from "next/image";

// export default function Home() {
//   // Create reference to store the DOM element containing the animation
//   const el = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: [
//         "Coding",
//         "Full-Stack Development"
        
//       ],
//       typeSpeed: 50,
//     });

//     return () => {
//       // Destroy Typed instance during cleanup to stop animation
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <main>
//       <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
//         <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
//           <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
//             A <span className="font-semibold">free Space</span> for localities{" "}
//             <br className="hidden lg:block" /> components using{" "}
//             <span className="font-semibold underline decoration-primary">
//               <span ref={el} />
//             </span>
//           </h1>
//           <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
//           Find bits of knowledge that illuminate your excursion. 
//            <br className="hidden lg:block" /> Explore
//             ideas that inspire creativity and growth. Dive into stories that spark action and ignite
//             change.
//           </p>
//           <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
// <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
             
             
//               {/* F            orm elements can go here if needed */}
//             </form>
//           </div>
//         </div>
//         <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
//           <Image
//             src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
//             alt="tailwind css components"
//             className="w-full h-full max-w-md mx-auto"
//             width={600}
//             height={600}
//           />
//         </div>
//       </section>

//       <section className="py-12 bg-white dark:bg-gray-900">
//         <div className="container px-4 mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
//               What Our Clients Say
//             </h2>
//             <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
//               Hear from our satisfied customers
//             </p>
//           </div>
//           <div className="flex flex-wrap justify-center">
//             {/* Testimonial 1 */}
//             <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//               <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
//                 <p className="text-gray-600 dark:text-gray-400">
//                   &quot;This service has been a game-changer for our business. Highly recommend!&quot;
//                 </p>
//                 <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
//                   John Doe
//                 </h3>
//                 <p className="text-gray-500 dark:text-gray-300">CEO, Company A</p>
//               </div>
//             </div>
//             {/* Testimonial 2 */}
//             <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//               <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
//                 <p className="text-gray-600 dark:text-gray-400">
//                   &quot;Amazing experience! The team was professional and the results were outstanding.&quot;
//                 </p>
//                 <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
//                   Jane Smith
//                 </h3>
//                 <p className="text-gray-500 dark:text-gray-300">Marketing Director, Company B</p>
//               </div>
//             </div>
//             {/* Testimonial 3 */}
//             <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//               <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
//                 <p className="text-gray-600 dark:text-gray-400">
//                   &quot;Exceptional service and support. We couldn&apos;t be happier with the results.&quot;
//                 </p>
//                 <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
//                   Michael Brown
//                 </h3>
//                 <p className="text-gray-500 dark:text-gray-300">CTO, Company C</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-12 bg-gray-100 dark:bg-gray-900">
//         <div className="container px-4 mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Top Blogs</h2>
//             <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
//               Check out our most popular blog posts
//             </p>
//           </div>
//           <div className="flex flex-wrap justify-center">
//             {/* Blog 1 */}
//             <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//               <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
//                 <Image
//                   src="/typescript.webp"
//                   className="w-full h-64 object-cover rounded-t-lg"
//                   width={600}
//                   height={400}
//                   alt="Blog 1"
//                 />
//                 <div className="mt-4">
//                   <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
//                     Blog Post Title 1
//                   </h3>
//                   <p className="mt-2 text-gray-600 dark:text-gray-400">
//                     A brief description of the blog post goes here. It should be engaging and
//                     informative.
//                   </p>
//                   <Button className="m-2" variant="outline" href="/blog-post-1">
//                     Read More
//                   </Button>
//                 </div>
//               </div>
//             </div>
//             {/* Blog 2 */}
//             <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//               <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
//                 <Image
//                   src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                   alt="Blog 2"
//                   className="w-full h-64 object-cover rounded-t-lg"
//                   width={600}
//                   height={400}
//                 />
//                 <div className="mt-4">
//                   <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
//                     Blog Post Title 2
//                   </h3>
//                   <p className="mt-2 text-gray-600 dark:text-gray-400">
//                     A brief description of the blog post goes here. It should be engaging and
//                     informative.
//                   </p>
//                   <Button className="m-2" variant="outline" href="/blog-post-2">
//                     Read More
//                   </Button>
//                 </div>
//               </div>
//             </div>
//             {/* Blog 3 */}
//             <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//               <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
//                 <Image
//                   src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
//                   alt="Blog 3"
//                   className="w-full h-64 object-cover rounded-t-lg"
//                   width={600}
//                   height={400}
//                 />
//                 <div className="mt-4">
//                   <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
//                     Blog Post Title 3
//                   </h3>
//                   <p className="mt-2 text-gray-600 dark:text-gray-400">
//                     A brief description of the blog post goes here. It should be engaging and
//                     informative.
//                   </p>
//                   <Button className="m-2" variant="outline" href="/blog-post-3">
//                     Read More
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }



// "use client"
// import { Button } from "@/components/ui/button"
// import Typed from 'typed.js';
// import React, {useRef, useEffect} from 'react';

// export default function Home() {
//     // Create reference to store the DOM element containing the animation
//     const el = useRef(null);

//     useEffect(() => {
//       const typed = new Typed(el.current, {
//         strings: ['Coding', 'Web Development', 'Software Engineering', 'Data Science', 'Machine Learning'],
//         typeSpeed: 50,
//       });
  
//       return () => {
//         // Destroy Typed instance during cleanup to stop animation
//         typed.destroy();
//       };
//     }, []); 

//   return (
//     <main>
//       <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
//         <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
//           <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
//             A <span className="font-semibold">free Store</span> for local area <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
//           </h1>
//           <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            
// Discover insights that inform your journey. <br className="hidden lg:block" /> Explore ideas that inspire creativity and growth.
// Dive into stories that spark action and ignite change.
//           </p>
//           <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
//             <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
             
//             </form>
//           </div>
//         </div>
//         <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
//           <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
//         </div>
//       </section>


//  <section className="py-12 bg-white dark:bg-gray-900">
//   <div className="container px-4 mx-auto">
//     <div className="text-center mb-12">
//       <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What Our Clients Say</h2>
//       <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Hear from our satisfied customers</p>
//     </div>
//     <div className="flex flex-wrap justify-center">
//       {/* Testimonial 1 */}
//       <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//         <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
//           <p className="text-gray-600 dark:text-gray-400">"This service has been a game-changer for our business. Highly recommend!"</p>
//           <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">John Doe</h3>
//           <p className="text-gray-500 dark:text-gray-300">CEO, Company A</p>
//         </div>
//       </div>
//       {/* Testimonial 2 */}
//       <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//         <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
//           <p className="text-gray-600 dark:text-gray-400">"Amazing experience! The team was professional and the results were outstanding."</p>
//           <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Jane Smith</h3>
//           <p className="text-gray-500 dark:text-gray-300">Marketing Director, Company B</p>
//         </div>
//       </div>
//       {/* Testimonial 3 */}
//       <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//         <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
//           <p className="text-gray-600 dark:text-gray-400">"Exceptional service and support. We couldn't be happier with the results."</p>
//           <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Michael Brown</h3>
//           <p className="text-gray-500 dark:text-gray-300">CTO, Company C</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>


// <section className="py-12 bg-gray-100 dark:bg-gray-900">
//   <div className="container px-4 mx-auto">
//     <div className="text-center mb-12">
//       <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Top Blogs</h2>
//       <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular blog posts</p>
//     </div>
//     <div className="flex flex-wrap justify-center">
//       {/* Blog 1 */}
//       <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//         <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
//           <img src="/typescript.webp" className="w-full h-64 object-cover rounded-t-lg"/>
//           <div className="mt-4">
//             <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 1</h3>
//             <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
//             <Button className="m-2" variant="outline" href="/blog-post-1">Read More</Button>
//           </div>
//         </div>
//       </div>
//       {/* Blog 2 */}
//       <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//         <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
//           <img src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog 2" className="w-full h-64 object-cover rounded-t-lg"/>
//           <div className="mt-4">
//             <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 2</h3>
//             <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
//             <Button className="m-2" variant="outline" href="/blog-post-2">Read More</Button>
//           </div>
//         </div>
//       </div>
//       {/* Blog 3 */}
//       <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
//         <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
//           <img src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg" alt="Blog 3" className="w-full h-64 object-cover rounded-t-lg"/>
//           <div className="mt-4">
//             <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 3</h3>
//             <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
//             <Button className="m-2" variant="outline" href="/blog-post-3">Read More</Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//     </main>
//   );
// };








