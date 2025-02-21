import { BrandLogo } from '../atoms/BrandLogo';
import { ListItem } from '../atoms/ListItem';
import { useData } from '../../hooks/useData.ts';
import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <div className="w-sidebar-width h-screen">
      <div className="fixed border-r-2 w-sidebar-width h-screen bg-white">
        <div className="h-top-bar-height flex items-center px-4 ">
          <BrandLogo />
        </div>
        <div>
          <div>
            {useData().listSidebar.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link key={i} to={item.route}>
                  <ListItem icon={<Icon />} label={item.label} key={i} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
