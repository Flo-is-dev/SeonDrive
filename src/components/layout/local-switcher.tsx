"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import Select, { StylesConfig } from "react-select";
import styled from "styled-components";
import { useTranslations } from "next-intl";

interface OptionType {
  value: string;
  label: string;
}

const Div = styled.div`
  width: 160px;
  margin-left: auto;

  @media (max-width: 950px) {
    width: 106px;
  }
`;

const customStyles: StylesConfig<OptionType, false> = {
  control: (provided) => ({
    ...provided,
    padding: "2px 10px",
    borderRadius: "12px",
    border: "1px solid #CECECE",
    backgroundColor: "transparent !important",
    fontSize: "14px",
    fontFamily: "system-ui",
    letterSpacing: "1px",
    color: "#CECECE",
    cursor: "pointer",
  }),
  option: (provided, state) => ({
    ...provided,
    padding: "4px 10px",
    color: state.isSelected ? "white" : "black",
    backgroundColor: state.isSelected ? "#F4C6A4" : "#FFF7F4",
    cursor: "pointer",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
};

export default function LocalSwitcher() {
  const router = useRouter();
  const localActive = useLocale();
  const t = useTranslations("navigation");

  const options: OptionType[] = [
    { value: "en", label: "English" },
    { value: "fr", label: "Français" },
    { value: "kr", label: "한국어" },
    { value: "cn", label: "中文" },
  ];

  const handleChange = (selectedOption: OptionType | null) => {
    if (selectedOption) {
      // Utiliser window.location.pathname pour obtenir le chemin actuel
      const currentPath = window.location.pathname;
      // Remplacer le préfixe de langue en ajoutant la nouvelle langue
      const newPath = `/${selectedOption.value}${currentPath.substring(3)}`;
      router.replace(newPath);
    }
  };

  return (
    <Div>
      <Select<OptionType>
        instanceId="language-switcher"
        defaultValue={options.find((option) => option.value === localActive)}
        onChange={handleChange}
        options={options}
        styles={customStyles}
        autoFocus={false}
        aria-label={t("chooseLanguage")}
      />
    </Div>
  );
}
