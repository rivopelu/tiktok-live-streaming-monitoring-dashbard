import { Card, CardBody } from '../../../../components/atoms/Card.tsx';
import { Heading } from '../../../../components/atoms/Heading.tsx';
import { Divider } from '../../../../components/atoms/Divider.tsx';
import { InputText } from '../../../../components/atoms/InputText.tsx';
import { Grid } from '../../../../components/atoms/Grid.tsx';
import { Button } from '../../../../components/atoms/Button.tsx';
import { CheckBox } from '../../../../components/atoms/CheckBox.tsx';
import { useSignInPage } from './useSignInPage.ts';

export function SignInPage() {
  const page = useSignInPage();
  return (
    <div className={'grid lg:min-h-screen grid-cols-2'}>
      <div className={'h-full bg-primary-main'}></div>
      <div className={'w-full flex items-center flex-col py-10 justify-between'}>
        <h1>SIGN IN PAGE</h1>
        <Card className={'min-w-sm  '}>
          <CardBody>
            <Heading text={'Sign In'} />
          </CardBody>
          <Divider />
          <CardBody>
            <Grid gap={'md'}>
              <div>HELLO WORLD</div>
              <InputText id={'email'} type={'email'} label={'email'} placeholder={'insert email'} required />
              <InputText
                id={'password'}
                type={page.showPassword ? 'text' : 'password'}
                label={'password'}
                placeholder={'insert password'}
                required
              />
              <CheckBox onChange={page.setShowPassword} checked={page.showPassword} label={'show password'} />
              <Button>Sign In</Button>
            </Grid>
          </CardBody>
        </Card>
        <h1>SIGN IN PAGE</h1>
      </div>
    </div>
  );
}
