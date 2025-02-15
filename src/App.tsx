import { Card, CardBody } from './components/Card.tsx';
import { Divider } from './components/Divider.tsx';
import { InputText } from './components/InputText.tsx';
import { MdPerson } from 'react-icons/md';
import { Button } from './components/Button.tsx';

function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="grid   max-w-3xl w-full">
        <Card>
          <CardBody>
            <div>HELLO</div>
          </CardBody>
          <Divider />
          <CardBody className={'grid gap-4 grid-cols-2 '}>
            <InputText label={'label'} required placeholder={'this is placeholder'} id={'text'} />
            <InputText
              label={'start'}
              required
              placeholder={'this is placeholder start'}
              id={'start'}
              startIcon={<MdPerson />}
            />
            <InputText
              label={'start'}
              required
              placeholder={'this is placeholder start'}
              id={'start'}
              endIcon={<MdPerson />}
            />
            <InputText
              label={'start'}
              required
              placeholder={'this is placeholder start'}
              id={'start'}
              endIcon={<MdPerson />}
              startIcon={<MdPerson />}
            />
            <InputText
              label={'start'}
              required
              helperText={'this is helper text'}
              placeholder={'this is placeholder start'}
              id={'start'}
              endIcon={<MdPerson />}
              startIcon={<MdPerson />}
            />
            <InputText
              label={'start'}
              required
              errorMessage={'this is error message'}
              helperText={'this is helper text'}
              placeholder={'this is placeholder start'}
              id={'start'}
              endIcon={<MdPerson />}
              startIcon={<MdPerson />}
            />
            <Button>HELLO</Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default App;
