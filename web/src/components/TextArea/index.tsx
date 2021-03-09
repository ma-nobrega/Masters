import React, {
  TextareaHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Textarea } from './styles';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}
const TextArea: React.FC<Props> = ({ label, name, ...rest }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleTextAreaFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleTextAreaBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!textAreaRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <Textarea
        defaultValue={defaultValue}
        ref={textAreaRef}
        isErrored={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
        onFocus={handleTextAreaFocus}
        onBlur={handleTextAreaBlur}
        id={name}
        {...rest}
      />
      {error && (
        <div>
          {error}
          <FiAlertCircle />
        </div>
      )}
    </Container>
  );
};

export default TextArea;
