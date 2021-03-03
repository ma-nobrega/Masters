import React, { SelectHTMLAttributes, useCallback, useState } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, Content } from './styles';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  icon?: React.ComponentType<IconBaseProps>;
}
const Select: React.FC<Props> = ({
  icon: Icon,
  label,
  name,
  options,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <Content isFocused={isFocused}>
        {Icon && <Icon size={20} />}
        <select
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          id={name}
          {...rest}
        >
          <option value="" disabled selected hidden>
            Selecione uma opção
          </option>
          {options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </Content>
    </Container>
  );
};

export default Select;
