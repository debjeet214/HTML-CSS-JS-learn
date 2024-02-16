<h2>Introducing Tailwind CSS framework</h2>

Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS files. It's fast, flexible, and reliable — with zero-runtime.


<b>Tailwind CSS is a easy to use framework thta basically has prewritten code and just adding the source file URL in html page or just installing through NPM we can use the readymade classes in website development without mnanually writtingt he complete css code in different file</b>


<h2> Setup Tailwind CSS, Run this :</h2>

1. npm init -y       // this initialize the directory as a Node.js project
2. npm install -D tailwindcss postcss autoprefixer vite  // install required packages
3. npm tailwindcss init -p
4. Create a css file "input.css", add it to your html and edit it with this content :
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

5. in your tailwind.config.js file replace content:[], into content:["*"]
6. add "start":"vite" to your script in package.json
7. Run npm run start command to start a dev server
************************************************************************************************
