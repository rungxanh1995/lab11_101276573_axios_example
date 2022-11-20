import axios from "axios";
import React from "react";
import PersonDetail from "./PersonDetail";

export default class PersonList
    extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            persons: []
        }
    }

    componentDidMount = () => {
        this.getPersonsData()
    }

    getPersonsData = () => {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons });
            })
    }


    render() {
        return (
            <>
                {
                    this.state.persons.map(eachPerson => (

                        <PersonDetail key={eachPerson.login.uuid} person={eachPerson} />
                    ))
                }
            </>
        )
    }
}