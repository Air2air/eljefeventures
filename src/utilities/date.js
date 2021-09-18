const currentDate = () => {
  return (
    <div>
      {new Date().toLocaleString("en-US", { month: "long" })}{" "}
      {new Date().toLocaleString("en-US", { day : '2-digit'})},{" "}
      {new Date().getFullYear()}
    </div>
  );
};

export default currentDate;
