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

interface PageRouteProps {
  pageRoute: string
}
export default PageRouteProps;
export  default LayoutProps;
export  default ButtonProps;