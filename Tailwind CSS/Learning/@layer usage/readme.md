Using the @layer key we can specify inside which layer among utilities, base and component where we insert the class.

we don't have to move the three taikwind parts with @tailwind, down just write like this

@layer base{

    .btn{
    
        @apply bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded;
    }
}
