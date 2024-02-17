<h2>Introducing Tailwind CSS framework</h2>

Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS files. It's fast, flexible, and reliable — with zero-runtime.


<b>Tailwind CSS is a easy to use framework thta basically has prewritten code and just adding the source file URL in html page or just installing through NPM we can use the readymade classes in website development without mnanually writtingt he complete css code in different file</b>


<h2> Setup Tailwind CSS, Run this :</h2>

1. npm init -y       // this initialize the directory as a Node.js project
2. npm install -D tailwindcss postcss autoprefixer vite  // install required packages
3. npx tailwindcss init -p
4. Create a css file "input.css", add it to your html and edit it with this content :
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

5. in your tailwind.config.js file replace content:[], into content:["*"]
6. add "start":"vite" to your script in package.json
7. Run npm run start command to start a dev server
************************************************************************************************
<h2>Square Bracket Notation</h2>

in case you need to use a different value than the pre-existing once in the tailwind class sp we can do it using square bracket notation.

using it we can easily take any value for all attributes in tailwind beyond the pre-provided classes.

Example : <div class="p-[43px] bg-yellow-600 m-[32rem]">HELLO WORLD Lorem ipsum, </div>
***********************************************************************************************
<h2>Breakpoint Set & Responsive Design</h2>

<div class="mx-0 px-3 text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl bg-teal-200 sm:bg-teal-300 md:bg-teal-400 lg:bg-teal-500 xl:bg-teal-600 2xl:bg-teal-950 2xl:text-white">Hello Everyone it is a responsive design</div>

<b>Breakpoint prefix	      Minimum screen width	      CSS</b>
sm	                     640px	                     @media (min-width: 640px) { ... }
md	                     768px	                     @media (min-width: 768px) { ... }
lg	                     1024px	                  @media (min-width: 1024px) { ... }
xl	                     1280px	                  @media (min-width: 1280px) { ... }
2xl	                  1536px	                  @media (min-width: 1536px) { ... }
