import React from 'react';
import classNames from 'classnames';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.boundHandleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onFormSubmit({
      email: this.refs.email.value,
      message: this.refs.message.value,
    });

    this.refs.email.value = '';
    this.refs.message.value = '';
  }

  render() {
    return (
      <form
        className={classNames('form', this.props.className)}
        onSubmit={this.boundHandleSubmit}
      >
        <input type="email" name="email" placeholder="Email" ref="email" />
        <textarea name="message" placeholder="Message" ref="message" />
        <input type="submit" />
      </form>
    );
  }
}

Form.propTypes = {
  className: React.PropTypes.string,
  onFormSubmit: React.PropTypes.func,
};

export default Form;
