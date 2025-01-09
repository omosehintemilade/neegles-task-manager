import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "./__dialog";
import { cn } from "../utils";
import clsx from "clsx";

interface Props {
  open: boolean;
  title: React.ReactNode;
  body: React.ReactNode;

  actionButtons?: {
    primary?: {
      className?: string;
      text?: string;
      onClick?: () => void;
    };
    secondary?: {
      className?: string;
      text?: string;
      onClick?: () => void;
    };
  };

  onOpenChange: (value: boolean) => void;
}

export function DialogExtract({
  open,
  title,
  body,
  actionButtons,
  onOpenChange
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {body}
        <DialogFooter>
          <button
            type="button"
            className={cn(
              "rounded px-4 py-2 text-white bg-red-500",
              actionButtons?.secondary?.className
            )}
            onClick={actionButtons?.secondary?.onClick}
          >
            {actionButtons?.secondary?.text || "Cancel"}
          </button>

          <button
            type="button"
            onClick={actionButtons?.primary?.onClick}
            className={cn(
              "rounded px-4 py-2 text-white bg-black",
              actionButtons?.primary?.className
            )}
          >
            {actionButtons?.primary?.text || "Continue"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
