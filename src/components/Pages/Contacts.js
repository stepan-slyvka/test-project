import React, { useState } from "react";

import classes from "../Pages/Contacts.module.css";
import ContactInfo from "./ContactInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const CONTACTS = [
  {
    id: "c1",
    name: "Benjamin Jacobi",
    mobile: "(023) 302-3161 x60451",
    home: "(136) 403-0476 x8388",
    company: "Casper Inc.",
    work: "(399) 506-9438",
    notes:
      "Quisquam et nisi. Dicta in ut eos consequatur ipsum omnis.Quisquam doloremque error praesentium sapiente et vitae.Omnis facere sint nulla similique vel voluptatem officia deleniti",
  },
  {
    id: "c2",
    name: "Clementina Hahn",
    mobile: "686.292.3548 x7219",
    home: "447-343-4864 x414",
    company: "Marquardt Inc",
    work: "299-721-6828 x856",
    notes:
      "Distinctio voluptas repellendus rerum temporibus deserunt et corrupti sint. Odit sit labore quia. Perferendis iure eos qui tempore ex saepe consequuntur accusamus ipsa. Eius consectetur nam quas. Laborum aperiam hic dolorum quae autem consequatur.",
  },
  {
    id: "c3",
    name: "Clinton Goyette",
    mobile: "(913) 127-1563 x082",
    home: "(843) 501-8804",
    company: "Feil - Goodwin",
    work: "732.111.8883",
    notes:
      "Maiores animi et quidem. Ducimus voluptate est consequatur ut vitae in. Ut fugit sit ab blanditiis ab occaecati soluta quis.",
  },
  {
    id: "c4",
    name: "Forrest Klein",
    mobile: "174-628-5802 x8324",
    home: "(047) 141-0247",
    company: "Wilkinson - Howe",
    work: "1-624-238-9252",
    notes:
      "Sit et non debitis. Quis atque facilis et sed. Illum adipisci deserunt corporis modi necessitatibus at numquam neque sint.",
  },
  {
    id: "c5",
    name: "General Kub",
    mobile: "779.482.9824",
    home: "(698) 858-0337 x3273",
    company: "Moen Group",
    work: "881.768.7522",
    notes:
      "Quibusdam dolorem minima ea enim nostrum eos. Corrupti dolore velit molestiae nostrum error qui. Sit qui maxime sed quisquam rem cupiditate. Iste ex quidem. Ipsam et quia omnis facere blanditiis.",
  },
  {
    id: "c6",
    name: "Lon Wunsch",
    mobile: "(792) 607-6366 x88975",
    home: "447.683.3799 x38668",
    company: "Johns, Gibson and Schinner",
    work: "(735) 859-7674",
    notes:
      "Velit non voluptas sed sit pariatur earum unde neque. Incidunt nam reprehenderit non mollitia. Incidunt quo illum modi ex eos consequuntur eius nihil itaque. Quis tenetur ratione repudiandae ea et architecto dolorem porro. Rem non consectetur ea iste.",
  },
  {
    id: "c7",
    name: "Mabelle Kling",
    mobile: "499-736-0779 x2409",
    home: "1-910-529-7393 x222",
    company: "Bins, Murray and Ryan",
    work: "905.098.6372",
    notes:
      "Et et rerum placeat beatae doloribus earum et reiciendis. Nisi suscipit ad dolor. Tenetur hic quia nihil deleniti inventore. Blanditiis aliquam ea ea. Omnis consequatur itaque est rerum sed reiciendis laboriosam reiciendis. Consectetur ullam et laudantium at itaque aut qui et molestiae.",
  },
  {
    id: "c8",
    name: "Maryse Koss",
    mobile: "668-920-9662 x610",
    home: "075.864.1819 x8265",
    company: "Smitham Inc",
    work: "468.534.0931",
    notes:
      "Libero perferendis aut repudiandae quas. Omnis aut enim voluptas magnam harum quisquam illo aliquid aliquam. Dolor et et vel nihil quibusdam fugit facere adipisci aut. Repellat quia est beatae animi ipsa. Ad sit eligendi pariatur quia illo atque qui voluptatem excepturi.",
  },
  {
    id: "c9",
    name: "Maude Grant",
    mobile: "1-077-505-0657",
    home: "062.968.4841 x62748",
    company: "Thiel, Bauch and Mosciski",
    work: "1-318-593-2619 x206",
    notes:
      "Ut sit fuga quibusdam. Ullam non necessitatibus voluptatem quidem est dignissimos dolores quaerat. Aspernatur fugiat et.",
  },
  {
    id: "c10",
    name: "Orrin Harris",
    mobile: "871.567.4877",
    home: "(466) 574-3352",
    company: "Haag Group",
    work: "1-908-422-4964",
    notes:
      "Aut sequi quae omnis ut qui quaerat. Dolor et fugit blanditiis laudantium. Libero modi officiis consequatur corrupti reiciendis aut qui nemo doloribus. Consequatur voluptatibus quis vero numquam aspernatur a sit laborum voluptates.",
  },
];

const Contacts = (props) => {
  const [contactsList, setContactsList] = useState(CONTACTS);
  const [selectedContact, setSelectedContact] = useState(CONTACTS[0]);
  const [searchName, setSearchName] = useState("");

  const searchChangeHandler = (event) => {
    setSearchName(event.target.value);
  };

  const contactClickHandler = (contactData) => {
    setSelectedContact(contactData);
  };

  // const handleAdd = () => {
  //   const newList = contactsList.concat({});

  //   setContactsList(newList);
  // };

  return (
    <div
      className={
        props.isShrinkedContacts
          ? classes["isomorphic-content-shrinked"]
          : classes["isomorphic-content"]
      }
    >
      <div className={classes.wrapper}>
        <section className={classes.contacts}>
          <main className={classes["main-content"]}>
            <div className={classes["content-wrapper"]}>
              <span className={classes.search}>
                <input
                  className={classes["search-input"]}
                  placeholder="Search Contacts..."
                  onChange={searchChangeHandler}
                />
                <span>
                  <FontAwesomeIcon
                    icon={faSearch}
                    className={classes["search-icon"]}
                  />
                </span>
              </span>
              <div className={classes["contacts-list-wrapper"]}>
                {contactsList
                  .filter((val) => {
                    if (searchName === "") {
                      return val;
                    } else if (
                      val.name.toLowerCase().includes(searchName.toLowerCase())
                    ) {
                      return val;
                    }
                    return null;
                  })
                  .map((contact, index) => (
                    <div
                      className={classes["contacts-list"]}
                      onClick={() => contactClickHandler(contact)}
                      key={index}
                    >
                      <div className={classes["image-wrapper"]}>
                        <img
                          src="https://ziadfathy.github.io/ZfTemplate/images/01.jpg"
                          alt="#"
                          width="25px"
                          height="25px"
                        />
                      </div>
                      <div className={classes["name-wrapper"]}>
                        <h3>{contact.name}</h3>
                      </div>
                      <button
                        className={
                          props.isShrinkedContacts
                            ? classes["cross-shrinked"]
                            : classes.cross
                        }
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </main>
        </section>
        <ContactInfo
          contact={selectedContact}
          setContactsList={setContactsList}
          contactsList={contactsList}
          // handleAdd={handleAdd}
        />
      </div>
      <footer className={classes.footer}>
        Isomorphic @ 2022 Created by RedQ, Inc
      </footer>
    </div>
  );
};

export default Contacts;
