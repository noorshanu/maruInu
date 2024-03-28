function Title({ children, className }) {
  return (
    <h1
      className={`  uppercase ${className}`}
    >
      {children}
    </h1>
  );
}

export default Title;
