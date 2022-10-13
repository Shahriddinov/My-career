import "./chat-search-input.scss";

function ChatSearchInput(props) {
    return(
        <label className={`${props.className}__wrapper`} htmlFor={props.id}>
            <input className={props.className} id={props.id} placeholder="Search..."/>
            <button className={`${props.className}__button`} type="button" for={props.id}></button>
        </label>
    )
}

export default ChatSearchInput