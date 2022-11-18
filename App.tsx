import { Button, FlatList, Text, TextInput, View } from "react-native";
import { StyledComponent } from "nativewind";
import { useState } from "react";
type textType = { key: string; value: string }[];
export default function MyComponent() {
  const [Test, setTest] = useState<textType>([]);
  const [text, setText] = useState("");
  return (
    <StyledComponent component={View} className=" py-10  h-full  bg-black ">
      <StyledComponent
        component={TextInput}
        tw="p-2 bg-blue-700 rounded"
        value={text}
        onChangeText={(text) => {
          setText(text);
        }}
      ></StyledComponent>
      <StyledComponent
        component={Button}
        title="Submit"
        onPress={() =>
          setTest((c) => [...c, { value: text, key: Math.random().toString() }])
        }
      />
      <StyledComponent
        component={FlatList}
        className=" mt-12 p-3 "
        data={Test}
        renderItem={(item) => (
          <StyledComponent
            component={Text}
            tw="text-white my-1 bg-blue-400 p-2"
            onPress={() =>
              setTest((c) => c.filter((d) => d.key != item.item.key))
            }
          >
            {item.item.value}
          </StyledComponent>
        )}
      />
    </StyledComponent>
  );
}
