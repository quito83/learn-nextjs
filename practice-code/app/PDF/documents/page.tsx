import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { File, Pencil, Trash2, Upload } from "lucide-react";
import UploadPDF from "@/app/components/UploadPDF";

export const metadata: Metadata = {
  title: "Documents 🔎",
  description: "Cargar PDF",
};

export default function Documents() {
  const documents = [
    { fileName: "Nene.pdf", fileSize: "1 MB", createdAt: "7 sec ago" },
    { fileName: "Pa.pdf", fileSize: "2 MB", createdAt: "1 century ago" },
    { fileName: "User_Manual.pdf", fileSize: "1 MB", createdAt: "2 days ago" },
    { fileName: "Pepe.pdf", fileSize: "8 MB", createdAt: "7 days ago" },
    {
      fileName: "Vamos_por_todo.pdf",
      fileSize: "51 MB",
      createdAt: "2 weeks ago",
    },
  ];

  return (
    <section>
      <div className="m-20">
        <div className="flex  items-center justify-between mb-4">
          <h1> Documents </h1>
          <br />
          <UploadPDF></UploadPDF>
        </div>
        <div className="bg-white rounded shadow w-full overflow-x-scroll">
          <table className="min-w-full">
            <tbody>
              {documents.map((d, index) => (
                <tr
                  key={index}
                  className={
                    index === documents.length - 1
                      ? ""
                      : "border-b border-gray-200"
                  }
                >
                  <td className="p-4 text-left flex items-center">
                    <File></File>
                    <Link href={"/"}>
                      <span>{d.fileName}</span>
                    </Link>
                  </td>
                  <td className="p-4 text-right text-sm text-gray-500 whitespace-nowrap w-20">
                    {d.fileSize}
                  </td>
                  <td className="p-4 text-right text-sm text-gray-500 whitespace-nowrap w-20">
                    {d.createdAt}
                  </td>
                  <td className="p-4 text-right  w-4">
                    <Pencil
                      className="w-4 h-4 cursor-pointer"
                      style={{ strokeWidth: "3" }}
                    ></Pencil>
                  </td>
                  <td className="p-4 text-right  w-4">
                    <Trash2
                      className="w-4 h-4 cursor-pointer"
                      style={{ strokeWidth: "3" }}
                    ></Trash2>
                  </td>
                  <td className="p-4 text-right  w-4">
                    <Pencil
                      className="w-4 h-4 cursor-pointer"
                      style={{ strokeWidth: "3" }}
                    ></Pencil>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className="bg-slate-500">
          <Link href={"/"}> Go to HOME</Link>
        </div>
      </div>
    </section>
  );
}
