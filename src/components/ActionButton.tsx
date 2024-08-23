type Label = {
  label: string;
  func?: () => void;
};

export default function ActionButton(props:Label) {
  return <button onClick={props.func}>{props.label}</button>;
}
