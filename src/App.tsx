import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Pagination from './Pagination';

interface Character {
    id: number;
    name: string;
    image: string;
}

function App() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
            setCharacters(response.data.results);
            setTotalPages(response.data.info.pages);
        }
        fetchData();
    }, [currentPage]);

    return (
        <div>
            <div className="container">
                {characters.map(character => (
                    <div key={character.id} className="character">
                        <img src={character.image} alt={character.name} />
                        <p className="character-name">{character.name}</p>
                    </div>
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </div>
    );
}

export default App;
