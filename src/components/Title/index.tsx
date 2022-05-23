import './title.css'

type TitleProps= {
    title: string
}

export const Title = ({ title }: TitleProps) => {
    return(
        <h3 className='title'>{title}</h3>
    )
}