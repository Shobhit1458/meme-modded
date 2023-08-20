module.exports = {
 
 plugins: [
  {
   name: 'preset-default',
  },
   'cleanupIDs'
  ]
  globDirectory: 'docs',
  globPatterns: [
    '**/*.{html,js,css,png,svg,jpg,gif,json,ttf,woff,woff2,eot,ico,webmanifest,map}'
  ],
  swDest: 'docs/service-worker.js',
  clientsClaim: true,
  skipWaiting: true
};
