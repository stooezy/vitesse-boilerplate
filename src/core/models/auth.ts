export declare namespace MAuth {
  export interface IResponse {
    id: string
    username: string
    email: string
    phone_number: string
    full_name: string
    date_of_birth: string
    profile_picture_url: string
    bio: string
    link: string
    referral_code: string
    is_following: boolean
    is_followed: boolean
    following: number
    followers: number
    is_active: boolean
    banned_until: Date
    status: string
    created_at: Date
    updated_at: Date
  }

  export interface IBody {
    username: string
    password: string
  }
}
