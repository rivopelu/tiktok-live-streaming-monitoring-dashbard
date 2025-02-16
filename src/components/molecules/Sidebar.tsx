import { BrandLogo } from '../atoms/BrandLogo';

export function Sidebar() {
  return (
    <div className="w-sidebar-width h-screen">
      <div className="fixed border-r-2 w-sidebar-width h-screen">
        <div className="h-top-bar-height flex items-center px-4 border-b-2">
          <BrandLogo />
        </div>
        <div className="px-4">
          <h1>LIST</h1>
        </div>
      </div>
    </div>
  );
}
