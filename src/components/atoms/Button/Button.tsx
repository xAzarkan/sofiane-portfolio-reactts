import "./Button.css";

interface ButtonProps {
  label: string;
  iconClassName: string;
  goTo: string;
  isDownload?: boolean;
}

const Button = ({ label, iconClassName, goTo, isDownload }: ButtonProps) => {
  return (
    <>
      <a
        href={goTo}
        className="button button--flex"
        {...(isDownload ? { download: true, target: "_blank" } : {})}
      >
        {label} <i className={iconClassName}></i>
      </a>
    </>
  );
};

export default Button;
