import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  padding: 1.25rem;
  padding-top: 0.75rem;

  display: flex;
  flex-direction: column-reverse;
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
`;

export const CmdNotFound = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 1rem;
`;

export const Empty = styled.div`
  margin-bottom: 0.25rem;
`;

export const MobileSpan = styled.span`
  line-height: 1.5rem;
  margin-right: 0.75rem;

  @media (min-width: 550px) {
    display: none;
  }
`;

export const MobileBr = styled.br`
  @media (min-width: 550px) {
    display: none;
  }
`;

export const Form = styled.form`
  @media (min-width: 550px) {
    display: flex;
  }
`;

// Hide the native caret and make input monospace
export const Input = styled.input`
  flex-grow: 1;
  font-family: monospace;
  font-size: 1rem;
  background: transparent;
  border: none;
  outline: none;
  color: inherit;
  /* Hide native caret */
  caret-color: transparent;

  /* Hide text selection highlight (optional, looks cleaner) */
  ::selection {
    background: transparent;
  }

  @media (max-width: 550px) {
    min-width: 85%;
  }
`;

export const Hints = styled.span`
  margin-right: 0.875rem;
`;

// Blinking animation for cursor
const blink = keyframes`
  0%, 50% { opacity: 1; }
  50.1%, 100% { opacity: 0; }
`;

export const Cursor = styled.span`
  font-family: monospace;
  font-size: 1rem;
  animation: ${blink} 1s step-start infinite;
`;