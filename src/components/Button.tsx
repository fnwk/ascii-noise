import { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  text: string;
  char: string;
  click: () => void;
}

const Button = ({ text, char, click }: Props) => {
  const [btnChar, setBtnChar] = useState(char);
  const [btnASCII, setBtnASCII] = useState<string[]>([]);

  useEffect(() => {
    for (let y = 0; y < 5; y++) {
      let row = "";
      for (let x = 0; x < text.length + 10; x++) {
        if (y === 0 || y === 4 || x <= 1 || x >= text.length + 8) {
          row += btnChar;
        } else if (y === 2 && x > 4 && x < text.length + 5) {
          row += text.charAt(x - 5);
        } else {
          row += "\u00A0";
        }
      }
      setBtnASCII((state) => [...state, row]);
    }

    return () => setBtnASCII([]);
  }, [btnChar]);

  const clickHandler = () => {
    setBtnChar(".");

    setTimeout(() => {
      setBtnChar(char);
      click();
    }, 300);
  };

  const mouseOverHandler = () => {
    if (btnChar === "~") {
      setBtnChar(char);
    } else if (btnChar !== ".") {
      setBtnChar("~");
    }
  };

  return (
    <ButtonStyled
      onClick={clickHandler}
      onMouseEnter={mouseOverHandler}
      onMouseLeave={mouseOverHandler}
    >
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
  margin-block: 3px;

  p {
    color: white;
  }
`;
