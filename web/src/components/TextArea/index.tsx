import React, { TextareaHTMLAttributes, useCallback, useState } from 'react';

import { Container, Textarea } from './styles';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}
const TextArea: React.FC<Props> = ({ label, name, ...rest }) => {
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
      <Textarea
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        id={name}
        {...rest}
      />
    </Container>
  );
};

export default TextArea;
