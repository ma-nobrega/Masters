import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Content, Error } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}
const Input: React.FC<Props> = ({ icon: Icon, label, name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <Content isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
        {Icon && <Icon />}
        <input
          defaultValue={defaultValue}
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          id={name}
          {...rest}
        />
        {error && (
          <Error title={error}>
            <FiAlertCircle />
          </Error>
        )}
      </Content>
    </Container>
  );
};

export default Input;
