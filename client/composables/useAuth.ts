export const useAuth = () : {} => {

    const sanctumFetch = useSanctumClient()

    async function register(form: RegisterForm) : Promise<void> {
       
        await sanctumFetch('/register',{

            method: "POST",
            body: form
        })
    }

    async function updateProfile(form: ProfileForm) : Promise<any> {
       
    return   await sanctumFetch('/user/profile-information',{

          method: "PUT",
          body: form
      })
  }

  return {

    register,
    updateProfile
  }
        
}