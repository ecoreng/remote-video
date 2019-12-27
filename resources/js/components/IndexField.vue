<template>
    <span>
        <component
            v-bind:is="previewComponent"
            v-model="this.field.value"
            :thumbnail="true"
            thumbnail-quality=""
        />
    </span>
</template>

<script>
import { getPreviewComponent, parseEntityByPreviewComponent } from '../helpers/PreviewMatch';

export default {
    props: ['resourceName', 'field'],
    computed: {
        previewComponent() {
            return getPreviewComponent(this.field.value);
        },
        parsedEntity() {
            return parseEntityByPreviewComponent(this.previewComponent, this.field.value)
        }
    }
}
</script>
