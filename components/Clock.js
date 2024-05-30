import { useState, useEffect } from "react";
import { Text, View } from "react-native";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDay, setCurrentDay] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const dayName = days[date.getDay()];

      let hour = date.getHours();
      const isAM = hour < 12;
      hour = hour % 12;
      hour = hour === 0 ? 12 : hour;
      hour = hour.toString().padStart(2, "0");
      const minute = date.getMinutes().toString().padStart(2, "0");
      let seconds = date.getSeconds().toString();
      seconds = seconds.padStart(2, "0");

      const time = `${hour}:${minute}:${seconds} ${isAM ? "AM" : "PM"}`;

      setCurrentTime(time);
      setCurrentDay(dayName);
    }, 1000);

    date();

    return () => clearInterval(interval);
  }, []);

  const date = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Oct",
      "Sep",
      "Nov",
      "Dec",
    ];
    const date = new Date();
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    let dayDate = date.getDate().toString();
    dayDate = dayDate.padStart(2, "0");

    const currentDate = `${month}-${dayDate}-${year}`;
    setCurrentDate(currentDate);
  };

  return (
    <View>
      <Text>{currentDay}</Text>
      <Text>{currentDate}</Text>
      <Text>{currentTime}</Text>
    </View>
  );
};

export default Clock;
