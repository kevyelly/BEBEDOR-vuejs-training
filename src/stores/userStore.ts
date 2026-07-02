import { ref, computed } from 'vue'
import { defineStore } from 'pinia'



export const useUserStore = defineStore('users', ()=>{
    const currentUser = ref('')
    const isLoggedIn = ref(false)

    function loginUser(username: string){
        if(isLoggedIn.value)return;
        currentUser.value = username
        isLoggedIn.value = true
    }

    function logoutUser(){
        if(!isLoggedIn.value)return
        currentUser.value = ''
        isLoggedIn.value = false
    }

    return {currentUser, isLoggedIn, loginUser, logoutUser}


})


