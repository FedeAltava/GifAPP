import PropTypes from 'prop-types'
import "../styles.css"
export const GifItem = ({title, url}) => {

    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>

    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}