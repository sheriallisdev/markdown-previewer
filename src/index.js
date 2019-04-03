import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import marked from "marked";

import "./styles.css";

let myMarked = require("marked");

myMarked.setOptions({
  renderer: new myMarked.Renderer(),
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: true
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ""
    };
  }

  componentDidMount() {
    this.setState({
      markdown: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa! Or _italic_.
Or... wait for it... **_both!_** And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

let's not forget embedded images:

![Korean Friendship Bell in Los Angeles, United States](https://i.imgur.com/JNWrnQ9.jpg)

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
`
    });
  }

  handleInputChange = e => {
    this.setState({
      markdown: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <Title>
          <img src="img/edit-text.svg" alt="" className="logo" />
          <h1>Markdown Previewer</h1>
        </Title>

        <MainContainer>
          <Wrapper>
            <Header>
              <header>Editor</header>
            </Header>
            <Editor>
              <textarea
                id="editor"
                value={this.state.markdown}
                onChange={this.handleInputChange}
              />
            </Editor>
          </Wrapper>

          <Wrapper>
            <Header>
              <header>Preview</header>
            </Header>
            <Preview
              id="preview"
              dangerouslySetInnerHTML={{
                __html: marked(this.state.markdown)
              }}
            />
          </Wrapper>
        </MainContainer>
      </div>
    );
  }
}

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0e0f0f;
  font-weight: 700;
  color: #ffffff;
  height: 90px;
  width: 100vw;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);

  h1 {
    font-size: 1.8rem;
    text-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    letter-spacing: 1.6px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
    letter-spacing: 1;
  }
`;

const Header = styled.div`
  background-color: #4586ff;
  height: 50px;
  width: 50vw;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding-left: 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Editor = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 90vh;

  @media (max-width: 800px) {
    border-right: none;
    height: 60vh;
  }
`;

const Preview = styled.div`
  padding: 30px;
  background-color: #ffffff;
  border: 1px solid #e1e1e1;
  min-height: 100%;

  img {
    /* max-width: 80%; */
    max-width: 30vw;
  }

  @media (max-width: 800px) {
    width: 90vw;
  }
`;

const Wrapper = styled.div`
  width: 50vw;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
