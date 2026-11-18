// All site imagery lives here. Demo images are generated SVGs in /public/images.
// To use a real photo: copy it into /public/images (e.g. hero-1.jpg) and add  'hero-1': '/images/hero-1.jpg'  to REAL below.
// Nothing else in the code needs to change.
const REAL = {
  // 'hero-1': '/images/hero-1.jpg',
};
export const p = (name) => REAL[name] || `/images/${name}.svg`;
