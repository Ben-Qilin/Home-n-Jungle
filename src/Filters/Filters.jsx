import React, { useState, useEffect } from "react"
import products from "../Products/data";

const Filters = ({ setFilteredProducts }) => {
    const [selectFilter, setSelectFilter] = useState('all');
    const [waterFilter, setWaterFilter] = useState('all');
    const [sunFilter, setSunFilter] = useState('all');

    useEffect(() => {
        console.log('selectFilter:', selectFilter);
        const filtered = products.filter(product => {
            return (selectFilter === 'all' || product.type === selectFilter) &&
                (waterFilter === 'all' || product.water === waterFilter) &&
                (sunFilter === 'all' || product.sun === sunFilter);
        });
        console.log('filtered:', filtered);
        setFilteredProducts(filtered);

    }, [selectFilter, waterFilter, sunFilter, setFilteredProducts])
    return (
        <section style={{ height: '5vh', width: '80%', backgroundColor: 'rgba(85, 168, 33, 0.8)', display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center', borderRadius: '0.5rem' }}>
            <select style={{ padding: '0.2rem', height: '80%', borderRadius: '0.5rem' }} onChange={e => setSelectFilter(e.target.value)}>
                <option value='all'>Tous les produits</option>
                <option value="grasse">Plante grasse</option>
                <option value="interieur">Plante d'intérieur</option>
                <option value="exterieur">Plante d'extérieur</option>
            </select>
            <select style={{ height: '80%', borderRadius: '0.5rem' }} onChange={e => setWaterFilter(e.target.value)}>
                <option value='all'>Hydratation</option>
                <option value="💧">💧</option>
                <option value="💧💧">💧💧</option>
                <option value="💧💧💧">💧💧💧</option>
            </select>
            <select style={{ height: '80%', borderRadius: '0.5rem' }} onChange={e => setSunFilter(e.target.value)}>
                <option value='all'>Ensoleillement</option>
                <option value="🌞">🌞</option>
                <option value="🌞🌞">🌞🌞</option>
                <option value="🌞🌞🌞">🌞🌞🌞</option>
            </select>
        </section>
    )
}
export default Filters