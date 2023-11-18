import { Li } from "./ContactsList.styled";

const ContactList = ({ contacts, onDelete }) => {

  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <Li key={id}>
            <span>{name}: </span>
            <span>{number} </span>
            <button
              type="button"
              onClick={() => {
                onDelete(id);
              }}
            >
            ❌
            </button>
          </Li>
        );
      })}
    </ul>
  );
};

export default ContactList;
