import { useState } from 'react';
import Image from "next/image";

interface TabsProps {
  className?: string;
}

const tabsData = [
  {title: "Distance",
    txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates animi assumenda voluptatibus."
  },
 
  {title: "Hourly",
    txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates animi assumenda voluptatibus.selectedTabsel ectedTabselectedTabselectedTabselectedT abselectedTabselectedTabselectedT abselectedTabselectedTab"
  }
];

const Tabs: React.FC<TabsProps> = ({ className }) => {
  const [selectedTab, setSelectedTab] = useState<number>(0); 
  return (
    <div className={className}>
      <div className="tab-buttons">
        {tabsData.map((obj, index) => (
          <button key={index} onClick={() => setSelectedTab(index)}  className={selectedTab === index ? "active" : ""}>
            {tabsData[index].title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <div>
            <p>
                <strong>Pick Up Address</strong>
            </p>
            <input type="text" placeholder='From: address, airport, hotel...' />
        </div>
        <div>
            <p>
                <strong>Drop Off Address</strong>
            </p>
            <input type="text" placeholder='Distance hourly, Flat Rate' />
        </div>
        <div>
            <p>
                <strong>Pick Up Date</strong>
            </p>
            <input type="text" placeholder='APR 19,2023' />
        </div>
        <div>
            <p>
                <strong>Pick Up Time</strong>
            </p>
            <input type="text" placeholder='12:25 am' />
        </div>
        
        <a href="">
        <Image
                src="/icons/calendar.png"
                width={30}
                height={30}
                alt="Picture of the author"
                />
                Book Now</a>
      </div>
    </div>
  );
};

export default Tabs;
