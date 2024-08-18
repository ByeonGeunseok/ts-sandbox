type Label = {
  label: string;
  func?: () => void;
};

export default function ActionButton({ label, func }: Label) {
  return <button onClick={func}>{label}</button>;
}
