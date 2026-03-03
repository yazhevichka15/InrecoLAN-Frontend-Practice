import { Link } from 'react-router-dom';

export function FooterCatalog() {
  return (
    <div>
      <h3 className="text-footer-title">Каталог</h3>
      <ul className="text-footer-list">
        <li>
          <Link to="/catalog/lustry" className="hover:text-white">
            Люстры
          </Link>
        </li>
        <li>
          <Link to="/catalog/svetilniki" className="hover:text-white">
            Светильники
          </Link>
        </li>
        <li>
          <Link to="/catalog/tochnevye-svetilniki" className="hover:text-white">
            Точечные светильники
          </Link>
        </li>
        <li>
          <Link to="/catalog/bra" className="hover:text-white">
            Бра
          </Link>
        </li>
        <li>
          <Link to="/catalog/podsvetki" className="hover:text-white">
            Подсветки
          </Link>
        </li>
        <li>
          <Link to="/catalog/nastolnye-lampy" className="hover:text-white">
            Настольные лампы
          </Link>
        </li>
        <li>
          <Link to="/catalog/torshery" className="hover:text-white">
            Торшеры
          </Link>
        </li>
        <li>
          <Link to="/catalog/trekovye-sistemy" className="hover:text-white">
            Трековые системы
          </Link>
        </li>
        <li>
          <Link to="/catalog/nochniki" className="hover:text-white">
            Ночники
          </Link>
        </li>
        <li>
          <Link to="/catalog/ulichnye-svetilniki" className="hover:text-white">
            Уличные светильники
          </Link>
        </li>
        <li>
          <Link to="/catalog/komplektuyushchie" className="hover:text-white">
            Комплектующие
          </Link>
        </li>
      </ul>
    </div>
  );
}