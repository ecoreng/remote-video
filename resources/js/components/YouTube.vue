<template>
    <iframe
            width="560"
            height="315"
            :src="src"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
    </iframe>
</template>

<script>
    /**
     * Generic youtube iframe embed
     */
    export default {
        props: ['src'],
    }
</script>
