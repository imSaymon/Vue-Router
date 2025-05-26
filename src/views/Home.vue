<template>
    <div>
        <h1>Home</h1>
    </div>
</template>

<script>
    export default {
        name: 'HomeView',

        data() {
            return {

            };
        },

        created() {
            // this.$router.push('/a-empresa');
            // this.$router.push({path: '/a-empresa'});
            // this.$router.push({name: 'company'});
            // this.$router.push({name: 'company', query: {nome: 'saymon'}});
            // this.$router.push({name: 'company', hash: '#laravue'});
            this.$router.push({name: 'team', params: {member: 'dawn'}});
            console.log(this.$router);
            
        },

        methods: {}
    }
</script>