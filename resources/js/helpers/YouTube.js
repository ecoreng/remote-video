const youtubeUiUrlMatcher = /^https?:\/\/(www\.)?youtube.com\/watch\?v=([a-zA-Z0-9_\-]+)/;

/**
 * Parse an entity string into an object
 *
 * @param value
 * @returns {any}
 */
export function entityFromJsonString(value) {
    return JSON.parse(value)
}

/**
 * Checks if the passed string is a youtube url
 *
 * @param url
 * @returns {boolean}
 */
export function isUrlYouTubeVideo(url) {
    return !!url.match(youtubeUiUrlMatcher)
}

/**
 * Get the ID from the UI URL
 *
 * @param url
 * @returns {string}
 */
export function idFromUrl(url) {
    const match = url.match(youtubeUiUrlMatcher);
    return match.length ? match[match.length - 1] : '';
}

/**
 * Create a video entity from an UI URL (emulates the API return value)
 *
 * @param url
 * @returns {{type: string, data: {kind: string, id: *}}}
 */
export function entityFromUrl(url) {
    const id = idFromUrl(url);
    return {
        type: "youtube",
        data: {
            "kind": "youtube#video",
            "id": id,
        }
    }
}

/**
 * Return the embed url without tracking
 *
 * @param id
 * @returns {string}
 */
export function noTrackingEmbed(id) {
    return `https://www.youtube-nocookie.com/embed/${id}`;
}

/**
 * The default thumnbnail quality if none is passed
 *
 * empty string is default
 * mq
 * hq
 * sd
 * maxres
 *
 * @type {string}
 */
const defaultThumbnailQuality = "hq";

/**
 * Return a thumbnail url for the passed id and quality
 *
 * @param id
 * @param quality
 * @returns {string}
 */
export function thumbnailUrlFromId(id, quality) {
    const qualityToUse = quality !== undefined ? quality : defaultThumbnailQuality;
    return `https://i.ytimg.com/vi/${id}/${qualityToUse}default.jpg`
}
