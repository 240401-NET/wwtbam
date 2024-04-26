export interface SignUpData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  first: string;
  last: string;
}

export interface SignUpFormProps {
  formData: SignUpData;
  onSignUp: (e: React.FormEvent<HTMLFormElement>) => void;
}
export interface LoginFormProps {
  formData: LoginData;
  onLogin: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface LoginData {
  username: string;
  password: string;
}