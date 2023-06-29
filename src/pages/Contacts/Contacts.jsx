import ScrollToTop from 'react-scroll-up';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container, SubHeader, BlockWrapper } from './Contacts.styled';

export const Contacts = () => {
  return (
    <Container>
      <BlockWrapper>
        <SubHeader>Add new contact</SubHeader>
        <ContactForm />
      </BlockWrapper>
      <BlockWrapper>
        <SubHeader>Your contacts</SubHeader>
        <Filter />
        <ContactList />
      </BlockWrapper>
      <ScrollToTop
        showUnder={160}
        style={{
          bottom: 40,
          right: 40,
        }}
      >
      </ScrollToTop>
    </Container>
  );
};
export default Contacts;
