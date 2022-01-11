import React from 'react'

function List({ children }: React.ComponentPropsWithoutRef<'ul'>) {
	return <ul className='flex flex-col align-top w-full h-full mb-auto pt-3'>{children}</ul>
}

export default List
