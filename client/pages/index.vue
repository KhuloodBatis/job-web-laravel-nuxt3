<template>
   <div>
      
     <div class="text-center py-10 text-red-500">
       <h1 class="text-4xl font-bold mb-2">Find the best jobs in the world.</h1>
       <p class="text-gray-600 font-medium">
         We're the best job board in the entire world.
       </p>
     </div>

     <div class="mt-10">

      <Job v-for="job in jobs" :key="job.id" :job="job"/>
     </div>
   
   </div>
 </template>
 
 <script lang="ts" setup>
 import ALL_JOBS from '@/graphql/AllJobs.gql'
 const query = ALL_JOBS  ;
 
 const variables = { limit: 5 };
 const { data, error } = await useAsyncQuery(query, variables);
 const jobs = data.value.jobs;

 </script>
 