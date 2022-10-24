interface ImportMetaEnv {
  readonly VITE_APP_API_TIMEOUT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {

  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
