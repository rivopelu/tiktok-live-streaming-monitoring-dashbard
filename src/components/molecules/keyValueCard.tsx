import { Card, CardBody } from '../atoms/Card.tsx';
import { Skeleton } from '../atoms/Skeleton.tsx';

export function KeyValueCard(props: IProps) {
  return (
    <Card>
      <CardBody className={'flex flex-col h-full justify-between'}>
        {props.loading ? <Skeleton className={'mb-4 h-4'} /> : <div className={'mb-2'}>{props.label}</div>}
        {props.loading ? (
          <Skeleton className={'w-32 h-6'} />
        ) : (
          <div className={'font-semibold text-2xl'}>{props.value}</div>
        )}
      </CardBody>
    </Card>
  );
}

interface IProps {
  label: string;
  value: string;
  loading?: boolean;
}
