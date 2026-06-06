type Logo8bitProps = {
  className?: string;
};

export default function Logo8bit({ className = "mxd-logo__image" }: Logo8bitProps) {
  return (
    <>
      <img
        src="/logos/gibson-logo-secondary.svg"
        className={`${className} logo-dark`}
        alt=""
        aria-hidden="true"
      />
      <img
        src="/logos/gibson-logo-primary.svg"
        className={`${className} logo-light`}
        alt=""
        aria-hidden="true"
      />
    </>
  );
}
