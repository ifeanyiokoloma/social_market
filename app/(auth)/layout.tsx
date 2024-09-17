import "@/app/globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="container mx-auto">{children}</main>;
}
