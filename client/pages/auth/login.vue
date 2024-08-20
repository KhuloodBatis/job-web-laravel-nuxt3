<script setup lang="ts">

definePageMeta({
    middleware:['sanctum:guest']
})

const {login} = useSanctumAuth()

const errors = ref<ValidationErrors>({})

const form = reactive<LoginForm>({  
    email: '',
    password: ''
})


const submit = async () => {
   try{
       await login(form)

   } catch(e:any){

    if(e.statusCode === 422){
        errors.value = e.data.errors
    }

   }
}
</script>



<template>



    <form @submit.prevent="submit" class="x-4/12">
       
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
          Sign in 
      </button>
    </form>
</template>