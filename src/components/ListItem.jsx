import PropTypes from 'prop-types'

export function ListItem ({ children }) {
  return (
    <li className='py-4 border-b-2 border-opacity-100 border-neutral-100 dark:border-opacity-50'>
      {children}
    </li>
  )
}

ListItem.propTypes = {
  children: PropTypes.any.isRequired
}
