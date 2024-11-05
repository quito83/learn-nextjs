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
import { Upload } from "lucide-react";

const UploadPDF = () => {
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
