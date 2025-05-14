import type {ReactNode} from "react";
import './Layout.scss'

type LayoutProps = {
    children: ReactNode
}

function Layout({ children }: LayoutProps) {
    return (
        <div className="layout">
                    {children}
        </div>
    )
}

export default Layout
