const { createApp } = Vue

createApp({
    data(){
        return{
            email: '',
            arrEmail:[],
        }
    },
    created() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                this.email = response.data.response;

                this.arrEmail.push(this.email);
            })
        }
    },
    methods: {
        
    },
}).mount('#app')