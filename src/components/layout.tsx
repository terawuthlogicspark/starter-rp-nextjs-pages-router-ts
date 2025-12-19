import { type PropsWithChildren } from "react";
import { LazyAppProviders } from "./LazyAppProviders";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <LazyAppProviders licenseKey="your-license-key">
        <main>{children}</main>
      </LazyAppProviders>
    </>
  );
}
