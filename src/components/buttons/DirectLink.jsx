const DirectLink = ({ onClick, title, titleIcon }) => {
    return (
        <button className="text-center underline flex items-center" onClick={onClick}>
            <span className="mr-1">
                {titleIcon}
            </span>
            {title}
        </button>
    )
}

export default DirectLink