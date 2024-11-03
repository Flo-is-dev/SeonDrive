import styled from "styled-components";
import { useTranslations } from "next-intl";

const Section = styled.section`
  min-height: 250px;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @media (max-width: 450px) {
    justify-content: center;
  }

  h3 {
    font-size: clamp(1.4rem, 3vw, 2.5rem);
  }
`;

const Form = styled.form`
  position: relative;
`;

const TextInput = styled.input`
  margin-top: 30px;
  border: 1px solid lightgray;
  padding: 10px 100px 10px 15px;
  border-radius: 8px;

  @media (max-width: 450px) {
    padding: 10px 40px 10px 15px;
  }

  &:focus-within {
    border-color: #5e8770;
    outline: none;
  }
`;

const SubmitInput = styled.input`
  position: absolute;
  top: 50%;
  right: 2%;
  background-color: var(--primary-green);
  color: white;
  font-weight: 300;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: var(--secondary-green);
  }
`;

const Subscribe = () => {
  const t = useTranslations("Subscribe");

  return (
    <Section>
      <h3>
        {t("sub1")} <br /> {t("sub2")}
      </h3>
      <Form action="php">
        <TextInput type="text" placeholder="exemple@gmail.com" />
        <SubmitInput type="submit" value={t("submit")} />
      </Form>
    </Section>
  );
};
export default Subscribe;
