import React, {
  SelectHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Content, Error } from './styles';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  firstOption: string;
  options: Array<{
    value: string | number;
    label: string;
  }>;
  icon?: React.ComponentType<IconBaseProps>;
}
const Select: React.FC<Props> = ({
  icon: Icon,
  firstOption,
  label,
  name,
  options,
  ...rest
}) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const { fieldName, error, defaultValue, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleSelectFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleSelectBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!selectRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <Content isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
        {Icon && <Icon size={20} />}
        <select
          defaultValue={defaultValue}
          ref={selectRef}
          onFocus={handleSelectFocus}
          onBlur={handleSelectBlur}
          id={name}
          {...rest}
        >
          <option value="" disabled hidden>
            {firstOption}
          </option>
          {options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
        {error && (
          <Error title={error}>
            <FiAlertCircle />
          </Error>
        )}
      </Content>
    </Container>
  );
};

export default Select;
