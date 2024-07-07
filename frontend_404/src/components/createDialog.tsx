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
import { useState } from "react";

export function CreateDialog({ onCreate }: { onCreate: any }) {
  const [inputs, setInputs] = useState({
    company: "",
    course: "",
    courseFee: "",
    delegates: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    onCreate(inputs);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Booking</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="company" className="text-right">
              Company Name
            </Label>
            <Input
              id="company"
              name="company"
              className="col-span-3"
              onChange={(e) => {
                setInputs({ ...inputs, company: e.target.value });
              }}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="course" className="text-right">
              Course Name
            </Label>
            <Input
              id="course"
              name="course"
              className="col-span-3"
              onChange={(e) => {
                setInputs({ ...inputs, course: e.target.value });
              }}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="courseFee" className="text-right">
              Course Fee
            </Label>
            <Input
              id="courseFee"
              name="courseFee"
              className="col-span-3"
              onChange={(e) => {
                setInputs({ ...inputs, courseFee: e.target.value });
              }}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="delegates" className="text-right">
              Delegates
            </Label>
            <Input
              id="delegates"
              name="delegates"
              className="col-span-3"
              onChange={(e) => {
                setInputs({ ...inputs, delegates: e.target.value });
              }}
            />
          </div>

          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
