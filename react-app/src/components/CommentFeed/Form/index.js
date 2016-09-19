import React from 'react';
import classNames from 'classnames';

import './index.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.boundHandleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { email, message } = this.refs;

    if (!email.value || !message.value) return;

    this.props.onFormSubmit({
      email: email.value,
      message: message.value,
    });

    email.value = '';
    message.value = '';
  }

  render() {
    return (
      <form
        className={classNames('form', this.props.className)}
        onSubmit={this.boundHandleSubmit}
      >
        <input
          className="form__input form__email"
          type="email" name="email"
          placeholder="Email"
          ref="email"
        />
        <textarea
          className="form__input form__message"
          name="message"
          placeholder="Message"
          ref="message"
        />
        <input className="form__submit" type="submit" />
      </form>
    );
  }
}

Form.propTypes = {
  className: React.PropTypes.string,
  onFormSubmit: React.PropTypes.func,
};

export default Form;
