import LocForm from "../components/locations/LocForm";
import styles from "./NewLocation.module.css";

const NewLocation = () => {
  const handleSubmitedData = (data) => {
    fetch(
      "https://react-p1-eb4bf-default-rtdb.europe-west1.firebasedatabase.app/locations.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
  };

  return (
    <section className={styles.container}>
      <h1>Add New Locations</h1>
      <LocForm submitData={handleSubmitedData} />
    </section>
  );
};

export default NewLocation;
