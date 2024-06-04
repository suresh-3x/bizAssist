// import Next from 'next';

// export default function customImageLoader({ src, width, quality = 80 }) {
//     const prefix = 'https://suresh-3x.github.io/smacks';
  
//     const url = `${prefix}${src}`;
  
//     if (width && Next.version >= 13) {
//       return {
//         url,
//         width,
//         quality,
//       };
//     }
  
//     return url;
//   }



export default function myImageLoader({ src, width, quality }) {
  return `smacks/${src}?w=${width}&q=${quality || 75}`
}