

<template>


    <form @submit.prevent="submit" class="w-6/12">
       
        <div class="mb-4">
                <h2 class="mb-4 text-2xl font-blod">Listing Details </h2>
                <div>
                    <label for="job_title" class="inline-block mb-1 font-medium">Job title</label>
                    <div>

                        <input 
                           placeholder="Job Title" 
                            type="job_title"  
                            name="job_title" id="job_title" 
                            class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10  px-4 "
                            v-model="form.job_title"
                            :class="{ 'border-red-500': errors['input.job_title'] }">
                            
                        <div class="text-sm text-red-500 mt-1" v-if="errors['input.job_title']">
                            {{ errors['input.job_title'][0] }}
                        </div>
                    </div>
                </div>
                <div>
                    <label for="job_location" class="inline-block mb-1 font-medium">Job location</label>
                    <div>
                        <input 
                            type="job_location"  
                            name="job_location" 
                            id="job_location" 
                            placeholder="Job Location"  
                            class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10  px-4 "
                            v-model="form.job_location"
                            :class="{ 'border-red-500': errors['input.job_location'] }">

                            <div class="text-sm text-red-500 mt-1" v-if="errors['input.job_location']">
                                {{ errors['input.job_location'][0] }}
                            </div>
                    </div>
                </div>

                <div>
                    <label for="job_link" class="inline-block mb-1 font-medium">Job lapplication URL</label>
                    <div>
                        <input 
                        placeholder="Job Link" 
                            type="job_link"  
                            name="job_link" 
                            id="job_link" 
                            class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10  px-4 "
                            v-model="form.job_link"
                            :class="{ 'border-red-500': errors['input.job_link'] }">

                            <div class="text-sm text-red-500 mt-1" v-if="errors['input.job_link']">
                                {{ errors['input.job_link'][0] }}
                            </div>
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
                     class="border-2 border-gray-200 rounded-lg"
                     :class="{ 'border-red-500': errors['input.tags.connect'] }"
                     ></multiselect>

                     <div class="text-sm text-red-500 mt-1" v-if="errors['input.tags.connect']">
                            {{ errors['input.tags.connect'][0] }}
                        </div>
                    </div>
                </div>

                <div>
                    <label for="company_name" class="inline-block mb-1 font-medium">Company Name</label>
                    <div>
                        <input 
                        placeholder="Company Name"  
                            type="company_name"  
                            name="company_name" 
                            id="company_name" 
                            class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10  px-4 "
                            v-model="form.company_name"
                            :class="{ 'border-red-500': errors['input.company_name'] }">
                            <div class="text-sm text-red-500 mt-1" v-if="errors['input.company_name']">
                                {{ errors['input.company_name'][0] }}
                            </div>

                    </div>
                </div>
                
                <div>
                    <label for="company_logo" class="inline-block mb-1 font-medium">Company logo URL</label>
                    <div>
                        <input 
                            placeholder="Company Logo"  
                            type="company_logo"  
                            name="company_logo" 
                            id="company_logo" 
                            class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10  px-4 "
                            v-model="form.company_logo"
                            :class="{ 'border-red-500': errors['input.company_logo'] }">
                            <div class="text-sm text-red-500 mt-1" v-if="errors['input.company_logo']">
                                {{ errors['input.company_logo'][0] }}
                            </div>
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
            <div class="mb-10" v-if="!isAuthenticated">
            <h2 class="mb-4 text-2xl font-blod">Create an account to manage your listing  </h2>

            <div class="bg-gray-400 p-6 rounded-lg">
                <div>
           
            <div>
                 <label for="email" class="inline-block mb-1 font-medium">Email </label>
                <input 
                placeholder="User Email" 
                v-model="form.user_email"
                type="email"  
                name="email" 
                id="email" 
                class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10  px-4 "
                :class="{ 'border-red-500': errors['input.user.create.email'] }"
               >
               <div class="text-sm text-red-500 mt-1" v-if="errors['input.user.create.email']">
              {{ errors['input.user.create.email'][0] }}
            </div>
                
            </div>
        </div>
        

        <div>
           
            <div>
                <label for="name" class="inline-block mb-1 font-medium">Name</label>
                <input 
                placeholder="User Name" 
                    type="name"  
                    name="name" 
                    id="name" 
                    class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10  px-4 "
                    v-model="form.user_name"
                    :class="{ 'border-red-500': errors['input.user.create.name'] }">

                    <div class="text-sm text-red-500 mt-1" v-if="errors['input.user.create.name']">
                    {{ errors['input.user.create.name'][0] }}
                    </div>
            </div>
        </div>
        

        <div>
           
            <div>
                <label for="password" class="inline-block mb-1 font-medium">Password</label>
                <input 
                placeholder="User Password" 
                type="password"  
                name="password" 
                id="password" 
                class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10  px-4 "
                v-model="form.user_password"
                :class="{ 'border-red-500': errors['input.user.create.password'] }">
                <div class="text-sm text-red-500 mt-1" v-if="errors['input.user.create.password']">
              {{ errors['input.user.create.password'][0] }}
            </div>
            </div>
        </div>
      </div>
    </div>
    </div>

      <button type="submit" class="p-2 bg-blue-500 text-white font-medium rounded-lg mt-3">
        Submit
      </button>
    </form>
</template>




<script setup lang="ts">
import ALL_TAGS from '@/graphql/AllTags.gql'
import Multiselect from 'vue-multiselect'
import  CREATE_JOB_WITH_USER from '@/graphql/CreateJobWithUser.gql'
import  CREATE_JOB from '@/graphql/CreateJob.gql'
import { useMutation } from '@vue/apollo-composable';

const {isAuthenticated } = useSanctumAuth()
const {login} = useSanctumAuth()
const { data: data_tags } = await useAsyncQuery(ALL_TAGS)
const tags = data_tags.value.tags


const form = ref({
  job_title: '',
  job_location: '',
  job_link: '',
  company_name: '',
  company_logo: '',
  highlighted: false,
  pinned: false,
  user_email: '',
  user_name: '',
  user_password: '',
  tags: [],
});


const errors = ref({});

const { mutate: createJobWithUser } = useMutation(CREATE_JOB_WITH_USER);
const { mutate: createJob } = useMutation(CREATE_JOB);


  
const submit = async () => {
  errors.value = {}; 

  const tagIds = form.value.tags.map(tag => tag.id);
  try {

    if(!isAuthenticated){
        await createJobWithUser({
            job_title: form.value.job_title,
            job_location: form.value.job_location,
            job_link: form.value.job_link,
            company_name: form.value.company_name,
            company_logo: form.value.company_logo,
            highlighted: form.value.highlighted,
            pinned: form.value.pinned,
            user_email: form.value.user_email,
            user_name: form.value.user_name,
            user_password: form.value.user_password,
            tags: tagIds,
        });
    
       
        await login({
            email: form.value.user_email,
            password: form.value.user_password,
        });
    navigateTo('/');

    }

    await  createJob({
            job_title: form.value.job_title,
            job_location: form.value.job_location,
            job_link: form.value.job_link,
            company_name: form.value.company_name,
            company_logo: form.value.company_logo,
            highlighted: form.value.highlighted,
            pinned: form.value.pinned,
            tags: tagIds,
    });

    navigateTo('/');
  } catch (e) {
    errors.value = e.graphQLErrors[0].extensions.validation
  }
};
</script>