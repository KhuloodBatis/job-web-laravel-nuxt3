<script setup lang="ts">

const {register} = useAuth()

const {refreshIdentity} = useSanctumAuth()

definePageMeta({
    middleware:['sanctum:guest']
})


const form = reactive<RegisterForm>({  
    name:'',
    email: '',
    password: '',
})

const errors = ref<ValidationErrors>({})

const submit = async () => {
    try{

        await register(form)
        await refreshIdentity()
    
        await navigateTo('/dashboard')


    }catch(e:any){
        if(e.statusCode === 422){
      errors.value = e.data.errors
      }
    }
}
</script>



<template>



    <form v-on:submit.prevent="submit">

        <div>
            <label for="name" class="inline-block mb-1 font-medium">Name</label>
            <div>
                <input type="text"  name="name" id="name" v-model="form.name" class="bg-gray-200 border-2 border-gray-200 rounded-lg  ">
                <div v-if="errors.name" class="text-red-500 ">
                 {{ errors.name[0] }}
            </div>
            </div>
        </div>

        

        <div>
            <label for="email" class="inline-block mb-1 font-medium">Email address</label>
            <div>
                <input type="email"  name="email" id="email" v-model="form.email" class="bg-gray-200 border-2 border-gray-200 rounded-lg  ">
                <div v-if="errors.email" class="text-red-500 ">
                 {{ errors.email[0] }}
            </div>
            </div>
        </div>

  
        <div>
            <label for="password" class="inline-block mb-1 font-medium"> Password</label>
            <div>

                <input type="password"  name="password" id="password" v-model="form.password" class="bg-gray-200 border-2 border-gray-200 rounded-lg  ">
                <div v-if="errors.password" class="text-red-500 ">
                 {{ errors.password[0] }}
            </div>
            </div>
        </div>

        

      <button type="submit" class="p-2 bg-blue-500 text-white font-medium rounded-lg mt-3">
         Create an Account 
      </button>
    </form>
</template>