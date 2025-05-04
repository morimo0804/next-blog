type Props = {
  date: string;
};

export default function Date({ date }: Props) {
  return <dd className="text-sm">{date}</dd>;
}
