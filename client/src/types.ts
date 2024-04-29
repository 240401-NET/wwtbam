

export interface SignUpFormProps {
    Username: string;
    Email: string;
    Password: string;
    Name: string
}

export interface LoginFormProps {
  
    Username: string;
    Password: string;
}
//mirrors the response obj
export interface Token {
  userName: string;
  email: string;
  token: string;
}

export interface ToastProps {
  toastMessage: string;
  color: string;
}

export interface UserContextType {
  user: UserProfile | null,
    token: string | null,
    register: (Email: string, Username: string, Password: string) => void;
    loginUser: (Username: string, Password: string) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
}

export interface UserProfile  {
  userName: string,
  email: string,
}