import React from 'react'

const Counter = () => {
    return (
        <div>
            <div class="flex md:justify-center items-center">
                <button class="inline-flex items-center justify-center p-2 text-sm font-medium text-gray-500 bg-white border border-r-0 border-gray-300 focus:outline-none hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <span class="sr-only">Quantity button</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                </button>
                <div>
                    <input type="number" id="first_product" class="bg-gray-50 outline-none w-8 text-center border border-gray-300 text-gray-900 text-sm block py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="1" required />
                </div>
                <button class="inline-flex items-center justify-center p-2 text-sm font-medium text-gray-500 bg-white border border-l-0 border-gray-300 focus:outline-none hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <span class="sr-only">Quantity button</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Counter