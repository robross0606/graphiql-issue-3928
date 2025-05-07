import React from "react";
import Nav from "../../components/Nav";

const SamplePage: React.FC = () => {
  return (
    <html>
        <head><title>Page 1</title></head>
        <body>
          <div id="root">
            <Nav />
            <h1>Welcome to a Sample Page</h1>
            <p>This is a sample page using React server-side rendering.</p>
            <p>The current date/time is <b>{new Date().toLocaleString()}</b></p>
          </div>
        </body>
    </html>
  );
};

export default SamplePage;