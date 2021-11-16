

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
      <div
        h={100}
        w="100%"
        style={{ borderRadius: 7 }}
        fontSize={23}
        bg="gray.50"
        color="gray.500"
      >
        <div fontSize={36} fontWeight="normal" color="black" px={4}>
          {count}
        </div>
        {buttonText}
      </div>
    </>
  );
};
