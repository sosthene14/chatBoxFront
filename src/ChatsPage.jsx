import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) =>{
    const chatProps = useMultiChatLogic('2eb6c7d3-174f-42c1-82f4-e24c285de3f0',props.user.username,props.user.secret)
    localStorage.setItem("user",true)
    return(
        <div style={{height:'100vh'}}>
            <MultiChatSocket {...chatProps}/>
            < MultiChatWindow {...chatProps} style={{height:'100%'}}/>

        </div>
    )
}
export default ChatsPage;