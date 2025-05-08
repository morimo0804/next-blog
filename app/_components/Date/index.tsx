import { formatDate } from "@/app/_libs/utils";

type Props = {
  date: string;
};

export default function Date({ date }: Props) {
  return <>{formatDate(date)}</>;
}
