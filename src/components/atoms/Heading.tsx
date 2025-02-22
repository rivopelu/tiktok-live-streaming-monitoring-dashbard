export function Heading(props: IProps) {
  return <div className={'text-3xl capitalize'}>{props.text}</div>;
}

export interface IProps {
  text: string;
}
