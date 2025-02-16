import { Button } from '../../../components/Button.tsx';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes/routes.ts';

export function HomePage() {
  return (
    <div className={'flex min-h-screen items-center justify-center'}>
      <div className={'max-w-2xl'}>
        <h1>HOME PAGE</h1>
        <Link to={ROUTES.PUBLIC.SIGN_IN()}>
          <Button>SIGN IN</Button>
        </Link>
      </div>
    </div>
  );
}
