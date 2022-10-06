export declare namespace MToken {
  export interface IResponse {
    id: number
    name: string
    device_id: string
    device_type: string
    token: string
    token_expired: string
    refresh_token: string
    refresh_token_expired: string
    created_at: string
    updated_at?: any
  }

  export interface IBody {
    app_name: string
    app_key: string
    device_id: string
    device_type: string
  }
}
