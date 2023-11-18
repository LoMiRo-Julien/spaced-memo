import dayjs from "dayjs";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";
import { uid } from "uid";

const CardForm = ({ actions }) => {
  return <form onSubmit={saveCard} className="form_container"></form>;
};

export default CardForm;
