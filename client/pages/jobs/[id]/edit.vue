<template>

<div>
    <form @submit.prevent="submit" class="w-6/12" v-if="me">
       {{ me.jobs[0] }}
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
                           v-model="me.jobs[0].job_title"
                           :class="{ 'border-red-500': errors['input.job_title'] }"></input>
                           
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
                           v-model="me.jobs[0].job_location"
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
                           v-model="me.jobs[0].job_link"
                           :class="{ 'border-red-500': errors['input.job_link'] }">

                           <div class="text-sm text-red-500 mt-1" v-if="errors['input.job_link']">
                               {{ errors['input.job_link'][0] }}
                           </div>
                   </div>
               </div>
       

               <div>
               
                   <label for="tags" class="inline-block mb-1 font-medium">Tags</label>
               
                   <div>   

                   <multiselect  
                   input-id="tags" 
                   v-model="me.jobs[0].tags" 
                   :options="tags" 
                   :multiple="true" 
                   :taggable="true"
                   tag-position="bottom"
                   label="title"
                   track-by="id"
                    placeholder="Select tags"
                    class="border-2 border-gray-200 rounded-lg"
                    :class="{ 'border-red-500': errors['input.tags.connect'] }"
                    >
                </multiselect>

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
                           v-model="me.jobs[0].company_name"
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
                           v-model="me.jobs[0].company_logo"
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
                   v-model="me.jobs[0].highlighted"> 
               <label for="highlighted" class="ml-2">Highlight listing</label>
               </div>

               <div class="mb-4">  
               <input 
                   type="checkbox"  
                   name="pinned" 
                   id="pinned"
                   v-model="me.jobs[0].pinned">  
               <label for="highlighted" class="ml-2">Pinned</label>
               </div>
               
       </div>
 

     <button type="submit" class="p-2 bg-blue-500 text-white font-medium rounded-lg mt-3">
        Edit listing
     </button>
   </form>
   
</div>

</template>


<script >
import USER_JOB_BY_ID from '@/graphql/UserJobById.gql'
import ALL_TAGS from '@/graphql/AllTags.gql'
import Multiselect from 'vue-multiselect'
import UPDATE_JOB from '@/graphql/UpdateJob.gql'


export default{

    data () {
      return {
        errors: {},
      }
    },
    computed: {
        tagsIds(){
            return this.me.jobs[0].tags.map(tag => tag.id)
        }
    },
    apollo:{
        me: {
            prefetch:false,
            query:USER_JOB_BY_ID,
            variables(){
                 return {
                    id: this.$route.params.id,
                 }
            },


        },
        tags:{
            query:ALL_TAGS
        }
    },
  
 
    components: {
        Multiselect
    },

    methods:{
        submit(){
           this.$apollo.mutate({
            mutation: UPDATE_JOB ,
            variables: { ...this.me.jobs[0], tags: this.tagsIds }
        }).then(() => {
          this.$router.replace({ name: 'user-listings' })
        }).catch((e) => {
          this.errors = e.graphQLErrors[0].extensions.validation
        })
        } 
    },

 
}

</script>