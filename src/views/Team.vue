<template>
  <div>
    <h1>Equipe</h1>
    {{ color }}
    <div v-if="member==='saymon'">
        Bio Saymon
    </div>
    <div v-else-if="member === 'dawn'">
        Bio Dawn
    </div>
    <div v-else>
        <p>Lorem ipsum uasdhsaudh sa duhsauidhsad asdhj asiodjsadpoijs</p>
    </div>
    {{ member }}
  </div>
</template>

<script>
export default {
    name: 'TeamView',

    props: {
        color: {
            type: String,
            default: ''
        },
        member: {
            type: String,
            default: ''
        },
    },

    data() {
        return {

        };
    },
    methods: {},
}
</script>
