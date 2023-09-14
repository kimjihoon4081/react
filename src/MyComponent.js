import PropTypes from 'prop-types'

const MyComponent = ({name, faN, children}) => {
    
  return (
    <dir>
      test {name} <br />
      children의 값은 {children}
      입니다. 
      <br />
      가장 좋아하는 숫자는 {faN}
    </dir>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
    name : PropTypes.string,
    faN : PropTypes.number.isRequired
};

export default MyComponent;
