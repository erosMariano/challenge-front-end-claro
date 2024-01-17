import './styles.scss';

interface HeaderProps {
  title: string;
  subtitle: string;
}
function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
}

export default Header;
