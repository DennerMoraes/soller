import './TextTeaser.scss';

function TextTeaser({ subtitle, title, description, variation }) {
    return (
        <div className={`container-TextTeaser ${variation || ''}`}>
            {subtitle && <h4>{subtitle}</h4>}
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
        </div>
    );
}

export default TextTeaser;
