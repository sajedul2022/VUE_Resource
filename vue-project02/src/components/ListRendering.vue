<template lang="">
    <div>
        <p v-for="(fruit, index) in fruits" :key="index" >
            {{ index }} -> {{ fruit }}
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fruits : ['Mango', 'Orange', 'Apple', 'Grape']
        }
    },
}
</script>
<style lang="">
    
</style>