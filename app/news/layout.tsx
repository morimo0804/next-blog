export const metadata = {
  title: "blog",
};

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function NewsLayout({ children }: Props) {
  return <>{children}</>;
}
