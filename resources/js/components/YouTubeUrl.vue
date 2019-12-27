<template>
    <youtube v-if="!thumbnail" :src="videoUrl" />
    <img v-else :src="thumbnailUrl" />
</template>

<script>
import YouTube from './YouTube';
import { idFromUrl, thumbnailUrlFromId, noTrackingEmbed } from '../helpers/YouTube';

/**
 * Component that takes the video url and embeds a video / thumbnail
 */
export default {
    props: ['value', 'thumbnail', 'thumbnailQuality'],

    components: [
        YouTube
    ],

    computed: {
        videoId() {
            return idFromUrl(this.value)
        },

        videoUrl() {
            return noTrackingEmbed(this.videoId);
        },

        thumbnailUrl() {
            return thumbnailUrlFromId(this.videoId, this.thumbnailQuality)
        }
    },
}
</script>

<style scoped>

</style>