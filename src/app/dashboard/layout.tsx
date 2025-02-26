import React from "react";

export default function DashboardLayout({
    children,
    notifications,
    revenue,
    user
}: {
    children: React.ReactNode;
    notifications: React.ReactNode;
    revenue: React.ReactNode;
    user: React.ReactNode;
}) {
    return (
        <div>
            <h1>Dashboard Layout</h1>  {/* This should be visible */}
            <div>{children}</div> {/* Main Dashboard Content */}
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>{user}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{ display: "flex", flex: 1 }}>
                    {notifications}
                </div>
            </div>
        </div>
    );
}
