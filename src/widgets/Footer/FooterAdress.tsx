import { Link } from 'react-router-dom';

export function FooterAdress() {
  return (
    <div>
      <h3 className="text-footer-title">Навигация</h3>
      <ul className="text-footer-list">
        <li>
          <Link to="/" className="hover:text-white">
            Главная
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-white">
            О нас
          </Link>
        </li>
        <li>
          <Link to="/catalog" className="hover:text-white">
            Каталог
          </Link>
        </li>
        <li>
          <Link to="/reviews" className="hover:text-white">
            Отзывы
          </Link>
        </li>
        <li>
          <Link to="/contacts" className="hover:text-white">
            Контакты
          </Link>
        </li>
      </ul>
    </div>
  );
}