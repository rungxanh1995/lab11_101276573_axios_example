import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default
    function PersonDetail(props) {
    const person = props.person

    return (
        <Card>
            <Card.Header as="h5">{person.name.title} {person.name.first} {person.name.last}</Card.Header>
            <Card.Body>
                <Card.Img variant='top' src={person.picture.large} style={{ width: '8rem' }} className="rounded-circle" />
                <Card.Title>{person.login.uuid}</Card.Title>
                <Card.Text>
                    User Name: <span className="font-weight-bold">{person.login.username}</span>
                </Card.Text>
                <Card.Text>
                    Gender: {person.gender}
                </Card.Text>
                <Card.Text>
                    Time Zone Description: {person.login.username}
                </Card.Text>
                <Card.Text>
                    Address: {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country} ${person.location.postcode}`}
                </Card.Text>
                <Card.Text>
                    Email: {person.email}
                </Card.Text>
                <Card.Text>
                    Birth Date and Age: {`${person.dob.date}, ${person.dob.age} years old`}
                </Card.Text>
                <Card.Text>
                    Cell #: {person.cell}
                </Card.Text>
                <Button variant="primary">View Details</Button>
            </Card.Body>
        </Card>
    )
}
