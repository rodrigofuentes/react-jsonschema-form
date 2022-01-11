import React from "react";
import { CheckboxGroup, Checkbox, FormLabel } from "@chakra-ui/react";
import { WidgetProps } from "@rjsf/core";

// const selectValue = (value, selected, all) => {
//   const at = all.indexOf(value);
//   const updated = selected.slice(0, at).concat(value, selected.slice(at));

//   // As inserting values at predefined index positions doesn't work with empty
//   // arrays, we need to reorder the updated selection to match the initial order
//   return updated.sort((a, b) => all.indexOf(a) > all.indexOf(b));
// };

// const deselectValue = (value, selected) => {
//   return selected.filter((v) => v !== value);
// };

const CheckboxesWidget = ({
                            id,
                            disabled,
                            options,
                            value,
                            readonly,
                            onChange,
                            onBlur,
                            onFocus,
                          }: WidgetProps) => {
  const { enumOptions, enumDisabled } = options;

  // const _onChange = option => ({ target: { checked } }) => {
  //   const all = enumOptions.map(({ value }) => value)

  //   if (checked) {
  //     onChange(selectValue(option.value, value, all))
  //   } else {
  //     onChange(deselectValue(option.value, value))
  //   }
  // }

  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement | any>) => onBlur(id, value);
  const _onFocus = ({ target: { value } }: React.FocusEvent<HTMLInputElement | any>) => onFocus(id, value);

  return (
    <CheckboxGroup onChange={(option) => onChange(option)}>
      {(enumOptions as any).map((option: { value: any; label: any; }, index: any) => {
        const checked = value.indexOf(option.value) !== -1;
        const itemDisabled =
          enumDisabled && (enumDisabled as string[]).indexOf(option.value) !== -1;
        return (
          <Checkbox
            key={`${id}_${index}`}
            id={`${id}_${index}`}
            value={option.value}
            isChecked={checked}
            isDisabled={disabled || itemDisabled || readonly}
            onBlur={_onBlur}
            onFocus={_onFocus}
          >
            <FormLabel
              htmlFor={`${id}_${index}`}
            >
              {option.label}
            </FormLabel>
          </Checkbox>
        );
      })}
    </CheckboxGroup>
  );
};

export default CheckboxesWidget;