export default function PopupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="absolute z-50 w-full h-full flex align-center justify-center top-0 bg-zinc-950/25 ">
      {children}
    </div>
  );
}
