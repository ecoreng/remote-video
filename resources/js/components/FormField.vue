<template>
    <default-field :field="field" :errors="errors">
        <template slot="field">
            <input
                :id="field.name"
                type="text"
                class="w-full form-control form-input form-input-bordered"
                :class="errorClasses"
                :placeholder="field.name"
                v-model="value"
            />
            <component
                v-bind:is="previewComponent"
                v-model="value"
            />
        </template>
    </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova';
import { getPreviewComponent, parseEntityByPreviewComponent } from '../helpers/PreviewMatch';

export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],

    parsedEntity: null,

    methods: {

        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            this.value = this.field.value || ''
        },

        /**
         * Right before sending the request, fill the value in formData
         */
        fill(formData) {
            formData.append(this.field.attribute, this.parsedEntity ? JSON.stringify(this.parsedEntity) : '')
        },

        /**
         * Update the field's internal value.
         */
        handleChange(value) {
            this.value = value
        },
    },

    computed: {
        previewComponent() {
            return getPreviewComponent(this.value);
        },
        parsedEntity() {
            return parseEntityByPreviewComponent(this.previewComponent, this.value)
        }
    }
}
</script>
