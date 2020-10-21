
const Header = () => {
  return (
    <div className="header-container">
      <header className="flex flex-row justify-between items-center">
        <img className="logo" src="/logo.png"/>
        <div className="menu-header">
          <ul className="menu-list flex flex-row space-x-4 text-3xl">
            <li>
              Youtube
            </li>
            <li>
              FB Gaming
            </li>
            <li>
              About
            </li>
            <li>
              Contact
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header;