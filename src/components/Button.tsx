import { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  text: string;
  char: string;
  click: () => void;
}

const Button = ({ text, char, click }: Props) => {
  const [btnASCII, setBtnASCII] = useState<string[]>([]);

  useEffect(() => {
    for (let y = 0; y < 5; y++) {
      let row = "";
      for (let x = 0; x < text.length + 10; x++) {
        if (y === 0 || y === 4 || x <= 1 || x >= text.length + 8) {
          row += char;
        } else if (y === 2 && x > 4 && x < text.length + 5) {
          row += text.charAt(x - 5);
        } else {
          row += "\u00A0";
        }
      }
      setBtnASCII((state) => [...state, row]);
    }

    return () => setBtnASCII([]);
  }, []);

  return (
    <ButtonStyled onClick={click}>
      {btnASCII.map((row) => (
        <p>{row}</p>
      ))}
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.button`
  display: flex;
  flex-direction: column;
  background: #05012a;
  border: none;
  cursor: pointer;

  p {
    color: white;
  }
`;
