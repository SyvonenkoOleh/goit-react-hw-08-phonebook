import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemData,
  PhoneLink,
  BtnsWrapper,
  DataWrapper,
} from './ContactItem.styled';
import { Btn } from '../Btn/Btn';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export const ContactItem = ({ id, name, number }) => {
  const [showModal, setShowModal] = useState(false);
  const [statusModal, setStatusModal] = useState('');

  const toggleModal = status => {
    setShowModal(!showModal);
    setStatusModal(status);
  };

  return (
    <ListItem>
      <ListItemData>
        <DataWrapper>
          Name:<span> {name} </span>
        </DataWrapper>
        <DataWrapper>
          Phone:{' '}
          <PhoneLink href={`tel:${number}`}>
            <span>{number}</span>
          </PhoneLink>
        </DataWrapper>
      </ListItemData>
      <BtnsWrapper>
        <Btn
          type="button"
          status="delete"
          text="Delete contact"
          onClick={() => toggleModal('delete')}
        />
        <Btn
          type="button"
          status="edit"
          text="Edit contact"
          onClick={() => toggleModal('edit')}
        />
      </BtnsWrapper>
      {showModal && (
        <Modal
          id={id}
          closeModal={toggleModal}
          status={statusModal}
          name={name}
        />
      )}
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
