// import React from "react";

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger
// } from "./dialog";

// interface Props {
//   open: boolean;
//   setOpen: (value: boolean) => void;
// }

// export function UpdateTask({ open, setOpen }: Props) {
//   return (
//     <>
//     <DialogExtract open={open} onOpenChange={setOpen} />
//     </>
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Edit Task</DialogTitle>
//         </DialogHeader>
//         <div className="grid gap-4 py-4">
//           <div className="grid grid-cols-4 items-center gap-4">
//             <label htmlFor="name" className="text-right">
//               Name
//             </label>
//             <input id="name" value="Pedro Duarte" className="col-span-3" />
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <label htmlFor="username" className="text-right">
//               Username
//             </label>
//             <input id="username" value="@peduarte" className="col-span-3" />
//           </div>
//         </div>
//         <DialogFooter>
//           <button type="submit">Save changes</button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }
