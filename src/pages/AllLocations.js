import { useEffect, useState } from "react";

import LocList from "../components/locations/LocList";
import styles from "./AllLocations.module.css";

const AllLocations = () => {
  const [loadingData, setLoadingData] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    setLoadingData(true);
    const serverData = async () => {
      const res = await fetch(
        "https://react-p1-eb4bf-default-rtdb.europe-west1.firebasedatabase.app/locations.json"
      );
      const data = await res.json();
      if (data) {
        /* because we get our data as object {} format,
           we have to convert it to array [] in order to be mapped. */
        const locations = [];
        for (const key of Object.keys(data)) {
          const location = { id: key, ...data[key] };
          locations.push(location);
        }
        setLoadingData(false);
        setFetchedData(locations);
      }
    };
    serverData();
  }, []);

  if (loadingData) {
    return <h4 style={{ textAlign: "center" }}>. . .</h4>;
  }

  return (
    <section className={styles.container}>
      <h1>All Locations</h1>
      <LocList data={fetchedData} />
    </section>
  );
};

export default AllLocations;
