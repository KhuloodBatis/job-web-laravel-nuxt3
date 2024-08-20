<template>
    <div>
        <div class="text-center py-10 text-red-500">
       <h1 class="text-4xl font-bold mb-2">{{ tag.title }} jobs</h1>
       <p class="text-gray-600 font-medium">
         The best {{ tag.title }} jobs in the world.
       </p>
     </div>
        <div class="mt-10">

        <Job v-for="job in jobs" :key="job.id" :job="job"/>
        </div>
    </div>
</template>


<script setup lang="ts" >
import ALL_JOBS_BY_TAG from '@/graphql/AllJobsByTag.gql'
import TAG_BY_SLUG from '@/graphql/TagBySlug.gql'

const query = ALL_JOBS_BY_TAG
const tag_query = TAG_BY_SLUG
const route = useRoute();
const slug = route.params.slug
const variables = {
    slug: slug
}
const { data: tagData, error: tagError } = await useAsyncQuery(tag_query, variables);

// Fetch job data
const { data: jobData, error: jobError } = await useAsyncQuery(query, variables);

const jobs = jobData.value.jobs;
const tag = tagData.value.tag
</script> 