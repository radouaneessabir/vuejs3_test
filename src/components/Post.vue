<template>
    <div> Post id {{$route.params.id}} </div>
</template>


<script>
import { useRoute } from "vue-router";

export default {
    name: "Post",
    setup() {
        const route = useRoute()
        console.log(route.params)

        return {
            route
        }
    },  
}
</script>