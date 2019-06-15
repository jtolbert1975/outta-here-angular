export interface AuthModel {
  type: string;
  username: string;
  apllication_name: string;
  client_id: string;
  token_type: string;
  access_token: string;
  expires_in: number;
  state: string;
  scope: string;
}
