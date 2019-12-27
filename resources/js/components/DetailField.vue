<template>
    <div class="flex border-b border-40">
        <div class="w-1/4 py-4">
            <slot>
                <h4 class="font-normal text-80">{{ label }}</h4>
            </slot>
        </div>
        <div class="w-3/4 py-4 break-words">
            <slot name="value">
                <p v-if="this.field.value" class="text-90">
                    <component
                        v-bind:is="previewComponent"
                        v-model="this.field.value"
                        :thumbnail="true"
                    />
                </p>
                <p v-else>&mdash;</p>
            </slot>
        </div>
    </div>
</template>

<script>
import { getPreviewComponent, parseEntityByPreviewComponent } from '../helpers/PreviewMatch';

export default {
    props: ['resource', 'resourceName', 'resourceId', 'field'],
    computed: {
        label() {
            return this.resourceName || this.field.name
        },

        previewComponent() {
            return getPreviewComponent(this.field.value);
        },
        parsedEntity() {
            return parseEntityByPreviewComponent(this.previewComponent, this.field.value)
        }
    },
}
</script>
