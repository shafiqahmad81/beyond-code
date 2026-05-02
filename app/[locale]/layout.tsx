export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  console.log("locale --", params.locale);

  return <>{children}</>;
}