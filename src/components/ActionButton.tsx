type Label = {
  label: string;
  func?: () => any;
};

export default function ActionButton(props:Label) {
  return <button onClick={props.func}>{props.label}</button>;
}
