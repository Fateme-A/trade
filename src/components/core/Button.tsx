
type TButtonProps = {
  label: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  className?: string;
}

export const Button = ({ label, onClick, href, disabled = false, className = '' }: TButtonProps) => {
  const commonClasses = `px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-25 ${className}`;

  if (href) {
    return (
      <a href={href} className={commonClasses} aria-disabled={disabled}>
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={commonClasses}>
      {label}
    </button>
  );
};

