import React from 'react';
import { Field } from 'redux-form';

const SearchBox = ({handleSubmit}) => (
    <form className='form-inline my-2 my-md-0' onSubmit={handleSubmit}>
        <Field name='search' component='input' type='text' placeholder ='Buscar Película o Serie' className='form-control' aria-label='Search' />
    </form>
);

export default SearchBox;
