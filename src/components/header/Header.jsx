
import './header.css'
export const Header = ({children}) => {
    return (
        <header className="header">
            <h1>{children}</h1>
        </header>
    )
}
