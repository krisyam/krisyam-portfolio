import { useLocation } from 'react-router-dom';
import { ExternalLinks } from './ExternalLinksComponent';

export function FooterComponent() {
  const location = useLocation().pathname;
  return (
    <footer style={{ display: location === '/' ? "none": ""}}>
      <div>
        Logo
      </div>
      <div>
        Contact Details
        <ul className='app-ul'>
          <li>Phone: 0945 348 3190 (temp)</li>
          <li>Email: kristian.ayam@gmail.com</li>
        </ul>
      </div>
      <div>
        Follow me
        <ExternalLinks />
      </div>
    </footer>
  );
}
