import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { filterByCode } from '../config';

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

export const Info = (props) => {
    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies = [],
        languages = [],
        borders = [],
        push,
    } = props;

    return (
        <Wrapper>
            <InfoImage src={flag} alt={name} />

            <div>
                <InfoTitle></InfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Native Name:</b> {nativeName}
                        </ListItem>
                        <ListItem>
                            <b>Population</b> {population}
                        </ListItem>
                        <ListItem>
                            <b>Region:</b> {region}
                        </ListItem>
                        <ListItem>
                            <b>Sub Region:</b> {subregion}
                        </ListItem>
                        <ListItem>
                            <b>Capital:</b> {capital}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <b>Top Level Domain</b>{' '}
                            {topLevelDomain.map((domain) => (
                                <span key={domain}>{domain}</span>
                            ))}
                        </ListItem>
                        <ListItem>
                            <b>Currency</b>{' '}
                            {currencies.map((currency) => (
                                <span key={currency.code}>{currency.name} </span>
                            ))}
                        </ListItem>
                        <ListItem>
                            <b>Top Level Domain</b>{' '}
                            {languages.map((language) => (
                                <span key={language.name}>{language.name}</span>
                            ))}
                        </ListItem>
                    </List>
                </ListGroup>
            </div>
        </Wrapper>
    )

}