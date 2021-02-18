import React, { TextareaHTMLAttributes } from 'react';

import { Container } from './styles';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}
const TextArea: React.FC<Props> = ({ label, name, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </Container>
  );
};

export default TextArea;
