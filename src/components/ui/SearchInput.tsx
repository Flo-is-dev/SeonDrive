import styled from "styled-components";
import { useTranslations } from "next-intl";
import Btn from "../ui/Btn";
import { FaSearch } from "react-icons/fa";

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  @media (max-width: 550px) {
    flex: 1;
  }
`;

const InputSearch = styled.input`
  min-width: 300px;
  width: 30vw;
  border-radius: 30px;
  padding: 14px 20px;
  padding-left: 4rem;
  font-size: 1.1rem;
  border: none;

  @media (max-width: 550px) {
    min-width: 100px;
    width: 100%;
  }

  :focus {
    outline: none;
  }
`;

const Icon = styled(FaSearch)`
  position: absolute;
  left: 20px;
  color: #888;
  font-size: 1.2rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 20px;
  @media (max-width: 550px) {
    width: 100%;
  }
`;

const SearchInput = () => {
  const t = useTranslations("blogpage");

  return (
    <Container>
      <InputContainer>
        <Icon />
        <InputSearch type="text" placeholder={t("searchInput")} />
      </InputContainer>
      <Btn link={"/"} content={t("btnSearch")} />
    </Container>
  );
};

export default SearchInput;
