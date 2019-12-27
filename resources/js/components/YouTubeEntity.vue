<template>
    <youtube v-if="!thumbnail" :src="videoUrl" />
    <img v-else :src="thumbnailUrl" />
</template>

<script>
import YouTube from './YouTube';
import { entityFromJsonString, thumbnailUrlFromId, noTrackingEmbed } from '../helpers/YouTube';

/**
 * Component that takes an entity (API entry) and embeds the video / preview
 */
export default {
    props: ['value', 'thumbnail', 'thumbnailQuality'],

    components: [
        YouTube
    ],

    computed: {
        videoId() {
            return this.videoEntity.data.id;
        },

        videoUrl() {
            return noTrackingEmbed(this.videoId);
        },

        thumbnailUrl() {
            return thumbnailUrlFromId(this.videoId, this.thumbnailQuality);
        },

        videoEntity() {
            return entityFromJsonString(this.value)
        }
    },
}
</script>

<style scoped>

</style>