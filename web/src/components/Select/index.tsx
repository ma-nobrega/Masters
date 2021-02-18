import React, { SelectHTMLAttributes } from 'react';

import { Container } from './styles';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}
const Select: React.FC<Props> = ({ label, name, options, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest}>
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
    </Container>
  );
};

export default Select;
