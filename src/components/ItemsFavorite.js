import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GridItemFavorite from './GridItemFavorite';
import ListItem from './ListItem';
import Section from './Section';
import Button from './Button';

const ItemsFavorite = ({type,items,onClickDelete,onClickViewed}) => (
    <Fragment>
        { items.length === 0 && <NoResults>Sin resultados</NoResults> } 
        { items.length > 0 &&
            <Section>
            { type === 'grid' ? <ListGridItemFavorite items={items} onClickDelete={onClickDelete} onClickViewed={onClickViewed} /> :
                <ListItemFavorite items={items} onClickDelete={onClickDelete} onClickViewed={onClickViewed} />             
            }
            </Section>
        }
    </Fragment>
);

const NoResults = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: #212121;
    paddingTop: 1em;
`;

const ListItemFavorite = ({items,onClickDelete,onClickViewed}) => {
    return items.map(i =>
        <ListItem key={i.id} item={i}>
            <Button onClick={ e => onClickDelete(i.id)} icon='mdi mdi-delete' type='primary'>Quitar</Button>
            <Button onClick={ e => onClickViewed(i)} icon='mdi mdi-eye-outline' type='primary'>Marcar como vista</Button>
        </ListItem>
    );
}

const ListGridItemFavorite = ({items,onClickDelete,onClickViewed}) => {
    return items.map(i =>
        <GridItemFavorite key={i.id} item={i}>
            <Button onClick={ e => onClickDelete(i.id)} icon='mdi mdi-delete' type='primary' />
            <Button onClick={ e => onClickViewed(i)} icon='mdi mdi-eye-outline' type='primary' />
        </GridItemFavorite>
    );
}

export default ItemsFavorite;

ItemsFavorite.propTypes = {
    type : PropTypes.string.isRequired,
    items : PropTypes.array.isRequired,
    onClickDelete : PropTypes.func,
    onClickViewed : PropTypes.func
};

