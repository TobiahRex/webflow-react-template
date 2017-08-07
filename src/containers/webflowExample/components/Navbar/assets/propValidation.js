import PropTypes from 'prop-types';

const { arrayOf, object } = PropTypes;

export const propTypes = {
  children: arrayOf(object).isRequired,
};

export const defaultProps = {
  children: '',
};
