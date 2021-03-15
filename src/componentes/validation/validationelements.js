import React from 'react';


class Validation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your e-mail was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
          <>
          <div>
              <h5 className="ValiHero">Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h5>
          </div>

        <form className="ValiForm" onSubmit={this.handleSubmit}>
            <input className="ValiPlace" type="text" value={this.state.value} onChange={this.handleChange} placeholder="E-mail"/>

          <input className="ValiButton" type="submit" value="Vamos lá >" />
        </form>
</>
      );
    }
  }

  export default Validation;

