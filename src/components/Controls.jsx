import { useState, useEffect } from "react";
import { Search } from './Search'
import { CustomSelect } from './CustomSelect'

export const Controls = () => {
    const [search, setSearch] = useState('')
    return (
        <div>
            <Search search={search} setSearch={setSearch} />
            <CustomSelect />
        </div>
    )
}
