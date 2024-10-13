import React from "react";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <h1 className="text-3xl my-5">This header of blog one</h1>
        {children}
      </div>
    );
  }
  