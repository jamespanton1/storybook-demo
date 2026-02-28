"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { Popover as PopoverPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type ComboboxOption = {
  label: string
  value: string
  disabled?: boolean
}

type ComboboxProps = Omit<React.ComponentProps<"button">, "value" | "defaultValue" | "onChange"> & {
  options: ComboboxOption[]
  value?: string
  defaultValue?: string
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  onValueChange?: (value: string) => void
}

function Combobox({
  options,
  value,
  defaultValue,
  placeholder = "Select an option",
  searchPlaceholder = "Search...",
  emptyMessage = "No options found.",
  onValueChange,
  className,
  disabled,
  ...props
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? "")

  const selectedValue = value ?? internalValue

  const selectedOption = React.useMemo(
    () => options.find((option) => option.value === selectedValue),
    [options, selectedValue]
  )

  const filteredOptions = React.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return options
    }

    return options.filter((option) => {
      const label = option.label.toLowerCase()
      const optionValue = option.value.toLowerCase()
      return label.includes(normalizedQuery) || optionValue.includes(normalizedQuery)
    })
  }, [options, query])

  function handleSelect(nextValue: string) {
    if (value === undefined) {
      setInternalValue(nextValue)
    }
    onValueChange?.(nextValue)
    setOpen(false)
    setQuery("")
  }

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between font-normal", className)}
          disabled={disabled}
          {...props}
        >
          <span className={cn("truncate", !selectedOption && "text-muted-foreground")}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronsUpDown className="size-4 shrink-0 opacity-50" aria-hidden="true" />
        </Button>
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align="start"
          sideOffset={4}
          className="bg-popover text-popover-foreground border-border z-50 w-(--radix-popover-trigger-width) rounded-md border p-2 shadow-md outline-none"
        >
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={searchPlaceholder}
            className="mb-2"
          />
          <div className="max-h-64 overflow-auto">
            {filteredOptions.length === 0 ? (
              <p className="text-muted-foreground px-2 py-4 text-sm">{emptyMessage}</p>
            ) : (
              <ul role="listbox" className="space-y-1">
                {filteredOptions.map((option) => {
                  const isSelected = option.value === selectedValue

                  return (
                    <li key={option.value}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        className={cn(
                          "hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left text-sm outline-none disabled:pointer-events-none disabled:opacity-50",
                          isSelected && "bg-accent text-accent-foreground"
                        )}
                        onClick={() => handleSelect(option.value)}
                        disabled={option.disabled}
                      >
                        <Check
                          className={cn(
                            "size-4 shrink-0",
                            isSelected ? "opacity-100" : "opacity-0"
                          )}
                          aria-hidden="true"
                        />
                        <span className="truncate">{option.label}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}

export { Combobox }
export type { ComboboxOption, ComboboxProps }
