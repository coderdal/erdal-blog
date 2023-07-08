import Markdown from "markdown-to-jsx";

const Content = ({ children }) => {
  return <Markdown>{children}</Markdown>;
};

export default Content;
