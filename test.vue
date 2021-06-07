<template>
    <button @click="handler()">button</button>
</template>
<script>
export default {
    data() {
        return {
            a: 1
        }
    },
    method: {
        handler: () => {
            console.log(this);
        }
    }
}
</script>