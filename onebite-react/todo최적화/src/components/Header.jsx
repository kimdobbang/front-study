import "./Header.css";
export const Header = () => {
  return (
    <div>
      <header className="Header">
        <h3>오늘은📅</h3>
        <h1>{new Date().toDateString()}</h1>
      </header>
    </div>
  );
};
