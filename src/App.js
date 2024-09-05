import './App.css';
import { ReactChatbot } from "@vectara/react-chatbot";


function App() {
  return (
    <div className="App">
      <ReactChatbot
        customerId="1519431600"
        corpusKeys={"Mosaif221"}
        apiKey="zqt_WpCvsNuWBuIc2xI9ftj177jgPEuwp7EJtkGAOA"
        title="My Chatbot"
        placeholder="Chat with your AI assistant"
        inputSize="large"
        isInitiallyOpen={false}
        enableStreaming={true}
        language="eng"
      />
    </div>
  );
}

export default App;
