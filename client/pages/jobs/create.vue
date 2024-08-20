

<template>


    <form v-on:submit.prevent="submit" class="w-6/12">

        <div class="mb-4">
                <h2 class="mb-4 text-2xl font-blod">Listing Details </h2>
                <div>
                    <label for="job_title" class="inline-block mb-1 font-medium">Job title</label>
                    <div>

                        <input 
                            type="job_title"  
                            name="job_title" id="job_title" 
                            class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10  px-4 "
                            v-model="form.job_title">
                    </div>
                </div>
                <div>
                    <label for="job_location" class="inline-block mb-1 font-medium">Job location</label>
                    <div>
                        <input 
                            type="job_location"  
                            name="job_location" 
                            id="job_location" 
                            class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10  px-4 "
                            v-model="form.job_location">
                    </div>
                </div>

                <div>
                    <label for="job_link" class="inline-block mb-1 font-medium">Job lapplication URL</label>
                    <div>
                        <input 
                            type="job_link"  
                            name="job_link" 
                            id="job_link" 
                            class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10  px-4 "
                            v-model="form.job_link">
                    </div>
                </div>
        

                <div>
                    <!-- {{ tags }} -->
                    <label for="tags" class="inline-block mb-1 font-medium">Tags</label>
                
                    <div>
                          

                    <multiselect  
                    input-id="tags" 
                    v-model="form.tags" 
                    :options="tags" 
                    :multiple="true" 
                    :taggable="true"
                    tag-position="bottom"
                    label="title"
                    track-by="id"
                     placeholder="Select tags"
                     ></multiselect>
                    </div>
                </div>

                <div>
                    <label for="company_name" class="inline-block mb-1 font-medium">Company Name</label>
                    <div>
                        <input 
                            type="company_name"  
                            name="company_name" 
                            id="company_name" 
                            class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10  px-4 "
                            v-model="form.company_name">
                    </div>
                </div>
                
                <div>
                    <label for="company_logo" class="inline-block mb-1 font-medium">Company logo URL</label>
                    <div>
                        <input 
                            type="company_logo"  
                            name="company_logo" 
                            id="company_logo" 
                            class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10  px-4 "
                            v-model="form.company_logo">
                    </div>
                </div>

                <div class="mt-2 mb-4">
                <input 
                    type="checkbox"  
                    name="highlighted" 
                    id="highlighted"
                    v-model="form.highlighted"> 
                <label for="highlighted" class="ml-2">Highlight listing</label>
                </div>

                <div class="mb-4">  
                <input 
                    type="checkbox"  
                    name="pinned" 
                    id="pinned"
                    v-model="form.pinned">  
                <label for="highlighted" class="ml-2">Pinned</label>
                </div>
                
        </div>
        <div class="mb-10">
            <h2 class="mb-4 text-2xl font-blod">Create an account to manage your listing  </h2>

            <div class="bg-gray-400 p-6 rounded-lg">
                <div>
            <label for="email" class="inline-block mb-1 font-medium">Email </label>
            <div>
                <input 
                type="email"  
                name="email" 
                id="email" 
                class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10  px-4 "
                v-model="form.user_email">
            </div>
        </div>
        

        <div>
            <label for="name" class="inline-block mb-1 font-medium">Name</label>
            <div>
                <input 
                    type="name"  
                    name="name" 
                    id="name" 
                    class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10  px-4 "
                    v-model="form.user_name">
            </div>
        </div>
        

        <div>
            <label for="password" class="inline-block mb-1 font-medium">Password</label>
            <div>
                <input 
                type="password"  
                name="password" 
                id="password" c
                class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10  px-4 "
                v-model="form.user_password">
            </div>
        </div>
      </div>
    </div>

      <button type="submit" class="p-2 bg-blue-500 text-white font-medium rounded-lg mt-3">
        Submit
      </button>
    </form>
</template>

