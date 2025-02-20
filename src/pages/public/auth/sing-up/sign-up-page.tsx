import { t } from 'i18next';
import { Card, CardBody } from '../../../../components/atoms/Card';
import { Heading } from '../../../../components/atoms/Heading';
import { InputText } from '../../../../components/atoms/InputText';
import { Divider } from '../../../../components/atoms/Divider';
import { Button } from '../../../../components/atoms/Button';
import { CheckBox } from '../../../../components/atoms/CheckBox';
import { useSignUpPage } from './use-sign-up-page';

export function SignUpPage() {
  const page = useSignUpPage();
  const formik = page.formik;
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
            <InputText
              id="name"
              name="name"
              label={t('name')}
              placeholder={t('insert_your_name')}
              required
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.touched.name && formik.errors.name}
            />
            <InputText
              id="email"
              name="email"
              label={t('email')}
              placeholder={t('insert_your_email_address')}
              required
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.touched.email && formik.errors.email}
            />
            <InputText
              id="tiktok_username"
              name="tiktok_username"
              label={t('tiktok_username')}
              placeholder={t('insert_tiktok_username')}
              required
              value={formik.values.tiktok_username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.touched.tiktok_username && formik.errors.tiktok_username}
            />
            <InputText
              id="password"
              name="password"
              label={t('password')}
              placeholder={t('insert_password')}
              required
              type={page.showPassword ? 'text' : 'password'}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.touched.password && formik.errors.password}
            />
            <InputText
              id="confirmation_password"
              name="confirmation_password"
              label={t('confirmation_password')}
              placeholder={t('insert_password')}
              type={page.showPassword ? 'text' : 'password'}
              required
              value={formik.values.confirmation_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.touched.confirmation_password && formik.errors.confirmation_password}
            />
            <CheckBox
              onChange={(e) => page.setShowPassword(e)}
              checked={page.showPassword}
              label={t('show_password')}
            />
            <Button loading={page.loading} onClick={() => formik.handleSubmit()} className="uppercase">
              {t('sign_up')}
            </Button>
          </CardBody>
        </Card>
      </div>
      <div className="fixed top-0 left-0 w-screen h-1/2 z-0 p-4">
        <div className="w-full bg-primary-main h-full rounded-lg border-2"></div>
      </div>
    </div>
  );
}
