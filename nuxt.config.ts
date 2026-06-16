import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Nuxt FSD Starter',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
      ],
    },
  },
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxt/scripts', '@nuxt/eslint', 'nuxt-svgo'],

  srcDir: './src',

  dir: {
    app: 'app/entrypoint',
    pages: 'app/routes',
    layouts: 'app/layouts',
  },

  components: [{ path: '~/shared/ui', prefix: 'ui' }],

  css: ['./src/app/styles/main.css'],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },

  svgo: {
    defaultImport: 'component',
    componentPrefix: 'svg',
    autoImportPath: './shared/assets/svg',
  },

  image: {
    format: ['avif', 'webp'],
  },
});
