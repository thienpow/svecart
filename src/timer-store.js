import { readable } from 'svelte/store';

let count = 0;

export const timer = readable(count, (set) => {
    const interval = setInterval(() => {
        count++;
        set(count);
    }, 1000);

    return () => {
        // count = 0;
        clearInterval(interval);
    };
});