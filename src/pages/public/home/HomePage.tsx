import { Button } from '../../../components/atoms/Button.tsx';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes/routes.ts';
import { useAuth } from '../../../providers/UseAuth.tsx';

export function HomePage() {
  const auth = useAuth();
  return (
    <div className={'flex min-h-screen items-center justify-center'}>
      <div className={'max-w-2xl'}>
        <div className="flex u">
          <h1>HOME PAGE</h1>
        </div>
        <div className={'flex items-center gap-3'}>
          <Link to={ROUTES.PUBLIC.SIGN_IN()}>
            <Button>SIGN IN</Button>
          </Link>
          {auth.user && (
            <Link to={ROUTES.PRIVATE.DASHBOARD()}>
              <Button>DASHBOARD</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
