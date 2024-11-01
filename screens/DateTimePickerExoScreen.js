import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

const DatePickerExample = () => {
  //   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  //   const hideDatePicker = () => {
  const handleOnCancel = () => {
    console.log("handleOnCancel");
    setDatePickerVisible(false);
  };

  //   const handleDatePicked = (date) => {
  const handleOnConfirm = (date) => {
    console.log("handleOnConfirm");
    setSelectedDate(date);
    // hideDatePicker();
    handleOnCancel();
    setDatePickerVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      {/* <DateTimePicker
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      /> */}

      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleOnConfirm}
        onCancel={handleOnCancel}
        style={{ backgroundColor: "black" }}
      />

      {selectedDate && (
        <Text style={{ marginTop: 20 }}>
          Selected Date: {selectedDate.toLocaleDateString()}
        </Text>
      )}
    </View>
  );
};

export default DatePickerExample;
