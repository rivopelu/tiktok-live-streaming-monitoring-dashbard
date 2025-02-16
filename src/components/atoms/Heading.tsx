export function Heading(props: IProps) {
  return <div className={'text-3xl'}>{props.text}</div>;
}

export interface IProps {
  text: string;
}
