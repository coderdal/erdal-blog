import React from "react";
import Markdown from "markdown-to-jsx";

import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

const Content = ({ children }) => {
  return (
    <Markdown
      options={{
        overrides: {
          pre: {
            component: (props) => {
              if (props.children.props.children.length > 2) {
                const language = props.children.props.className.split("-")[1];

                const highlighted = {
                  dangerouslySetInnerHTML: {
                    __html: hljs.highlightAuto(props.children.props.children, [
                      language,
                    ]).value,
                  },
                };

                const element = React.createElement(
                  "pre",
                  { className: "my-6 px-7 py-3 bg-gray-800 rounded" },
                  React.createElement("code", highlighted)
                );
                return element;
              } else {
                return "";
              }
            },
          },
          code: {
            component: (props) => {
              return React.createElement(
                "code",
                {
                  className:
                    "bg-blue-200 bg-opacity-10 rounded-sm text-blue-300 text-sm px-1.5 py-0.5",
                },
                React.createElement("code", null, props.children)
              );
            },
          },
        },
      }}
    >
      {children}
    </Markdown>
  );
};

export default Content;
