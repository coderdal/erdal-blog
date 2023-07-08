export const saveMarkdownFormat = (markdownContent) => {
  return markdownContent.replace(/\\/g, "\\\\");
};
