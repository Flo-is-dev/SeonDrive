
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import Select from 'react-select';

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    padding: '2px 10px',
    borderRadius: '12px',
    border: '1px solid #CECECE',
    backgroundColor: 'black',
    fontSize: '14px',
    fontFamily: 'system-ui',
    letterSpacing: '1px',
    color: '#CECECE',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    padding: '4px 10px',
    color: state.isSelected ? 'white' : 'black',
    backgroundColor: state.isSelected ? '#F4C6A4' : '#FFF7F4',
    cursor: 'pointer',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: 'white',
  }),
};

export default function LocalSwitcher() {
  const router = useRouter();
  const localActive = useLocale();

  const options = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' },
    { value: 'kr', label: '한국어' },
    { value: 'cn', label: '中文' },
  ];

  const handleChange = (selectedOption: any) => {
    router.replace(`/${selectedOption.value}`);
  };

  return (
    <div style={{width:"160px",marginLeft:"auto"}}>
        <Select 
        instanceId="language-switcher"  // Ajoute un ID statique ici
        defaultValue={options.find(option => option.value === localActive)}
        onChange={handleChange}
        options={options}
        styles={customStyles}
        autoFocus={false}  // Désactive l'auto-focus
        />
    </div>
  );
}
