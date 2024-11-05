"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, UploadCloud } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const UploadPDF = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    const pdfFile = acceptedFiles[0];

    if (!pdfFile) {
      alert("Por favor solo cargar archivos PDF");
      return;
    }

    if (pdfFile.size > 10 * 1024 * 1024) {
      //bigger than 10 MB
      alert("Por favor solo cargar archivos menores a 10 MB");
      return;
    }

    console.log(pdfFile);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    multiple: false,
    onDrop,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Upload className="w-4 h-4 mr-2"></Upload>Cargar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cargar un archivo</DialogTitle>
        </DialogHeader>

        <form className="space-y-6">
          <div
            {...getRootProps({
              className:
                "border-dashed border-2 rounded-md cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col",
            })}
          >
            <input name="file" {...getInputProps()} />
            <UploadCloud className="w-10 h-10 text-[#ff612f]"></UploadCloud>
            <p>Arrastrar el archivo aqui ...</p>
          </div>
          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-200"> </div>
            <span className="flex-shrink mx-4 uppercase text-gray-600 text-xs">
              or
            </span>
            <div className="flex-grow border-t border-gray-200"> </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="url">Importar desde una URL</Label>
            <Input
              id="url "
              name="url"
              className="font-light"
              placeholder="https://cdn.open"
            ></Input>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button>Cargar</Button>
            <DialogTrigger asChild>
              <Button variant="orange">Cerrar</Button>
            </DialogTrigger>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UploadPDF;
