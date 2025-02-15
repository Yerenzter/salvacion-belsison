import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';
import Table from '../components/Table.jsx';
import Text from '../components/Text.jsx';

import ResidentProfile from '../../components/Pages/ResidentProfile.jsx';

export default function ProfileCard({ img, name, purok, target, toggle }) {
  return(
    <>
    <ResidentProfile />
    <Table.Col props='col-sm-6 col-md-3 col-lg-3'>
      <Card.Card>
        <Card.Header>
          <Card.Image img={ img } />
        </Card.Header>

        <Card.Body props='text-center'>
          <h5>{ name }</h5>
          <Text label={ purok } />
        </Card.Body>

        <Card.Footer props='text-center'>
          <Button props='btn-primary' target={ target } toggle={ toggle } label='VIEW' type='button'/>
        </Card.Footer>
      </Card.Card>
    </Table.Col>
    </>
  );
}
