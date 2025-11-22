import Layout from "@/components/layouts/Layout";

interface LayoutProps {
  children: ReactNode;
}


interface ButtonProps {
    buttonLabel: string
    buttonSize?: string
    buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
    action?: () => void
}


export  default LayoutProps;
export  default ButtonProps;