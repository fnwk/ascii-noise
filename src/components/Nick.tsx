import { useEffect } from "react";
import styled from "styled-components";

const Nick = () => {
  const FnwkASCII = [
    "FFFFFFFFFFFFFFFFFFFFFF                                                       kkkkkkkk           ",
    "F::::::::::::::::::::F                                                       k::::::k           ",
    "F::::::::::::::::::::F                                                       k::::::k           ",
    "FF::::::FFFFFFFFF::::F                                                       k::::::k           ",
    "  F:::::F       FFFFFFnnnn  nnnnnnnn wwwwwww           wwwww           wwwwwwwk:::::k    kkkkkkk",
    "  F:::::F             n:::nn::::::::nnw:::::w         w:::::w         w:::::w k:::::k   k:::::k ",
    "  F::::::FFFFFFFFFF   n::::::::::::::nnw:::::w       w:::::::w       w:::::w  k:::::k  k:::::k  ",
    "  F:::::::::::::::F   nn:::::::::::::::nw:::::w     w:::::::::w     w:::::w   k:::::k k:::::k   ",
    "  F:::::::::::::::F     n:::::nnnn:::::n w:::::w   w:::::w:::::w   w:::::w    k::::::k:::::k    ",
    "  F::::::FFFFFFFFFF     n::::n    n::::n  w:::::w w:::::w w:::::w w:::::w     k:::::::::::k     ",
    "  F:::::F               n::::n    n::::n   w:::::w:::::w   w:::::w:::::w      k:::::::::::k     ",
    "  F:::::F               n::::n    n::::n    w:::::::::w     w:::::::::w       k::::::k:::::k    ",
    "FF:::::::FF             n::::n    n::::n     w:::::::w       w:::::::w       k::::::k k:::::k   ",
    "F::::::::FF             n::::n    n::::n      w:::::w         w:::::w        k::::::k  k:::::k  ",
    "F::::::::FF             n::::n    n::::n       w:::w           w:::w         k::::::k   k:::::k ",
    "FFFFFFFFFFF             nnnnnn    nnnnnn        www             www          kkkkkkkk    kkkkkkk",
  ];

  useEffect(() => {
    FnwkASCII.forEach((row) => {
      console.log(row.length);
    });
  }, []);

  return (
    <NickStyled>
      {FnwkASCII.map((row) => (
        <p>{row.replace(/ /g, "\u00A0")}</p>
      ))}
    </NickStyled>
  );
};

const NickStyled = styled.div`
  p {
    font-size: 8px;
    font-weight: 900;
    color: white;
  }
`;

export default Nick;
