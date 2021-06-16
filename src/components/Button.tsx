import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
  children: React.ReactNode;
}

export function Button({ children, ...rest }: ButtonProps): JSX.Element {
  return (
    <ChakraButton
      maxW="450px"
      w="100%"
      borderRadius="20px"
      h="60px"
      bg="main.green"
      _hover={{
        bg: 'main.lightGreen',
      }}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
}