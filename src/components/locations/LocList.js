import LocDetails from "./LocDetails";

const LocList = (props) => {
  return (
    <ul>
      {props.data.map((loc) => (
        <LocDetails
          key={loc.id}
          id={loc.id}
          image={loc.image}
          title={loc.title}
          address={loc.address}
          description={loc.description}
        />
      ))}
    </ul>
  );
};

export default LocList;
