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
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger ref={labelRef} className="input-style text-left">
        {labelValue}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-72 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        align="start"
        style={{ width: contentContainerWidth }}
      >
        {options.map((option, idx) => (
          <DropdownMenuItem
            key={idx}
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
