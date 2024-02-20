<h2><b>Creating your configuration file</b></h2>

Generate a Tailwind config file for your project using the Tailwind CLI utility included when you install the tailwindcss npm package:

<h3>npx tailwindcss init</h3>

This will create a minimal tailwind.config.js file at the root of your project: tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Using a different file name
To use a name other than tailwind.config.js, pass it as an argument on the command-line:

<h3>npx tailwindcss init tailwindcss-config.js</h3>
When you use a custom file name, you will need to specify it as a command-line argument when compiling your CSS with the Tailwind CLI tool:

<h3>npx tailwindcss -c ./tailwindcss-config.js -i input.css -o output.css</h3>
If you’re using Tailwind as a PostCSS plugin, you will need to specify your custom configuration path in your PostCSS configuration:

```
postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: { config: './tailwindcss-config.js' },
  },
}
```
Alternatively, you can specify your custom configuration path using the @config directive:

```
@config "./tailwindcss-config.js";

@tailwind base;
@tailwind components;
@tailwind utilities;
```
Learn more about the @config directive in the Functions & Directives documentation.
Using ESM or TypeScript
You can also configure Tailwind CSS in ESM or even TypeScript:

```
tailwind.config.js

tailwind.config.ts
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
When you run npx tailwindcss init, we’ll detect if your project is an ES Module and automatically generate your config file with the right syntax.

You can also generate an ESM config file explicitly by using the --esm flag:

<h3>npx tailwindcss init --esm</h3>
To generate a TypeScript config file, use the --ts flag:

<h3>npx tailwindcss init --ts</h3>
Generating a PostCSS configuration file
Use the -p flag if you’d like to also generate a basic postcss.config.js file alongside your tailwind.config.js file:

<h3>npx tailwindcss init -p</h3>
This will generate a postcss.config.js file in your project that looks like this:

```
postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
Scaffolding the entire default configuration
For most users we encourage you to keep your config file as minimal as possible, and only specify the things you want to customize.

If you’d rather scaffold a complete configuration file that includes all of Tailwind’s default configuration, use the --full option:

<h3>npx tailwindcss init --full</h3>
You’ll get a file that matches the default configuration file Tailwind uses internally.

<h2>Configuration options</h2>
Content
The content section is where you configure the paths to all of your HTML templates, JS components, and any other files that contain Tailwind class names.

```
tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  // ...
}
```
Learn more about configuring your content sources in the Content Configuration documentation.

Theme
The theme section is where you define your color palette, fonts, type scale, border sizes, breakpoints — anything related to the visual design of your site.

```
tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}
```
Learn more about the default theme and how to customize it in the theme configuration guide.

Plugins
The plugins section allows you to register plugins with Tailwind that can be used to generate extra utilities, components, base styles, or custom variants.

```
tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-children'),
  ],
}
```
Learn more about writing your own plugins in the plugin authoring guide.

Presets
The presets section allows you to specify your own custom base configuration instead of using Tailwind’s default base configuration.

```
tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  presets: [
    require('@acmecorp/base-tailwind-config')
  ],

  // Project-specific customizations
  theme: {
    //...
  },
}
```

Learn more about presets in the presets documentation.

Prefix
The prefix option allows you to add a custom prefix to all of Tailwind’s generated utility classes. This can be really useful when layering Tailwind on top of existing CSS where there might be naming conflicts.

For example, you could add a tw- prefix by setting the prefix option like so:

```
tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
}
Now every class will be generated with the configured prefix:

.tw-text-left {
  text-align: left;
}
.tw-text-center {
  text-align: center;
}
.tw-text-right {
  text-align: right;
}
```
/* etc. */
It’s important to understand that this prefix is added after any variant modifiers. That means that classes with responsive or state modifiers like sm: or hover: will still have the responsive or state modifier first, with your custom prefix appearing after the colon:
```
<div class="tw-text-lg md:tw-text-xl tw-bg-red-500 hover:tw-bg-blue-500">
  <!-- -->
</div>
```
The dash modifier for negative values should be added before your prefix, so -mt-8 would become -tw-mt-8 if you’ve configured tw- as your prefix:
```
<div class="-tw-mt-8">
  <!-- -->
</div>
```
Prefixes are only added to classes generated by Tailwind; no prefix will be added to your own custom classes.

That means if you add your own custom utility like this:
```
@layer utilities {
  .bg-brand-gradient { /* ... */ }
}
```
<b>…the generated variants will not have your configured prefix:</b>

.bg-brand-gradient { /* ... */ }
.hover\:bg-brand-gradient:hover { /* ... */ }
If you’d like to prefix your own utilities as well, just add the prefix to the class definition:

@layer utilities {
  .tw-bg-brand-gradient { /* ... */ }
}
Important
The important option lets you control whether or not Tailwind’s utilities should be marked with !important. This can be really useful when using Tailwind with existing CSS that has high specificity selectors.

To generate utilities as !important, set the important key in your configuration options to true:
```
tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
}
```
Now all of Tailwind’s utility classes will be generated as !important:
```
.leading-none {
  line-height: 1 !important;
}
.leading-tight {
  line-height: 1.25 !important;
}
.leading-snug {
  line-height: 1.375 !important;
}
/* etc. */
```
This also applies to any custom utilities you define in your CSS using the @layer utilities directive:
```
/* Input */
@layer utilities {
  .bg-brand-gradient {
    background-image: linear-gradient(#3490dc, #6574cd);
  }
}

/* Output */
.bg-brand-gradient {
  background-image: linear-gradient(#3490dc, #6574cd) !important;
}
```
<h3>Selector strategy</h3>
Setting important to true can introduce some issues when incorporating third-party JS libraries that add inline styles to your elements. In those cases, Tailwind’s !important utilities defeat the inline styles, which can break your intended design.

To get around this, you can set important to an ID selector like #app instead:
```
tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  important: '#app',
}
```
This configuration will prefix all of your utilities with the given selector, effectively increasing their specificity without actually making them !important.

After you specify the important selector, you’ll need to ensure that the root element of your site matches it. Using the example above, we would need to set our root element’s id attribute to app in order for styles to work properly.

After your configuration is all set up and your root element matches the selector in your Tailwind config, all of Tailwind’s utilities will have a high enough specificity to defeat other classes used in your project, without interfering with inline styles:
```
<html>
<!-- ... -->
<style>
  .high-specificity .nested .selector {
    color: blue;
  }
</style>
<body id="app">
  <div class="high-specificity">
    <div class="nested">
      <!-- Will be red-500 -->
      <div class="selector text-red-500"><!-- ... --></div>
    </div>
  </div>

  <!-- Will be #bada55 -->
  <div class="text-red-500" style="color: #bada55;"><!-- ... --></div>
</body>
</html>
```
When using the selector strategy, be sure that the template file that includes your root selector is included in your content configuration, otherwise all of your CSS will be removed when building for production.

<h3>Important modifier</h3>
Alternatively, you can make any utility important by adding a ! character to the beginning:

<p class="!font-medium font-bold">
  This will be medium even though bold comes later in the CSS.
</p>
The ! always goes at the beginning of the utility name, after any variants, but before any prefix:

<div class="sm:hover:!tw-font-bold">
This can be useful in rare situations where you need to increase specificity because you’re at war with some styles you don’t control.

<h3>Separator</h3>
The separator option lets you customize which character should be used to separate modifiers (screen sizes, hover, focus, etc.) from utility names (text-center, items-end, etc.).

We use a colon by default (:), but it can be useful to change this if you’re using a templating language like Pug that doesn’t support special characters in class names.
```
tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  separator: '_',
}
```
<h3>Core Plugins</h3>
The corePlugins section lets you completely disable classes that Tailwind would normally generate by default if you don’t need them for your project.

To disable specific core plugins, provide an object for corePlugins that sets those plugins to false:
```
tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    float: false,
    objectFit: false,
    objectPosition: false,
  }
}
```
If you’d like to safelist which core plugins should be enabled, provide an array that includes a list of the core plugins you’d like to use:
```
tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: [
    'margin',
    'padding',
    'backgroundColor',
    // ...
  ]
}
```
If you’d like to disable all of Tailwind’s core plugins and simply use Tailwind as a tool for processing your own custom plugins, provide an empty array:
```
tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: []
}
```
