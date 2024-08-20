<template>
    <div class=" border-b-2 border-t-2 border-gray-200 p-4 pb-2 flex  justify-between group"
    :class="{'bg-blue-200': job.highlighted}">
     
        <div>
            <img :src="job.company_logo" :alt="`${job.company_name}`" class="h-12 w-12 mr-4" >
        </div>

        <div class="flex flex-wrap items-center justify-between w-full">
            <div class="w-full md:w-4/12 mb-2 ">

                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-yellow-500 mr-1" v-if="job.pinned">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                    </svg>

                    <h2 class="font-bold leading-none">{{job.job_title}}</h2>

                </div>
             <a href="#" class="text-sm"> {{ job.company_name }}</a>

             <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 w-4 text-gray-600 mr-1">
                    <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                    </svg>

                    <div class="text-sm text-gray-600">
                        {{ job.job_location }}
                    </div>
             </div>
            </div>

            <div class="w-full md:w-4/12 mb-2 flex flex-wrap">
             <nuxt-link :to="{name:'tags-slug', params:{slug:tag.slug}}" v-for="tag in job.tags" :key="tag.slug" class=" inline-block text-gray-600 
             border-2 border-gray-300 px-3 py-1 rounded-lg mr-2 gb-white" >{{ tag.title }}</nuxt-link>
            </div>

            <div class="mb-2">
                <div class=" opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <a :href="job.job_link" class="inline-block border-2 border-blue-400 text-blue-400 font-bold rounded-lg px-3 py-2 gb-white" >Apply for this job</a>

                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default{
    props:{
        job: {
            required:true,
            type:Object,
        }
    }
}

</script>