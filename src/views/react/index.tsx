import React from "react";
import Nav from "../../components/Nav";

const Index: React.FC = () => {
  return (
    <html lang="en">
    <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home Page</title>
    </head>
    <body>
        <h1>Welcome to the React SSR App Home Page</h1>
        <Nav />
    </body>
    </html>
  );
};

export default Index;