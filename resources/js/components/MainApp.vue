<template>
    <div class="container">
        <div>
            <router-link to="/ailment" class="btn btn-info">Goto Ailment</router-link>
            <router-view></router-view>
            asdasdasd
        </div>
    </div>
</template>


<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }

</script>
