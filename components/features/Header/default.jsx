import React from 'react';
import PropTypes from 'prop-types';
import { useEditableContent } from 'fusion:content';

const Header = (props) => {
  const { message, textColor, display } = props.customFields;
  const { editableField } = useEditableContent();

  return (
    <div>
      {display ? (
        <h1
          style={{ color: textColor || 'blue' }}
          {...editableField('message')}
        >
          {message}
        </h1>
      ) : (
        ''
      )}
    </div>
  );
};

Header.propTypes = {
  customFields: PropTypes.shape({
    message: PropTypes.string.tag({
      label: 'Custom Message',
      description: 'Please enter your message',
    }),
    textColor: PropTypes.oneOf(['purple', 'green']).tag({
      description: 'Text Color',
    }),
    display: PropTypes.boolean,
  }),
};
export default Header;
