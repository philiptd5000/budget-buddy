import React, { Component } from 'react';
import styled from "react-emotion";
import { Motion, spring } from 'react-motion';
import Grid from "@material-ui/core/Grid";
import BudgetItem from "../components/BudgetItem";
import API from "../utils/API";
import Button from "../components/Button";
import Header from "../components/Header";

const Wrapper = styled('div')(
    {
        border: '5px solid #092d63',
        borderRadius: '5px',
        itemAlign: 'center',
        color: '#092d63',
        backgroundColor: 'd5d6d2'
    }
)

class Budget extends Component {

    state = {
        budgets: []
    }

    componentDidMount() {
        API.getCurrentBudget().then(dbBudget => {
            this.setState({budgets: dbBudget.data})
            console.log(this.state)
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        // post my state to the api to save the budget form,
        // then set the state to some kind of success message
        // and show the user some feedback
        alert(JSON.stringify(this.state))
    }

    render() {
        return (
            <Grid container justify="center">
                <Wrapper>
                <Header headerText="Your Budget Setup"/>
                    {
                        this.state.budgets.length > 0
                        ?   this.state.budgets.map(doc =>
                            <BudgetItem
                            name={doc.category}
                            label={doc.label}
                            onChangeFn={this.handleChange}
                            value={doc.amount} 
                            />
                            )
                        :   <h2>loading</h2>
                    }

                    <Button onClick={this.handleSubmit}>
                        Save
                    </Button>

                </Wrapper>
            </Grid>
        )
    }
}

export default Budget;