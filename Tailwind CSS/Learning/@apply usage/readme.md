using the @apply we can apply a set of tailwind class for a given class in html like this 

let say we have a html file with a div so,
<button type="button " class="btn">Yellow</button>

so now we can apply the below classes with apply key helps to reduce coding time
.btn{
    @apply text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900;
}
