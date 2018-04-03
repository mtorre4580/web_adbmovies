import React from 'react';
import Proptypes from 'prop-types';
import GridItem from './GridItem';
import ListItem from './ListItem';
import SectionTitle from './SectionTitle';
import Dimmer from './Dimmer';
import Section from './Section';
import Button from './Button';

const ItemsSection = ({items,type,loading,title,viewAllLink,onClick,showAll}) => {
    if(loading){
        return <Dimmer>{title}</Dimmer>
    }
    if(items.length === 0){
        return <SectionTitle title={title} link={viewAllLink}>Sin resultados</SectionTitle>
    }else{
        return(
            <Section title={title} link={viewAllLink} showAll={showAll}>
                { type === 'grid' ? items.map(i => <GridItem link={viewAllLink} key={i.id} item={i}  />) : 
                items.map(i => <ListItem onClick={onClick} key={i.id} item={i}>
                    <Button onClick={ e => onClick(i)} icon='mdi mdi-heart-outline' type='primary'>Agregar a Mi Lista</Button>
                </ListItem>) 
                }
            </Section>
        );
    }
}

export default ItemsSection;
 
ItemsSection.propTypes = {
    items : Proptypes.arrayOf(
        Proptypes.shape({
            name : Proptypes.string,
            viewed : Proptypes.bool,
            img: Proptypes.string,
            description: Proptypes.string
        })
    ).isRequired,
    type : Proptypes.string.isRequired,
    loading : Proptypes.bool,
    title : Proptypes.string,
    viewAllLink : Proptypes.string,
    onClick : Proptypes.func,
    showAll : Proptypes.bool
};

ItemsSection.defaultProps = {
    type: 'grid'
};