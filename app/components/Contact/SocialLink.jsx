const SocialLink = (props) => {
  const classes = `hover:opacity-70 transition-opacity ${props.className}`;
  return (
    <a href={props.href} target="_blank" className={classes}>
      {props.children}
    </a>
  );
};

export default SocialLink;
