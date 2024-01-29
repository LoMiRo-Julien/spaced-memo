import Highlight from "react-highlight";

const Props = () => {
  const MonComponentParent = () => {
    let variable_random = new Date();
    let variable_random_autre = "Autre valeur";

    return (
      <>
        <p>Résultat j'envoi ma valeur dans une propriété crée </p>
        <MonComponentEnfant
          date={variable_random}
          autre={variable_random_autre}
        />
      </>
    );
  };

  const MonComponentEnfant = (props) => {
    return (
      <>
        <div>
          <p>
            Puis je la récupere dans l'enfant dans l'objet "props" avec
            props.mapropriete
          </p>
          <p>{props.date.toLocaleString()}</p>
          <p>{props.autre}</p>
        </div>
        <div>
          <p>
            Je peux également dans les paramètres de ma fonctions, ouvrir des
            accolades {`({ date, autre })`} pour destructurer mes valeur et les
            reassigner directement à leurs nom.
          </p>
          <p>Cela reviendrais au meme que de faire : </p>
          {`
          const MonComponentEnfant = (props, { date = props.date, autre = props.autre }) => { 

            /////

          `}
          <p>
            Attention cependant le nom du parametre ajouter dans le parent
            correspondra toujours à la clef récupérer. A ce titre props n'est
            pas obligatoire juste une convention
          </p>
        </div>
      </>
    );
  };
  return (
    <div className="information_content">
      <h1>Les props</h1>
      <p>
        Les props sont des variables, qui sont ajouter aux composant pour faire
        transité de l'informations entre les composants.
      </p>
      <p>
        Tout les types de variables peuvent être passées en "props", il faut le
        voir comme des attribut "custom" que l'on définit en fonction des
        besoins d'informations ou d'actions des composant.
      </p>
      <p>
        En tant que tel les props peuvent uniquement être passé d'un élément
        parent à un enfant, en suivant l'arbre du DOM.
      </p>
      <h3>Passer des props et les récupérer : </h3>
      <Highlight className="jsx">
        {`
        const MonComponentParent = () => {
            let variable_random = new Date();
            let variable_random_autre = "Autre valeur";
        
            return (
              <>
                <p>Résultat j'envoi ma valeur dans une propriété crée </p>
                <MonComponentEnfant
                  date={variable_random}
                  autre={variable_random_autre}
                />
              </>
            );
          };
        
          const MonComponentEnfant = (props) => {
            return (
              <>
                <div>
                  <p>
                    Puis je la récupere dans l'enfant dans l'objet "props" avec
                    props.mapropriete
                  </p>
                  <p>{props.date.toLocaleString()}</p>
                  <p>{props.autre}</p>
                </div>
                <div>
                  <p>
                    Je peux également dans les paramètres de ma fonctions, ouvrir des
                    accolades ({ date, autre }) pour destructurer mes valeur et les
                    reassigner directement à leurs nom.
                  </p>
                  <p>Cela reviendrais au meme que de faire : </p>
                  
                  const MonComponentEnfant = (props, { date = props.date, autre = props.autre }) => { 
        
                    /////
        
                  
                  <p>
                    Attention cependant le nom du parametre ajouter dans le parent
                    correspondra toujours à la clef récupérer. A ce titre props n'est
                    pas obligatoire juste une convention
                  </p>
                </div>
              </>
            );
          };
        `}
      </Highlight>
      <MonComponentParent />
    </div>
  );
};

export default Props;
