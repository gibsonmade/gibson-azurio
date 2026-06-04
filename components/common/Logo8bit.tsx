type Logo8bitProps = {
  className?: string;
};

export default function Logo8bit({ className = "mxd-logo__image" }: Logo8bitProps) {
  return (
    <>
      <img
        src="/img-temp/uploads/gibson-logo-2.svg"
        className={`${className} logo-dark`}
        alt=""
        aria-hidden="true"
      />
      <img
        src="/img-temp/uploads/gibson-logo-1.svg"
        className={`${className} logo-light`}
        alt=""
        aria-hidden="true"
      />
    </>
  );
}
