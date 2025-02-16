import { BrandLogo } from '../atoms/BrandLogo';
import { ListItem } from '../atoms/ListItem';

export function Sidebar() {
  return (
    <div className="w-sidebar-width h-screen">
      <div className="fixed border-r-2 w-sidebar-width h-screen">
        <div className="h-top-bar-height flex items-center px-4 border-b-2">
          <BrandLogo />
        </div>
        <div>
          <div>
            {Array.from({ length: 5 }).map((_, i) => (
              <ListItem label={`ITEM SIDE ${i}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
