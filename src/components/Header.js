import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <div>Krisyam Portfolio</div>
      <div className='pageLinks'>
        <Link to={'/'}>
          About Me
        </Link>
        <Link to={'/skills'}>
          Skills
        </Link>
        <Link to={'/merch'}>
          Merch
        </Link>
        <Link to={'/aspirations'}>
          Bucket List
        </Link>
        <Link to={'/contactme'}>
          Contact Me
        </Link>
      </div>
    </header>
  );
}
