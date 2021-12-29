import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const styles = {
  parentContainer: {
    height: deviceHeight,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 32,
  },
  container: {
    backgroundColor: '#fff',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: '#000',
    borderRadius: 5,
  },
  lightText: {
    color: '#fff',
    alignSelf: 'center',
  },
};
export default styles;
