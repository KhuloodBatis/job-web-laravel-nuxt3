declare global {

    interface ValidationErrors{
        [key: string]: string[]
    }

    interface LoginForm {

        email: string;
        password: string;
    }

    interface RegisterForm {

        name: string;
        email: string;
        password: string;
    }

    interface User {

        id: number ;
        name: string ;
        email: string;
    }

    interface ProfileForm {

        name: string;
        email: string;
    }

    interface JobsInformation {
        id: number;
        job_title: string;
        job_location : string;
        job_link: string;
        company_name: string;
        company_logo:string;
    }

    interface  JobCreation {
        job_title:String;
        job_location:String;
        job_link:String;
        tags:[];
        company_name:String;
        company_logo:String;
        highlighted:false
        pinned: false;
        user_name:String;
        user_email:String;
        user_password:String;
    }

    
}