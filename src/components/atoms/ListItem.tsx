export function ListItem(props: IProps) {
  return (
    <button className="list-item-sidebar p-4 w-full text-start cursor-pointer active:bg-primary-main/10 hover:bg-primary-main/30 duration-200 border-b">
      <div className="text">{props.label}</div>
    </button>
  );
}

interface IProps {
  label: string;
}
