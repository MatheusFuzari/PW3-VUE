<script setup lang="ts">

const props = defineProps({
    img: {type: String, required: true},
    text: {type: String, required: true},
})
</script>

<template>
    <div class="flex flex-row align-items-center">
        <img :src="props.img" alt="bot" class="mr-2">
        <p>{{ props.text }}</p>
    </div>
</template>

<style scoped lang="scss">
img{
    height: 5rem;    
}
p{
    width: 6rem;
    color: white;
}
</style>
