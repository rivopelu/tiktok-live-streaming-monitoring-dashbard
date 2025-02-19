import { Card, CardBody } from '../../../../components/atoms/Card.tsx';
import { Heading } from '../../../../components/atoms/Heading.tsx';
import { Divider } from '../../../../components/atoms/Divider.tsx';
import { InputText } from '../../../../components/atoms/InputText.tsx';
import { Grid } from '../../../../components/atoms/Grid.tsx';
import { Button } from '../../../../components/atoms/Button.tsx';
import { CheckBox } from '../../../../components/atoms/CheckBox.tsx';
import { useSignInPage } from './useSignInPage.ts';
import { t } from 'i18next';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../routes/routes.ts';

export function SignInPage() {
  const page = useSignInPage();
  const formik = page.formik;
  return (
    <div className={'grid lg:min-h-screen grid-cols-2'}>
      <div className={'h-full bg-primary-main'}></div>
      <div className={'w-full flex items-center flex-col py-10 justify-between'}>
        <h1>{t('sign_in')}</h1>
        <Card className={'min-w-sm  '}>
          <CardBody>
            <Heading text={t('sign_in')} />
          </CardBody>
          <Divider />
          <CardBody>
            <Grid gap={'md'}>
              <div className={'capitalize'}>{t('input_username_and_password_for_sign_in')}</div>
              <InputText
                id={'email'}
                type={'email'}
                label={t('email')}
                placeholder={t('insert_email')}
                required
                name={'email'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                errorMessage={formik.touched.email && formik.errors.email}
              />
              <InputText
                id={'password'}
                type={page.showPassword ? 'text' : 'password'}
                label={t('password')}
                placeholder={t('insert_password')}
                required
                name={'password'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                errorMessage={formik.touched.password && formik.errors.password}
              />
              <CheckBox onChange={page.setShowPassword} checked={page.showPassword} label={'show password'} />
              <Button loading={page.loading} onClick={() => formik.handleSubmit()}>
                {t('sign_in')}
              </Button>
              <div>
                {t('dont_have_account?')}{' '}
                <Link className="text-blue-700 hover:underline" to={ROUTES.PUBLIC.SIGN_UP()}>
                  {t('sign_up_here')}
                </Link>
              </div>
            </Grid>
          </CardBody>
        </Card>
        <h1>SIGN IN PAGE</h1>
      </div>
    </div>
  );
}
