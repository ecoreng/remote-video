import { isUrlYouTubeVideo, entityFromJsonString, entityFromUrl} from "./YouTube";

/**
 * Matches a preview component with the field value
 *
 * @param fieldValue
 * @returns {string}
 */
export function getPreviewComponent(fieldValue) {
    let value = null;
    try {
        value = JSON.parse(fieldValue);
    } catch (ex) {
        value = fieldValue
    }
    if (typeof value === "string") {
        // user is pasting a URL

        if (isUrlYouTubeVideo(value)) {
            return "youtube-url"
        } else {
            return ""
        }
    }
    // user is pasting json or data is coming from db
    if (value.type === "youtube") {
        return "youtube-entity"
    }
    return ""
}

/**
 * Handles the field value based on the previewComponent passed
 *
 * @param previewComponent
 * @param fieldValue
 * @returns {*}
 */
export function parseEntityByPreviewComponent(previewComponent, fieldValue) {
    switch (previewComponent) {
        case "youtube-url":
            return entityFromUrl(fieldValue);
        case "youtube-entity":
            return entityFromJsonString(fieldValue);
    }
}