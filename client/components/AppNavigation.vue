<script setup lang="ts">

const {isAuthenticated , logout: LogoutAction} = useSanctumAuth()

const user = useSanctumUser<User>()

const logout = async () => {
    await LogoutAction()

    await navigateTo('/example')
}

</script>



<template>


    <div class="p-5 flex items-center justify-between">
     
        <div class="flex items-center space-x-6">

            <NuxtLink to="/" exact-active-class="text-blue-500">Jobs </NuxtLink>
            <NuxtLink to="/dashboard" exact-active-class="text-blue-500"> Dashboard</NuxtLink>

        </div>

      
        <div class="flex items-center space-x-6" v-if="!isAuthenticated">

            <NuxtLink to="/auth/login" exact-active-class="text-blue-500" >Sign in</NuxtLink>

            <NuxtLink to="/auth/register" exact-active-class="text-blue-500">Create an account</NuxtLink>

            <nuxt-link :to="{name: 'jobs-create'}" class="mx-4" exact-active-class="text-blue-500">Post a job</nuxt-link>

        </div>



        <div class="flex items-center space-x-6" v-if="isAuthenticated">

            <div class="font-semibold "> {{ user?.name}}</div>

            <NuxtLink :to="{name: 'user-listings'}" exact-active-class="text-blue-500">Manage listings</NuxtLink>
            <NuxtLink to="/account" exact-active-class="text-blue-500">Account</NuxtLink>

             <button v-on:click="logout">Log out</button>

           
        </div>
    </div>
</template>