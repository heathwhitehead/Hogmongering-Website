
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Hogmongering-Website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Hogmongering-Website"
  },
  {
    "renderMode": 2,
    "route": "/Hogmongering-Website/about"
  },
  {
    "renderMode": 2,
    "route": "/Hogmongering-Website/releases"
  },
  {
    "renderMode": 2,
    "route": "/Hogmongering-Website/photo-service"
  },
  {
    "renderMode": 2,
    "route": "/Hogmongering-Website/setlists"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 793, hash: 'ea8b72a466b13f1b7077e2a01e0d99794bd2fc4ec2e24b3d7aaca9855445c148', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 971, hash: 'fef9f03ff3c9d67ba365b4d367e11b07ae8a084047b22c27dbcd86fd971f1c48', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3194, hash: 'bbfc2167940dce597618e066edb58eb386a9be5159b46b7bab0f75e67366d438', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'releases/index.html': {size: 3329, hash: '64f33c9cd831d36a707b54410d388c69acbd3d0a35d4cddc81a0464f918124af', text: () => import('./assets-chunks/releases_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 3049, hash: '529b4c56364b827f420bb2919520af8ffac8715f6b7ab6a02701ec0bd6d21103', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'photo-service/index.html': {size: 2869, hash: '488597f90f0df4d6af6bcdfc3d89bb47daf562a1f763cf6b778ab35483bbbb5a', text: () => import('./assets-chunks/photo-service_index_html.mjs').then(m => m.default)},
    'setlists/index.html': {size: 2285, hash: 'fe722cca270edd2388cf997bb300bf4766e55cc841c70fbebcca4d05927692e1', text: () => import('./assets-chunks/setlists_index_html.mjs').then(m => m.default)},
    'styles-2DG3GV7P.css': {size: 995, hash: 'PuYo0g7nG/Y', text: () => import('./assets-chunks/styles-2DG3GV7P_css.mjs').then(m => m.default)}
  },
};
