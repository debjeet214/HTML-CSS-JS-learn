using the @apply we can apply a set of tailwind class for a given class in html, let say we have a html file with 5 buttons with the same class btn,

Now instead of giving same tailwind classes to all the buttons just put a class name and apply the tailwind classes once only inside the style form

.btn{

    @apply text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900;

}
