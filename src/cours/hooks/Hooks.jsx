import React, { useState } from "react";
import Highlight from "react-highlight";

const Hooks = () => {
  //form utilisant deux états différent pour la meme oppération
  function Form() {
    const [firstName, setFirstName] = useState("Mary");
    const [lastName, setLastName] = useState("Poppins");

    function handleFirstNameChange(e) {
      setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
      setLastName(e.target.value);
    }

    return (
      <>
        <h3>Formulaire avec 2 états identique</h3>
        <label>
          First name:
          <input value={firstName} onChange={handleFirstNameChange} />
        </label>
        <br />
        <label>
          Last name:
          <input value={lastName} onChange={handleLastNameChange} />
        </label>
        <p>
          <b>
            Good morning, {firstName} {lastName}.
          </b>
        </p>
      </>
    );
  }
  //hook custom qui reproduit le fonctionnement répétitif dont la valeur est en entré du hook
  function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
      setValue(e.target.value);
    }

    const inputProps = {
      value: value,
      onChange: handleChange,
    };

    return inputProps;
  }
  //form utilisant le hook personalisé
  function FormWithHook() {
    const firstNameProps = useFormInput("Mary");
    const { value, onChange } = useFormInput("Poppins");

    return (
      <>
        <h3>Formulaire avec le hook personnalisé</h3>
        <label>
          First name:
          <input {...firstNameProps} />
        </label>
        <br />
        <label>
          Last name:
          <input value={value} onChange={onChange} />
        </label>
        <p>
          <b>
            Good morning, {firstNameProps.value} {value}.
          </b>
        </p>
      </>
    );
  }
  return (
    <div className="information_content">
      <h1>Les hooks personnalisé</h1>
      source :{" "}
      <a
        href="https://react.dev/learn/reusing-logic-with-custom-hooks"
        target="_BLANK"
      >
        Doc React
      </a>
      <p>
        Les noms de hooks commencent toujours par <b>use</b>, Les applications
        React sont construites à partir de composants. Les composants sont
        construits à partir de Hooks, qu'ils soient intégrés ou personnalisés.
      </p>
      <p>
        {" "}
        Vous utiliserez probablement souvent des Hooks personnalisés créés par
        d’autres, mais vous pourriez parfois en écrire un vous-même !
      </p>
      <p>
        {" "}
        Vous devez suivre ces conventions de dénomination : Les noms des
        composants React doivent commencer par une lettre majuscule, comme
        StatusBaret SaveButton.
      </p>
      <p>
        Les composants React doivent également renvoyer quelque chose que React
        sait afficher, comme un morceau de JSX. <br /> Les noms de hooks doivent
        commencer par usesuivi d'une lettre majuscule, comme useState(intégré)
        ou useOnlineStatus(personnalisé, comme plus tôt sur la page).
      </p>
      <p>
        Les hooks peuvent renvoyer des valeurs arbitraires. Cette convention
        garantit que vous pouvez toujours examiner un composant et savoir où son
        état, ses effets et d'autres fonctionnalités de React peuvent « se
        cacher ».
      </p>
      <p>
        Par exemple, si vous voyez un getColor()appel de fonction à l'intérieur
        de votre composant, vous pouvez être sûr qu'il ne peut pas contenir
        d'état React car son nom ne commence pas par use. Cependant, un appel de
        fonction comme useOnlineStatus()contiendra très probablement des appels
        à d’autres Hooks à l’intérieur !
      </p>
      <h3>Example de hook personalisé</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-arround",
            width: "50%",
          }}
        >
          <Highlight className="jsx">
            {`function Form() {
    const [firstName, setFirstName] = useState("Mary");
    const [lastName, setLastName] = useState("Poppins");

    function handleFirstNameChange(e) {
      setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
      setLastName(e.target.value);
    }

    return (
      <>
        <h3>Formulaire avec 2 états identique</h3>
        <label>
          First name:
          <input value={firstName} onChange={handleFirstNameChange} />
        </label>
        <label>
          Last name:
          <input value={lastName} onChange={handleLastNameChange} />
        </label>
        <p>
          <b>
            Good morning, {firstName} {lastName}.
          </b>
        </p>
      </>
    );
  }
  
  
  
  
  
  


  `}
          </Highlight>
          <Form />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-arround",
            width: "50%",
          }}
        >
          <Highlight className="jsx">
            {`//hook custom qui reproduit le fonctionnement répétitif
            //et dont la valeur est en entré du hook
  function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
      setValue(e.target.value);
    }

    const inputProps = {
      value: value,
      onChange: handleChange,
    };

    return inputProps;
  }
  //form utilisant le hook personalisé
  function FormWithHook() {
    const firstNameProps = useFormInput("Mary");
    const { value, onChange } = useFormInput("Poppins");

    return (
      <>
        <h3>Formulaire avec le hook personnalisé</h3>
        <label>
          First name:
          <input {...firstNameProps} />
        </label>
        <label>
          Last name:
          <input value={value} onChange={onChange} />
        </label>
        <p>
          <b>
          Good morning, {firstNameProps.value} {value}.
          </b>
        </p>
      </>
    );
  }`}
          </Highlight>
          <FormWithHook />
        </div>
      </div>
    </div>
  );
};

export default Hooks;
