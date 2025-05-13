import type {ReactNode} from "react";

type LayoutProps = {
    children: ReactNode
}

function Layout({ children }: LayoutProps) {
    return (
        <div className="layout">
            <div className="main-wrapper">
                <main className="main-content">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout
