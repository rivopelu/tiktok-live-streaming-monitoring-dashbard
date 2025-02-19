import { t } from 'i18next';
import { Button } from '../../components/atoms/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export function NotFoundPage() {
  return (
    <div className="h-screen w-screen gap-10 flex items-center justify-center flex-col">
      <h1 className="capitalize text-4xl ">{t('page_not_found')}</h1>
      <Link to={ROUTES.PUBLIC.HOME()}>
        <Button className="uppercase">{t('back_to_home')}</Button>
      </Link>
    </div>
  );
}
