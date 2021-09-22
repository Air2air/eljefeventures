import { Center, Text } from "@chakra-ui/react";

export const DisplayButton = ({ count, influence }) => {
  let buttonText = "";

  if (influence === "me") {
    buttonText = "things that I did";
  } else if (influence === "others") {
    buttonText = "things that others did";
  } else {
    buttonText = "external factors";
  }

  return (
    <>
      <Center
        h={100}
        w="100%"
        to="/activity"
        style={{ borderRadius: 7 }}
        fontSize={23}
        bg="white"
        color="gray.500"
      >
        <Text fontSize={36} fontWeight="normal" color="black" px={4}>
          {count}
        </Text>
        {buttonText}
      </Center>
    </>
  );
};
