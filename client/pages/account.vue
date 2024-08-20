<script setup lang="ts">


const {updateProfile} = useAuth()

const {refreshIdentity} = useSanctumAuth()

definePageMeta({
    middleware:['sanctum:auth']
})

const user = useSanctumUser<User>()

const form = reactive<ProfileForm>({  
    name:  user.value.name,
    email: user.value.email,
})


const submit = async () => {
     await updateProfile(form)
     await refreshIdentity()
}
</script>



<template>



    <form v-on:submit.prevent="submit">

        <div>
            <label for="name">Name</label>
            <div>
                <input type="text"  name="name" id="name" v-model="form.name">

            </div>
        </div>

        

        <div>
            <label for="email">Email address</label>
            <div>
                <input type="email"  name="email" id="email" v-model="form.email">

            </div>
        </div>
     

      <button type="submit" class="p-2 bg-blue-500 text-white font-medium rounded-lg mt-3">
         Update
      </button>
    </form>
</template>