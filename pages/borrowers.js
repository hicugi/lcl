import React from "react";
import AppHeader from "../src/components/header";
import Button from "../src/components/button";
import ThisCredit from "../src/components/borrowers/credit";
import ThisDeposit from "../src/components/borrowers/deposit";
import ThisDeadlines from "../src/components/borrowers/deadlines";

class Borrowers extends React.Component {
  state = {
    fields: {},

    currencies: [
      {
        text: "Российский рубль (RUB)",
        value: "rub"
      },
      {
        text: "Америсканский доллар (USD)",
        value: "usd"
      },
      {
        text: "Еваропейская евро (EUR)",
        value: "eur"
      }
    ]
  };

  UNSAFE_componentWillMount() {
    this.clearFields();
  }

  clearFields = () => {
    const rub = this.state.currencies.find(({ value }) => value === "rub");
    const usd = this.state.currencies.find(({ value }) => value === "usd");

    this.setState({
      fields: {
        credit_currency: rub,
        credit_from: "",
        credit_to: "",
        credit_rate: { min: 0, max: 74 },

        deposit_currency: usd,
        deposit_from: "",
        deposit_to: "",
        deposit_rate: { min: 0, max: 50 },

        deadline_rate: { min: 0, max: 130 },
        deadline_payout: [{ text: "Каждую неделю", value: "week" }]
      }
    });
  };

  handleFormChange = ({ name, value }) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value
      }
    });
  };

  handleSubmit = () => {
    console.log(this.state.fields);
  };

  render() {
    const { currencies, fields } = this.state;
    const sectionProps = {
      currencies,
      fields,
      change: this.handleFormChange
    };

    return (
      <div>
        <AppHeader />

        <main>
          <div className="container">
            <h1 className="title">Найти объявления заемщиков</h1>

            <div className="row">
              <div className="col-md-9">
                <div className="block">
                  <div className="row">
                    {/* credit */}
                    <div className="col-md-4">
                      <ThisCredit {...sectionProps} />
                    </div>

                    {/* deposit */}
                    <div className="col-md-4">
                      <ThisDeposit {...sectionProps} />
                    </div>

                    {/* 3 */}
                    <div className="col-md-4">
                      <ThisDeadlines {...sectionProps} />
                    </div>
                  </div>

                  <div className="block__footer">
                    <Button variant="info" click={this.handleSubmit}>
                      Найти
                    </Button>
                    <Button click={this.clearFields}>Сбросить фильтры</Button>
                  </div>
                </div>
              </div>

              {/* aside */}
              <aside className="col-md-3">
                <div className="block">
                  <h2 className="title2">Курсы валют</h2>
                </div>
              </aside>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Borrowers;
