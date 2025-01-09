import { useEffect, useRef, useState } from "react";
import { FieldError } from "react-hook-form";
//
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./dropdown-menu";
import { cn } from "../utils";

type OptionType = string | number;
interface SelectDropdownProps {
  label?: string;
  options: { label: string; value: OptionType }[];

  onChange?: (value: OptionType) => void;
}
export function SelectDropdown({
  label = "Select an option...",
  options,
  onChange
}: SelectDropdownProps) {
  const labelRef = useRef<HTMLButtonElement>(null);
  const [labelValue, setLabelValue] = useState(label);
  const [contentContainerWidth, setContentContainerWidth] = useState<
    number | undefined
  >();

  useEffect(() => {
    if (labelRef.current) {
      setContentContainerWidth(labelRef.current.clientWidth);
    }
  }, [labelRef]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        ref={labelRef}
        className="w-full p-2 border rounded text-left text-gray-600"
      >
        {labelValue}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-72"
        align="start"
        style={{ width: contentContainerWidth }}
      >
        {options.map((option) => (
          <DropdownMenuItem
            onClick={() => {
              setLabelValue(option.label);
              onChange?.(option.value);
            }}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function FormError({
  className,
  fieldError
}: {
  className?: string;
  fieldError?: FieldError;
}) {
  return (
    <span
      className={cn(
        "text-red-500 text-sm ml-0.5 select-none",
        className,
        fieldError ? "block" : "hidden"
      )}
    >
      *{fieldError?.message}
    </span>
  );
}
