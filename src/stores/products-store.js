import { writable } from 'svelte/store';

export const products = writable([
  {
    id: 'p1',
    title: '1 SET',
    price: 180.00,
    descs: ['3 bottles of Magic EyeDrops', '1 Nano Spray']
  },
  {
    id: 'p2',
    title: '2 SET FREE 1 SET',
    price: 360.00,
    descs: ['9 bottles of Magic EyeDrops', '2 Nano Spray']
  },
  {
    id: 'p3',
    title: '3 SET FREE 2 SET',
    price: 540.00,
    descs: ['15 bottles of Magic EyeDrops', '3 Nano Spray']
  }
]);
