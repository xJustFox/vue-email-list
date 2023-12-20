const { createApp } = Vue

createApp({
    data(){
        return{
            arrEmail:[],
        }
    },
    created() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                let email = response.data.response;

                this.arrEmail.push(email);
            })
        }
    },
    methods: {
        
    },
}).mount('#app')