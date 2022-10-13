import ChatProfile from '../chat-profile/chat-profile';
import ChatSearchInput from '../chat-search-input/chat-search-input';
import './chat-sidebar.scss';

function ChatSidebar({users}) {

  return(
    <div className="chat-sidebar">
      <ChatSearchInput className="chat-search" id="search"/>
      <span className='chat-sidebar__divider'></span>
      <ul className='chat-sidebar__profile-list'>
        {users.map(user => {
          return(
            <ChatProfile key={user.id} user={user} />
          )
        })}
      </ul>
    </div>
  )
}

export default ChatSidebar; 