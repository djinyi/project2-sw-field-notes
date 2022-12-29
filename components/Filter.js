import React from "react"

function Filter({ props }){

    return(
        <div>
            <div>
                <label> Sort By </label>
            </div>
            <div>
                <select
                name="sort"
                onChange={handleSortBy}
                value={sortBy}
                >
                    <option value=""></option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="Arizona">Arizona</option>
                </select>
            </div>
            <div>
                <label>HIII</label>
            </div>
            <div>
                <input
                checked={showSomething}
                onChange={something}
                type="checkbox"
                />
            </div>
        </div>
    )
}

export default Filter;