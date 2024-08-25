<template>
    <div>
       
      <div class="text-center py-10 text-red-500">
        <h1 class="text-4xl font-bold mb-2">Your Listings</h1>

      </div>
 
      <div class="mt-10" v-if="me">
        
       <Job v-for="job in me.jobs" :key="job.id" :job="job">
        <template #action>
          <nuxt-link :to="{ name: 'jobs-id-edit', params: { id: job.id } }"  class="font-medium text-blue-200">
            Edit
          </nuxt-link>
          
        </template>
       </Job>
      </div>
    
    </div>
  </template>
  
  <script >
  import USER_JOBS from '@/graphql/UserJobs.gql'



export default {
  apollo: {
    me: {
      query:USER_JOBS,
      fetchPolicy: 'network-only',
      prefetch: false ,

    }
  }
}

  </script>
  