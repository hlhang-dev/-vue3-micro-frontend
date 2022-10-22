interface ImportMetaEnv {
  readonly VITE_APP_API_TIMEOUT: string
  readonly VITE_APP_PROJECT_NAME: string
  readonly VITE_APP_WECHAT_APPID: string
  readonly VITE_APP_SEVER_APPID: string
  readonly VITE_APP_CARMELA_APP_URL: string
  readonly VITE_APP_USER_CENTER_BASE_API: string
  readonly VITE_APP_ACTIVITY_BASE_API: string
  readonly VITE_APP_BLOB_IMAGE_URL: string
  readonly VITE_APP_REPORT_WEB_URL: string
  readonly VITE_APP_CERT_WEB_URL: string
  readonly VITE_APP_SHOP_MINI_APP_APPID: string
  readonly VITE_APP_SEVER_SECRET: string
  readonly VITE_APP_VERSION: string
  readonly VITE_APP_THEME_TYPE: string
  readonly VITE_APP_CHANNEL_CODE: string
  readonly VITE_APP_LEARNING_BASE_API: string
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
