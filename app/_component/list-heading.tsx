type Props = {
  text: string;
};

export default function ListHeading({ text }: Props) {
  return <h2 className="font-bold text-2xl">{text}</h2>;
}
