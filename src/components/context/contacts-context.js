import React, { useState } from "react";

const Context = React.createContext({
  formIsShown: false,
  isEditing: false,
  showEdit: () => {},
  showForm: () => {},
  setFormIsShown: () => {},
  setIsEditing: () => {},
  toggleMenu: () => {},
  toggleMaps: () => {},
  toggleFirestore: () => {},
  toggleCharts: () => {},
  toggleForms: () => {},
  toggleUI: () => {},
  toggleAdvanced: () => {},
  toggleFeedback: () => {},
  toggleTables: () => {},
  isShown: false,
  isMaps: false,
  isFirestore: false,
  isCharts: false,
  isForms: false,
  isUI: false,
  isAdvanced: false,
  isFeedback: false,
  isTables: false,
});

export const ContextProvider = (props) => {
  const [formIsShown, setFormIsShown] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isMaps, setIsMaps] = useState(false);
  const [isFirestore, setIsFirestore] = useState(false);
  const [isCharts, setIsCharts] = useState(false);
  const [isForms, setIsForms] = useState(false);
  const [isUI, setIsUI] = useState(false);
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [isFeedback, setIsFeedback] = useState(false);
  const [isTables, setIsTables] = useState(false);

  const showEdit = () => {
    setIsEditing(true);
    setFormIsShown(true);
  };

  const showForm = () => {
    setFormIsShown(true);
  };

  const toggleMenu = () => {
    setIsShown(!isShown);
  };

  const toggleMaps = () => {
    setIsMaps(!isMaps);
  };

  const toggleFirestore = () => {
    setIsFirestore(!isFirestore);
  };

  const toggleCharts = () => {
    setIsCharts(!isCharts);
  };

  const toggleForms = () => {
    setIsForms(!isForms);
  };

  const toggleUI = () => {
    setIsUI(!isUI);
  };

  const toggleAdvanced = () => {
    setIsAdvanced(!isAdvanced);
  };

  const toggleFeedback = () => {
    setIsFeedback(!isFeedback);
  };

  const toggleTables = () => {
    setIsTables(!isTables);
  };

  return (
    <Context.Provider
      value={{
        formIsShown: formIsShown,
        isEditing: isEditing,
        showForm: showForm,
        showEdit: showEdit,
        setFormIsShown: setFormIsShown,
        setIsEditing: setIsEditing,
        toggleMenu: toggleMenu,
        toggleMaps: toggleMaps,
        toggleFirestore: toggleFirestore,
        toggleCharts: toggleCharts,
        toggleForms: toggleForms,
        toggleUI: toggleUI,
        toggleAdvanced: toggleAdvanced,
        toggleFeedback: toggleFeedback,
        toggleTables: toggleTables,
        isShown: isShown,
        isMaps: isMaps,
        isFirestore: isFirestore,
        isCharts: isCharts,
        isForms: isForms,
        isUI: isUI,
        isAdvanced: isAdvanced,
        isFeedback: isFeedback,
        isTables: isTables,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
