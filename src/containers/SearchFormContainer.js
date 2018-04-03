import { reduxForm } from 'redux-form';
import SearchBox from '../components/SearchBox';

export default reduxForm({form:'search'})(SearchBox);