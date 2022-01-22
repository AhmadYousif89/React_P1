import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./LocForm.module.css";
import Card from "../models/Card";
import ErrMsg from "../models/ErrMsg";

const LocForm = (props) => {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");

  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const titleValue = titleRef.current.value;
    const imageValue = imageRef.current.value;
    const addressValue = addressRef.current.value;
    const descriptionValue = descriptionRef.current.value;

    const formData = {
      title: titleValue,
      image: imageValue,
      address: addressValue,
      description: descriptionValue,
    };
    props.submitData(formData);
    setErrMsg("New Location Added Successfully");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const showErrMsg = () => {
    setErrMsg("Please add your details above");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" ref={titleRef} required />
        </div>
        <div className={styles.form}>
          <label htmlFor="img">
            Image <small>(url)</small>
          </label>
          <input type="url" name="image" id="img" ref={imageRef} required />
        </div>
        <div className={styles.form}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            ref={addressRef}
            required
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="desc">Description</label>
          <textarea
            name="description"
            id="desc"
            rows="5"
            ref={descriptionRef}
            required
          />
        </div>
        <button className={styles.btn} onClick={showErrMsg}>
          SUBMIT
        </button>
        <ErrMsg msg={errMsg} />
      </form>
    </Card>
  );
};

export default LocForm;
