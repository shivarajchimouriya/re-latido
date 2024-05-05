import { logger } from "./logger";

export const throttle = <T extends (...args: any[]) => void>(
    func: T,
    wait: number
): T => {
    let isThrottled = false;
    let args: any[] | null = null;

    const throttledFunction = function (this: any, ...funcArgs: any[]) {
        if (!isThrottled) {
            func.apply(this, funcArgs);
            isThrottled = true;

            setTimeout(() => {
                isThrottled = false;
                if (args) {
                    throttledFunction.apply(this, args);
                    args = null;
                }
            }, wait);
        } else {
            args = funcArgs;
        }
    };

    return throttledFunction as T;
};

export function calculateMinRead(text: string): string {
    if (!text) return '0 s'
    const averageWPM = 200;
    const words = text.trim().split(/\s+/).length;
    const readTimeMinutes = Math.round(words / averageWPM);

    if (readTimeMinutes === 0) {
        return "1 min";
    } else {
        return `${readTimeMinutes} min${readTimeMinutes === 1 ? '' : 's'}`;
    }
}


export function numberWithCommas(x: number): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// Output: "1,000,000"

export const extractImagesFromHTML = (content: string): string[] => {
    const imgRegex = /<img.*?src=['"](.*?)['"].*?>/g;
    const matches = Array.from(content.matchAll(imgRegex));
    const images: string[] = [];

    matches.forEach((match) => {
        const src = match[1];
        images.push(src);
    });
    return images;
};


export const attachWithS3BaseUrl = (path: string) => {

    const baseURL = process.env.S3_BASE_URL || process.env.NEXT_PUBLIC_S3_BASE_URL || ''
    return baseURL + path


}

export function debounce<F extends (...args: any[]) => any>(
    func: F,
    wait: number,
    immediate: boolean = false
): F {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return function (this: any, ...args: any[]) {
        const later = () => {
            timeout = null;
            if (!immediate) func.apply(this, args);
        };

        const callNow = immediate && !timeout;

        clearTimeout(timeout as ReturnType<typeof setTimeout>);

        timeout = setTimeout(later, wait);

        if (callNow) func.apply(this, args);
    } as F;
}