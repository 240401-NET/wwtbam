

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

export interface Token {
  Username: string;
  Email: string;
  Token: string;
}

export interface ToastProps {
  toastMessage: string;
  color: string;
}