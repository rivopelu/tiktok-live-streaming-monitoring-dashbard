import { t } from 'i18next';
import { Card, CardBody } from '../../../../components/atoms/Card';
import { Heading } from '../../../../components/atoms/Heading';
import { InputText } from '../../../../components/atoms/InputText';
import { Divider } from '../../../../components/atoms/Divider';
import { Button } from '../../../../components/atoms/Button';
import { CheckBox } from '../../../../components/atoms/CheckBox';

export function SignUpPage() {
  return (
    <div className="h-screen relative w-screen flex items-center justify-center">
      <div className="relative z-10">
        <Card>
          <CardBody>
            <Heading text={t('sign_up')} />
            <p>{t('insert_your_information_for_sign_up')}</p>
          </CardBody>
          <Divider />
          <CardBody className="grid gap-4 w-xl">
            <InputText id="name" name="name" label={t('name')} placeholder={t('insert_your_name')} required />
            <InputText
              id="email"
              name="email"
              label={t('email')}
              placeholder={t('insert_your_email_address')}
              required
            />
            <InputText
              id="tiktok_username"
              name="tiktok_username"
              label={t('tiktok_username')}
              placeholder={t('insert_tiktok_username')}
              required
            />
            <InputText
              id="password"
              name="password"
              label={t('password')}
              placeholder={t('insert_password')}
              required
            />
            <InputText
              id="password"
              name="password"
              label={t('password')}
              placeholder={t('insert_password')}
              required
            />
            <CheckBox label={t('show_password')} />
            <Button className="uppercase">{t('sign_up')}</Button>
          </CardBody>
        </Card>
      </div>
      <div className="fixed top-0 left-0 w-screen h-1/2 z-0 p-4">
        <div className="w-full bg-primary-main h-full rounded-lg border-2"></div>
      </div>
    </div>
  );
}
