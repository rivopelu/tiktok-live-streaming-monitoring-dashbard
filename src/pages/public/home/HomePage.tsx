import { Button } from '../../../components/atoms/Button.tsx';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes/routes.ts';

export function HomePage() {
  return (
    <div className={'flex min-h-screen items-center justify-center'}>
      <div className={'max-w-2xl'}>
        <div className="flex u">
          <h1>HOME PAGE</h1>
        </div>
        <Link to={ROUTES.PUBLIC.SIGN_IN()}>
          <Button>SIGN IN</Button>
        </Link>
      </div>
    </div>
  );
}
