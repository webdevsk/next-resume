"use client"
import { useSearchParams } from 'next/navigation'
import SideBar from '@/components/sidebar/sidebar'
import { Suspense } from 'react'

export default function ViewerSideLayout({ children }) {
    return <Suspense fallback={
        <div>
            <div
                id="pdf"
                className="mx-auto"
            >
                {children}
            </div>
        </div>
    }>
        <ViewerSideLayoutComponent>{children}</ViewerSideLayoutComponent>
    </Suspense>
}

function ViewerSideLayoutComponent({ children }) {
    const params = useSearchParams()
    const printMode = params.has("print")
    return (
        <>
            {!printMode && <SideBar />}
            {!printMode && <div className="container mt-12"></div>}
            <div className={!printMode ? "pdf-container" : ""}>
                <div
                    id="pdf"
                    className={printMode ? "mx-auto" : ""}
                >
                    {children}
                </div>
            </div>
        </>
    )
}