import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documents 🔎",
  description: "Cargar PDF",
};

export default function Documents() {
  return (
    <div>
      <div> Documents </div>
      <br />
      <div className="bg-slate-500">
        <Link href={"/"}> Go to HOME</Link>
      </div>
    </div>
  );
}
