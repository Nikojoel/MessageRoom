import React from 'react'
import PaginationList from 'react-pagination-list'
import ListItem from "./ListItem"

const List = props => {
    const sorted = props.data.sort((a,b) => a.date < b.date ? 1 : -1)
    return (
        <PaginationList
            data={sorted}
            pageSize={5}
            renderItem={(item, index) => (
                <ListItem key={index} item={item}/>
            )}
        />
    )
}

export default List