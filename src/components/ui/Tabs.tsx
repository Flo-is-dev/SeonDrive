import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface TabsProps {
  className?: string;
}

const tabsData = [
  {
    title: "Distance",
    txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates animi assumenda voluptatibus.",
  },

  {
    title: "Hourly",
    txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates animi assumenda voluptatibus.selectedTabsel ectedTabselectedTabselectedTabselectedT abselectedTabselectedTabselectedT abselectedTabselectedTab",
  },
];

const Tabs: React.FC<TabsProps> = ({ className }) => {
  const t = useTranslations("TabForm");

  const [selectedTab, setSelectedTab] = useState<number>(0);
  return (
    <div className={className}>
      <div className="tab-buttons">
        {tabsData.map((obj, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={selectedTab === index ? "active" : ""}
          >
            {tabsData[index].title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <div>
          <p>
            <strong>{t("pickUp")}</strong>
          </p>
          <input type="text" placeholder={t("pickUpTxt")} />
        </div>
        <div>
          <p>
            <strong>{t("dropOff")}</strong>
          </p>
          <input type="text" placeholder={t("dropOffTxt")} />
        </div>
        <div>
          <p>
            <strong>{t("pickUpDate")}</strong>
          </p>
          <input type="text" placeholder={t("pickUpDateTxt")} />
        </div>
        <div>
          <p>
            <strong>{t("pickUpDateTime")}</strong>
          </p>
          <input type="text" placeholder={t("pickUpDateTimeTxt")} />
        </div>

        <a href="">
          <Image
            src="/icons/calendar.png"
            width={30}
            height={30}
            alt="Picture of the author"
          />
          {t("input")}
        </a>
      </div>
    </div>
  );
};

export default Tabs;
